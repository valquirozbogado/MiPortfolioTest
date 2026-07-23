# Design Tokens

The token layer is the backbone of visual consistency and theming. **Every color, space, size, and radius is a CSS custom property.** Components never hard-code values.

## Why tokens

- **Consistency:** one source of truth; a spacing change propagates everywhere.
- **Theming:** light/dark is just a different set of token values under a selector.
- **Safety:** referencing a token that exists is verifiable; a typo like `var(--space-5)` when only `--space-4` and `--space-6` exist fails **silently** — the property is dropped and the style just doesn't apply. Keep the scale complete and named predictably.

## Token families (define in `src/index.css` under `:root`)

```css
:root {
  /* ─── Surfaces & text (light theme default) ─── */
  --color-surface:            #FFFFFF;
  --color-surface-low:        #F5F5F5;
  --color-surface-high:       #E0E0E0;
  --color-on-surface:         #1A1A1A;
  --color-on-surface-variant: #444444;

  /* ─── Accent (pick ONE brand color + hover) ─── */
  --color-brand:              #1A47E8;   /* replace with the user's accent */
  --color-brand-hover:        #1238C5;
  --color-on-brand:           #FFFFFF;

  --color-outline:            #999999;
  --color-outline-variant:    #E0E0E0;
  --color-focus-ring:         #1A47E8;

  /* ─── Typography ─── */
  --font-display:  'Bebas Neue', sans-serif;      /* big poster headings */
  --font-headline: 'Space Grotesk', system-ui;    /* section headings */
  --font-body:     'Inter', system-ui, sans-serif;
  --font-mono:     'JetBrains Mono', monospace;    /* metadata, labels */

  --text-xs: 10px;  --text-sm: 12px;  --text-caption: 13px;
  --text-ui: 14px;  --text-base: 16px; --text-md: 20px;
  --text-lg: 24px;  --text-xl: 32px;   --text-2xl: 48px;
  --text-hero: clamp(56px, 10vw, 120px);

  /* ─── Spacing scale (keep it COMPLETE — no gaps) ─── */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-24: 96px;

  /* ─── Radius, borders, shadows ─── */
  --radius-sm: 4px; --radius-md: 6px; --radius-lg: 12px; --radius-pill: 100px;
  --border-1: 1px;  --border-2: 2px;
  --shadow-md: 0 4px 12px rgba(15,15,15,.10), 0 2px 4px rgba(15,15,15,.06);

  /* ─── Motion ─── */
  --duration-fast: 150ms; --duration-normal: 300ms;

  /* ─── Z-index (name every layer) ─── */
  --z-content: 2; --z-header: 100; --z-toolbar: 200;
  --z-modal: 400; --z-toast: 500; --z-loading: 999;
}
```

## Rules

1. **The spacing scale must have no missing rungs you'll reach for.** If components will want a `--space-5`, define it. A missing rung invites invalid `var()` references that fail silently.
2. **One accent color.** A portfolio reads as more designed with a single confident accent than a rainbow. Derive hover/pressed from it.
3. **Name z-index layers.** Overlays that must sit above everything (lightbox) go above `--z-toolbar`; see the stacking pitfalls.
4. **Fonts:** a display face for impact, a body face for reading, a mono face for technical metadata is a reliable, characterful trio. Load only the weights you use.

## Verifying a token exists

Before using `var(--something)`, confirm it's declared (grep `index.css`). This one check prevents a whole class of "why isn't my style applying" bugs. See `07-pitfalls/css-and-glassmorphism.md`.
