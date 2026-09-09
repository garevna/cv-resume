# Irina H. Fylyppova
**Senior Frontend Developer**

📧 <!--p:email.md-->[irina.h.fylyppova@gmail.com](mailto:irina.h.fylyppova@gmail.com)<!--/p-->  
🔗 [GitHub](https://github.com/garevna) | [LinkedIn](https://www.linkedin.com/in/garevna/)  
🌍 <!--p:location.en-->Kharkiv, Ukraine<!--/p--> | <!--p:availability.en-->Remote only<!--/p-->

---

## Professional Summary

Senior Frontend Developer with <!--p:years-->8+<!--/p--> years of experience building high-performance web applications and managing complex data systems. Specialized in architecting scalable solutions, optimizing performance, real-time synchronization, and leading technical design decisions. Proven track record of delivering complex multi-featured systems serving <!--p:records-->100k+<!--/p--> records and managing cross-functional teams.

---

## Technical Stack

**Frontend:**  
Vue 2/3 (Composition API, `<script setup>`) • TypeScript • Vuetify 2/3 • Pinia • Vuex • Vue Router • Vue i18n • Vite • Vitest • Cypress

**Performance & Data:**  
Web Workers • IndexedDB (with advanced indexing) • REST API • WebSockets • Real-time Synchronization • Geolocation APIs (Google Maps, MapLibre GL, Geoscape)

**DevOps & Tools:**  
Git • Firebase Auth • GitLab CI • vite-ssg • Directus

**Backend (foundational):**  
Node.js • Express • File System (fs)

**Design & Testing:**  
Figma • SEO • Accessibility (a11y) • E2E Testing (Cypress) • Unit Testing (Vitest)

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
- 
*Architecture:*
- Vue 3 (Composition API) for reactive interface updates
- Pinia for managing the editor’s state and change history
- Real-time synchronisation via WebSocket
- Integration with the CMS backend for data storage

**Technology stack:** Vue 3, TypeScript, Vuetify 3, Pinia, WebSocket, REST API, Vite

---

---

### **Senior Frontend Developer**  

**DGtek Fibre Network** (Australia) | <!--p:role.dgtek.en-->Sep 2019–Sep 2023<!--/p-->  

*Remote*

[**DGtek Provisioning Portal**](https://garevna.github.io/cv-resume/dgtek_portal.html) | 2020–2023

Frontend Lead / Senior Frontend Engineer

Sole frontend engineer on a B2B OSS/provisioning platform for a fibre network operator expanding from Melbourne across Australia, serving three user groups: DGtek network admins, reseller ISPs (RSPs) and public visitors, over <!--p:records-->100k+<!--/p--> customer and building records. Owned the whole frontend estate — 14 repositories, ~72,000 lines of Vue/JS, delivered as a set of applications plus 7 in-house npm packages shared between them.

• **Admin dashboard** (~42k LOC): network footprint and building management, customers and services, SLAs, partners, ticketing, installation scheduling, document storage, role/permission settings and an analytics section (MRR, churn, ARPU, connection pipeline, per-building and per-partner reports).

• **Partner (RSP) cabinet**: address serviceability check, customer and service lifecycle (assign, suspend, resume, cancel), tickets, installation slot booking, statistics and white-labelled company profile.

• **Entry & registration app**: partner onboarding with ABN/email/phone validation, auth, password recovery, public build-cost calculator.

• **Architected a Web Worker data layer** used across all apps: a route/action message controller, credentials kept encrypted rather than in plain localStorage (crypto-js), all API traffic and a versioned IndexedDB cache (10 object stores with secondary indexes, migration-aware upgrades, MessageChannel ports). This kept a heavy admin UI responsive and offline-tolerant on datasets of thousands of buildings and customers.

• **Moved reporting to the client**: monthly revenue, churn and connection reports are computed in the worker over IndexedDB cursors and indexes instead of on the server, then rendered with Google Charts — removing a whole class of slow report endpoints.

• **Geospatial features on Google Maps API + Geoscape (AU address database)**: rendering of serviceability polygons and building markers by status (lit / footprint / under construction / coming soon), point-in-polygon address lookup, fallback flow for addresses Google fails to geocode, and in-map editors for polygons and pits.

• **Build-cost calculator** estimating fibre haul cost from a building to the nearest pit (tunnels, Telstra/NBN ducts, open trench, underboring, pit types, reinstatement, traffic management) and exporting a client-ready PDF quote.

• **Bulk data tooling**: customer import from spreadsheets with a validation pipeline separating fatal errors, errors and warnings; exports to Excel, CSV and KML; editable inline engineering table (PPPoE credentials, IP, VLANs, subnets).

• **Packaged reusable functionality as published npm libraries** (map/worker package, cost calculator, polygons editor, pits editor, two address-autocomplete components, date utilities), consumed by three separate applications and wired into their CI build scripts — a micro-frontend-style split that let each app upgrade independently.

• Also built companion clients: a PWA connection-status checker, a public address-check landing page, and mobile app prototypes (Ionic/Capacitor and NativeScript).

**Technology stack**: Vue 2, Vuetify 2, Vuex, Vue Router, Web Workers, IndexedDB, Service Workers/PWA, Webpack, Google Maps API, Geoscape API, crypto-js, xlsx / json2csv / tokml, PDF generation, npm package publishing. Mobile prototypes on Vue 3 + Ionic + Capacitor.

---

### **Frontend Developer**  
**Pineapple** | <!--p:role.pineapple.en-->2019–2022<!--/p-->  

*Remote*

**CMS for Dynamic Landing Page Generation**

Built a complete CMS enabling dynamic landing page creation, content management, and survey form generation with customizable field types.

*Architecture:*
- Backend uses file system storage
- Each landing page stored as JSON
- REST API for lifecycle management

---

## Core Competencies

### Performance & Optimization
- **Web Workers + IndexedDB:** distribute computation, handle massive datasets, advanced indexing strategies
- **Bundle optimization:** code splitting, dynamic imports, lazy loading
- **Real-time Synchronization:** WebSocket with automatic reconnection, exponential backoff, ping-control

### Architecture & Design
- Scalable architectures for complex applications (100k+ records)
- State management (Pinia, Vuex) with guaranteed data consistency
- White-label and multi-brand systems with runtime configuration
- Plugin-based architecture for code reusability
- Component-driven development with reusable UI patterns

### Real-time Systems
- WebSocket handling with robust reconnection logic
- Multi-app data sync (editor + preview + production)
- Offline-first strategies with intelligent fallback

### Accessibility & SEO
- Semantic HTML, ARIA attributes, screen reader testing
- Dynamic meta-tags for search engines and AI crawlers
- International localization and multi-locale support

### Mentoring & Communication
- <!--p:yearsMentoring-->8+<!--/p--> years mentoring junior developers
- Onboarding students to commercial projects
- Direct stakeholder communication with C-level executives
- Technical documentation and code reviews

---

## Education

**Kharkiv National University named after V.N. Karazin**  
Higher Education (Mathematician)

---

## Portfolio

- 📚 **JS Lessons:** https://garevna.github.io/js-lessons/
- 🧠 **JS Quiz:** https://garevna.github.io/js-quiz/
- 🎨 **JS Philosophy Memes:** https://github.com/garevna/cv-resume/tree/main/media/js-memes
- 🔗 **GitHub:** https://github.com/garevna
- 💼 **LinkedIn:** https://www.linkedin.com/in/garevna/

---
## [Recommendations](https://www.linkedin.com/in/garevna/details/recommendations/)
---

## Languages

- 🇺🇦 Ukrainian (Native)
- 🇷🇺 Russian (Fluent)
- 🇬🇧 English (Upper-Intermediate)

---

## Work Preferences

- ✅ <!--p:availability.en-->Remote only<!--/p-->
- 💰 Salary expectation: <!--p:salary.en-->$3,500+/month<!--/p-->
- 📍 Timezone: <!--p:timezone-->UTC+2 (Kyiv)<!--/p-->
- 🔄 Open to long-term engagements, complex projects, and architectural challenges
