# The Dubai Mall — Digital Experience Deck

A premium, interactive, full-screen sales presentation and digital pitching tool built for The Dubai Mall leasing and partnerships teams. This application replaces traditional static PDFs with a highly dynamic, non-linear, and cinematic web experience.

## ✨ Key Features

- **Cinematic 100vh Architecture:** The entire application is locked to a strict `100vh` viewport constraint. No scrollbars, no messy overflows. Content is meticulously scaled using fluid typography (`clamp()`) to ensure pixel-perfect rendering across all 16:9 and ultrawide displays.
- **Premium Micro-Animations:** Custom-built in `tailwind.config.js`. Features Apple Keynote-style cross-fades, "Ken Burns" subtle zoom transitions (`1000ms cubic-bezier`), and interactive metallic sweeping sheen effects on all Call-to-Action buttons.
- **Non-Linear Navigation:** Presenters can move linearly through the deck using keyboard arrows or touch-swipes, or they can use the `ChapterPanel` to instantly jump to specific sections during a dynamic sales conversation.
- **Nested Sub-Decks:** Allows the presenter to click into a "deep dive" modal (e.g., viewing an entire sub-presentation on Marketing Activations) without ever losing their place in the main deck narrative.
- **Performant Media:** Features highly optimized, muted background HTML5 video loops (`hero_video.mp4`) that bypass browser autoplay restrictions and eliminate messy third-party player UI.
- **Data-Driven Architecture:** All slide content, imagery, configuration, and CTA logic is entirely decoupled from the UI components and housed centrally in `src/data/slides.config.js` for rapid updates without touching code.

## 🛠 Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (with highly customized keyframes and design tokens)
- **State Management:** React Hooks (`useState`, `useEffect`) and native DOM `CustomEvent` listeners for cross-component sub-deck triggers.
- **Deployment:** Optimized for static hosting (Vercel, Netlify, or AWS S3).

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `/src/data/` - Contains `slides.config.js` (The single source of truth for all copy and content).
- `/src/slides/` - Modular slide templates (`CinematicHeroSlide`, `SplitStatsSlide`, `GridGallerySlide`, etc.) that render dynamically based on the config file.
- `/src/components/` - Global UI elements like `SlideNav`, `ChapterPanel`, `SubDeck`, and the universal `DeckCTA` interactive button.
- `/src/hooks/` - Custom hooks (e.g., `useCountUp` for the animated statistics).
- `/public/images/` - High-fidelity AI-generated luxury retail and architectural assets, plus background video loops.

## 🎨 Design Philosophy

This tool was engineered to look less like a website and more like a high-end application. The aesthetic relies heavily on a curated dark mode (`#0A0A0A`), signature gold accents (`#C9A96E`), aggressive tracking/letter-spacing, and a mix of pristine sans-serif readability with elegant serif accentuations. Every interaction—from a button press to a slide transition—has been smoothed out with aggressive `cubic-bezier` easing to feel "expensive" and frictionless.