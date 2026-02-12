# C4 Architecture — Mirai Asian Trading

## Level 1: System Context

The Mirai Asian Trading website is a static Single Page Application (SPA) that serves as the public-facing landing page for the gold trading company. It interacts with external systems for gold price data and communication.

```
┌─────────────────────────────────────────────────────────────────┐
│                        SYSTEM CONTEXT                           │
│                                                                 │
│  ┌──────────┐     ┌──────────────────────┐     ┌────────────┐  │
│  │          │     │                      │     │            │  │
│  │  Visitor  │────▶│  Mirai Asian Trading │◀────│ metals.live│  │
│  │ (Browser) │     │   Landing Page       │     │   API      │  │
│  │          │     │   [React SPA]        │     │            │  │
│  └──────────┘     └──────────┬───────────┘     └────────────┘  │
│                              │                                  │
│                              │                  ┌────────────┐  │
│                              │                  │            │  │
│                              └─────────────────▶│ metals.dev │  │
│                                                 │   API      │  │
│                              │                  │ (fallback) │  │
│                              │                  └────────────┘  │
│                              │                                  │
│                              │                  ┌────────────┐  │
│                              │                  │            │  │
│                              └─────────────────▶│  Google    │  │
│                                                 │  Maps      │  │
│                                                 │  Embed     │  │
│                                                 └────────────┘  │
│                                                                 │
│                              │                  ┌────────────┐  │
│                              │                  │            │  │
│                              └─────────────────▶│ Facebook   │  │
│                                                 │ Messenger  │  │
│                                                 └────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Actors

| Actor | Description |
|-------|-------------|
| **Visitor** | Potential client browsing the website via desktop or mobile browser |

### External Systems

| System | Purpose | Protocol |
|--------|---------|----------|
| **metals.live** | Primary gold/silver/platinum/palladium price data | HTTPS (JSON) |
| **metals.dev** | Fallback gold price data | HTTPS (JSON) |
| **Google Maps Embed** | Office location map in contact section | HTTPS (iframe) |
| **Facebook Messenger** | Floating chat button for instant contact | HTTPS (external link) |
| **Google Fonts CDN** | Cormorant Garamond and Montserrat font delivery | HTTPS |
| **manuscdn.com** | Image asset hosting (CDN) | HTTPS |

---

## Level 2: Container Diagram

The system consists of a single container — a React SPA served as static files.

```
┌─────────────────────────────────────────────────────────┐
│                   CONTAINER DIAGRAM                      │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │           React SPA (Single Container)            │  │
│  │                                                   │  │
│  │  ┌─────────┐  ┌──────────┐  ┌─────────────────┐  │  │
│  │  │  Pages  │  │Components│  │    Contexts      │  │  │
│  │  │         │  │          │  │                  │  │  │
│  │  │ Home    │  │ Navbar   │  │ LanguageContext  │  │  │
│  │  │ NotFound│  │ Hero     │  │ ThemeContext     │  │  │
│  │  │         │  │ About    │  │                  │  │  │
│  │  │         │  │ Services │  └─────────────────┘  │  │
│  │  │         │  │ Calc     │                       │  │
│  │  │         │  │ Gallery  │  ┌─────────────────┐  │  │
│  │  │         │  │ Blog     │  │     Hooks        │  │  │
│  │  │         │  │ FAQ      │  │                  │  │  │
│  │  │         │  │ Contact  │  │ useGoldPrices    │  │  │
│  │  │         │  │ Footer   │  │ useScrollAnim    │  │  │
│  │  │         │  │ + 8 more │  │                  │  │  │
│  │  └─────────┘  └──────────┘  └─────────────────┘  │  │
│  │                                                   │  │
│  │  Technology: React 19, TypeScript, Tailwind 4     │  │
│  │  Hosting: Vercel (static deployment)              │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Container Details

| Container | Technology | Purpose |
|-----------|-----------|---------|
| **React SPA** | React 19 + TypeScript + Tailwind CSS 4 + Vite | Serves the entire landing page as a client-side rendered application |

### Deployment

| Environment | Platform | URL |
|-------------|----------|-----|
| Production | Vercel | TBD (custom domain) |
| Development | Local Vite dev server | http://localhost:3000 |

---

## Level 3: Component Diagram

The React SPA is organized into 5 component groups.

### Pages (Entry Points)

| Component | Route | Description |
|-----------|-------|-------------|
| `Home` | `/` | Main landing page assembling all 18 sections |
| `NotFound` | `*` | 404 error page |

### Section Components (18 total)

| Component | Section ID | Description |
|-----------|-----------|-------------|
| `Navbar` | — | Fixed header with gold ticker + navigation + language switcher |
| `GoldTicker` | — | Live gold/silver/platinum/palladium price marquee |
| `HeroSection` | `hero` | Cinematic parallax hero with CTAs |
| `AboutSection` | `about` | Company story with vault photography |
| `ProcessSection` | `process` | 4-step how-it-works flow |
| `ServicesSection` | `services` | Gold bars, coins, jewelry cards |
| `GoldCalculator` | `calculator` | Interactive price calculator |
| `CertificationsSection` | `certifications` | Industry partner badges |
| `GallerySection` | `gallery` | Photo gallery with lightbox |
| `WhyUsSection` | `why-us` | 6-feature trust grid |
| `TestimonialsSection` | `testimonials` | Client quotes with ratings |
| `BlogSection` | `news` | 6 market analysis articles |
| `FaqSection` | `faq` | 8-question accordion |
| `NewsletterSection` | `newsletter` | Email subscription with preferences |
| `CtaBanner` | — | Conversion call-to-action |
| `ContactSection` | `contact` | Inquiry form + Google Maps |
| `Footer` | — | Links, social icons, copyright |
| `FloatingChatButton` | — | Fixed Messenger chat button |

### Contexts (Global State)

| Context | Purpose | Consumers |
|---------|---------|-----------|
| `LanguageContext` | i18n translations (EN, FIL, JA) | All section components |
| `ThemeContext` | Dark/light theme management | App root, all components |

### Custom Hooks

| Hook | Purpose | Consumers |
|------|---------|-----------|
| `useGoldPrices` | Fetches and caches live gold prices from APIs | GoldTicker, GoldCalculator |
| `useScrollAnimation` | IntersectionObserver-based scroll reveal | All section components |
| `useMobile` | Responsive breakpoint detection | Navbar |

### UI Primitives (shadcn/ui)

Over 40 pre-built components from shadcn/ui are available in `client/src/components/ui/`. The most actively used are:

| Component | Usage |
|-----------|-------|
| `button` | CTAs, form submit, navigation |
| `accordion` | FAQ section |
| `dialog` | Blog article modals |
| `card` | Service cards, testimonial cards |
| `sonner` | Toast notifications |
| `tooltip` | UI hints |

---

## Level 4: Code-Level Details

### Data Flow — Gold Price Ticker

```
1. useGoldPrices hook initializes
2. Fetch from metals.live API (primary)
3. If fails → Fetch from metals.dev API (fallback)
4. If fails → Use hardcoded baseline prices
5. Cache prices in React state
6. Auto-refresh every 5 minutes
7. GoldTicker renders scrolling marquee
8. GoldCalculator uses same prices for calculations
```

### Data Flow — Language Switching

```
1. User clicks language button in Navbar
2. LanguageContext.setLanguage("fil" | "ja" | "en")
3. All components re-render via useLanguage() hook
4. t("key") returns translated string from translations object
5. localStorage persists language preference
```

### Data Flow — Gold Calculator

```
1. User enters weight (grams)
2. User selects karat (24K, 22K, 18K, 14K)
3. User selects gold type (Bar +2.5%, Coin +5%, Jewelry +12%)
4. User selects currency (USD, PHP, JPY, EUR, SGD, AED)
5. Formula: spotPrice × (karatPurity/24) × weight × (1 + typePremium) × exchangeRate
6. Result displayed with breakdown toggle
```

---

## Architecture Decision Records

### ADR-001: Static SPA over Server-Rendered

**Decision:** Build as a static React SPA, not a server-rendered application.

**Rationale:** The landing page has no user authentication, no database, and no server-side logic. A static SPA is simpler to deploy, cheaper to host, and faster to load via CDN edge caching.

**Consequences:** Contact form and newsletter submissions cannot be processed without a backend upgrade. Gold price API calls are made directly from the browser, subject to CORS restrictions.

### ADR-002: Free Gold Price APIs

**Decision:** Use metals.live and metals.dev as free, no-auth gold price sources.

**Rationale:** The client-side only architecture cannot securely store API keys. Free APIs with CORS support are required. A fallback chain ensures graceful degradation.

**Consequences:** Price data may be delayed or unavailable if both APIs are down. Hardcoded baseline prices serve as a last resort.

### ADR-003: Client-Side i18n

**Decision:** Implement translations as a static JavaScript object in LanguageContext, not an external i18n library.

**Rationale:** With only 3 languages and a single-page application, the overhead of react-i18next or similar libraries is unnecessary. The translation object is tree-shaken and bundled efficiently.

**Consequences:** Adding a 4th language requires modifying the LanguageContext source code. Large translation objects increase bundle size.
