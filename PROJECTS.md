# Project Catalogue — Irina H. Fylyppova

The long version. Every project at the length it deserves, taken out of
[RESUME.md](./RESUME.md) so that the resume can be read in a minute and this can be
read when someone wants the detail.

← [Back to the resume](./RESUME.md) · [Interactive version](https://garevna.github.io/cv-resume/index.html) · [PDF](https://garevna.github.io/cv-resume/RESUME-eng.pdf)

---

## Professional Experience

### **Senior Frontend Developer**  
**ITNET** (Lviv, Ukraine) | <!--p:role.itnet.en-->Feb 2025–Present<!--/p-->  

#### Project Portfolio

**1. Admin Dashboard — Corporate administration platform**

SPA for managing users, roles, departments and transport infrastructure. Features include JWT authentication, role-based access control (RBAC), CRUD operations, data search and filtering, bus editing, geographical modules based on MapLibre, interface localisation and integration with a REST API.

**Technology stack:** Vue 3, TypeScript, Pinia, Vue Router, Vuetify 3, Axios, MapLibre GL, Vue i18n, Vite, Vitest, Cypress

---

**2. VD-Express — International Bus Booking Platform**

Built frontend from scratch for international bus transportation service handling real-time seat selection, multi-step booking flows, and geolocation-based transfers.

*Architecture & Design:*
- Designed runtime-loadable theme system enabling deployment for new brands without frontend rebuilds
- Integrated WebSocket real-time synchronization for live seat availability and booking status updates
- Implemented multi-language support (uk/en/de) with locale-specific formatting (dates, currencies, phone numbers)
- Firebase Auth integration (email/password, SMS+reCAPTCHA, Google OAuth)
- Dynamic meta-tags and SEO optimization for search engines and AI crawlers

*Key Features:*
- Multi-step booking flow: search → route selection with transfers → seat selection on bus map → passenger data → payment
- Personal transfers: interactive map-based pickup/dropoff with geolocation and cost calculation
- Real-time seat sync through WebSocket with automatic reconnection (exponential backoff)
- Reusable component library with Vuetify 3 and custom patterns

**Technology stack:** Vue 3 (Composition API), TypeScript, Vuetify 3, Pinia, Firebase Auth, WebSocket, REST API, MapLibre GL, Vue i18n

---

**3. BUSPORTAL — a multilingual promotional website for a SaaS platform**

A marketing website for a CRM platform aimed at bus and logistics companies: showcasing features, pricing, FAQs, a blog and a lead generation funnel. The website is fully statically pre-rendered, available in four languages (uk/en/de/ru) and serves the Ukrainian, European and international markets.

*Technical solution:*
- **Static generation with hydration** via vite-ssg: all routes are pre-rendered as HTML, and the Pinia state is serialised into the markup
- **Four localisations, 20+ routes** with distinct URLs, synchronisation of localisation with the route during pre-rendering and at runtime
- **SEO layer** as a separate composable: title/description/keywords, canonical, hreflang, Open Graph, Twitter Card, sitemap.xml with auto-generation
- **Lead generation and analytics:** demo request, price enquiry and call-back forms; integration with APIs and events in GA4/Google Ads
- **Interactive interface:** sticky-scroll with synchronised images, custom sliders, responsive cards with hover states
- **Content on self-hosted Directus:** pre-rendered blog posts with actual publication dates and cross-regional alternate links

**Technology stack:** Vue 3 (Composition API), TypeScript, Vite 7, vite-ssg, Vuetify 3, Pinia, vue-i18n, vue-router, @unhead/vue, Directus 11, GA4, ESLint + Prettier

---

**4. IS PORTAL — telecommunications business automation platform**

A responsive multi-page landing page for a B2B platform for managing connections, installation teams, requests, warehouses and procurement.

*Features implemented:*
- Responsive versions for desktop and mobile with distinct UX patterns
- Localisation of the interface; interactive menu and seamless navigation between sections
- Pricing module with the option to switch between monthly and annual subscriptions
- Request, call-back and consultation forms with validation
- FAQ section, pop-ups and carousels using Swiper
- Component-based architecture using Vue 3

**Technology stack:** Vue 3, TypeScript, Vite, Pinia, Vue i18n, Vuetify, Swiper, Vitest

---

**5. IT NET — an IT company’s corporate website**

A responsive, multilingual landing page (uk/en/de) showcasing the company, its CRM products and services. The site features interactive cards, separate desktop and mobile navigation flows, feedback forms and pop-up scenarios.

*Scope of responsibility:*
- Development of the user interface, responsive layout and interactivity
- Integration of client-side logic and Vuetify components
- (Docker and CI/CD were set up by other team members)

**Technology stack:** Vue 3, TypeScript, Vite, Vuetify, Pinia, Vue i18n, Swiper, Vitest

---

**6. Site Constructor — multi-brand (white-label) front-end platform**

Developed the client-side of an online bus ticket sales platform, where a single codebase supports several independent brands simultaneously. The design theme is determined at runtime; UI components, colour schemes, localisation and content specific to each brand are dynamically loaded — without the need to rebuild the project.

*Booking flow implemented:*
- Route search (including geolocation) using the MapLibre GL map
- Comparison of journey options; interactive seat selection diagram on the bus
- Passenger details, adding luggage, selecting services
- Payment and receipt of an e-ticket; personal account with booking history

*Architectural approach:*
- Vue 3 (Composition API) + TypeScript with Vuetify 3 as the component library
- Pinia: state is broken down into subject-specific stores (search, booking, passengers, payments, authorisation)
- vue-i18n with separate dictionary sets for each brand
- Content (dynamic pages, menus, colours, popular destinations) is defined in a JSON configuration file
- Runtime theme selection via `defineAsyncComponent` with dynamic import
- Responsive layout with separate mobile UX patterns

**Technology stack:** Vue 3 (Composition API, `<script setup>`), TypeScript, Vuetify 3, Pinia, vue-i18n, MapLibre GL, Firebase Auth, REST API

---

**7. VD Express Platform — modular front-end platform (Active Development)**

The online booking platform for international coach services is designed as a reusable core that serves several independent operators via a white-label solution. The entire booking flow is implemented within the reusable core as a Vue plugin.

*Architecture:*
- **Monorepository** on pnpm workspaces, split by responsibility:
  - `wizard-core` — booking core (Pinia forms, domain services, routes)
  - `app-types` — unified domain contract (models for journeys, segments, buses, seats)
  - `app-services` — API layer (search, booking, reservations, calculations)
  - `shared-ui` — component library (fields with masks, phone number validation)
  - `event-manager` — typed application event bus

- **Dependency inversion:** the core does not import application stores; instead, the host registers them via `registerStoresFor*()`, ensuring full reusability

- **Configurable flow:** `WizardStep` with `isEnabled/canEnter/canLeave` predicates and `WizardFlowConfig` allow the order of steps to be described declaratively

*Functionality:*
- Search for return journeys with route planning via connections
- Interactive cabin layout with real-world seating plans, seat types and automatic seat selection for groups
- Real-time seat availability synchronisation via WebSocket with automatic reconnection and ping monitoring
- Passengers with seat types and discounts, step-by-step cost recalculation in multiple currencies
- Full lifecycle: booking → payment → PDF tickets → email → cancellation/refund
- Personal account with history, loyalty programme and promotions
- Door-to-door transfers: geolocation, zones on MapLibre, cost calculation
- Three languages (uk/en/de) with localised formats

**Technology stack:** Vue 3 (Composition API), TypeScript, Vite, Vuetify 3, Pinia + persisted state, Vue Router, vue-i18n, MapLibre GL, Firebase Auth, WebSocket, Axios, libphonenumber-js, pnpm workspaces

**Status:** The domain core, API layer, UI library and main booking workflow have been fully implemented. The next stage involves the declarative configuration of the workflow and the integration of a second carrier client.

---

**8. Visual Content Editor — a visual editor for content management**

An interactive visual editor for creating and editing website content in real time. It allows users to modify text, images, styles and page structure without needing to access the code.

*Features:*
- Drag-and-drop editing of page components
- WYSIWYG editor with real-time preview
- Style management (colours, fonts, sizes) via an intuitive interface
- Saving and version control of content
- Synchronisation of changes between the editor and the live version of the website
- Support for multilingual content

*Architecture:*
- Vue 3 (Composition API) for reactive interface updates
- Pinia for managing the editor’s state and change history
- Real-time synchronisation via WebSocket
- Integration with the CMS backend for data storage

**Technology stack:** Vue 3, TypeScript, Vuetify 3, Pinia, WebSocket, REST API, Vite

---

---

### **Author & Platform Engineer** — developer education

**Independent** | 2015–Present

*Remote*

Teaching developers since 2015, with the courseware public and deployed from 2017 onwards rather than kept in a drive: [garevna.github.io](https://github.com/garevna/garevna.github.io) (2017), [vue-course](https://github.com/garevna/vue-course.github.io) (2018), [js-simulator](https://github.com/garevna/js-simulator) (2018), [js-course](https://github.com/garevna/js-course) (2019) and Client-Side JS today. This is where the mentoring line below comes from — the same material, taught and rewritten across ten years of students.

[**Client-Side JS**](https://garevna.github.io/js-lessons/) — a JavaScript course and the platform that renders it

164 lessons in Ukrainian, Russian and English, written and maintained together with the
platform they run on. Both are mine end to end: the prose, the rendering engine, the
authoring language and the release pipeline.

• **A rendering platform with no framework**: native custom elements with shadow DOM, a
versioned service worker for offline reading, and two web workers delivering content and
icons. The course is a demonstration of the platform as much as the platform is a vehicle
for the course.

• **An authoring language and its compiler**: lessons are written in an extended Markdown
that compiles to components — replayable browser-console and terminal sessions, quizzes,
and code-repair exercises that run the reader's code and grade it. Every construct is a
pattern in one grammar table and a builder beside it, so a new kind of exercise is an
afternoon rather than a rewrite.

• **Release gated by eight command-line checks**: markup integrity, agreement between
every demo's code and its printed output, link resolution, service-worker cache
behaviour, worker health, orphaned pages, translation coverage and a byte-exact
translation round-trip. Nothing reaches the site until they pass.

• **Internationalisation as an engineering problem**: each page splits into a
language-independent skeleton and per-language message files, proved lossless by
reassembling the page and comparing it byte for byte with the original; translation runs
through a DeepL pipeline with automated validation of what machine translation reliably
breaks — rewritten quotation marks silently invalidating a quiz answer, for instance.

• **Serverless rebuild under a deadline**: when Glitch ended project hosting, the five
practice back-ends twelve lessons depend on went with it. Rebuilt as a single Cloudflare
Worker, every route and response reconstructed from the request text printed in the
lessons, so a student following the page sees what the page says they will see.

• **AI-assisted engineering with a verification loop** — see Core Competencies.

**Technology stack**: JavaScript (ES2022), Web Components, Shadow DOM, Service Workers,
Web Workers, Webpack, Cloudflare Workers, Node.js tooling, Chrome DevTools Protocol,
DeepL API

---

### **Full-Stack Developer** — independent product

**Bible** — reading app and ministry coordination platform | 2023–Present

*Independent, remote* · [kcc-bible.pp.ua](https://kcc-bible.pp.ua/) · [source](https://github.com/garevna/bible)

Started in 2023 as a Bible reader with notes, themes and highlighting, and grown into the
coordination tool a church actually runs on. Built alone, and now developed with an AI
coding agent — the practice under Core Competencies comes from here. About 25,000 lines
across the application, the Worker and the tests; my only TypeScript-first codebase, and
the one I would show to explain how I work today.

• **A serverless back end of its own.** A Cloudflare Worker verifies the caller's Firebase
token and decides authorisation itself: roles and ministries in KV, messages, events,
participants, materials and day overrides in D1 behind five versioned SQL migrations, a
nightly cron clearing expired rows, a CORS allowlist and the bot token held as a Worker
secret — 3,600 lines of Worker TypeScript with 1,700 lines of tests beside it.

• **Permissions designed against lock-out.** Reader, publisher and administrator, plus
owners the admin page cannot modify — so no administrator can remove everyone's access,
including their own role. Password-only email addresses are refused as owner identities,
because the app never verifies them and anyone could claim one.

• **A rota with real operational logic.** Event types carrying roles and required
headcount; recurring events with a different time per weekday and single-day overrides;
two invitation modes — the organiser invites, or ministry members apply; substitutes who
agree in advance and step in automatically, with escalation to the schedulers when both
decline; methodical materials attached per role.

• **Two Telegram bots.** One publishes a theme to the church channel; a service bot writes
to ministers privately with inline *Confirm* / *Can't* buttons whose effect is identical
to acting inside the app, so a minister never has to open it to answer.

• **A rewrite that kept its users.** It replaces my own Vue 2 + Vuex version, whose users
signed in with a login rather than an email. A migration script mints a Firebase Auth
account per legacy login and moves `users/{login}` to `users/{uid}` — dry run by default,
with `--check`, `--undo` and `--delete-legacy` as separate deliberate steps, so people keep
their passwords and the move stays reversible until it is confirmed.

• **Deployed twice, on purpose.** Every push to `main` publishes independently to GitHub
Pages and to Cloudflare Pages on a custom domain; if the domain goes, the application does
not. `vue-tsc`, ESLint, Vitest and 2,400 lines of Playwright end-to-end tests all run
before either deploy, and the ministers have written instructions of their own in
`docs/`.

**Technology stack**: Vue 3 (Composition API), TypeScript, Pinia, Vuetify 3, Vite, PWA,
Cloudflare Workers, D1, KV, Cron Triggers, Firebase Auth, Firestore, Telegram Bot API,
MapLibre GL, Nominatim, Playwright, Vitest, pnpm workspaces, GitHub Actions

---

### **Senior Frontend Developer**  

**DGtek Fibre Network** (Australia) | <!--p:role.dgtek.en-->Sep 2019–Sep 2023<!--/p-->  

*Remote*

[**DGtek Provisioning Portal**](https://garevna.github.io/cv-resume/dgtek_portal.html) | 2020–2023

Frontend Lead / Senior Frontend Engineer

Sole frontend engineer across DGtek's web products: the provisioning portal below, the corporate MPA site, a series of landing pages, and the npm packages that tied them together.

Sole frontend engineer on a B2B OSS/provisioning platform for a fibre network operator expanding from Melbourne across Australia, serving four user groups: DGtek network admins, reseller ISPs (RSPs), public visitors and the shareholders who read the reports, over <!--p:records-->100k+<!--/p--> customer and building records. Owned the whole frontend estate — 14 repositories, ~72,000 lines of Vue/JS, delivered as a set of applications plus 7 in-house npm packages shared between them.

• **Admin dashboard** (~42k LOC): network footprint and building management, customers and services, SLAs, partners, ticketing, installation scheduling, document storage, role/permission settings and an analytics section (MRR, churn, ARPU, connection pipeline, per-building and per-partner reports).

• **Partner (RSP) cabinet**: address serviceability check, customer and service lifecycle (assign, suspend, resume, cancel), tickets, installation slot booking, statistics and white-labelled company profile.

• **Entry & registration app**: partner onboarding with ABN/email/phone validation, auth, password recovery, public build-cost calculator.

• **Architected a Web Worker data layer** used across all apps: a route/action message controller, credentials kept encrypted rather than in plain localStorage (crypto-js), all API traffic and a versioned IndexedDB cache (10 object stores with secondary indexes, migration-aware upgrades, MessageChannel ports). This kept a heavy admin UI responsive and offline-tolerant on datasets of thousands of buildings and customers.

• **Moved the reporting the shareholders read to the client**: monthly revenue, churn and connection reports are computed in the worker over IndexedDB cursors and indexes instead of on the server, then rendered with Google Charts — removing a whole class of slow report endpoints.

• **Geospatial features on Google Maps API + Geoscape (AU address database)**: rendering of serviceability polygons and building markers by status (lit / footprint / under construction / coming soon), point-in-polygon address lookup against whichever coordinates came back, a fallback flow for addresses Google fails to geocode, and in-map editors for polygons and pits. The address search sat behind its own worker boundary — self-contained, which is what let it ship as a published package and run on sites DGtek did not control.

• **Build-cost calculator** estimating fibre haul cost from a building to the nearest pit (tunnels, Telstra/NBN ducts, open trench, underboring, pit types, reinstatement, traffic management) and exporting a client-ready PDF quote.

• **Bulk data tooling**: customer import from spreadsheets with a validation pipeline separating fatal errors, errors and warnings; exports to Excel, CSV and KML; editable inline engineering table (PPPoE credentials, IP, VLANs, subnets).

• **Packaged reusable functionality as published npm libraries** (map/worker package, cost calculator, polygons editor, pits editor, two address-autocomplete components, date utilities), consumed by three separate applications and wired into their CI build scripts.

• **Shipped the coverage-check packages to DGtek's reseller ISPs**, which turned a component into a distribution channel: a reseller's own site draws DGtek's live coverage polygons, resolves a visitor's address against them, then reads that zone's settings back from DGtek's admin to quote a realistic connection time — two days or two weeks by zone — before handing the visitor to a connection request. Coverage is edited in one place; the portal, the corporate site, every landing page and third-party reseller sites all follow from it.

• Also built companion clients: a PWA connection-status checker, a public address-check landing page, and mobile app prototypes (Ionic/Capacitor and NativeScript).

**Technology stack**: Vue 2, Vuetify 2, Vuex, Vue Router, Web Workers, IndexedDB, Service Workers/PWA, Webpack, Google Maps API, Geoscape API, crypto-js, xlsx / json2csv / tokml, PDF generation, npm package publishing. Mobile prototypes on Vue 3 + Ionic + Capacitor.

---

### **Frontend Developer**  
**Pineapple** | <!--p:role.pineapple.en-->2019–2022<!--/p-->  

*Remote*

Frontend across Pineapple's web products: a headless CMS was the largest of them, alongside the corporate site and a series of campaign landing pages — all sharing the DGtek coverage-check packages, so a visitor could test an address and start a connection request from any of them.

**Public site — Nuxt 2, statically generated**

- `target: 'static'` with SSR output: pages ship as HTML and hydrate on demand, deployed straight to a CDN branch
- Composed from **10 npm packages I published** (nav bar, internet plans, FAQ, testimonials, contact form, popup, footer, system bar, how-to-connect, shared styles), each versioned and released independently
- Selective hydration via `vue-lazy-hydration` (`when-visible`): below-the-fold sections cost nothing until the visitor reaches them
- Navigation and page content resolved at runtime from the CMS endpoint, so marketing edits pages without a deploy
- Repo: https://github.com/garevna/nuxt-app

**Technology stack:** Nuxt 2, Vue 2, Vuetify 2, Vuex, vue-lazy-hydration, PWA

---

**CMS for Dynamic Landing Page Generation**

Built a complete CMS enabling dynamic landing page creation, content management, and survey form generation with customizable field types.

*Architecture:*
- Backend uses file system storage
- Each landing page stored as JSON
- REST API for lifecycle management

---
