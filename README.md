# Damien Mazeas Portfolio

Personal academic & research portfolio built with React + Vite + TypeScript + Tailwind CSS.

## Tech Stack
- **React 18** + **TypeScript**
- **Vite** (dev server & build)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (page transitions)
- **Lucide React** (icons)

## Layout Overview

### Home Page (`/`)
| Column | Content |
|--------|---------|
| **Left (flex-1)** | Professional Experience — timeline cards with logos, tags and dates |
| **Right (340–380 px)** | Education — Ph.D. (Cranfield) and M.Sc. (Arts et Métiers), stacked vertically |

> On screens narrower than `lg` (1024 px) the two columns stack vertically.

## Changelog

### 2026-04-18
- **Layout**: Education section moved to the **right of Professional Experience** (two-column side-by-side layout on `lg+` screens, stacked on mobile).
- Education cards changed to single-column stack inside the right panel.

### Earlier
- Hero section with profile photo, research interest chips, and social links (LinkedIn, GitHub, Google Scholar).
- Professional Experience section with organizational logos embedded in cards.
- Experiments / YouTube video gallery with hover-to-play interaction.
- Multi-language support via `LanguageContext`.
- Contact modal.

## Running Locally

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```
