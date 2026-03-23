# Coding Standards

## Platform File Convention

This project uses Expo's platform file resolution for styling:

| File | Platform | Styling |
|------|----------|---------|
| `Component.web.tsx` | Web only | CSS modules (`className`) |
| `Component.tsx` | Native (iOS/Android) | `StyleSheet.create()` |
| `Component.types.ts` | Shared | Types/interfaces only |

Always create both files for components that render UI. Web CSS modules are not supported on native.

## Web Styling — CSS Modules

All web styles live in `.module.css` files co-located with the component:

```
Button.web.tsx
Button.module.css   ← only imported by Button.web.tsx
Button.tsx
```

**Import and apply:**
```tsx
// Button.web.tsx
import styles from './Button.module.css';
<button className={styles.button}>Label</button>
```

**Rules:**
- No inline `style=` on web components — use CSS modules
- Never hardcode values; always reference a token variable (see below)
- Import `tokens.css` at the app entry point, not in individual modules

## CSS — Design Tokens

All design tokens are CSS custom properties defined in `src/styles/tokens.css`. The same tokens are mirrored as JS constants in `src/styles/tokens.native.ts` for native use.

Reference tokens in every `.module.css` file:

```css
/* Good */
.button {
  background: var(--color-primary);
  padding-block: var(--space-2);
  padding-inline: var(--space-4);
  border-radius: var(--radius-md);
}

/* Never */
.button {
  background: #1a6cf0;
  padding: 8px 16px;
  border-radius: 8px;
}
```

## CSS — Colors (OKLCH)

Use `oklch()` for all color values. OKLCH has perceptually uniform lightness and works across wide-gamut displays.

```css
/* Good */
color: oklch(0.7 0.15 250);
background: oklch(0.55 0.20 250);

/* Never */
color: #5b8dee;
color: hsl(221, 78%, 65%);
```

For tints, shades, and transparency use `color-mix(in oklch, ...)`:

```css
background: color-mix(in oklch, var(--color-primary) 15%, transparent);
border-color: color-mix(in oklch, var(--color-primary) 60%, var(--color-border));
```

## HTML — Prefer Native Browser Elements

Use native HTML elements before reaching for custom implementations.

| Need | Use |
|------|-----|
| Collapsible section | `<details>` / `<summary>` |
| Modal / dialog | `<dialog>` |
| Date, time, color, range input | `<input type="date\|time\|color\|range">` |
| Dropdown | `<select>` |
| Progress indicator | `<progress>` or `<meter>` |
| Abbreviation tooltip | `<abbr title="...">` |

Only implement a custom component when the native element is genuinely insufficient.

## Accessibility — WCAG 2.1 AA

### Semantics
- Correct heading hierarchy: `h1` → `h2` → `h3` (never skip levels)
- Use landmark elements: `<main>`, `<nav>`, `<header>`, `<footer>`, `<aside>`
- Prefer native semantics over ARIA; add ARIA only where native semantics fall short

### Color Contrast
- Body text: ≥ 4.5:1 against background
- Large text (≥18pt or ≥14pt bold) and UI components: ≥ 3:1

### Interaction
- All interactive elements must be keyboard-focusable
- Use `:focus-visible` for focus rings (not `:focus`) — avoids rings on mouse click
- Never use `outline: none` without a replacement `:focus-visible` style

### Content
- Images: meaningful `alt` text, or `alt=""` for decorative images
- Form inputs: always associate a `<label>` via `for`/`id` or by wrapping
- Never convey information through color alone

## CSS — Modern Patterns

- **Layout**: CSS Grid and Flexbox only. No floats. No `position: absolute` for layout.
- **Fluid sizing**: `clamp()` for typography and spacing (already applied in tokens).
- **Logical properties**: `margin-inline`, `padding-block`, `inset-inline-start` — not `margin-left` etc.
- **Component responsiveness**: `@container` queries over `@media` for component-level breakpoints.
- **Nesting**: CSS nesting for co-located rules.
- **Selectors**: `:is()`, `:has()`, `:where()` to reduce repetition.
- **Cascade layers**: `@layer` in larger stylesheets.

```css
/* Example: modern component CSS */
.card {
  display: grid;
  gap: var(--space-4);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background: var(--color-surface-raised);
  box-shadow: var(--shadow-md);

  & .title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: auto 1fr;
  }
}
```

## Native — StyleSheet Alignment

When using `StyleSheet.create()` in `.tsx` files, import tokens from `src/styles/tokens.native.ts` and comment colors with their OKLCH token:

```tsx
import { colors, space, radius } from '@/styles/tokens.native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary, // --color-primary: oklch(0.55 0.20 250)
    paddingVertical: space[2],
    paddingHorizontal: space[4],
    borderRadius: radius.md,
  },
});
```

Never hardcode hex values directly — always go through `tokens.native.ts`.
