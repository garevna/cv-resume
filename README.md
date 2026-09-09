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

**VD-Express** — International bus booking platform
- Vue 3, TypeScript, Vuetify 3, Pinia
- WebSocket real-time synchronization, geolocation transfers, Firebase Auth
- Multi-language support (uk/en/de), dynamic theming without rebuilds

**DGtek Portal** — Multi-role system at scale
- 100k+ records, role-based access control
- Real-time map updates, auto-generated scheduling
- Analytics dashboard with live data

**Pineapple CMS** — Dynamic content management
- Headless CMS (Node.js + Express backend)
- Runtime-configurable landing pages

## 🛠️ Tech Stack

Vue 2/3 (Composition API) | TypeScript | Pinia/Vuex | Web Workers | IndexedDB | Firebase Auth | REST API | Node.js/Express | Google Maps | Webpack/Vite | <!--p:packages-->38<!--/p--> NPM packages

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
