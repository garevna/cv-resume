#!/usr/bin/env node
/**
 * Renders index.html to RESUME-eng.pdf with headless Chrome.
 *
 * The PDF is a build artifact, not a source file: values synced by
 * sync-profile.mjs reach it only through this step. Run both together with
 * `npm run build`, or this alone with `npm run pdf`.
 *
 * Chrome is located automatically; override with CHROME_PATH if needed.
 * Nothing is installed — the browser already on the machine does the work,
 * and the same command runs on the CI runner.
 */

import { access, rename, rm, stat } from 'node:fs/promises'
import { constants } from 'node:fs'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'


const run = promisify(execFile)
const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const SOURCE = join(root, 'index.html')
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

const browser = await findBrowser()

// Stage inside the repo: a temp dir can sit on another volume, and renaming
// across volumes fails after the old PDF is already gone.
const staging = join(root, '.resume-build.pdf')

let size
try {
  await rm(staging, { force: true })

  await run(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--virtual-time-budget=10000', // let webfonts and layout settle
    `--print-to-pdf=${staging}`,
    pathToFileURL(SOURCE).href
  ], { timeout: 120000 })

  ;({ size } = await stat(staging))
  if (size < 10000) throw new Error(`Rendered PDF is suspiciously small (${size} bytes) — check index.html`)

  // Only now is the existing PDF replaced, so a failed render leaves it intact.
  await rm(TARGET, { force: true })
  await rename(staging, TARGET)
} finally {
  await rm(staging, { force: true })
}

console.log(`RESUME-eng.pdf rebuilt from index.html — ${(size / 1024).toFixed(0)} KB`)
console.log(`browser: ${browser}`)
