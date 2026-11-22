# AFA Technologies &mdash; Enterprise Next.js Website

A high-performance, modern B2B Sales-as-a-Service website for **AFA Technologies**, built with **Next.js (App Router)**, **TypeScript**, and optimized for 1-click deployment on **Vercel**.

---

## 🚀 Features

- **Next.js App Router & TypeScript:** Strict typing, server & client component architecture.
- **Brand-Harmonized Styling:** Custom CSS system synchronized with the official AFA Technologies logo (Midnight Navy `#04162e`, Vibrant Cobalt `#0082cb`, and Electric Cyan `#00bdf2`).
- **Interactive UI Components:**
  - Dynamic typewriter effect in Hero banner
  - Lead capture & Growth Strategy consultation form with instant validation & feedback
  - Interactive Case Studies tablist with keyboard navigation support (Fortanixor, Najoomi, Keystone, Accelerec)
  - Mobile hamburger navigation menu
  - Time-zone coverage matrix & FAQ accordions
- **Optimized Assets:** High-resolution logos in `/public/images/logo.webp` and `/public/images/logo-footer.webp`, with Next.js Image component optimization.
- **Ready for Vercel Deployment:** Pre-configured `next.config.mjs`, `.gitignore`, `tsconfig.json`, and standard npm build scripts.

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Create production build:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

---

## 🌐 Deploy to Vercel

### Option 1: Deploy with Git (Recommended)

1. **Initialize Git & push to GitHub / GitLab / Bitbucket:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Next.js website for AFA Technologies"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import into Vercel:**
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** &rarr; **"Project"**.
   - Select your repository.
   - Vercel will automatically detect **Next.js** framework preset.
   - Click **"Deploy"**.

### Option 2: Deploy using Vercel CLI

1. **Install Vercel CLI (if not already installed):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy directly from terminal:**
   ```bash
   vercel
   ```
   Follow the prompts to link your project and deploy. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css         # Global brand CSS variables, layouts & animations
│   ├── layout.tsx          # Root layout with SEO metadata & Inter font
│   └── page.tsx            # Main landing page assembling all sections
├── components/
│   ├── Header.tsx          # Sticky navigation with mobile menu & scroll spy
│   ├── Hero.tsx            # Typewriter animation & consultation booking form
│   ├── Proof.tsx           # Partner logos & key metrics
│   ├── Advantage.tsx       # Traditional vs AFA comparison table
│   ├── Solutions.tsx       # SDR, AE & RevOps solution cards
│   ├── Process.tsx         # 14-day deployment timeline & visual card
│   ├── ClientImpact.tsx    # Interactive case studies (Fortanixor, Najoomi, etc.)
│   ├── WhyAFA.tsx          # Global standards & timezone coverage map
│   ├── About.tsx           # Company story & commercial delivery center
│   ├── FAQ.tsx             # Interactive FAQ accordions
│   ├── Contact.tsx         # Consultation booking form
│   └── Footer.tsx          # Brand footer, links & dynamic copyright year
├── public/
│   └── images/             # Brand logos & static assets
├── next.config.mjs         # Next.js configuration & image domains
├── package.json            # Project dependencies & build scripts
├── tsconfig.json           # TypeScript configuration
└── .gitignore              # Git ignore rules for Next.js & node_modules
```
