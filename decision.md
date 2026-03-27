# decision-log.md

## D1 — Project Choice

AI Tools Directory dipilih karena memungkinkan demonstrasi:

* SEO (metadata + JSON-LD)
* Static rendering
* Performance optimization

## D2 — Static Data over Backend

Menggunakan local data untuk:

* menghindari scope creep
* fokus ke frontend quality
* menjaga performance

## D3 — Minimalist Technical Design

Dipilih karena:

* meningkatkan readability
* lebih cepat (less visual overhead)
* cocok untuk developer audience

## D4 — Component-Based Architecture

UI dari Stitch tidak digunakan langsung.
Dipecah menjadi reusable components untuk:

* maintainability
* scalability
* clarity saat review

## D5 — Server Components First

Menghindari client components untuk:

* mengurangi JS bundle
* meningkatkan performance

## D6 — SEO as First-Class Feature

SEO tidak ditambahkan di akhir, tapi:

* dirancang sejak awal
* tiap page punya metadata & structured data

## D7 — Performance Optimization Phase

Project dioptimalkan menggunakan next/image dan server-first rendering untuk menjaga Lighthouse score tinggi tanpa menambah kompleksitas client-side.

## D8 — Analytics as Optional Enhancement

Analytics ditambahkan sebagai optional layer untuk menunjukkan awareness terhadap data tracking tanpa mengorbankan performance.

## D9 — Controlled Client Interactivity

Client-side logic hanya digunakan pada search input berbasis URL params untuk menjaga arsitektur tetap server-first.

## D10 — Portfolio-Oriented Design

Project dipoles bukan untuk fitur tambahan, tetapi untuk memperjelas kualitas engineering, SEO implementation, dan performance awareness.
