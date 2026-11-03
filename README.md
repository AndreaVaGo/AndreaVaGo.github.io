<div align="center">

# 🚇 Andrea Vallina González · Portfolio

**My journey from customer service to Full Stack Developer, told as a metro line.**

[![Live site](https://img.shields.io/badge/Live_site-andreavago.github.io-D6187E?style=for-the-badge&logo=githubpages&logoColor=white)](https://andreavago.github.io)
[![Deploy](https://img.shields.io/github/actions/workflow/status/AndreaVaGo/AndreaVaGo.github.io/deploy.yml?branch=main&style=for-the-badge&label=Deploy)](https://github.com/AndreaVaGo/AndreaVaGo.github.io/actions)
![Tests](https://img.shields.io/badge/Tests-37_passing-3DDC97?style=for-the-badge)

![Vue](https://img.shields.io/badge/Vue_3-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=flat-square&logo=pinia&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

</div>

---

## 📖 Table of contents

- [About the project](#-about-the-project)
- [Features](#-features)
- [Sections](#-sections)
- [Tech stack](#-tech-stack)
- [Project structure](#-project-structure)
- [How the animations work](#-how-the-animations-work)
- [Languages (ES / EN)](#-languages-es--en)
- [Testing](#-testing)
- [Getting started](#-getting-started)
- [Deployment (CI/CD)](#-deployment-cicd)
- [Git workflow](#-git-workflow)
- [Accessibility](#-accessibility)
- [Author](#-author)

---

## 🚉 About the project

This is my personal portfolio. I wanted something **original**, not a generic template, that tells **my own story**:

> I spent 12 years working with customers, then studied Web Application Development (DAW) and completed the Full Stack bootcamp at **Factoría F5 Asturias**.

So I designed the website as a **metro line** 🚇: every station is something I learned, and every project is a stop on the way. My "About me" is a **one-way metro ticket**: origin _Customer service_, destination _Full Stack Developer_.

I built it from scratch with the tools I learned in the bootcamp, keeping the code simple and readable, and I can explain every line of it. 💜

---

## ✨ Features

- 🌍 **Bilingual**: Spanish and English, switched with a Pinia store
- 📱 **Responsive**: desktop, tablet and mobile (the metro map turns vertical on phones)
- 🎬 **CSS animations**: a train riding the track, a ticket being validated, metro lines drawing themselves
- 👀 **Scroll-triggered animations** with my own `useInView` composable (IntersectionObserver)
- ♿ **Accessible**: semantic HTML, heading hierarchy, `aria` labels, visible focus and `prefers-reduced-motion`
- 🧪 **37 tests**: unit tests with Vitest and end-to-end tests with Playwright in 3 browsers
- 🚀 **Automatic deployment** to GitHub Pages with GitHub Actions
- 🗂️ **Data-driven**: texts, metro lines and projects live in JSON files, components just render them

---

## 🗺️ Sections

| Section           | What it shows                                  | Highlights                                                          |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------- |
| 🚉 **Hero**       | Station sign with my name and role             | Animated train that turns around at the end of the track            |
| 🎫 **About me**   | My story as a metro ticket                     | The ticket slides into the machine and gets a "VALIDATED" ink stamp |
| 🗺️ **My journey** | Bootcamp map: Frontend, Data and Backend lines | Lines draw themselves and stations pop in, one after another        |
| 🃏 **Projects**   | Featured projects as cards                     | Line color, badges, tech stack, screenshots and links               |
| 📬 **Contact**    | "Next station → Your company."                 | Footer with the number of tests the portfolio passes                |

---

## 🛠️ Tech stack

| Technology                        | What I used it for                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Vue 3** (`<script setup>`)      | Components, props, `v-for`, `v-if`, template refs                                                      |
| **Pinia**                         | Language store: state (`lang`), getter (`texts`) and action (`setLanguage`)                            |
| **Vite**                          | Dev server and build                                                                                   |
| **CSS**                           | Custom properties (design tokens), Flexbox, Grid, `@keyframes`, transitions, media queries, BEM naming |
| **Vitest + Vue Test Utils**       | Unit tests for the store and components                                                                |
| **Playwright**                    | End-to-end tests in Chromium, Firefox and WebKit                                                       |
| **GitHub Actions + GitHub Pages** | Build and deploy on every push to `main`                                                               |

No UI libraries and no animation libraries: everything is plain Vue and CSS.

---

## 📁 Project structure

```
├── .github/workflows/
│   └── deploy.yml            # CI/CD: build and deploy to GitHub Pages
├── e2e/
│   └── vue.spec.js           # Playwright end-to-end tests
├── public/
│   ├── favicon.svg           # Metro "M" sign
│   └── images/projects/      # Project screenshots
├── src/
│   ├── assets/
│   │   └── main.css          # Design tokens and base styles
│   ├── components/
│   │   ├── TheHeader.vue
│   │   ├── LanguageSwitch.vue
│   │   ├── HeroSection.vue
│   │   ├── MetroTrack.vue
│   │   ├── AboutSection.vue
│   │   ├── MetroTicket.vue
│   │   ├── JourneySection.vue
│   │   ├── MetroLine.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ProjectCard.vue
│   │   ├── ContactSection.vue
│   │   └── __tests__/        # Component unit tests
│   ├── composables/
│   │   └── useInView.js      # Tells when an element is on screen
│   ├── locales/
│   │   ├── es.json           # Spanish texts and data
│   │   └── en.json           # English texts and data
│   ├── stores/
│   │   ├── language.js       # Pinia language store
│   │   └── __tests__/
│   ├── App.vue               # Puts all the sections in order
│   └── main.js               # App entry point
└── index.html
```

---

## 🎬 How the animations work

All animations are made with **CSS** (`@keyframes` and `transition`). JavaScript only decides **when** they start.

### 🚃 The train (`MetroTrack.vue`)

A `@keyframes` animation moves the train with `left` from one end of the track to the other. At 50% it flips with `transform: scaleX(-1)`, so it always faces the direction it is going. `ease-in-out` makes it start and stop smoothly, like a real train.

### 👀 Starting animations on scroll (`useInView.js`)

If an animation starts when the page loads, nobody sees the ones further down. So I made a **composable** that uses the browser's `IntersectionObserver`:

```js
const { target, isVisible } = useInView({ threshold: 0.2 })
```

1. `target` is linked to an element with `ref="target"`
2. When that element is on screen, `isVisible` becomes `true`
3. The observer disconnects, so the animation only runs once
4. If the browser has no `IntersectionObserver` (for example, in tests), the content is shown straight away

### 🎫 The ticket (`MetroTicket.vue`)

`AboutSection` passes `isVisible` to the ticket as a prop (`:inserted="isVisible"`). When it becomes `true`, the class `ticket--inserted` starts two animations: the ticket **slides into the machine** and, a moment later, the stamp **hits the paper** (it starts big with `scale(1.6)`, goes a bit too small and bounces back). The stamp uses `mix-blend-mode: multiply`, so the text underneath can still be read, like real ink.

### 🗺️ The metro map (`MetroLine.vue`)

Each line gets its color and delay through **CSS custom properties** set from Vue:

```vue
:style="{ '--line-color': `var(--line-${line.id})`, '--line-delay': `${lineIndex * 0.6}s` }"
```

The track grows with `scaleX(0 → 1)` (or `scaleY` on mobile) and each station pops in with its own `--station-delay`. Adding both delays with `calc()` makes the whole map draw itself in order.

### ♿ Reduced motion

If the user has _reduce motion_ turned on in their system, a `prefers-reduced-motion` media query in `main.css` turns the animations off.

---

## 🌍 Languages (ES / EN)

All the texts are in `src/locales/es.json` and `src/locales/en.json`, with exactly the same keys. The Pinia store returns the texts of the selected language:

```js
const lang = ref('es')
const texts = computed(() => messages[lang.value])
```

When the language changes, `setLanguage` also updates `<html lang="…">`, so screen readers pronounce the page correctly. The metro lines and projects are **arrays in the JSON**, so adding a new station or project doesn't need any code changes.

---

## 🧪 Testing

| Type       | Tool       | Tests | What they check                                                      |
| ---------- | ---------- | :---: | -------------------------------------------------------------------- |
| Unit       | Vitest     |  19   | Language store, `App`, `MetroTicket`, `MetroLine`, `ProjectCard`     |
| End-to-end | Playwright |  18   | Navigation, language switch, sections in view (6 tests × 3 browsers) |

- The language store was built with **TDD**: test first 🔴, then code 🟢
- Component tests use small **fixtures** (fake data), so they don't break when the real content changes
- E2E tests find elements **by role** (`getByRole`), the same way a person or a screen reader would

---

## 🚀 Getting started

**Requirements:** Node.js 22 or newer

```bash
# Clone the repository
git clone https://github.com/AndreaVaGo/AndreaVaGo.github.io.git
cd AndreaVaGo.github.io

# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev
```

| Command                  | What it does                                                |
| ------------------------ | ----------------------------------------------------------- |
| `npm run dev`            | Starts the development server                               |
| `npm run build`          | Builds the site for production into `dist/`                 |
| `npm run preview`        | Serves the production build locally                         |
| `npm run test:unit`      | Runs the unit tests with Vitest                             |
| `npx playwright install` | Downloads the browsers for Playwright (only the first time) |
| `npm run test:e2e`       | Runs the end-to-end tests with Playwright                   |
| `npm run lint`           | Checks the code style                                       |

---

## ⚙️ Deployment (CI/CD)

The site is deployed automatically with **GitHub Actions** (`.github/workflows/deploy.yml`):

```
push to main → install dependencies → build → upload dist/ → deploy to GitHub Pages
```

Every change merged into `main` is live at **[andreavago.github.io](https://andreavago.github.io)** in about a minute.

---

## 🌿 Git workflow

I worked with **Gitflow** and **Conventional Commits**:

- `main` → what is published
- `dev` → integration branch
- `feat/…`, `fix/…`, `docs/…` → one branch per task, merged into `dev` with a Pull Request, then `dev` into `main`
- Small commits, one change per commit: `feat:`, `fix:`, `style:`, `refactor:`, `test:`, `perf:`, `chore:`, `docs:`

---

## ♿ Accessibility

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `dl`, `ol`
- One `h1` and a clear `h2` → `h3` hierarchy
- `aria-label` and `aria-labelledby` for sections, navigation and the ticket
- `aria-hidden` on decorative elements (track, train, machine)
- `aria-pressed` on the language buttons
- Translated `alt` text on every screenshot
- Visible focus for keyboard users (`:focus-visible`)
- Animations off with `prefers-reduced-motion`

---

## 👩‍💻 Author

**Andrea Vallina González** · Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andrea-vallina-gonzalez/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AndreaVaGo)
[![Portfolio](https://img.shields.io/badge/Portfolio-D6187E?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://andreavago.github.io)

<div align="center">

_Next station: your company._ 🚇💜

</div>
