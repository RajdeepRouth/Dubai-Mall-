# The Dubai Mall - Digital Experience Deck

A high-end, cinematic, fully interactive sales and partnership web application for **The Dubai Mall**, one of the world's largest and most visited retail and lifestyle destinations.

## 🧠 Core Goal
This application replaces the traditional static pitch deck with an immersive, non-linear scrolling experience. It is designed to create an instant emotional connection and communicate luxury, scale, and business opportunity to prospective retail tenants, brand sponsors, and event partners.

## 🎨 Design Decisions & UI/UX Direction
- **Luxury-Grade Aesthetic**: Inspired by Apple and Louis Vuitton, utilizing a stark dark mode (`#050505`) to create extreme contrast. 
- **Typography**: Uses `Playfair Display` for elegant, structural headings and `Inter` for clean, highly legible body copy. Gold accents (`#d4af37`) direct the user's eye to key metrics and calls to action.
- **Continuous Scroll Architecture**: Migrated from a slide-based structure to a continuous vertical scroll. This empowers the user to navigate at their own pace, utilizing Framer Motion's `useScroll` and `whileInView` for elegant parallax and stagger effects.
- **Media-First Layout**: Heavy reliance on ultra-high-definition, full-width imagery (via Unsplash) and a cinematic hero video. A sophisticated multi-stop gradient overlay ensures typography remains legible over complex backgrounds.

## ⚡ Tech Stack
- **Framework**: React 18 (via Vite for lightning-fast HMR and optimized builds)
- **Styling**: Vanilla CSS with CSS Variables for theme tokens. Avoids heavy UI frameworks to keep the payload minimal and the design entirely bespoke.
- **Animation**: `framer-motion` for complex scroll-linked animations, parallax effects, and smooth element entrances.
- **Icons**: `lucide-react` for minimal, scalable SVG iconography.

## 🤖 AI Tools Used
- **Agentic Generation**: Built end-to-end by Antigravity (Google DeepMind).
- **Asset Curation**: Unsplash stock photography and Mixkit 4K stock video seamlessly integrated to simulate a live production build.

## 🚀 Setup Instructions
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Local Development Server**:
   ```bash
   npm run dev
   ```
3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🌍 Public Deployment
*Note: As an autonomous AI agent, I cannot create an authenticated Vercel/Netlify account on your behalf to generate a live public URL.* 

However, this repository is **100% ready for zero-config deployment**:
1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. Drag and drop the `dist/` folder (after running `npm run build`), OR connect your GitHub repository.
3. The platform will automatically detect Vite and deploy your application in under 60 seconds.