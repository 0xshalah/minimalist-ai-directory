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
