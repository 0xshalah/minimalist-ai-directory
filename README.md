# Minimalist AI Directory

**[🔴 Live Demo](https://minimalist-ai-directory.vercel.app)** | **[📂 GitHub Repository](https://github.com/yourusername/minimalist-ai-directory)**

![UI Preview Cover Image Placeholder - Replace with actual screenshot of Web UI](/public/ui-preview.jpg)

A hyper-curated, distraction-free index of AI workflows built to demonstrate production-grade frontend engineering, technical SEO, and strict Server-First performance architecture using Next.js.

---

## Why This Project?
This project was engineered to showcase a deep understanding of modern web capabilities beyond just assembling UI components. It serves as a portfolio piece focusing heavily on **Static-First rendering**, **Technical SEO (JSON-LD, Dynamic Metadata)**, and optimizing **Core Web Vitals** without relying on bulky client-side logic.

## The Technical Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 & shadcn/ui
- **Data Engine:** Headless mocked TypeScript Data Layer
- **Analytics:** Google Analytics 4, Tag Manager, Microsoft Clarity (via `@next/third-parties`)

---

## Architecture & Engineering Decisions

### 1. Static & Server-First Priority
The application is aggressively Server-Side Rendered (SSR) / Statically Generated (SSG). Client components (`"use client"`) are heavily constrained strictly to atom-level interactions (such as the actual input field for Search) to maintain near-zero JavaScript payload sizes.

### 2. Layered Structure
- **Data Layer (`src/data/tools.ts`):** Acts as a strongly typed headless CMS mock. It abstracts data ensuring the component layers receive clean props exclusively.
- **Server Components:** UI is resolved entirely on the server, ensuring the browser's First Paint holds the complete static DOM.
- **Routing:** Deeply mapped dynamic segments (`/tools/[slug]`, `/category/[slug]`) verified ahead-of-time with `generateStaticParams()` producing rapid pure static outputs.
- **SEO/JSON-LD (`src/lib/seo.ts`):** Every dynamic page programmatically injects strict `WebSite`, `ItemList`, or `SoftwareApplication` JSON-LD payloads natively into the markup alongside dynamic OpenGraph schemas.

### 3. URL-Param Search State
Search filtering relies entirely upon Native URL parameters (`/?q=keyword`) instead of monolithic React State boundaries (like Context or Redux). This intentionally ensures search paths remain natively shareable, SSR-compatible, and easily cached by edge nodes.

### 4. Performance Guardrails
- **Image Optimization:** Deprecated native `<img>` elements globally relying strictly upon `next/image`. Combined with statically bounded dimensions and strict `remotePatterns`, it natively guarantees zero Cumulative Layout Shifts (CLS).
- **Resource Hints:** Native `<link rel="preconnect">` instructions deliberately prioritize external CDN pipelines reducing time to First Contentful Paint.

---

## Future Improvements

- **Headless CMS integration with ISR:** Transitioning from local data to a headless CMS (Sanity/Contentful) using Incremental Static Regeneration for real-time updates without full rebuilds.
- **User submission system using Server Actions:** Implementing a secure tool submission pipeline using Next.js Server Actions and Zod for schema validation.
- **Advanced filtering via URL params:** Expanding search to include multi-criteria filtering (Pricing, Model, Open Source) while preserving SEO-friendly shareable URLs.
- **MDX-based rich content pages:** Support for deep reviews and tutorials using MDX to improve content authority and user engagement.
- **Authentication and saved tools:** Adding a personalization layer with Auth.js to allow users to curate and save their preferred AI workflows.

---

## Local Development & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   Create a `.env.local` file spanning the necessary SEO routing constraints:
   ```env
   # Required for Canonical URLs / Sitemap generations
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Optional Analytics Trackers
   NEXT_PUBLIC_GA_ID=G-XXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
   NEXT_PUBLIC_CLARITY_ID=XXXXXXX
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

4. **Production Validation:**
   ```bash
   npm run build
   npm run start
   ```

---

## Lighthouse Verification (Portfolio Benchmark)

**Target Scores:** Performance (~98-100), Accessibility (100), Best Practices (100), SEO (100).

![Lighthouse Score Placeholder - Replace with actual audit screenshot](/public/lighthouse.png)

*To properly verify the benchmarks locally:*
1. Run `npm run build` followed by `npm run start` to serve production assets natively.
2. Open Chrome **Incognito** to avoid browser extension interference.
3. Individually audit the Homepage (`/`), a Category listing (`/category/video`), and a deep Tool Detail routing (`/tools/chatgpt`).
