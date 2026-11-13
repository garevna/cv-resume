/**
 * The typefaces this resume is set in, kept in the repository.
 *
 * Why they are here rather than named in a font stack: the stylesheet used to
 * ask for a font and let each machine answer from what it had installed -
 * Segoe UI on a Windows laptop, Liberation Sans on the GitHub Actions runner.
 * The same six pages came out looking like two different documents (624 KB
 * and 248 KB), and whoever built last decided which one a recruiter
 * downloaded. With the files committed, every build prints the same page.
 *
 * Montserrat for the text and Roboto Mono for code spans, both SIL OFL 1.1 -
 * where they came from and how to refresh them is in media/fonts/README.md.
 *
 * The same faces are delivered two ways:
 *   - index.html links them, so a browser fetches only the subset a page
 *     actually needs and caches it between visits;
 *   - the print stylesheet carries them inline as data: URIs, because the PDF
 *     is printed from a file:// page and Chrome will not fetch a webfont for
 *     one (an opaque origin fails the font's CORS check). A linked font there
 *     does not fail loudly - it quietly falls back to a system font, which is
 *     the very thing this file exists to stop.
 */
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const FONT_DIR = 'media/fonts'

// Google's own subsetting. 'latin' carries U+2000-206F, which is where the
// em dash and the bullet live; anything outside both ranges (the emoji in the
// contact line, for one) still comes from whatever the system provides.
const SUBSETS = {
  'latin':
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, '
    + 'U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, '
    + 'U+2212, U+2215, U+FEFF, U+FFFD',
  'latin-ext':
    'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, '
    + 'U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, '
    + 'U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF'
}

// One file per weight, deliberately: Google also serves Montserrat as a
// single variable file, and Chrome cannot embed an instance of one in a PDF -
// it draws the text as Type3 glyph procedures instead, which costs a third of
// a megabyte and leaves the page half-selectable. Static cuts come out as
// ordinary subsetted Type0 fonts.
//
// Bold italic is not among them; the resume does not use it, and Chrome would
// synthesise it from the italic if it ever appeared.
const FACES = [
  { family: 'Montserrat', style: 'normal', weight: '400', file: 'montserrat-400' },
  { family: 'Montserrat', style: 'normal', weight: '500', file: 'montserrat-500' },
  { family: 'Montserrat', style: 'normal', weight: '600', file: 'montserrat-600' },
  { family: 'Montserrat', style: 'normal', weight: '700', file: 'montserrat-700' },
  { family: 'Montserrat', style: 'italic', weight: '400', file: 'montserrat-400-italic' },
  { family: 'Roboto Mono', style: 'normal', weight: '400', file: 'roboto-mono-400' }
]

/**
 * The @font-face rules, ready to drop into a stylesheet.
 *
 * inline: true embeds each file as a data: URI (for the printed PDF);
 * false links it relative to the document root (for index.html).
 */
export async function fontFaceCss (root, { inline = false } = {}) {
  const rules = []

  for (const face of FACES) {
    for (const [subset, range] of Object.entries(SUBSETS)) {
      const file = `${face.file}-${subset}.woff2`
      const source = inline
        ? `url(data:font/woff2;base64,${(await readFile(join(root, FONT_DIR, file))).toString('base64')})`
        : `url('${FONT_DIR}/${file}')`

      rules.push([
        '@font-face {',
        `  font-family: '${face.family}';`,
        `  font-style: ${face.style};`,
        `  font-weight: ${face.weight};`,
        // Printing cannot wait for anything, and an embedded font has nothing
        // to wait for; on the web the text should appear before the font does.
        `  font-display: ${inline ? 'block' : 'swap'};`,
        `  src: ${source} format('woff2');`,
        `  unicode-range: ${range};`,
        '}'
      ].join('\n'))
    }
  }

  return rules.join('\n\n')
}
