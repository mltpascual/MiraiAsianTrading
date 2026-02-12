# TypeScript/React Style Guide — Mirai Asian Trading

## General Rules

- Use TypeScript strict mode for all source files.
- Prefer `const` over `let`. Never use `var`.
- Use arrow functions for component definitions and callbacks.
- Export components as default exports from their files.
- Use named exports for hooks, utilities, and types.

## Component Structure

Every component file should follow this order:

```typescript
// 1. Imports (external libraries first, then internal)
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 2. Types/Interfaces (if component-specific)
interface GoldCalculatorProps {
  initialWeight?: number;
}

// 3. Constants (component-specific)
const KARAT_OPTIONS = [24, 22, 18, 14] as const;

// 4. Component definition
export default function GoldCalculator({ initialWeight = 0 }: GoldCalculatorProps) {
  // 4a. Hooks (contexts, state, refs, effects)
  const { t } = useLanguage();
  const [weight, setWeight] = useState(initialWeight);
  const { ref, isVisible } = useScrollAnimation();

  // 4b. Derived values and handlers
  const calculatedPrice = weight * spotPrice;
  const handleSubmit = () => { /* ... */ };

  // 4c. JSX return
  return (
    <section ref={ref} id="calculator">
      {/* ... */}
    </section>
  );
}
```

## Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `GoldCalculator` |
| Props interfaces | PascalCase + `Props` | `GoldCalculatorProps` |
| Hooks | `use` + camelCase | `useGoldPrices` |
| Event handlers | `handle` + Event | `handleSubmit`, `handleKaratChange` |
| Boolean state | `is`/`has`/`should` prefix | `isVisible`, `hasError` |
| Constants | UPPER_SNAKE_CASE | `API_REFRESH_INTERVAL` |
| CSS variables | `--kebab-case` | `--color-gold-accent` |

## i18n Pattern

All user-facing text must go through the `LanguageContext`:

```typescript
// Correct
const { t } = useLanguage();
return <h2>{t("section.title")}</h2>;

// Incorrect — hardcoded string
return <h2>Our Services</h2>;
```

Translation keys use dot notation: `section.subsection.key` (e.g., `calc.title`, `hero.subtitle`).

## Tailwind CSS Conventions

- Use Tailwind utilities directly in JSX. Avoid custom CSS unless absolutely necessary.
- Use the `cn()` utility from `@/lib/utils` for conditional classes.
- Follow the project's OKLCH color tokens — never hardcode hex/rgb values.
- Use responsive prefixes in mobile-first order: `base → sm → md → lg → xl`.

```typescript
// Correct
<div className={cn("p-6 bg-card", isActive && "border-[#C9A84C]")}>

// Incorrect — inline styles
<div style={{ padding: "24px", backgroundColor: "#1a1a1a" }}>
```

## Animation Pattern

Use Framer Motion for scroll-triggered animations with the `useScrollAnimation` hook:

```typescript
const { ref, isVisible } = useScrollAnimation();

return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
  >
    {/* content */}
  </motion.div>
);
```

For simple hover states, use Tailwind transitions: `transition-colors duration-300 hover:text-[#C9A84C]`.

## Section Component Pattern

Every page section follows this structure:

```typescript
export default function SectionName() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="section-id" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div ref={ref} /* animation props */>
          {/* Section header */}
          <span className="text-[#C9A84C] font-montserrat uppercase tracking-[0.25em]">
            {t("section.label")}
          </span>
          <h2 className="font-cormorant text-[42px] md:text-[56px] text-foreground">
            {t("section.title")}
          </h2>
          {/* Section content */}
        </motion.div>
      </div>
    </section>
  );
}
```
