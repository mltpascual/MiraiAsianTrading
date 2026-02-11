# Design System: Mirai Asian Trading

> **Version:** 2.0 — Updated February 2026
> **Author:** Manus AI
> **Status:** Production-ready

---

## 1. Visual Theme and Atmosphere

**Design Movement:** Noir Opulence — Dark Luxury Editorial

The visual identity channels the interior of a high-security gold vault: deep, enveloping darkness punctuated by warm metallic gleams. The atmosphere is **cinematic, weighty, and exclusive** — evoking the gravitas of precious metals trading. Every element feels intentional and unhurried, as if opening a velvet-lined jewelry box.

**Core Principles:**

- **Vault Darkness:** Near-black backgrounds create depth and let gold accents command attention.
- **Metallic Warmth:** Gold tones are used sparingly but deliberately — they are the visual "currency" of the design.
- **Editorial Restraint:** Generous whitespace, asymmetric compositions, and typographic hierarchy borrowed from luxury print magazines.
- **Cinematic Scale:** Full-viewport sections, parallax imagery, and scroll-triggered reveals create a narrative flow.

---

## 2. Color Palette and Roles

### Primary Colors

| Name | Hex / OKLCH | Role |
|------|-------------|------|
| **Vault Black** | `#0A0A0A` / `oklch(0.08 0.005 285)` | Primary background — the canvas upon which all elements rest |
| **Burnished Gold** | `#C9A84C` / `oklch(0.75 0.12 85)` | Primary accent — CTAs, highlights, active states, dividers. The signature color. |
| **Champagne Ivory** | `#E8D5B7` / `oklch(0.90 0.04 85)` | Heading text, primary foreground — warm and legible against dark backgrounds |
| **Aged Brass** | `#8A8279` / `oklch(0.58 0.02 60)` | Body text, muted labels — recedes gracefully to let headings and gold accents lead |

### Supporting Colors

| Name | Hex / OKLCH | Role |
|------|-------------|------|
| **Onyx** | `#111111` / `oklch(0.12 0.005 285)` | Card backgrounds, elevated surfaces — one step lighter than Vault Black |
| **Charcoal** | `#0D0D0D` / `oklch(0.10 0.005 285)` | Status bars, secondary surfaces — subtle depth differentiation |
| **Deep Amber** | `#1A1508` | Gradient start for result panels — warm undertone suggesting gold proximity |
| **Emerald Pulse** | `emerald-400` | Live data indicator — signals real-time connectivity |
| **Amber Caution** | `amber-400` | Fallback data indicator — signals cached/estimated data |

### Gold Gradient System

```css
/* Text gradient — used for hero titles and emphasis */
background: linear-gradient(135deg, #C9A84C, #E8D5B7, #C9A84C);

/* Divider gradient — horizontal separators between sections */
background: linear-gradient(90deg, transparent, #C9A84C, transparent);

/* Glow effect — subtle ambient light around featured elements */
box-shadow: 0 0 40px rgba(201, 168, 76, 0.15);
```

### Opacity Scale for Gold

| Usage | Opacity | Example |
|-------|---------|---------|
| Borders (default) | `15%` | `border-[#C9A84C]/15` |
| Borders (hover) | `30%` | `hover:border-[#C9A84C]/30` |
| Borders (active) | `100%` | `border-[#C9A84C]` |
| Background tint | `5–15%` | `bg-[#C9A84C]/10` |
| Decorative lines | `40%` | `bg-[#C9A84C]/40` |
| Text (muted) | `70%` | `text-[#C9A84C]/70` |

---

## 3. Typography Rules

### Font Pairing

| Role | Family | Weights | Character |
|------|--------|---------|-----------|
| **Display / Headings** | Cormorant Garamond | 400, 500, 600, **700** | Elegant serif with high contrast strokes — evokes luxury print, old-world authority |
| **Body / UI** | Montserrat | 300, 400, 500, **600**, 700 | Clean geometric sans-serif — modern, precise, trustworthy |

### Hierarchy Rules (Post +2px Bump)

All font sizes were globally increased by +2px from the original design for improved readability.

| Level | Font | Size | Weight | Tracking | Color |
|-------|------|------|--------|----------|-------|
| **H1 (Hero)** | Cormorant Garamond | `5xl–8xl` (responsive) | Bold (700) | Default | Champagne Ivory `#E8D5B7` or Gold Gradient |
| **H2 (Section)** | Cormorant Garamond | `4xl–5xl` | Bold (700) | Default | Champagne Ivory `#E8D5B7` |
| **H3 (Card/Sub)** | Cormorant Garamond | `xl–2xl` | Semibold (600) | Default | Champagne Ivory `#E8D5B7` |
| **Tag / Label** | Montserrat | `13px` | Regular (400) | `0.3em` uppercase | Burnished Gold `#C9A84C` |
| **Body** | Montserrat | `16–17px` | Regular (400) | Default | Aged Brass `#8A8279` |
| **Caption / Micro** | Montserrat | `11–12px` | Regular (400) | `0.15em` uppercase | Aged Brass at 50% opacity |
| **Button** | Montserrat | `14px` | Semibold (600) | `0.15em` uppercase | Vault Black `#0A0A0A` (on gold bg) |
| **Nav Link** | Montserrat | `13px` | Regular (400) | `0.12em` uppercase | Aged Brass → Gold on hover |

### Typography Principles

- Headings ALWAYS use `font-[Cormorant_Garamond]` or the CSS declaration `font-family: "Cormorant Garamond", Georgia, serif`.
- All UI text, labels, buttons, and body copy use `font-[Montserrat]` or `font-family: "Montserrat", system-ui, sans-serif`.
- Tags and labels are ALWAYS uppercase with wide letter-spacing (`tracking-[0.3em]`).
- Gold accent lines (horizontal rules) accompany section tags: `w-12 h-px bg-[#C9A84C]/40`.

---

## 4. Component Stylings

### Buttons

| Variant | Shape | Background | Text | Hover | Usage |
|---------|-------|------------|------|-------|-------|
| **Primary CTA** | Pill-shaped (`rounded-full`) | Burnished Gold `#C9A84C` | Vault Black `#0A0A0A` | Champagne `#E8D5B7` | Main actions: "Get Started", "Contact Us" |
| **Secondary / Ghost** | Pill-shaped (`rounded-full`) | Transparent | Burnished Gold `#C9A84C` | Gold tint `bg-[#C9A84C]/10` | Alternative actions: "Learn More" |
| **Chip / Toggle** | Pill-shaped (`rounded-full`) | Transparent | Aged Brass `#8A8279` | Gold border glow | Filters, weight presets, currency selectors |
| **Chip Active** | Pill-shaped (`rounded-full`) | Gold tint `bg-[#C9A84C]/15` | Burnished Gold `#C9A84C` | — | Active filter state |

**Button Sizing:** `px-8 py-3.5` for primary CTAs, `px-5 py-2` for nav buttons, `px-3 py-1.5` for chips.

### Cards and Containers

| Element | Corners | Background | Border | Shadow | Usage |
|---------|---------|------------|--------|--------|-------|
| **Section Card** | Generously rounded (`rounded-2xl`) | Onyx `#111111` | Gold hairline `border-[#C9A84C]/15` | None | Calculator, main content cards |
| **Result Panel** | Subtly rounded (`rounded-xl`) | Warm gradient `from-[#1A1508] via-[#151005] to-[#0D0D0D]` | Gold border `border-[#C9A84C]/20` | None | Calculator results, featured content |
| **Feature Card** | Subtly rounded (`rounded-xl`) | Transparent → Onyx on hover | Gold hairline `border-[#C9A84C]/10` | None | Service cards, feature grid items |
| **Status Bar** | None (inside card) | Deep Charcoal `#0D0D0D` | Bottom gold hairline | None | Calculator header, ticker bar |

### Inputs and Forms

| Element | Shape | Background | Border | Focus State |
|---------|-------|------------|--------|-------------|
| **Text Input** | Rounded (`rounded-xl`) | Vault Black `#0A0A0A` | Gold hairline `border-[#C9A84C]/20` | Gold glow `border-[#C9A84C]/60` |
| **Textarea** | Rounded (`rounded-xl`) | Vault Black `#0A0A0A` | Gold hairline `border-[#C9A84C]/20` | Gold glow `border-[#C9A84C]/60` |

**Input text:** Champagne Ivory `#E8D5B7`, Montserrat. Placeholder: Aged Brass at 50%.

### Navigation

| State | Background | Blur | Border |
|-------|------------|------|--------|
| **Default (top)** | `bg-[#0A0A0A]/60` | `backdrop-blur-sm` | None |
| **Scrolled** | `bg-[#0A0A0A]/90` | `backdrop-blur-md` | Bottom gold hairline `border-[#C9A84C]/10` |

The navigation is a fixed dual-bar header: the gold price ticker sits on top, and the main navigation bar sits directly below. Both are fixed to the viewport top.

### Decorative Elements

- **Section tag pattern:** Gold line + uppercase text + gold line (centered).
- **Corner accents:** 12px L-shaped gold borders at card corners (`border-t border-l border-[#C9A84C]/40`).
- **Gold divider:** Full-width gradient line between sections.
- **Dot pattern:** Radial gradient dots at `opacity-[0.02]` for subtle texture.

---

## 5. Layout Principles

### Spacing System

| Context | Value | Usage |
|---------|-------|-------|
| **Section padding** | `py-24 sm:py-32` | Vertical breathing room between sections |
| **Content max-width** | `max-w-7xl` (1280px) | Primary content container |
| **Horizontal padding** | `px-6 lg:px-8` | Responsive side margins |
| **Card padding** | `p-6 sm:p-8` | Internal card spacing |
| **Element gap** | `gap-4` to `gap-8` | Between cards, grid items |
| **Section header margin** | `mb-16` | Space below section title block |

### Grid Patterns

| Layout | Grid | Usage |
|--------|------|-------|
| **Services** | 3-column (`grid-cols-1 md:grid-cols-3`) | Service cards |
| **Features** | 2×3 grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) | Why Us features |
| **Calculator** | 2-column (`grid-cols-1 lg:grid-cols-2`) | Input + Results |
| **Gold Type** | 3-column (`grid-cols-3`) | Type selector |
| **Gallery** | 2×2 grid (`grid-cols-1 sm:grid-cols-2`) | Photo gallery |
| **Blog** | Featured + 2-column grid | News articles |
| **Certifications** | 6-column responsive grid | Partner badges |

### Asymmetric Compositions

- Hero section: Content left-aligned (max-w-2xl) against full-viewport background image.
- About section: Image + text side-by-side with offset positioning.
- Process section: Numbered steps with alternating visual weight.

---

## 6. Animation and Interaction Philosophy

### Scroll Reveal

All sections use the `useScrollAnimation` hook with `IntersectionObserver`:

- **Entry:** `opacity-0 translate-y-12` → `opacity-100 translate-y-0`
- **Duration:** `duration-1000` (1 second)
- **Threshold:** `0.1` (triggers when 10% visible)
- **Stagger:** Hero elements use `delay-300`, `delay-500`, `delay-700`, `delay-900`

### Hover States

- Links: Color transition `text-[#8A8279]` → `text-[#C9A84C]` over `duration-300`.
- Cards: Border brightens from `/10` to `/30`, subtle background tint appears.
- Buttons: Background color shift over `duration-300`.

### Micro-interactions

- Gold ticker: Continuous horizontal scroll animation with `marquee` keyframes.
- Price flash: Green/red flash animation on price updates.
- Live indicator: Pulsing emerald dot (`animate-pulse`).
- Scroll arrow: Gentle bounce (`animate-bounce`).
- Parallax: Hero background moves at 30% scroll speed.

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce` — durations collapse to `0.01ms`.

---

## 7. Image and Visual Asset Guidelines

### Image Treatment

- Hero images: Full-viewport with dual gradient overlays (horizontal + vertical).
- Gallery images: Contained with subtle gold border on hover.
- Blog thumbnails: 16:9 aspect ratio with dark overlay on hover.
- Logo: AI-generated transparent PNG featuring gold "M" icon with ascending geometric bars.

### Gradient Overlays on Images

```css
/* Horizontal: dark left → transparent right */
bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/50 to-[#0A0A0A]/30

/* Vertical: dark bottom → transparent → dark top */
bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40
```

### Image Sources

All images are hosted on CDN (manuscdn.com) and referenced via absolute URLs. No local image files exist in the repository.

---

## 8. Page Sections (in order)

| # | Section | ID | Description |
|---|---------|-----|-------------|
| 1 | **Gold Ticker** | (in navbar) | Real-time precious metals prices (Gold, Silver, Platinum, Palladium) |
| 2 | **Navbar** | — | Fixed dual-bar header with logo, nav links, language switcher, CTA |
| 3 | **Hero** | `hero` | Full-viewport cinematic hero with gold bars imagery and parallax |
| 4 | **About** | `about` | Company story, stats (15+ years, 5000+ clients, 99.9% purity), video CTA |
| 5 | **Process** | `process` | 4-step "How It Works" flow (Consultation → Verification → Transaction → Settlement) |
| 6 | **Services** | `services` | Three service cards: Gold Bars, Gold Coins, Gold Jewelry |
| 7 | **Calculator** | `calculator` | Interactive gold price calculator with type, weight, karat, and currency selection |
| 8 | **Certifications** | `certifications` | Partner badges: LBMA, ISO 9001, BSP, WGC, GIA, Fair Trade |
| 9 | **Gallery** | `gallery` | 4-image lightbox gallery: Showroom, Products, Team, Vault |
| 10 | **Why Us** | `why-us` | 6-feature trust grid: Security, Transparency, Pricing, Authenticity, Speed, Support |
| 11 | **Testimonials** | `testimonials` | 3 client quotes with names and titles |
| 12 | **Blog/News** | `news` | 6 real market articles with full-content modals |
| 13 | **FAQ** | `faq` | 8 accordion-style Q&A items |
| 14 | **Newsletter** | `newsletter` | Email signup with topic preferences and frequency selection |
| 15 | **CTA Banner** | — | Conversion-focused call-to-action with dual buttons |
| 16 | **Contact** | `contact` | Contact form + info cards + Google Maps embed |
| 17 | **Footer** | — | 4-column footer with logo, social links, quick links, services, contact info |
| 18 | **Floating Chat** | — | Fixed bottom-right Messenger/Viber/Email contact button |

---

## 9. Internationalization (i18n)

The site supports three languages managed through `LanguageContext`:

| Language | Code | Flag |
|----------|------|------|
| English | `en` | — |
| Filipino | `fil` | — |
| Japanese | `ja` | — |

All user-facing text is stored in the `translations` object within `LanguageContext.tsx`. The language switcher is located in the navbar.

---

## 10. Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| **Mobile** | `< 640px` | Single column, stacked layout, hamburger menu |
| **Tablet** | `640px – 1023px` | 2-column grids, expanded padding |
| **Desktop** | `1024px+` | Full layout, side-by-side compositions, horizontal nav |

### Mobile Adaptations

- Navigation collapses to hamburger menu with slide-down panel.
- Gold ticker scrolls horizontally (marquee).
- Calculator stacks vertically (inputs above results).
- Typography scales down: Hero `5xl` → Desktop `8xl`.

---

## 11. Accessibility

- **Focus rings:** Visible outline using `outline-ring/50`.
- **Color contrast:** Champagne Ivory on Vault Black exceeds WCAG AA (ratio ~12:1).
- **Reduced motion:** Full support via `prefers-reduced-motion` media query.
- **Semantic HTML:** Proper heading hierarchy, landmark regions, ARIA labels.
- **Interactive targets:** Minimum 44px touch targets on mobile.
- **Custom scrollbar:** Styled but functional, gold-tinted thumb on dark track.
