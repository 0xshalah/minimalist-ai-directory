# Minimalist AI Directory

**[🔴 Live Demo](https://minimalist-ai-directory.vercel.app)** | **[📂 GitHub Repository](https://github.com/yourusername/minimalist-ai-directory)**

![UI Preview Cover Image Placeholder - Replace with actual screenshot of Web UI](/public/ui-preview.jpg)

A clean and fast AI tools directory built with Next.js.

This project focuses on:
- SEO best practices (metadata, JSON-LD)
- Static-first rendering
- Performance optimization
- Clear and maintainable component architecture

---

## Why This Project?

This project was built to demonstrate practical frontend engineering skills beyond UI development.

The focus is on:
- building SEO-friendly pages using Next.js App Router
- implementing structured data (JSON-LD)
- keeping the application fast with server-first rendering
- maintaining a clean and scalable component structure

## The Technical Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 & shadcn/ui
- **Data Engine:** Headless mocked TypeScript Data Layer
- **Analytics:** Google Analytics 4, Tag Manager, Microsoft Clarity (via `@next/third-parties`)

---

## Architecture Overview

The project follows a simple layered structure:

- **Data Layer (`src/data/tools.ts`):** Provides structured tool data to the application.
- **Server Components:** UI is resolved on the server to ensure fast initial page loads.
- **Routing:** Dynamic routes for tools and categories using `generateStaticParams`.
- **SEO Layer:** Programmatic metadata and JSON-LD per page for better search visibility.

This approach keeps the app fast, predictable, and easy to maintain.

### URL-Param Search State
Search filtering is handled via Native URL parameters (`/?q=keyword`) instead of client-side state. This ensures search results are shareable, SSR-compatible, and easy for search engines to crawl.

### Performance Approach
- **Image Optimization:** Uses `next/image` to optimize images and reduce layout shift (CLS).
- **Minimal JS:** Defaults to server components to minimize the client-side JavaScript bundle.
- **Resource Hints:** Uses `preconnect` hints to improve external resource loading performance.

---

## Future Improvements

- **Headless CMS integration with ISR:** Transitioning from local data to a headless CMS (Sanity/Contentful) using Incremental Static Regeneration for real-time updates.
- **User submission system using Server Actions:** Implementing a secure tool submission pipeline using Next.js Server Actions and Zod for validation.
- **Advanced filtering via URL params:** Expanding search to include multi-criteria filtering (Pricing, Model, Open Source).
- **MDX-based rich content pages:** Support for deep reviews and tutorials using MDX.
- **Authentication and saved tools:** Adding a personalization layer with Auth.js to allow users to save their preferred tools.

---

## Local Development & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GA_ID=G-XXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
   NEXT_PUBLIC_CLARITY_ID=XXXXXXX
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

4. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```

---

## Lighthouse Verification (Portfolio Benchmark)

**Target Scores:** Performance (~98-100), Accessibility (100), Best Practices (100), SEO (100).

![Lighthouse Score Placeholder - Replace with actual audit screenshot](/public/lighthouse.png)

*To verify benchmarks:*
1. Run `npm run build && npm run start` for a production-local test.
2. Audit in Chrome **Incognito** to avoid extension interference.
3. Check the Homepage, a Category page, and a Tool Detail page.
