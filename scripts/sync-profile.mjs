#!/usr/bin/env node
/**
 * Single source of truth for the numbers that repeat across this repo.
 *
 * Every value lives in data/profile.json. In the documents, each place that
 * shows one is wrapped in a marker:
 *
 *   <!--p:salary.en-->$3,500+/month<!--/p-->
 *
 * The comments are invisible on GitHub and in the browser. Running this script
 * rewrites whatever sits between the markers, so a value is changed in one
 * place and lands everywhere.
 *
 *   node scripts/sync-profile.mjs          rewrite the files
 *   node scripts/sync-profile.mjs --check  fail if anything is out of date (CI)
 *
 * To make a new value editable: add it to profile.json, add a case to
 * buildValues() if it needs formatting, then wrap the text in the documents.
 */

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const FILES = ['README.md', 'RESUME.md', 'CV_UA.md', 'index.html']

const MARKER = /<!--p:([a-zA-Z0-9_.]+)-->([\s\S]*?)<!--\/p-->/g

/** Values the documents may reference, keyed exactly as in the markers. */
function buildValues (profile) {
  const { salary } = profile
  const symbol = salary.currency === 'USD' ? '$' : salary.currency + ' '
  const grouped = (sep) => String(salary.amount).replace(/\B(?=(\d{3})+(?!\d))/g, sep)

  return {
    'name': profile.name,
    'title': profile.title,
    'email': profile.email,
    'email.md': `[${profile.email}](mailto:${profile.email})`,
    'location.en': profile.location.en,
    'location.ua': profile.location.ua,
    'timezone': profile.timezone,

    'salary.en': `${symbol}${grouped(',')}+/${salary.period}`,
    'salary.ua': `від ${symbol}${grouped(',')}/місяць`,

    'availability.en': profile.remoteOnly ? 'Remote only' : 'Open to on-site',
    'availability.ua': profile.remoteOnly ? 'Тільки remote' : 'Готова до офісу',

    'years': `${profile.yearsExperience}+`,
    'yearsMentoring': `${profile.yearsMentoring}+`,
    'packages': String(profile.npmPackages),
    'records': profile.recordsHandled,

    'links.github': profile.links.github,
    'links.linkedin': profile.links.linkedin,
    'links.lessons': profile.links.lessons,

    'lastUpdated': profile.lastUpdated
  }
}

const profile = JSON.parse(await readFile(join(root, 'data/profile.json'), 'utf8'))
const values = buildValues(profile)

const check = process.argv.includes('--check')
const unknown = new Set()
let changed = 0
let seen = 0

for (const name of FILES) {
  const path = join(root, name)
  let source

  try {
    source = await readFile(path, 'utf8')
  } catch {
    console.warn(`skipped ${name} (not found)`)
    continue
  }

  const updated = source.replace(MARKER, (whole, key, current) => {
    seen += 1
    if (!(key in values)) {
      unknown.add(`${name}: ${key}`)
      return whole
    }
    const next = values[key]
    if (next === current) return whole
    changed += 1
    console.log(`${relative(root, path)}  ${key}: ${JSON.stringify(current)} -> ${JSON.stringify(next)}`)
    return `<!--p:${key}-->${next}<!--/p-->`
  })

  if (updated !== source && !check) await writeFile(path, updated)
}

if (unknown.size) {
  console.error('\nUnknown keys (not in profile.json):')
  for (const item of unknown) console.error('  ' + item)
  process.exit(2)
}

if (check) {
  if (changed) {
    console.error(`\n${changed} value(s) out of date. Run: npm run sync`)
    process.exit(1)
  }
  console.log(`${seen} value(s) checked, all in sync.`)
} else {
  console.log(changed ? `\n${changed} value(s) updated across ${FILES.length} files.` : `${seen} value(s) already in sync.`)
}
