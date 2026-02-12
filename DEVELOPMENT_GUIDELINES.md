# Development Guidelines — Mirai Asian Trading

> **Purpose:** This document synthesizes coding standards, UI/UX guidelines, security policies, and testing strategies into a single reference for all developers and AI agents working on this project. It is derived from 8 specialized development skills and tailored to the Mirai Asian Trading codebase.

---

## Table of Contents

1. [UI/UX & Frontend Design](#1-uiux--frontend-design)
2. [Code Quality & Best Practices](#2-code-quality--best-practices)
3. [Security](#3-security)
4. [Testing](#4-testing)
5. [Pre-Delivery Checklist](#5-pre-delivery-checklist)

---

## 1. UI/UX & Frontend Design

*Synthesized from: frontend-design, ui-ux-pro-max, web-design-guidelines*

### 1.1 Design Philosophy

This project follows a **"Noir Opulence"** dark luxury editorial aesthetic. Every design decision must reinforce this identity. The core design mandate requires four qualities in every output:

| Quality | Description |
|---------|-------------|
| **Intentional Aesthetic Direction** | All UI work must align with the established dark luxury gold trading identity |
| **Technical Correctness** | Real, working React/TypeScript/Tailwind code with zero type errors |
| **Visual Memorability** | At least one element per section that a visitor will remember 24 hours later |
| **Cohesive Restraint** | Every flourish must serve the aesthetic thesis; no random decoration |

Before writing any new component, explicitly define its **purpose** (persuasive, functional, exploratory), **tone** (must align with the dark luxury direction), and **differentiation anchor** (how it avoids generic UI patterns).

### 1.2 Typography Rules

The project uses **Cormorant Garamond** (display) and **Montserrat** (body). These are non-negotiable.

- Use Cormorant Garamond for all headings, hero text, and section titles. Apply it structurally to create visual hierarchy.
- Use Montserrat for body text, UI labels, navigation, and form elements.
- Maintain a line height of 1.5–1.75 for body text. Limit line length to 65–75 characters for readability.
- Use `font-variant-numeric: tabular-nums` for number columns (gold prices, calculator values).
- Use `text-wrap: balance` or `text-pretty` on headings to prevent widows.
- Use the `…` character (not `...`) for ellipsis. Use curly quotes (`" "`) instead of straight quotes.

### 1.3 Color System

All colors are defined as CSS custom properties in `client/src/index.css` using OKLCH format. The primary gold accent is `#C9A84C`. Do not introduce new colors without updating the design tokens.

| Role | Value | Usage |
|------|-------|-------|
| Background | `oklch(0.13 0.01 75)` | Page background, sections |
| Foreground | `oklch(0.92 0.01 75)` | Primary text |
| Gold Accent | `oklch(0.75 0.12 85)` | CTAs, highlights, borders |
| Muted | `oklch(0.65 0.03 75)` | Secondary text, captions |
| Card | `oklch(0.18 0.01 75)` | Card backgrounds |

### 1.4 Accessibility Standards

These are **non-negotiable** requirements for every component:

- **Color Contrast:** Maintain a minimum 4.5:1 contrast ratio for all text. Gold text on dark backgrounds must be verified.
- **Focus States:** All interactive elements must have visible `focus-visible:ring-*` states. Never use `outline: none` without a replacement.
- **ARIA Labels:** All icon-only buttons must have an `aria-label`. All form inputs must have associated `<label>` elements.
- **Semantic HTML:** Use `<button>` for actions and `<a>` for navigation. Never use `<div onClick>`.
- **Alt Text:** All images require descriptive `alt` attributes. Decorative images use `alt=""`.
- **Keyboard Navigation:** Tab order must match visual layout. All interactive elements must be reachable via keyboard.
- **Reduced Motion:** Respect `prefers-reduced-motion` by providing reduced variants or disabling animations.

### 1.5 Responsive Design

- Design mobile-first with breakpoints at 375px, 768px, 1024px, and 1440px.
- No horizontal scroll on any viewport. Use `overflow-x-hidden` on containers.
- Touch targets must be a minimum of 44×44px on mobile.
- Use `touch-action: manipulation` to prevent double-tap zoom delay.
- Use `env(safe-area-inset-*)` for full-bleed layouts on notched devices.
- All `<img>` tags must have explicit `width` and `height` to prevent CLS.

### 1.6 Animation Guidelines

- Animate only `transform` and `opacity` for compositor-friendly performance.
- Use short durations (150–300ms) for micro-interactions. Never use `transition: all`.
- Animations must be interruptible and respond to user input mid-animation.
- Use skeleton screens or spinners for loading states. End loading text with ellipsis (e.g., "Loading…").
- The project uses Framer Motion for complex animations and CSS transitions for simple hover states.

### 1.7 Component Standards

- Extend shadcn/ui components instead of building from scratch. Import from `@/components/ui/*`.
- Use Lucide React for all icons. Never use emojis as UI icons.
- All clickable elements must have `cursor-pointer` and clear hover feedback.
- Handle long content with `truncate`, `line-clamp-*`, or `break-words`.
- Handle empty states gracefully — never render broken UI for empty data.
- Use `sonner` for toast notifications. Do not add react-toastify or other toast libraries.

### 1.8 Forms

- Use correct `type` attributes (`email`, `tel`, `url`, `number`) and `inputmode` for mobile keyboards.
- Labels must be clickable via `htmlFor` or wrapping. Do not block pasting into inputs.
- Submit buttons remain enabled until the request starts; show a spinner during the request.
- Display errors inline next to the corresponding fields and focus the first error on submit.
- Disable `spellCheck` for emails, codes, and usernames.

### 1.9 Navigation & State

- The URL should reflect the current UI state (filters, tabs, pagination) via query parameters.
- Use `<a>` or `<Link>` for navigation to support Cmd/Ctrl+click and middle-click.
- Destructive actions require a confirmation modal or provide an undo option.
- Warn users before navigating away from pages with unsaved changes.

### 1.10 Anti-Patterns (Immediate Failure)

The following patterns are explicitly banned from this project:

- Inter/Roboto/system fonts as primary typefaces
- Purple-on-white SaaS gradients
- Default Tailwind/shadcn layouts without customization
- Symmetrical, predictable section layouts
- Decoration without intent
- `<div onClick>` instead of semantic `<button>` or `<a>`
- Images without `width`/`height` attributes
- `transition: all` in any CSS
- `outline: none` without a `focus-visible` replacement

---

## 2. Code Quality & Best Practices

*Synthesized from: clean-code, code-reviewer*

### 2.1 Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `GoldCalculator`, `HeroSection` |
| Hooks | camelCase with `use` prefix | `useGoldPrices`, `useScrollAnimation` |
| Contexts | PascalCase with `Context` suffix | `LanguageContext`, `ThemeContext` |
| CSS Variables | kebab-case with `--` prefix | `--color-gold-accent` |
| Constants | UPPER_SNAKE_CASE | `API_REFRESH_INTERVAL` |
| Files | PascalCase for components, camelCase for utilities | `GoldTicker.tsx`, `utils.ts` |

Names must be intention-revealing, pronounceable, and searchable. Avoid generic suffixes like `Manager`, `Data`, or `Info`. Class/component names should be nouns; function/method names should be verbs.

### 2.2 Function Design

- **Small:** Functions should be under 20 lines where possible.
- **Single Responsibility:** Each function does exactly one thing. If you need a comment to explain a section, extract it into a named function.
- **One Level of Abstraction:** Do not mix high-level business logic with low-level implementation details.
- **Limit Arguments:** Prefer 0–2 arguments. Use an options object for 3+ parameters.
- **No Side Effects:** Functions should not modify global state or have hidden behaviors.
- **Descriptive Names:** `isPasswordValid` over `check`. `formatGoldPrice` over `format`.

### 2.3 Comments

> "Don't comment bad code — rewrite it." — Robert C. Martin

- Write self-documenting code with clear names and small functions. Most comments indicate a failure to write clean code.
- **Acceptable comments:** Legal headers, TODO items, clarification of external library behavior, and JSDoc for public APIs.
- **Banned comments:** Redundant comments that restate the code, commented-out code blocks, and position markers.

### 2.4 Error Handling

- Use exceptions instead of return codes. Write try-catch-finally blocks first.
- Never return `null` from functions — return empty arrays, empty objects, or throw meaningful errors.
- Never pass `null` as a function argument.
- Error messages should explain how to fix the problem, not just state what went wrong.
- Display user-facing errors inline near the relevant UI element.

### 2.5 React-Specific Rules

- Never call `setState` or navigation in the render phase — wrap in `useEffect`.
- Stabilize references with `useState` or `useMemo` to prevent infinite re-render loops.
- Prefer uncontrolled inputs where possible. Controlled inputs must be performant on each keystroke.
- Use `useEffect` cleanup functions to prevent memory leaks from subscriptions and timers.
- Guard against hydration mismatches for date/time rendering.

### 2.6 Code Smells to Watch For

| Smell | Description | Fix |
|-------|-------------|-----|
| **Rigidity** | Code is difficult to change | Extract interfaces, reduce coupling |
| **Fragility** | Changes break unrelated code | Improve encapsulation, add tests |
| **Immobility** | Code is difficult to reuse | Extract shared logic into hooks/utils |
| **Needless Complexity** | Over-engineered solutions | Simplify; YAGNI principle |
| **Needless Repetition** | Duplicated logic | Extract into shared functions/components |
| **Law of Demeter Violations** | Long chains like `a.getB().getC().doSomething()` | Use intermediate variables or wrapper methods |

---

## 3. Security

*Synthesized from: api-security-best-practices, find-bugs*

### 3.1 Current Security Posture

Mirai Asian Trading is currently a **static, client-side only** application with no backend, database, or user authentication. The security surface is limited but still requires attention.

### 3.2 Client-Side Security Rules

| Rule | Implementation |
|------|---------------|
| **No sensitive data in client code** | API keys, secrets, and credentials must never appear in frontend source code |
| **Input validation** | Validate all form inputs (contact form, newsletter, calculator) for type, format, and length |
| **XSS prevention** | React's JSX auto-escapes by default. Never use `dangerouslySetInnerHTML` without sanitization |
| **External API calls** | Validate and sanitize all data received from third-party APIs (gold price feeds) |
| **CORS awareness** | Only fetch from trusted, known API endpoints |
| **Content Security** | Use security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection) — configured in `vercel.json` |

### 3.3 Security Checklist for Code Changes

For every code change, verify the following:

- [ ] **No injection vectors:** No user input is used in dynamic HTML, URLs, or system commands without sanitization.
- [ ] **No XSS:** All user-generated content is properly escaped before rendering.
- [ ] **No information disclosure:** Error messages do not leak sensitive implementation details.
- [ ] **No hardcoded secrets:** No API keys, tokens, or passwords in source code.
- [ ] **External data validated:** All data from third-party APIs is validated before use.
- [ ] **Dependencies audited:** Run `pnpm audit` before deploying to check for known vulnerabilities.

### 3.4 Future Security Considerations

When the project upgrades to a full-stack application, the following must be implemented:

- JWT-based authentication with short-lived access tokens and secure refresh tokens.
- Role-Based Access Control (RBAC) for admin vs. public endpoints.
- Rate limiting on all API endpoints (100 requests per 15 minutes per IP).
- Parameterized queries or ORM for all database interactions (prevent SQL injection).
- CSRF protection on all state-changing operations.
- Input validation with Zod schemas on both client and server.
- Helmet.js for security headers on the Express server.
- HTTPS enforcement for all API communication.

### 3.5 OWASP API Security Top 10 Awareness

When APIs are introduced, guard against these vulnerabilities:

1. Broken Object Level Authorization
2. Broken Authentication
3. Broken Object Property Level Authorization
4. Unrestricted Resource Consumption
5. Broken Function Level Authorization
6. Unrestricted Access to Sensitive Business Flows
7. Server Side Request Forgery (SSRF)
8. Security Misconfiguration
9. Improper Inventory Management
10. Unsafe Consumption of APIs

---

## 4. Testing

*Synthesized from: e2e-testing-patterns*

### 4.1 Testing Philosophy

- Focus on **critical user journeys** — the paths that directly impact business value.
- Tests must be **independent and isolated** — each test manages its own state.
- Prefer **explicit waits** over fixed delays. Never use `sleep()` or `setTimeout()` in tests.
- Use the **Arrange-Act-Assert (AAA)** pattern for all test structure.

### 4.2 Critical User Journeys to Test

For Mirai Asian Trading, the following journeys are highest priority:

| Journey | Steps |
|---------|-------|
| **Gold Price Visibility** | Page loads → Ticker displays live prices → Prices update periodically |
| **Calculator Usage** | Navigate to calculator → Enter weight → Select karat → Select type → Verify calculation |
| **Language Switching** | Click language switcher → Select Filipino/Japanese → Verify all visible text changes |
| **Contact Form** | Fill all fields → Submit → Verify success toast → Verify form resets |
| **Newsletter Signup** | Enter email → Select topics → Choose frequency → Submit → Verify success state |
| **Navigation** | Click each nav link → Verify smooth scroll to correct section |
| **Mobile Responsiveness** | Resize to mobile → Open hamburger menu → Navigate → Verify layout |
| **Gallery Lightbox** | Click gallery image → Verify lightbox opens → Navigate images → Close |

### 4.3 Selector Strategy

- **Preferred:** `data-testid` attributes for stable, change-resistant selectors.
- **Acceptable:** Semantic selectors like `role`, `aria-label`, and `placeholder`.
- **Avoid:** CSS class names, XPath, or generated identifiers.

### 4.4 Test Structure (Page Object Model)

Abstract UI elements into page-specific classes to improve maintainability:

```typescript
// Example: GoldCalculatorPage.ts
class GoldCalculatorPage {
  get weightInput() { return page.getByTestId('calc-weight-input'); }
  get karatSelector() { return page.getByTestId('calc-karat-selector'); }
  get resultDisplay() { return page.getByTestId('calc-result'); }

  async calculatePrice(weight: number, karat: string) {
    await this.weightInput.fill(String(weight));
    await this.karatSelector.click();
    // ...
  }
}
```

### 4.5 Anti-Patterns

| Anti-Pattern | Why It's Bad | What to Do Instead |
|-------------|-------------|-------------------|
| Flaky tests | Erode trust in the test suite | Investigate and fix root cause immediately |
| Hardcoded delays | Slow and unreliable | Use explicit waits polling for conditions |
| Test interdependence | Single failure cascades | Each test creates its own state |
| Over-testing UI details | Brittle, breaks on styling changes | Test behavior and outcomes, not implementation |
| Testing in production | Risk of data corruption | Use dedicated test environments |

### 4.6 CI/CD Integration

When CI/CD is set up, ensure:

- E2E tests run on every pull request before merge.
- Tests execute in parallel to reduce total run time.
- On failure, capture screenshots, videos, and console logs for debugging.
- Test results are reported as PR status checks.

---

## 5. Pre-Delivery Checklist

Before delivering any code change, verify all items in this checklist:

### Visual Quality

- [ ] Design aligns with the "Noir Opulence" dark luxury aesthetic
- [ ] No emojis used as UI icons (Lucide React only)
- [ ] Cormorant Garamond for headings, Montserrat for body — no exceptions
- [ ] Gold accent color used consistently from CSS variables
- [ ] Hover states do not cause layout shift
- [ ] All images have appropriate alt text

### Interaction & Accessibility

- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150–300ms)
- [ ] Focus states visible for keyboard navigation
- [ ] Color contrast meets 4.5:1 minimum
- [ ] `prefers-reduced-motion` respected

### Responsive & Performance

- [ ] Tested at 375px, 768px, 1024px, and 1440px
- [ ] No horizontal scroll on mobile
- [ ] Touch targets minimum 44×44px
- [ ] Images have explicit width/height
- [ ] Below-fold images use `loading="lazy"`
- [ ] No `transition: all` in CSS

### Code Quality

- [ ] Zero TypeScript errors (`pnpm run check`)
- [ ] Functions under 20 lines where possible
- [ ] No commented-out code blocks
- [ ] No `console.log` in production code
- [ ] Self-documenting names — no unnecessary comments
- [ ] No hardcoded secrets or API keys

### Security

- [ ] No user input used in `dangerouslySetInnerHTML`
- [ ] External API data validated before use
- [ ] Error messages do not leak implementation details
- [ ] `pnpm audit` shows no critical vulnerabilities

---

*This document was generated by the Dev Orchestrator and should be treated as the authoritative reference for development standards on this project. Last updated: February 2026.*
