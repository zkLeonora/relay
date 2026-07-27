# Relay — Integrated Business Operations Suite

Relay is a modern, high-performance web platform for an integrated suite of six business operations applications. Built with Next.js 16, React 19, Tailwind CSS v4, and a hybrid motion engine powered by Anime.js and Framer Motion.

---

## 🚀 Key Features & Highlights

- **6 Modular Product Ecosystem**:
  - **Counter**: Offline-first Point of Sale (POS) register with fast checkout and instant receipt generation.
  - **Queue**: Appointment booking and client schedule management.
  - **Stock**: Real-time inventory tracking with reorder thresholds and SKU rosters.
  - **Ledger**: Double-entry accounting, profit & loss statement, and revenue sync.
  - **People**: Shift scheduling, HR roster, and automated payroll sync.
  - **Analytics**: Cross-product business performance insights and real-time operational breakdown.

- **Monochrome & High-Contrast Editorial Aesthetic**:
  - Precision grid layouts, crisp 1px borders (`#e6e6e6`), rich whitespace, and custom typography (Geist font).
  - Anti-AI-Slop design principles: clean typography rows, split list columns, and zero generic badge clutter.

- **Hybrid Motion Engine**:
  - **Anime.js**: Powers FLIP layout transitions, height expansion, and icon rotation in the FAQ Accordion.
  - **Framer Motion**: Powers viewport scroll entrance transitions (`AnimatedSection`) and mobile menu overlays.

- **100% SEO & SSR Pre-Rendering**:
  - Static Site Generation (SSG) with `generateStaticParams` for zero-delay page loads.
  - Complete Schema.org JSON-LD structured data, dynamic XML sitemap, `robots.txt`, and OpenGraph metadata generation.
  - Smooth hash-anchor routing (`/#products`, `/#why-relay`, `/#docs`) with URL history sync.

---

## 🛠️ Tech Stack

| Technology | Description |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Anime.js](https://animejs.com/) & [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Geist Sans & Geist Mono via `next/font/google` |

---

## 📁 Project Architecture

```
relay/
├── app/
│   ├── _components/
│   │   ├── home/               # Homepage sections (Hero, ProductPreviewGrid, WhyRelay, FAQ, etc.)
│   │   ├── layout/             # Navigation & Footer components
│   │   └── ui/                 # Reusable UI primitives (Accordion, AnimatedSection)
│   ├── blog/                   # Blog listing & detail pages ([slug])
│   ├── products/               # Product detail pages ([slug])
│   ├── layout.tsx              # Root HTML shell, fonts, JSON-LD Schema & metadata
│   ├── page.tsx                # Main homepage assembly
│   ├── sitemap.ts              # Dynamic XML sitemap generator
│   ├── robots.ts               # Robots.txt generator
│   └── opengraph-image.tsx     # Dynamic social sharing image generator
├── lib/
│   ├── blog.ts                 # Blog post data & article content
│   ├── metadata.ts             # Site-wide SEO configuration & schemas
│   └── products.ts             # Relay product ecosystem specifications
├── public/                     # Static assets & icons
├── package.json                # Project dependencies & scripts
└── tsconfig.json               # TypeScript configuration
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have Node.js 18+ and npm installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd relay
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm start
   ```

---

## 📝 License

Private codebase. All rights reserved.
