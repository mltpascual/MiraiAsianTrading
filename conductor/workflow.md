# Workflow — Mirai Asian Trading

## Development Methodology

This project follows an **iterative, design-first** approach. Design decisions are made before implementation, documented in `DESIGN.md`, and enforced through code review. The "Noir Opulence" aesthetic direction guides all UI decisions.

## Git Workflow

### Branch Strategy

| Branch | Purpose | Protection |
|--------|---------|-----------|
| `main` | Production-ready code | Protected; requires PR review |
| `feature/*` | New features and sections | Merge into `main` via PR |
| `fix/*` | Bug fixes | Merge into `main` via PR |
| `docs/*` | Documentation updates | Merge into `main` via PR |

### Commit Conventions

Use conventional commits with the following prefixes:

| Prefix | Usage | Example |
|--------|-------|---------|
| `feat:` | New feature or section | `feat: add gold price calculator` |
| `fix:` | Bug fix | `fix: resolve ticker/navbar overlap` |
| `style:` | Visual/CSS changes | `style: bump font sizes by 2px` |
| `docs:` | Documentation | `docs: update README with deployment steps` |
| `refactor:` | Code restructuring | `refactor: extract price formatting utility` |
| `chore:` | Build, config, dependencies | `chore: add vercel.json for deployment` |
| `i18n:` | Translation updates | `i18n: add Japanese translations for FAQ` |

### Commit Message Format

```
<prefix>: <short description>

<optional body explaining why and what changed>
```

## Code Review Requirements

### Before Submitting a PR

- [ ] Zero TypeScript errors (`pnpm run check`)
- [ ] Code formatted with Prettier (`pnpm run format`)
- [ ] All new components follow the design system in `DESIGN.md`
- [ ] Multi-language support added for all user-facing text
- [ ] Responsive design verified at 375px, 768px, 1024px, 1440px
- [ ] No hardcoded strings — all text goes through `LanguageContext`

### Review Focus Areas

1. **Design Consistency:** Does the change align with the "Noir Opulence" aesthetic?
2. **Accessibility:** Are ARIA labels, focus states, and contrast ratios correct?
3. **Performance:** Are images optimized? Are animations compositor-friendly?
4. **i18n:** Are all three languages (EN, FIL, JA) updated?
5. **Security:** No hardcoded secrets, no `dangerouslySetInnerHTML` without sanitization.

## Testing Requirements

### Current State

No automated tests are configured. Manual testing is performed at each milestone.

### Manual Testing Checklist

- [ ] Page loads without errors in Chrome, Firefox, Safari
- [ ] All navigation links scroll to correct sections
- [ ] Language switcher changes all visible text
- [ ] Gold calculator produces correct values for all karat/type/currency combinations
- [ ] Contact form validates inputs and shows success toast
- [ ] Gallery lightbox opens, navigates, and closes correctly
- [ ] Mobile hamburger menu opens and closes
- [ ] Blog article modals open with full content
- [ ] Newsletter signup shows success state with animation

### Future Testing Targets

| Type | Coverage Target | Framework |
|------|----------------|-----------|
| Unit Tests | 80% utility functions | Vitest |
| Component Tests | Key interactive components | Vitest + Testing Library |
| E2E Tests | All critical user journeys | Playwright |

## Quality Assurance Gates

### Pre-Deployment

1. TypeScript compilation passes with zero errors
2. Vercel build succeeds (`pnpm run build:vercel`)
3. Manual testing of all 18 sections on desktop and mobile
4. Language switching verified for all three languages
5. Gold price API fallback verified (disconnect network, check graceful degradation)

### Post-Deployment

1. Verify all CDN images load correctly on the live site
2. Check Google Maps embed renders on the deployed domain
3. Test contact form and newsletter on the live URL
4. Run Lighthouse audit (target: Performance > 80, Accessibility > 90)

## Deployment Procedures

### Vercel Deployment

1. Push code to GitHub repository (`mltpascual/MiraiAsianTrading`)
2. Import repository on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects `vercel.json` configuration
4. Build command: `pnpm run build:vercel`
5. Output directory: `dist/public`
6. Framework preset: Vite

### Environment Variables (Vercel)

No environment variables are required for the static deployment. All API calls are made directly from the client to free public APIs.

## File Organization Conventions

| Directory | Contents | Naming |
|-----------|----------|--------|
| `client/src/components/` | Section components | PascalCase (e.g., `GoldCalculator.tsx`) |
| `client/src/components/ui/` | shadcn/ui primitives | kebab-case (e.g., `button.tsx`) |
| `client/src/contexts/` | React contexts | PascalCase with `Context` suffix |
| `client/src/hooks/` | Custom hooks | camelCase with `use` prefix |
| `client/src/pages/` | Page-level components | PascalCase (e.g., `Home.tsx`) |
| `client/src/lib/` | Utility functions | camelCase (e.g., `utils.ts`) |
| `conductor/` | Project context artifacts | kebab-case Markdown files |
