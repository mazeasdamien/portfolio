# Damien Mazeas — Portfolio

Personal research & engineering portfolio built with **Vite + React + TypeScript + TailwindCSS**.

## 🚀 Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| Styling | TailwindCSS + vanilla CSS |
| Animations | Framer Motion |
| Hosting | GitHub Pages / custom domain |

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── ExperimentsSection.tsx   # Prototypes & YouTube video gallery
│   │   ├── EducationSection.tsx
│   │   ├── CVSection.tsx
│   │   └── SkillsCloud.tsx
│   ├── layout/
│   └── ui/
├── data/
├── pages/
└── index.css
```

## ✨ Features

- **Hero section** — Research interests, links, and contact
- **Professional Experience** — Timeline cards with logos and descriptions
- **Education** — Degree timeline with institution logos
- **Prototypes & Archives** — Masonry gallery with:
  - YouTube videos: **hover-to-play** (autoplay muted, no controls, looped)
  - **Title + date overlay** slides up from the bottom when hovering a YouTube video
  - GIF/image cards: click-to-zoom modal
  - Tag badges and date labels
- **Skills Cloud** — Interactive tag display
- **CV Section** — Inline PDF viewer / download

## 🎬 YouTube Hover Behavior

When hovering a card that has an associated YouTube video:
1. The thumbnail fades out and the video autoplays (muted, looped, no controls)
2. A **frosted title banner** slides up from the bottom with the video title and date
3. Clicking the card opens the YouTube video in a new tab

## 📦 Dev

```bash
npm install
npm run dev       # https://localhost:3000
npm run build     # production bundle
```

## 📝 Changelog

| Date | Change |
|------|--------|
| 2026-04-20 | YouTube hover title banner: title + date now slide up from the bottom when hovering a YouTube card in the Experiments gallery |
| 2026-04-18 | Hover-to-play YouTube integration in Experiments section (autoplay muted, loop, no controls) |
| 2026-04-18 | Education section placed to the right of Professional Experience |
| 2026-04-17 | Full portfolio modernization with Framer Motion animations |
| 2026-04-17 | Masonry layout for Prototypes & Archives section |
