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

/* ------------------------------------------------------------ the flourishes
 *
 * The hand-written page had shapes markdown has no syntax for: technologies as
 * pills, languages with their flag, links as buttons, skill groups as cards.
 * None of that is decoration for its own sake — it is what makes a wall of
 * text scannable — so rather than lose it, each shape is recognised from what
 * the markdown already says. No new notation to remember: write the resume the
 * way it reads, and the page picks the pattern up.
 */

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Splits on the commas that separate items, not on the ones inside an item.
 *
 *   Vue 3 (Composition API, `<script setup>`), TypeScript, Pinia
 *
 * reads as three technologies, not four: the first comma is part of the
 * parenthesis and belongs to Vue. Anything nested — brackets too — is carried
 * whole, and an unbalanced bracket simply never reopens the split.
 */
const commas = (html) => {
  const out = ['']
  let depth = 0

  for (const char of html) {
    if (char === '(' || char === '[') depth++
    else if (char === ')' || char === ']') depth = Math.max(0, depth - 1)
    else if (char === ',' && depth === 0) { out.push(''); continue }
    out[out.length - 1] += char
  }

  return out
}

/**
 * A paragraph that opens with a bold label and a colon, and whose rest is a
 * list separated by • or commas, is a technology stack.
 *
 *   **Technology stack:** Vue 3, TypeScript, Pinia
 *   **Frontend:**
 *   Vue 2/3 • TypeScript • Vuetify 2/3
 */
const pills = (html) => html.replace(
  // The colon sits inside the bold almost everywhere and outside it once —
  // **Technology stack:** against **Technology stack**: — so both are read
  // rather than corrected in the source.
  /<p><strong>([^<]+?):?<\/strong>:?\s*(?:<br\s*\/?>)?\s*([\s\S]*?)<\/p>/g,
  (whole, rawLabel, rest) => {
    const label = rawLabel.replace(/:\s*$/, '')
    // Inline markup is fine — a stack line may name `<script setup>` in code
    // font. Anything that starts a block of its own is prose, not a list.
    if (/<(a\s|ul|ol|div|p[\s>]|h[1-6])/.test(rest)) return whole

    // A bullet between items says "list" and nothing else does. Commas are
    // trusted only under a label that announces a stack — otherwise
    // "**Status:** shipped, in review" would come out as two pills.
    const bulleted = rest.includes('•')
    if (!bulleted && !/stack$/i.test(label)) return whole

    const parts = (bulleted ? rest.split('•') : commas(rest))
      .map((p) => p.replace(/<br\s*\/?>/g, ' ').trim())
      .filter(Boolean)

    // One item is a sentence, not a list. Two dozen is a paragraph someone
    // punctuated normally. Measured on the words: tags and entities are not
    // what a reader sees.
    const text = (p) => p.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, '_')
    if (parts.length < 2 || parts.length > 24) return whole
    if (parts.some((p) => text(p).length > 60)) return whole

    const tags = parts.map((p) => `<span class="tech-tag">${p}</span>`).join('\n                    ')
    return `<p class="tech-label"><strong>${label}:</strong></p>\n                <div class="tech-stack">\n                    ${tags}\n                </div>`
  }
)

/**
 * A list whose every item starts with a flag is the languages.
 *
 *   - 🇺🇦 Ukrainian (Native)
 */
const FLAG = /^(\p{Regional_Indicator}\p{Regional_Indicator})\s*(.+?)\s*\(([^)]+)\)\s*$/u

const languages = (html) => html.replace(/<ul>([\s\S]*?)<\/ul>/g, (whole, inner) => {
  const items = [...inner.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => m[1].trim())
  if (!items.length) return whole

  const parsed = items.map((item) => item.match(FLAG))
  if (parsed.some((m) => !m)) return whole

  const rows = parsed.map(([, flag, name, level]) =>
    `<div class="lang-item">\n                        <span class="lang-flag">${flag}</span>\n                        <div><strong>${name}</strong><br><small>${level}</small></div>\n                    </div>`
  ).join('\n                    ')

  return `<div class="langs">\n                    ${rows}\n                </div>`
})

/**
 * A list whose every item is an emoji, a bold name and a bare address is the
 * portfolio: those become buttons.
 *
 *   - 📚 **JS Lessons:** https://garevna.github.io/js-lessons/
 */
const LINK = /^(\S+)\s*<strong>([^<]+?):<\/strong>\s*(?:<a[^>]*href="([^"]+)"[^>]*>)?([^<\s]+)/

const buttons = (html) => html.replace(/<ul>([\s\S]*?)<\/ul>/g, (whole, inner) => {
  const items = [...inner.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => m[1].trim())
  if (items.length < 2) return whole

  const parsed = items.map((item) => item.match(LINK))
  if (parsed.some((m) => !m)) return whole
  if (parsed.some(([, , , href, bare]) => !/^https?:/.test(href || bare))) return whole

  const row = parsed.map(([, icon, name, href, bare]) =>
    `<a href="${href || bare}" target="_blank" class="link-btn">${icon} ${name}</a>`
  ).join('\n                    ')

  return `<div class="links-section">\n                    ${row}\n                </div>`
})

/**
 * Inside Core Competencies every h3 opens a card, and the cards sit in a grid.
 * Nowhere else: an h3 in the experience is a place of work, not a card.
 */
const cards = (chunk) => {
  if (!/^<h2>Core Competencies/.test(chunk)) return chunk

  const [head, ...groups] = chunk.split(/(?=<h3)/)
  if (!groups.length) return chunk

  const boxes = groups.map((g) =>
    '<div class="skill-category">\n' + g.trim().replace(/<h3>/g, '<h4>').replace(/<\/h3>/g, '</h4>') + '\n                    </div>'
  ).join('\n                    ')

  return head + `<div class="skills-grid">\n                    ${boxes}\n                </div>`
}

/**
 * Every project in the experience becomes a panel that opens.
 *
 * The section is the longest on the page and a reader arrives wanting the
 * shape of it, not seven hundred words at once. The title stays, the detail
 * folds away — and the technology stack stays out of the fold, because that
 * is what someone scanning is looking for.
 *
 * A project title is a paragraph that opens with bold text, optionally
 * wrapped in a link, and it is never the first paragraph after a place of
 * work — that one is the employer and the dates.
 *
 * Runs before the pills, while the stack is still a single line and the
 * markup is one block per line.
 */
// The colon sits inside the bold in most of the resume and outside it once —
// **Technology stack:** against **Technology stack**: — and both mean the same
// thing, so both are recognised rather than corrected in the source.
const STACK = /^<p><strong>[^<]*stack:?<\/strong>:?\s/i

/**
 * A title is a paragraph that is only its bold name, give or take a link
 * around it and a date after it. A bold label with a sentence behind it —
 * **Status:** the domain core is implemented… — is not a title, and the
 * length of what follows is what tells them apart.
 */
const TITLE = /^<p>(?:<a\b[^>]*>)?<strong>[\s\S]*?<\/strong>(?:<\/a>)?([\s\S]*?)<\/p>\s*$/

const isTitle = (line) => {
  if (STACK.test(line)) return false
  const m = line.match(TITLE)
  if (!m) return false
  return m[1].replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, '_').trim().length <= 30
}

const CLOSES = /^<(h[2-4]|ul|ol)\b/

const panels = (chunk) => {
  if (!/^<h2>Professional Experience/.test(chunk)) return chunk

  const out = []
  let open = false
  let afterRole = false

  const close = () => {
    if (!open) return
    out.push('                </details>')
    open = false
  }

  for (const line of chunk.split('\n')) {
    if (/^<h3\b/.test(line)) { close(); afterRole = true; out.push(line); continue }

    // The employer and the dates, directly under the role.
    if (afterRole && /^<p>/.test(line)) { afterRole = false; out.push(line); continue }

    if (STACK.test(line)) { close(); out.push(line); continue }

    if (isTitle(line)) {
      close()
      const inner = line.replace(/^<p>/, '').replace(/<\/p>\s*$/, '')
      out.push('                <details class="project">')
      out.push('                    <summary>' + inner + '</summary>')
      open = true
      continue
    }

    if (!open && CLOSES.test(line)) { out.push(line); continue }

    out.push(line)
  }

  close()
  return out.join('\n')
}

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
  .map(cards)
  .map(panels)
  .map(pills)
  .map(languages)
  .map(buttons)
  .map((chunk) => '            <section>\n' + chunk + '\n            </section>')
  .join('\n\n')

const page = template.replace('<!--CONTENT-->', sections)

await writeFile(TARGET, page)

const words = sections.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
console.log(`index.html: ${sections.split('<section>').length - 1} sections, ${words} words`)
