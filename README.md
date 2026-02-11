# Mirai Asian Trading

A premium landing page for **Mirai Asian Trading** — a reliable gold trading company specializing in the purchase and sale of gold bars, coins, and jewelry. Built with a "Noir Opulence" dark luxury editorial design, the site features real-time gold price data, an interactive calculator, multi-language support, and a cinematic visual experience that reflects the gravitas of precious metals trading.

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Real-Time Gold Ticker** | Live precious metals prices (Gold, Silver, Platinum, Palladium) fetched from free public APIs with smart fallback |
| **Gold Price Calculator** | Interactive tool with gold type selection (Bars, Coins, Jewelry), karat purity, weight input, and 6 currency options |
| **Multi-Language Support** | Full internationalization in English, Filipino, and Japanese via context-based language switching |
| **6 Market Articles** | Data-driven blog section with current gold market analysis, each with full-content modal views |
| **Photo Gallery** | Lightbox gallery showcasing showroom, products, team, and vault storage |
| **FAQ Section** | 8 accordion-style questions covering gold trading, purity, pricing, and processes |
| **Newsletter Signup** | Email subscription with topic preferences (Market Analysis, Industry News, Education, Price Alerts) and frequency options |
| **Contact Form** | Full contact form with Google Maps embed showing the Parañaque City, Manila location |
| **Floating Chat Button** | Fixed bottom-right contact button with Messenger, Viber, and Email options |
| **Responsive Design** | Fully responsive across mobile, tablet, and desktop breakpoints |
| **Scroll Animations** | Intersection Observer-based scroll-triggered reveal animations throughout |

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2+ | UI framework |
| **TypeScript** | 5.6 | Type safety |
| **Vite** | 7.1 | Build tool and dev server |
| **Tailwind CSS** | 4.1 | Utility-first styling |
| **shadcn/ui** | Latest | Pre-built accessible UI components |
| **Framer Motion** | 12.x | Animation library |
| **Lucide React** | 0.453 | Icon library |
| **Wouter** | 3.x | Client-side routing |
| **Sonner** | 2.x | Toast notifications |

---

## Prerequisites

Before running the project locally, ensure you have the following installed:

- **Node.js** 20 or higher
- **pnpm** 10.x (recommended package manager)

No database, backend server, or API keys are required. This is a fully static, client-side application.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mirai-asian-trading.git
cd mirai-asian-trading
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start the Development Server

```bash
pnpm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

For standard builds:

```bash
pnpm run build
```

For Vercel-optimized builds (recommended for deployment):

```bash
pnpm run build:vercel
```

The production output is written to `dist/public/`.

---

## Architecture

### Directory Structure

```
mirai-asian-trading/
├── client/
│   ├── index.html                    # HTML entry point with Google Fonts and meta tags
│   ├── public/                       # Static assets (served at root)
│   └── src/
│       ├── App.tsx                   # Root component with routing and providers
│       ├── main.tsx                  # React entry point
│       ├── index.css                 # Global styles, Tailwind config, design tokens
│       ├── components/
│       │   ├── Navbar.tsx            # Fixed dual-bar header (ticker + navigation)
│       │   ├── GoldTicker.tsx        # Real-time precious metals price ticker
│       │   ├── HeroSection.tsx       # Full-viewport cinematic hero with parallax
│       │   ├── AboutSection.tsx      # Company story with stats and video CTA
│       │   ├── ProcessSection.tsx    # 4-step "How It Works" flow
│       │   ├── ServicesSection.tsx   # Gold Bars, Coins, Jewelry service cards
│       │   ├── GoldCalculator.tsx    # Interactive gold price calculator
│       │   ├── CertificationsSection.tsx  # Partner and certification badges
│       │   ├── GallerySection.tsx    # Photo gallery with lightbox
│       │   ├── WhyUsSection.tsx      # 6-feature trust grid
│       │   ├── TestimonialsSection.tsx    # Client testimonials
│       │   ├── BlogSection.tsx       # 6 market articles with modals
│       │   ├── FaqSection.tsx        # 8 accordion Q&A items
│       │   ├── NewsletterSection.tsx  # Email signup with preferences
│       │   ├── CtaBanner.tsx         # Conversion CTA banner
│       │   ├── ContactSection.tsx    # Contact form + info + Google Maps
│       │   ├── Footer.tsx            # 4-column footer with social links
│       │   ├── FloatingChatButton.tsx # Fixed chat button (Messenger/Viber/Email)
│       │   └── ui/                   # shadcn/ui component library
│       ├── contexts/
│       │   ├── LanguageContext.tsx    # i18n provider (EN, Filipino, Japanese)
│       │   └── ThemeContext.tsx       # Dark/light theme provider
│       ├── hooks/
│       │   ├── useGoldPrices.ts      # Gold price API fetcher with fallback
│       │   ├── useScrollAnimation.ts # Intersection Observer scroll reveal
│       │   └── useMobile.tsx         # Mobile breakpoint detection
│       ├── lib/
│       │   └── utils.ts              # Utility helpers (cn, etc.)
│       └── pages/
│           ├── Home.tsx              # Main landing page (assembles all sections)
│           └── NotFound.tsx          # 404 page
├── server/
│   └── index.ts                      # Express server (production static serving)
├── shared/
│   └── const.ts                      # Shared constants
├── DESIGN.md                         # Comprehensive design system documentation
├── vercel.json                       # Vercel deployment configuration
├── vite.config.ts                    # Vite dev config
├── vite.config.vercel.ts             # Vite production config (Vercel-optimized)
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
└── .gitignore                        # Git ignore rules
```

### Request Lifecycle (Client-Side)

Since this is a fully static single-page application, the request lifecycle is entirely client-side:

1. Browser loads `index.html` from the static server or CDN.
2. Vite-bundled JavaScript initializes React and mounts the `App` component.
3. `ThemeProvider` sets the dark theme, `LanguageProvider` initializes English.
4. `Wouter` router matches the `/` route and renders the `Home` page.
5. Each section component mounts and registers its `IntersectionObserver` for scroll animations.
6. The `useGoldPrices` hook fetches live gold prices from public APIs (metals.live, metals.dev) with fallback to cached baseline data.
7. User interactions (language switching, calculator input, gallery lightbox, FAQ accordion) are handled entirely in React state.

### Data Flow

```
Gold Price APIs (metals.live / metals.dev)
         ↓ (fetch with fallback)
   useGoldPrices hook
         ↓ (context/props)
   ┌─────┴─────┐
   │           │
GoldTicker  GoldCalculator
(navbar)    (calculator section)
```

All other data (translations, articles, testimonials, FAQ items) is statically embedded in the component files.

---

## Page Sections

The landing page consists of 18 sections rendered in the following order:

| # | Section | Anchor ID | Key Functionality |
|---|---------|-----------|-------------------|
| 1 | Gold Ticker | *(in navbar)* | Real-time XAU, XAG, XPT, XPD prices with change percentages |
| 2 | Navbar | — | Logo, 9 nav links, language switcher (EN/FIL/JA), CTA button |
| 3 | Hero | `#hero` | Full-viewport parallax background, animated headline, dual CTAs |
| 4 | About | `#about` | Company stats (15+ years, 5000+ clients, 99.9% purity), vault image |
| 5 | Process | `#process` | 4-step flow: Consultation → Verification → Transaction → Settlement |
| 6 | Services | `#services` | Three cards: Gold Bars, Gold Coins, Gold Jewelry |
| 7 | Calculator | `#calculator` | Weight, karat (24K–14K), type (Bars/Coins/Jewelry), 6 currencies |
| 8 | Certifications | `#certifications` | LBMA, ISO 9001, BSP, WGC, GIA, Fair Trade badges |
| 9 | Gallery | `#gallery` | 4-image lightbox: Showroom, Products, Team, Vault |
| 10 | Why Us | `#why-us` | 6-feature grid: Security, Transparency, Pricing, Authenticity, Speed, Support |
| 11 | Testimonials | `#testimonials` | 3 client quotes with names and roles |
| 12 | Blog/News | `#news` | 6 articles with full-content modals, "View All" expand |
| 13 | FAQ | `#faq` | 8 accordion items about gold trading |
| 14 | Newsletter | `#newsletter` | Email + topic preferences + frequency (Daily/Weekly/Monthly) |
| 15 | CTA Banner | — | Conversion banner with dual action buttons |
| 16 | Contact | `#contact` | Form (name, email, phone, subject, message) + info cards + Google Maps |
| 17 | Footer | — | 4-column: Logo/social, Quick Links, Services, Contact Info |
| 18 | Floating Chat | — | Fixed bottom-right: Messenger, Viber, Email options |

---

## Internationalization

The site supports three languages, managed through `LanguageContext.tsx`:

| Language | Code | Coverage |
|----------|------|----------|
| English | `en` | Full (default) |
| Filipino | `fil` | Full |
| Japanese | `ja` | Full |

All user-facing strings are stored in the `translations` object. The language switcher is accessible from the navbar on both desktop and mobile views. To add a new language, add a new key to the `translations` object following the existing pattern.

---

## Gold Price API Integration

The `useGoldPrices` hook fetches real-time precious metals prices using a multi-source strategy:

| Priority | Source | Endpoint | Rate Limit |
|----------|--------|----------|------------|
| 1 | metals.live | `https://api.metals.live/v1/spot` | Free, no key |
| 2 | metals.dev | `https://api.metals.dev/v1/metal/spot` | Free, no key |
| 3 | Fallback | Hardcoded baseline prices | Always available |

Prices are cached in `localStorage` and refreshed every 5 minutes. The ticker displays a green "LIVE" indicator when API data is fresh, or an amber "CACHED" indicator when using fallback data.

---

## Deployment to Vercel

### Prerequisites

A GitHub repository containing the project code.

### Step-by-Step

1. **Push to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/mirai-asian-trading.git
git push -u origin main
```

2. **Import to Vercel:**

Go to [vercel.com/new](https://vercel.com/new), select your GitHub repository, and Vercel will automatically detect the `vercel.json` configuration.

3. **Configuration (auto-detected from `vercel.json`):**

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build Command | `pnpm run build:vercel` |
| Output Directory | `dist/public` |
| Install Command | `pnpm install` |

4. **Deploy:**

Click "Deploy" and Vercel will build and deploy the site. All subsequent pushes to `main` will trigger automatic redeployments.

### Vercel Configuration Details

The `vercel.json` file includes:

- **SPA Rewrites:** All routes redirect to `index.html` for client-side routing.
- **Cache Headers:** Static assets in `/assets/` are cached for 1 year with immutable flag.
- **Security Headers:** `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, and `Referrer-Policy` are set on all responses.

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `pnpm run dev` | Start Vite dev server with HMR on port 3000 |
| `build` | `pnpm run build` | Production build (Vite + esbuild for server) |
| `build:vercel` | `pnpm run build:vercel` | Vercel-optimized production build (client only) |
| `preview` | `pnpm run preview` | Preview production build locally |
| `check` | `pnpm run check` | TypeScript type checking (no emit) |
| `format` | `pnpm run format` | Format code with Prettier |

---

## Customization Guide

### Updating Contact Information

Contact details appear in two components:

- `client/src/components/ContactSection.tsx` — Contact info cards (phone, email, address)
- `client/src/components/Footer.tsx` — Footer contact column

Search for the placeholder phone number `0917 123 4567` and replace with your actual number.

### Updating Social Media Links

Social media icons are in `client/src/components/Footer.tsx`. Update the `href` attributes for Facebook, Instagram, and email links.

### Adding a New Language

1. Open `client/src/contexts/LanguageContext.tsx`.
2. Add a new key to the `translations` object following the existing `en`, `fil`, or `ja` pattern.
3. Add the language option to the `languages` array in `client/src/components/Navbar.tsx`.

### Modifying the Color Palette

All design tokens are defined in `client/src/index.css` under the `.dark` selector. The primary gold accent is `#C9A84C`. Refer to `DESIGN.md` for the complete color system documentation.

### Adding New Blog Articles

Articles are defined as a static array in `client/src/components/BlogSection.tsx`. Each article object includes `title`, `excerpt`, `content` (4 paragraphs), `image`, `date`, `readTime`, and `category`.

---

## Design System

A comprehensive design system document is maintained at `DESIGN.md` in the project root. It covers:

- Color palette with OKLCH values and usage roles
- Typography rules with Cormorant Garamond + Montserrat pairing
- Component styling specifications (buttons, cards, inputs, navigation)
- Layout principles and grid patterns
- Animation and interaction guidelines
- Responsive breakpoint behavior
- Accessibility standards

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 15+ |
| Edge | 90+ |
| Mobile Safari | 15+ |
| Chrome Android | 90+ |

---

## License

MIT License. See `LICENSE` for details.
