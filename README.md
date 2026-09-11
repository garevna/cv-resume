# Irina H. Fylyppova — CV & Resume

👋 Welcome! This repository contains my professional CV and resume in multiple formats, plus my developer philosophy collection.

## 📄 Documents

- **[:round_pushpin: pdf](https://garevna.github.io/cv-resume/RESUME-eng.pdf)**
- **[RESUME.md](./RESUME.md)** — English version for international opportunities
- **[CV_UA.md](./CV_UA.md)** — Ukrainian version
- **[Interactive web version](https://garevna.github.io/cv-resume/index.html)**

## 🎨 Developer Philosophy

💡 **[JavaScript Philosophy Memes](./media/js-memes/)** — A collection of 17 humorous memes explaining fundamental JS concepts through the lens of developer thinking. From functions as first-class citizens to prototypal inheritance, these memes are both funny and educational.

**Concepts covered:**
- Functions as the heart of JavaScript
- Objects and constructors
- References and access
- Arrow functions and `this` binding
- Developer mindset vs user perspective

*Created for teaching, learning, and celebrating JavaScript's quirks.* 😄

## 🔗 Quick Links

- 🧑‍💻 **GitHub:** [github.com/garevna](https://github.com/garevna)
- 💼 **LinkedIn:** [linkedin.com/in/garevna](https://www.linkedin.com/in/garevna/)
- 📧 **Email:** <!--p:email-->irina.h.fylyppova@gmail.com<!--/p-->
- 📚 **JS Lessons:** [garevna.github.io/js-lessons/](https://garevna.github.io/js-lessons/)
- 🧠 **JS Quiz:** [garevna.github.io/js-quiz/](https://garevna.github.io/js-quiz/)

## 🚀 About Me

Senior Frontend Developer with <!--p:years-->8+<!--/p--> years of experience building high-performance web applications. Specialized in:

- **Vue 3** with TypeScript, Pinia, Composition API
- **Performance optimization:** Web Workers, IndexedDB, bundle optimization
- **Real-time systems:** WebSocket synchronization, live updates
- **Complex architectures:** multi-step workflows, dynamic theming, state management
- **Mentoring & leadership:** <!--p:yearsMentoring-->8+<!--/p--> years teaching junior developers

## 💰 Key Stats

- <!--p:years-->8+<!--/p--> years senior frontend development
- <!--p:records-->100k+<!--/p--> records database experience
- 8+ complete projects from architecture to deployment
- <!--p:yearsMentoring-->8+<!--/p--> years mentoring junior developers
- <!--p:packages-->38<!--/p--> NPM packages published
- Remote-only specialist

## 💼 Recent Work

**VD Express Platform** — white-label booking core *(in development)*

A pnpm monorepo split by responsibility: a booking core, a typed domain contract, an API layer, a shared UI library and an event bus. The core never imports host stores — the application registers them via `registerStoresFor*()`, so one core serves several independent carriers. Step order is declarative too: `WizardStep` predicates (`isEnabled` / `canEnter` / `canLeave`) instead of a hard-coded flow.

**BUSPORTAL** — multilingual marketing site

`vite-ssg` static generation with hydration: 20+ pre-rendered routes across four locales, Pinia state serialised into the markup, and the SEO layer (canonical, hreflang, Open Graph, generated sitemap) extracted into a standalone composable.

**DGtek Provisioning Portal** — B2B platform for a fibre network operator

Three applications over <!--p:records-->100k+<!--/p--> customer and building records, with the entire data layer behind a single Web Worker message boundary — API traffic, credentials and a versioned IndexedDB cache of ten object stores. Monthly revenue, churn and ARPU are computed in the browser over IndexedDB cursors instead of a slow server endpoint.

→ **[Read the case study](https://garevna.github.io/cv-resume/dgtek_portal.html)**

**Coverage-check packages** — shipped by DGtek to its reseller ISPs

Published packages that draw the operator's live coverage polygons on any site and resolve a visitor's address against them, then read that zone's settings back from the operator's admin to quote a realistic connection time — two days or two weeks by zone — before handing the visitor to a request form. Coverage is edited in one place and every downstream site follows, including sites the operator doesn't control.

**Pineapple** — an ISP reselling DGtek's fibre network

A Nuxt 2 public site, statically generated and composed from **10 npm packages I published**, with selective hydration via `vue-lazy-hydration` and navigation resolved from the CMS at runtime — plus the headless CMS itself (Vue frontend, Node.js/Express backend) storing landing pages as JSON with a publish/hide lifecycle.

→ **[nuxt-app](https://github.com/garevna/nuxt-app)**

## 🛠️ Tech Stack

Vue 2/3 (Composition API) | Nuxt 2 | TypeScript | Pinia/Vuex | Web Workers | IndexedDB | Firebase Auth | REST API | Node.js/Express | Google Maps | Webpack/Vite | <!--p:packages-->38<!--/p--> NPM packages

## 🌐 Current Status

- ✅ **Open to opportunities** | <!--p:availability.en-->Remote only<!--/p-->
- 💵 **Salary:** <!--p:salary.en-->$3,500+/month<!--/p-->
- 📍 **Timezone:** <!--p:timezone-->UTC+2 (Kyiv)<!--/p-->
- 🗣️ **Languages:** Ukrainian, Russian, English (Upper-Intermediate)

## 🔧 Maintaining This Repo

Values that appear in more than one document — salary, contacts, years of
experience, employment periods — live in [`data/profile.json`](./data/profile.json)
and are wrapped in the documents by invisible markers.

```bash
npm run sync    # push profile.json values into all documents
npm run pdf     # rebuild RESUME-eng.pdf from index.html
npm run build   # both
npm run check   # fail if any document has drifted (runs in CI)
```

Change a value in `data/profile.json`, not in the documents.

## 📱 How to Use

1. **For PDF:** `npm run pdf` rebuilds `RESUME-eng.pdf` from `index.html` with headless Chrome (CI does this automatically on push)
2. **For Markdown:** Copy content from [RESUME.md](./RESUME.md) or [CV_UA.md](./CV_UA.md)
3. **For Web:** Open [index.html](./index.html) in browser or deploy to GitHub Pages
4. **For Philosophy:** Browse [JS Philosophy Memes](./media/js-memes/) for fun insights

---

**Last Updated:** <!--p:lastUpdated-->September 2026<!--/p-->
