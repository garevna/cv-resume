# Fonts

The resume is set in **Montserrat** (text) and **Roboto Mono** (code spans).
Both are licensed under the [SIL Open Font License 1.1][ofl], which allows
redistributing the files inside this repository and embedding them in the PDF.

They are committed rather than named in a font stack because the stack made
the output depend on the machine: Segoe UI on a Windows laptop, Liberation
Sans on the GitHub Actions runner — the same six pages, two different
documents. `scripts/fonts.mjs` turns these files into the `@font-face` rules
that `index.html` links and `RESUME-eng.pdf` carries inline.

## What is here

`<family>-<weight>[-italic]-<subset>.woff2`, as served by Google Fonts v31:

| | weights | subsets |
|---|---|---|
| Montserrat | 400, 500, 600, 700, 400 italic | latin, latin-ext |
| Roboto Mono | 400 | latin, latin-ext |

**Static cuts, one file per weight — not the variable font.** Chrome cannot
embed an instance of a variable font in a PDF: it draws the text as Type3
glyph procedures instead, which costs about a third of a megabyte and leaves
the page only half-selectable. Static files come out as ordinary subsetted
Type0 fonts.

Anything outside those two subsets — the emoji in the contact line, the flags
beside the languages — still comes from whatever the machine provides, so
those few glyphs remain the one part of the page that differs between builds.

## Refreshing them

Google serves the variable font to a modern browser and the static cuts to an
older one, so the user agent is what picks them:

```bash
curl -A "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36" \
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Roboto+Mono:wght@400"
```

Each `@font-face` in the answer gives a `.woff2` URL and the subset it belongs
to (the comment above it). Download them under the names above, then
`npm run build` and check that the PDF is still six pages.

[ofl]: https://openfontlicense.org/
