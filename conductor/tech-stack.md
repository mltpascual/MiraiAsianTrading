# Tech Stack — Mirai Asian Trading

## Overview

This is a **static, client-side only** React application built with Vite and Tailwind CSS 4. It is designed for deployment on Vercel as a Single Page Application (SPA).

## Primary Languages & Frameworks

| Technology | Version | Purpose |
|-----------|---------|---------|
| TypeScript | 5.6.3 | Primary language for all source code |
| React | 19.2.1 | UI framework |
| Vite | 7.1.7 | Build tool and dev server |
| Tailwind CSS | 4.1.14 | Utility-first CSS framework |

## Key Dependencies

### UI Components

| Package | Version | Purpose |
|---------|---------|---------|
| shadcn/ui | Latest | Pre-built accessible UI components (via Radix primitives) |
| @radix-ui/* | Various | Headless UI primitives (accordion, dialog, tabs, etc.) |
| lucide-react | 0.453.0 | Icon library |
| framer-motion | 12.23.22 | Animation library for scroll reveals and transitions |
| sonner | 2.0.7 | Toast notification system |
| cmdk | 1.1.1 | Command palette component |

### Routing & State

| Package | Version | Purpose |
|---------|---------|---------|
| wouter | 3.3.5 | Lightweight client-side routing |
| react-hook-form | 7.64.0 | Form state management |
| @hookform/resolvers | 5.2.2 | Validation resolvers for react-hook-form |
| zod | 4.1.12 | Schema validation |

### Utilities

| Package | Version | Purpose |
|---------|---------|---------|
| class-variance-authority | 0.7.1 | Component variant management |
| clsx | 2.1.1 | Conditional className utility |
| tailwind-merge | 3.3.1 | Tailwind class conflict resolution |
| nanoid | 5.1.5 | Unique ID generation |
| axios | 1.12.0 | HTTP client for API calls |

### Charting & Data

| Package | Version | Purpose |
|---------|---------|---------|
| recharts | 2.15.2 | Chart library (available but not currently used) |

## Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| pnpm | 10.4.1 | Package manager |
| TypeScript | 5.6.3 | Type checking |
| Prettier | 3.6.2 | Code formatting |
| Vite | 7.1.7 | Dev server with HMR |
| esbuild | 0.25.0 | Server-side bundling |

## Infrastructure & Deployment

| Target | Technology | Notes |
|--------|-----------|-------|
| **Primary Hosting** | Vercel | Static SPA deployment with `vercel.json` config |
| **CDN** | Vercel Edge Network | Automatic via Vercel deployment |
| **Images** | manuscdn.com | All images hosted on external CDN |
| **Domain** | TBD | Custom domain to be configured post-deployment |

## Build Configuration

The project has two Vite configurations:

| Config | File | Purpose |
|--------|------|---------|
| Development | `vite.config.ts` | Local dev server with HMR and Manus plugins |
| Production (Vercel) | `vite.config.vercel.ts` | Clean build without dev-only plugins |

Build commands:

```bash
pnpm run dev          # Start dev server
pnpm run build:vercel # Production build for Vercel
pnpm run check        # TypeScript type checking
pnpm run format       # Prettier formatting
```

## External APIs

| API | Purpose | Auth | Notes |
|-----|---------|------|-------|
| metals.live | Gold/silver/platinum prices | None (free) | Primary price source |
| metals.dev | Gold price fallback | None (free) | Secondary price source |
| Google Maps Embed | Office location map | None (embed) | Used in contact section |

## Testing Frameworks

No testing framework is currently configured. When added, the recommended stack is:

| Tool | Purpose |
|------|---------|
| Vitest | Unit and integration testing (already in devDependencies) |
| Playwright | End-to-end testing |
| Testing Library | React component testing |

## Fonts (External)

| Font | Source | Usage |
|------|--------|-------|
| Cormorant Garamond | Google Fonts CDN | Display headings, hero text |
| Montserrat | Google Fonts CDN | Body text, UI labels, navigation |

## Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome for Android
