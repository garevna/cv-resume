#!/usr/bin/env node
/**
 * Renders RESUME.md into index.html.
 *
 * There is one source of truth and it is RESUME.md — the long, detailed one.
 * index.html used to be written by hand beside it and was allowed to be
 * "the lighter interactive version", which in practice meant it drifted: the
 * experience section ran 584 words against the resume's 2025, and a whole
 * ITNET project was missing from the web page that people actually open.
 *
 * The shell — head, styles, header, footer — lives in scripts/page-template.html
 * and is not generated. Only what goes inside <main> comes from the markdown.
 *
 *   npm run html
 *
 * The <!--p:key--> markers survive into the output, so sync-profile.mjs keeps
 * updating the generated page exactly as it did the hand-written one.
 */

import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { marked } from 'marked'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const SOURCE = join(root, 'RESUME.md')
const TEMPLATE = join(root, 'scripts/page-template.html')
const TARGET = join(root, 'index.html')

const [markdown, template] = await Promise.all([
  readFile(SOURCE, 'utf8'),
  readFile(TEMPLATE, 'utf8')
])

/**
 * The name, title and contacts at the top of the resume are already in the
 * page header, laid out for the screen rather than for print. The generated
 * part starts at the first section.
 */
const body = markdown.slice(markdown.indexOf('## Professional Summary'))

const rendered = marked.parse(body, { mangle: false, headerIds: false })

/**
 * The page styles hang on <section>, one per chapter, and markdown has no
 * such thing — it has headings. Each <h2> opens a section and the next one
 * closes it.
 *
 * The horizontal rules go: in the markdown they separate chapters, and here
 * the sections already do that with their own spacing and border.
 */
const sections = rendered
  .replace(/<hr\s*\/?>\s*/g, '')
  .split(/(?=<h2)/)
  .map((chunk) => chunk.trim())
  .filter(Boolean)
  .map((chunk) => '            <section>\n' + chunk + '\n            </section>')
  .join('\n\n')

const page = template.replace('<!--CONTENT-->', sections)

await writeFile(TARGET, page)

const words = sections.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
console.log(`index.html: ${sections.split('<section>').length - 1} sections, ${words} words`)
