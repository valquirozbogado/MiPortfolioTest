# Accessibility

Baseline a11y for a portfolio. Not exhaustive WCAG, but the things that matter and are cheap to get right.

## Keyboard

- **Everything interactive is reachable and operable by keyboard.** Links, buttons, the theme/language toggles, gallery thumbnails, lightbox controls.
- **Visible focus.** Never remove focus outlines without replacing them. Use `:focus-visible` with a clear ring (`outline: 2px solid var(--color-focus-ring)`).
- **Logical tab order.** Follows visual order; no traps. In a modal/lightbox, focus moves inside on open (autofocus the close button) and Esc closes it.

## Semantics & ARIA

- **Real elements:** `<button>` for actions, `<a>` for navigation, `<nav>`, `<header>`, `<main>`, `<footer>`, `<figure>`/`<figcaption>`.
- **Modals/lightboxes:** `role="dialog"`, `aria-modal="true"`, an accessible label.
- **Decorative icons:** `aria-hidden="true"`; the adjacent text carries meaning.
- **Meaningful diagrams/images:** a descriptive (anonymized) `alt` or `aria-label`.
- **Bilingual:** set `lang` appropriately and translate ARIA labels too.

## Contrast

- Body text meets **4.5:1**; large text **3:1**. Check in **both themes** — an accent tuned for dark surfaces may fail on white.
- Don't rely on color alone to convey state (e.g. a highlighted diagram step also gets a badge/border, not just a color).

## Motion

- Respect `@media (prefers-reduced-motion: reduce)`: disable scroll-reveals, hover transforms, and transitions for users who ask for less motion.
- Keep animations short and compositor-friendly (transform/opacity), not layout-triggering.

## Quick audit pass

1. Tab through the whole site — can you reach and operate everything? Is focus always visible?
2. Open the lightbox with the keyboard; Esc closes; arrows navigate.
3. Toggle theme — recheck contrast on key text.
4. Run an automated checker (Lighthouse/axe) and fix real findings.
