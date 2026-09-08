# Irina H. Fylyppova
**Senior Frontend Developer**

📧 [irina.h.fylyppova@gmail.com](mailto:irina.h.fylyppova@gmail.com)  
🔗 [GitHub](https://github.com/garevna) | [LinkedIn](https://www.linkedin.com/in/garevna/)  
🌍 Kharkiv, Ukraine | Remote Only

---

## Professional Summary

Senior Frontend Developer with 8+ years of experience building high-performance web applications and managing complex data systems. Specialized in architecting scalable solutions, optimizing performance, real-time synchronization, and leading technical design decisions. Proven track record of delivering complex multi-featured systems serving 100k+ records and managing cross-functional teams.

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
**ITNET** (Lviv, Ukraine) | Feb 2025–Present  

#### Project Portfolio

**1. Admin Dashboard — Корпоративна админ-платформа**

SPA-приложение для управления пользователями, ролями, подразделениями и транспортной инфраструктурой. Реализованы JWT-аутентификация, ролевая модель доступа (RBAC), CRUD-операции, поиск и фильтрация данных, редактирование автобусов, географические модули на базе MapLibre, локализация интерфейса и интеграция с REST API.

**Стек:** Vue 3, TypeScript, Pinia, Vue Router, Vuetify 3, Axios, MapLibre GL, Vue i18n, Vite, Vitest, Cypress

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

**Стек:** Vue 3 (Composition API), TypeScript, Vuetify 3, Pinia, Firebase Auth, WebSocket, REST API, MapLibre GL, Vue i18n

---

**3. BUSPORTAL — многоязычный промо-сайт SaaS-платформы**

Маркетинговый сайт CRM-платформы для автобусных и логистических компаний: витрина возможностей, тарифы, FAQ, блог и воронка сбора лидов. Сайт полностью статически пререндерится, работает на четырёх языках (uk/en/de/ru) и обслуживает украинский, европейский и международный рынки.

*Техническое решение:*
- **Статическая генерация с гидратацией** через vite-ssg: все маршруты пререндерятся в HTML, состояние Pinia сериализуется в разметку
- **Четыре локали, 20+ маршрутов** с раздельными URL, синхронизацией локали с маршрутом на пререндере и в рантайме
- **SEO-слой** как отдельный composable: title/description/keywords, canonical, hreflang, Open Graph, Twitter Card, sitemap.xml с автогенерацией
- **Лидогенерация и аналитика:** формы демо-запроса, запроса цены, обратного звонка; отправка на API и events в GA4/Google Ads
- **Интерактивный интерфейс:** sticky-скролл с синхронизированными изображениями, кастомные слайдеры, адаптивные карточки с hover-состояниями
- **Контент на self-hosted Directus:** пререндер блог-постов с реальными датами публикации и кросс-локальными alternate-ссылками

**Стек:** Vue 3 (Composition API), TypeScript, Vite 7, vite-ssg, Vuetify 3, Pinia, vue-i18n, vue-router, @unhead/vue, Directus 11, GA4, ESLint + Prettier

---

**4. IS PORTAL — платформа автоматизации телекоммуникационного бизнеса**

Адаптивный многостраничный лендинг для B2B-платформы управления подключениями, монтажными бригадами, заявками, складами и закупками.

*Реализовано:*
- Адаптивная версия для desktop и mobile с отдельными UX-паттернами
- Локализация интерфейса; интерактивное меню и плавная навигация по секциям
- Тарифный модуль с переключением месячной и годовой подписки
- Формы заявок, обратного звонка и консультации с валидацией
- FAQ-блок, всплывающие окна, карусели на Swiper
- Компонентная архитектура на Vue 3

**Стек:** Vue 3, TypeScript, Vite, Pinia, Vue i18n, Vuetify, Swiper, Vitest

---

**5. IT NET — корпоративный сайт IT-компании**

Адаптивный мультиязычный лендинг (uk/en/de) презентующий компанию, её CRM-продукты и услуги. Реализованы интерактивные карточки, отдельные desktop/mobile-сценарии навигации, формы обратной связи и pop-up-сценарии.

*Зона ответственности:*
- Разработка пользовательского интерфейса, адаптивной вёрстки и интерактивности
- Интеграция клиентской логики и компонентов Vuetify
- (Docker и CI/CD были настроены другими участниками команды)

**Стек:** Vue 3, TypeScript, Vite, Vuetify, Pinia, Vue i18n, Swiper, Vitest

---

**6. Site Constructor — мультибрендовая (white-label) frontend-платформа**

Разработала клиентскую часть платформы онлайн-продажи автобусных билетов, где единая кодовая база обслуживает несколько независимых брендов одновременно. Тема оформления определяется во время выполнения приложения; динамически подгружаются UI-компоненты, цветовая схема, локализация и контент конкретного бренда — без пересборки проекта.

*Реализованный путь бронирования:*
- Поиск маршрутов (включая по геолокации) с картой MapLibre GL
- Сравнение вариантов рейсов; интерактивная схема выбора мест в автобусе
- Оформление данных пассажиров, добавление багажа, выбор услуг
- Оплата и получение электронного билета; личный кабинет с историей бронирований

*Архитектурный подход:*
- Vue 3 (Composition API) + TypeScript с Vuetify 3 как компонентной библиотекой
- Pinia: состояние разбито на предметные stores (поиск, бронирование, пассажиры, расчёты, авторизация)
- vue-i18n с отдельными наборами словарей для каждого бренда
- Контент (динамические страницы, меню, цвета, популярные направления) вынесен в JSON-конфигурацию
- Runtime-выбор темы через defineAsyncComponent с динамическим импортом
- Адаптивная вёрстка с отдельными мобильными UX-паттернами

**Стек:** Vue 3 (Composition API, `<script setup>`), TypeScript, Vuetify 3, Pinia, vue-i18n, MapLibre GL, Firebase Auth, REST API

---

**7. VD Express Platform — модульная frontend-платформа (Active Development)**

Платформа онлайн-бронирования международных автобусных перевозок спроектирована как переиспользуемое ядро, обслуживающее несколько независимых перевозчиков через белый лейбл. Весь путь бронирования вынесен в переиспользуемое ядро как Vue-плагин.

*Архитектура:*
- **Монорепозиторий** на pnpm workspaces, разрезанный по ответственности:
  - `wizard-core` — ядро бронирования (Pinia-сторы, доменные сервисы, роуты)
  - `app-types` — единый доменный контракт (модели рейсов, сегментов, автобусов, мест)
  - `app-services` — API-слой (поиск, бронирование, резервации, расчёты)
  - `shared-ui` — библиотека компонентов (поля с масками, валидация телефонов)
  - `event-manager` — типизированная событийная шина приложения

- **Инверсия зависимостей:** ядро не импортирует сторы приложения; вместо этого хост регистрирует их через `registerStoresFor*()`, обеспечивая полную переиспользуемость

- **Конфигурируемый флоу:** `WizardStep` с предикатами `isEnabled/canEnter/canLeave` и `WizardFlowConfig` позволяют описывать порядок шагов декларативно

*Функциональность:*
- Поиск рейсов туда-обратно с построением маршрутов через пересадки
- Интерактивная схема салона с реальной планировкой, типами мест, автоподбором для групп
- Real-time синхронизация занятости через WebSocket с автоматическим переподключением и ping-контролем
- Пассажиры с типами и скидками, пошаговый пересчёт стоимости в нескольких валютах
- Полный жизненный цикл: бронь → оплата → PDF-билеты → email → отмена/возврат
- Личный кабинет с историей, программой лояльности и промо
- Трансферы от двери до двери: геолокация, зоны на MapLibre, расчёт стоимости
- Три языка (uk/en/de) с локализованными форматами

**Стек:** Vue 3 (Composition API), TypeScript, Vite, Vuetify 3, Pinia + persisted state, Vue Router, vue-i18n, MapLibre GL, Firebase Auth, WebSocket, Axios, libphonenumber-js, pnpm workspaces

**Статус:** Полностью реализованы доменное ядро, API-слой, UI-библиотека и основной сценарий бронирования. На следующем этапе — декларативная конфигурация флоу и подключение второго клиента-перевозчика.

---

**8. Visual Content Editor — визуальный редактор для управления контентом**

Интерактивный визуальный редактор для создания и редактирования контента сайтов в реальном времени. Позволяет пользователям изменять текст, изображения, стили и структуру страниц без доступа к коду.

*Функциональность:*
- Drag-and-drop редактирование компонентов на странице
- WYSIWYG-редактор с предпросмотром в реальном времени
- Управление стилями (цвета, шрифты, размеры) через интуитивный интерфейс
- Сохранение и управление версиями контента
- Синхронизация изменений между редактором и live-версией сайта
- Поддержка многоязычного контента

*Архитектура:*
- Vue 3 (Composition API) для реактивного обновления интерфейса
- Pinia для управления состоянием редактора и истории изменений
- Реал-тайм синхронизация через WebSocket
- Интеграция с CMS-бэкендом для сохранения данных

**Стек:** Vue 3, TypeScript, Vuetify 3, Pinia, WebSocket, REST API, Vite

---

---

### **Senior Frontend Developer**  
**DGtek Fibre Network** (Australia) | Sep 2019–Sep 2023  
*Remote*

**Multi-functional Portal for DGtek and Resellers**

Developed a comprehensive portal serving different user roles: resellers, supervisors, managers, installation technicians, and administrators. Database: 100k+ records.

*Functionality by Role:*
- **Resellers:** submit connection/disconnection requests, real-time status tracking, service cost calculation, subscriber information management
- **Supervisors:** role management, access control configuration, portal settings
- **Map Administrators:** polygon editing for coverage zones with live map updates
- **Connection Scheduling:** auto-generated schedules based on reseller requests and crew availability

*Custom Packages Developed:*
- **Polygon editor** for coverage zone editing with token-protected access
- **Coverage lookup** with Australian Geoscape API and Google Maps integration
- **Shareholder reports** with animated charts and real-time data visualizations
- **Reseller management** with full lifecycle management

*Project Details:*
- 100k+ database records with advanced indexing
- ~1 year development cycle
- Close collaboration with backend developer and C-level executives

**Стек:** Vue 2, TypeScript, Vuetify, Vuex, WebSocket, Google Maps, Geoscape API, REST API

---

### **Frontend Developer**  
**Pineapple** | 2019–2022  
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
- 3+ years mentoring junior developers
- Onboarding students to commercial projects
- Direct stakeholder communication with C-level executives
- Technical documentation and code reviews

---

## Education

**Kharkiv National University named after V.N. Karazin**  
Higher Education

---

## Portfolio

- 📚 **JS Lessons:** https://garevna.github.io/js-lessons/
- 🧠 **JS Quiz:** https://garevna.github.io/js-quiz/
- 🎨 **JS Philosophy Memes:** https://github.com/garevna/cv-resume/tree/main/media/js-memes
- 🔗 **GitHub:** https://github.com/garevna
- 💼 **LinkedIn:** https://www.linkedin.com/in/garevna/

---

## Languages

- 🇺🇦 Ukrainian (Native)
- 🇷🇺 Russian (Fluent)
- 🇬🇧 English (Upper-Intermediate)

---

## Work Preferences

- ✅ Remote only
- 💰 Salary expectation: $2,000+/month
- 📍 Timezone: UTC+2 (Kyiv)
- 🔄 Open to long-term engagements, complex projects, and architectural challenges
