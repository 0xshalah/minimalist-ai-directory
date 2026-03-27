# Minimalist AI Directory

**🔴 Live Demo:** https://minimalist-ai-directory.vercel.app

**📂 Repository:** https://github.com/0xshalah/minimalist-ai-directory

Sebuah direktori AI tools yang clean dan cepat, dibangun dengan Next.js untuk menunjukkan implementasi nyata dari SEO, performance optimization, dan arsitektur frontend modern.

---

## 🎯 Tujuan Proyek

Proyek ini dibuat untuk menunjukkan kemampuan frontend engineering di luar sekadar UI, dengan fokus pada:

- SEO (metadata dinamis & JSON-LD)
- Static-first rendering
- Optimasi performa (Core Web Vitals)
- Arsitektur komponen yang rapi dan scalable

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS & shadcn/ui
- **Language:** TypeScript
- **Analytics:** GA4, GTM, Microsoft Clarity

---

## 🏗️ Arsitektur & Pendekatan

### 1. Static & Server-First

Aplikasi ini menggunakan pendekatan **server-first** dengan static rendering.

Client component hanya digunakan secara minimal (misalnya untuk input search), sehingga:
- JavaScript di browser tetap ringan
- performa tetap optimal
- halaman cepat di-load

---

### 2. Layered Architecture

Struktur proyek dibagi menjadi beberapa layer:

- **Data Layer (`src/data/tools.ts`)**
  Menyediakan data tools dalam format terstruktur (mock CMS)

- **Server Components**
  Semua UI utama dirender di server

- **Routing**
  - `/` → homepage
  - `/tools/[slug]` → detail tool
  - `/category/[slug]` → halaman kategori

- **SEO Layer (`src/lib/seo.ts`)**
  Mengatur metadata dan JSON-LD secara dinamis untuk setiap halaman

---

### 3. Search Berbasis URL

Fitur search menggunakan query parameter:

```
/?q=chatgpt
```

Pendekatan ini dipilih karena:
- bisa di-share (shareable URL)
- tetap SSR-friendly
- mudah di-cache

---

### 4. Performance Optimization

- Menggunakan `next/image` untuk optimasi gambar
- Meminimalkan penggunaan client-side JavaScript
- Menggunakan resource hints untuk mempercepat loading

---

## 🔍 SEO Implementation

### Metadata
- Title & description dinamis per halaman
- Open Graph & Twitter Card
- Canonical URL

### JSON-LD
- **Homepage:** WebSite, ItemList
- **Detail Page:** SoftwareApplication, BreadcrumbList
- **Category Page:** CollectionPage, BreadcrumbList

---

## ⚙️ Technical SEO

- `sitemap.ts` → generate sitemap otomatis
- `robots.ts` → konfigurasi crawler
- URL clean & SEO-friendly

---

## 📊 Analytics

Struktur sudah siap untuk:
- Google Analytics (GA4)
- Google Tag Manager (GTM)
- Microsoft Clarity

Semua di-load secara non-blocking agar tidak mengganggu performa.

---

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

NEXT_PUBLIC_GA_ID=G-XXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXX
```

---

## 📈 Future Improvements

- Integrasi Headless CMS + ISR
- Submit tool (Server Actions + Zod)
- Advanced filtering berbasis URL
- MDX untuk konten detail
- Auth & fitur bookmark tools

---

## 📊 Lighthouse

Aplikasi ini dirancang untuk mencapai skor tinggi pada:

- Performance
- SEO
- Accessibility

Silakan jalankan audit Lighthouse pada:
- Homepage
- Tool detail page
- Category page

untuk melihat hasil performa secara langsung.

---

## 🧠 Insight

Proyek ini tidak fokus pada kompleksitas fitur, tetapi pada:

- kejelasan arsitektur
- performa
- SEO
- maintainability
