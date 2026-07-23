# Theming (Light / Dark)

Theme by swapping token values under a selector, driven by a `data-theme` attribute on the root element.

## The mechanism

```css
/* Light is the default in :root (see design-tokens.md) */

[data-theme="dark"] {
  --color-surface:            #0A0A0A;
  --color-surface-low:        #141414;
  --color-surface-high:       #2A2A2A;
  --color-on-surface:         #FFFFFF;
  --color-on-surface-variant: #AAAAAA;
  --color-brand:              #4F72F0;  /* often lift the accent for dark bg */
  --color-outline-variant:    rgba(255,255,255,0.10);
  /* …override only what changes */
}
```

Because components reference `var(--color-…)`, they re-theme for free. No component knows which theme is active.

## Driving it from React

A `ThemeContext` holds `theme` and `language`, persists to `localStorage`, and stamps `data-theme` on `<html>` (or `:root`). The toggle just flips the attribute.

```tsx
// on change:
document.documentElement.setAttribute('data-theme', theme); // 'light' | 'dark'
```

## Theme-aware glass / translucent surfaces

Semi-transparent surfaces (a glass header, dropdowns) need **different alpha per theme** or they look wrong. Define them as tokens:

```css
:root            { --glass-bg: rgba(255,255,255,0.72); }
[data-theme=dark]{ --glass-bg: rgba(10,10,10,0.68); }
```

Then the component uses `background: var(--glass-bg)` and a `backdrop-filter`. **Write only the standard `backdrop-filter`** — do not hand-add `-webkit-backdrop-filter` next to it (the minifier can drop the standard one; see `07-pitfalls/dev-vs-production-build.md`).

## Gotchas

- **Set the attribute before first paint** (a tiny inline script in `index.html`, or an SSR-safe approach) to avoid a flash of the wrong theme.
- **Test every component in both themes.** Contrast that passes on white can fail on near-black, and a light accent color chosen for dark surfaces may be too pale on white.
- **Respect `prefers-reduced-motion`** on theme transitions and everywhere else.
