<div align="center">

<img src="https://res.cloudinary.com/do18ebswp/image/upload/damokles_hxg0rv.webp" width="80" height="80" alt="Damokles logo" style="border-radius: 50%" />

# damokles — portfolio

**Fullstack JavaScript Developer · Freelance · Île-de-France**

[![Live](https://img.shields.io/badge/Live-damokles.vercel.app-bc13fe?style=flat-square&logo=vercel&logoColor=white)](https://damokles.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Biome](https://img.shields.io/badge/Biome-2.4-60A5FA?style=flat-square&logo=biome&logoColor=white)](https://biomejs.dev/)

</div>

---

## Overview

Personal portfolio built from scratch — no template, no shortcuts. Designed to reflect how I actually work: clean architecture, performance-first, accessibility-aware, and production-ready from day one.

This is not a boilerplate. Every decision in this codebase has a reason.

**→ [damokles.vercel.app](https://damokles.vercel.app)**

---

## Tech choices — and why

| Layer | Choice | Why |
|---|---|---|
| Framework | React 19 | Concurrent features, stable ecosystem |
| Language | TypeScript 6 strict | No `any`, typed JSON data, compile-time safety |
| Build | Vite 8 + SWC | Sub-100ms HMR, rolldown bundler |
| Styling | Tailwind CSS v4 | CSS-first config, `@theme` tokens, zero-purge |
| UI | HeroUI v3 | Accessible components built on React Aria |
| Linter | Biome 2.4 | Replaces ESLint + Prettier in a single binary |
| Runtime | Bun | Faster installs, native TypeScript execution |
| Dead code | Knip | Detects unused exports, dependencies, files |
| Deploy | Vercel | Edge network, instant previews |

---

## Architecture

```
src/
├── assets/
│   └── data/              # JSON data sources (work, stack, education…)
├── components/
│   ├── carousel.tsx        # Embla carousel with auto-scroll + pause control
│   ├── footer.tsx
│   ├── header.tsx          # Sticky nav with keyboard-accessible mobile menu
│   └── tech-icon.tsx       # Lazy-loaded icon with fallback SVG
├── config/
│   ├── cloudinary.ts       # Cloudinary URL builder with transform params
│   └── links.ts            # Single source of truth for all external URLs
├── hooks/
│   └── use-section-observer.ts  # IntersectionObserver hook for scroll animations
├── pages/
│   ├── about.tsx
│   ├── career.tsx
│   ├── certifications.tsx
│   ├── home.tsx
│   ├── socials.tsx
│   └── stack.tsx
├── types/
│   └── index.ts            # Typed interfaces for all JSON data
├── main.tsx                # React.lazy() code splitting on below-the-fold pages
└── styles.css              # @theme tokens + global :focus-visible
```

---

## Key technical decisions

**Code splitting** — `Home` and `About` load immediately. `Career`, `Stack`, `Certifications`, `Socials` and `Footer` are lazy-loaded via `React.lazy()` + `Suspense`, reducing initial bundle size.

**Image optimization** — profile photo uses `fetchpriority="high"` + `loading="eager"` for LCP. All stack icons and carousel tools use `loading="lazy"` + `onError` fallback via the centralized `TechIcon` component. Cloudinary URLs include `q_auto,f_auto` transforms.

**Accessibility** — semantic HTML throughout (`<main>`, `<section>`, `<footer>`, `aria-labelledby`). Mobile menu implements full keyboard management: `Escape` closes, focus moves to first link on open, returns to trigger on close. Global `:focus-visible` ring using brand color.

**Type safety** — all JSON data is typed via interfaces in `src/types/index.ts`. No `any`, no implicit types. TypeScript strict mode enabled with `noUnusedLocals`, `noUnusedParameters`, `noUncheckedSideEffectImports`.

**Linting** — Biome replaces ESLint + Prettier. Config enforces kebab-case/PascalCase filenames, `useReactFunctionComponents` (PascalCase exports), no barrel files, no namespace imports.

**SEO** — full meta stack: `title`, `description`, `canonical`, Open Graph, Twitter Card, Schema.org `Person` structured data, `robots.txt`, `sitemap.xml`, Google Search Console verified.

---

## Getting started

```bash
# Clone
git clone https://github.com/Damokless/portfolio.git
cd portfolio

# Install (Bun recommended)
bun install

# Dev server
bun dev

# Lint
bun lint

# Find dead code
bun knip

# Production build
bun run build
```

> Node.js 20+ also works — replace `bun` with `npm` or `pnpm`.

---

## Performance targets

| Metric | Target | Approach |
|---|---|---|
| LCP | < 2.5s | `fetchpriority="high"` on hero image, Cloudinary CDN |
| FID / INP | < 100ms | No heavy JS on first load, lazy below-the-fold |
| CLS | 0 | Fixed `width`/`height` on all images |
| Bundle | Minimized | Code splitting, no barrel files, tree-shakeable imports |

---

## Contact

- **Email** — [bouzon.alexandre@gmail.com](mailto:bouzon.alexandre@gmail.com)
- **LinkedIn** — [alexandre-bouzon](https://www.linkedin.com/in/alexandre-bouzon/)
- **Portfolio** — [damokles.vercel.app](https://damokles.vercel.app)
- **Book a call** — [cal.com/damokles](https://cal.com/damokles/rdvvisio)

---

<div align="center">

Built with React, TypeScript and too much coffee ☕.

</div>
