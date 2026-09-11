#!/usr/bin/env node
/**
 * Renders RESUME.md to RESUME-eng.pdf with headless Chrome.
 *
 * RESUME.md is the detailed resume and the PDF is named after it, so the PDF
 * is built from it rather than from index.html — index.html is the lighter
 * interactive version and is allowed to be shorter, just never contradictory.
 *
 * The PDF is a build artifact, not a source file: values synced by
 * sync-profile.mjs reach it only through this step. Run both together with
 * `npm run build`, or this alone with `npm run pdf`.
 *
 * Chrome is located automatically; override with CHROME_PATH if needed.
 * Nothing is installed — the browser already on the machine does the work,
 * and the same command runs on the CI runner.
 */

import { access, readFile, rename, rm, stat, writeFile } from 'node:fs/promises'
import { constants } from 'node:fs'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'
import { marked } from 'marked'


const run = promisify(execFile)
const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const SOURCE = join(root, 'RESUME.md')
const STYLES = join(root, 'scripts/resume-print.css')
const TARGET = join(root, 'RESUME-eng.pdf')

const CANDIDATES = [
  process.env.CHROME_PATH,
  // Linux / CI
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  // macOS
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // Windows
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
].filter(Boolean)

async function findBrowser () {
  for (const path of CANDIDATES) {
    try {
      await access(path, constants.X_OK)
      return path
    } catch {}
  }
  throw new Error(
    'No Chrome or Edge found. Install Google Chrome, or point CHROME_PATH at a\n' +
    'Chromium binary:  CHROME_PATH="/path/to/chrome" npm run pdf'
  )
}

/**
 * Chrome stamps the wall clock into /CreationDate and /ModDate, so two builds
 * of the same page differ byte for byte. Git would then see a change on every
 * run and CI would commit a new PDF on every push. Both fields are plain text
 * of fixed width, so overwriting the digits in place keeps every xref offset
 * valid — and the timestamp becomes the repo's own "last updated" date.
 */
async function makeReproducible (path) {
  const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december']

  const profile = JSON.parse(await readFile(join(root, 'data/profile.json'), 'utf8'))
  const [monthName, year] = String(profile.lastUpdated || '').toLowerCase().split(/\s+/)
  const month = MONTHS.indexOf(monthName) + 1

  const stamp = /^\d{4}$/.test(year || '') && month > 0
    ? `${year}${String(month).padStart(2, '0')}01000000`
    : '20200101000000'

  const buffer = await readFile(path)
  let text = buffer.toString('latin1')

  const before = text
  text = text.replace(/(\/(?:CreationDate|ModDate)\s*\(D:)\d{14}/g, `$1${stamp}`)
  if (text.length !== before.length) throw new Error('Timestamp rewrite changed the file length')

  await writeFile(path, Buffer.from(text, 'latin1'))
}

/** RESUME.md -> a self-contained HTML document Chrome can print. */
async function renderMarkdown (path) {
  const [markdown, css] = await Promise.all([
    readFile(SOURCE, 'utf8'),
    readFile(STYLES, 'utf8')
  ])

  // The <!--p:key--> sync markers are HTML comments: marked passes them
  // through and the browser never paints them. Strip them anyway so the
  // printed document carries no build scaffolding.
  const clean = markdown.replace(/<!--\/?p(?::[a-zA-Z0-9_.]+)?-->/g, '')

  const body = marked.parse(clean, { mangle: false, headerIds: false })

  await writeFile(path, [
    '<!doctype html>',
    '<html lang="en">',
    '<head>',
    '<meta charset="utf-8">',
    '<title>Resume</title>',
    '<style>',
    css,
    '</style>',
    '</head>',
    '<body>',
    body,
    '</body>',
    '</html>',
    ''
  ].join('\n'))
}

const browser = await findBrowser()

// Stage inside the repo: a temp dir can sit on another volume, and renaming
// across volumes fails after the old PDF is already gone.
const staging = join(root, '.resume-build.pdf')
const stagingHtml = join(root, '.resume-build.html')

let size
try {
  await rm(staging, { force: true })
  await renderMarkdown(stagingHtml)

  await run(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--virtual-time-budget=10000', // let webfonts and layout settle
    `--print-to-pdf=${staging}`,
    pathToFileURL(stagingHtml).href
  ], { timeout: 120000 })

  ;({ size } = await stat(staging))
  if (size < 10000) throw new Error(`Rendered PDF is suspiciously small (${size} bytes) — check index.html`)

  await makeReproducible(staging)

  // Only now is the existing PDF replaced, so a failed render leaves it intact.
  await rm(TARGET, { force: true })
  await rename(staging, TARGET)
} finally {
  await rm(staging, { force: true })
  await rm(stagingHtml, { force: true })
}

console.log(`RESUME-eng.pdf rebuilt from RESUME.md — ${(size / 1024).toFixed(0)} KB`)
console.log(`browser: ${browser}`)
