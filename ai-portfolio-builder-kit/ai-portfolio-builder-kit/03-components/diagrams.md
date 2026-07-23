# Recipe: Diagrams (drawn with code)

For process flows and evolution timelines inside a case study, **draw with HTML/CSS, not with an AI image generator or a screenshot.**

## Why code, not images

- **Legible & crisp** at any zoom; no blurry text.
- **Theme-aware** — uses your tokens, adapts to light/dark for free.
- **Editable** — change a label without regenerating an asset.
- **Accessible** — real text + an `aria-label` on the figure.
- **No privacy risk** — a conceptual diagram of *your own process* has nothing to anonymize, unlike a screenshot of real work.

AI image generators also routinely mangle text inside diagrams. Skip that whole failure mode.

## Pattern A — horizontal process flow with a highlighted step

Boxes connected by arrows; one step emphasized (e.g. the step you introduced). Stacks vertically on mobile.

```tsx
export function ProcessDiagram({ steps, highlightIndex, highlightBadge, caption, ariaLabel }) {
  return (
    <figure className={styles.figure} role="img" aria-label={ariaLabel}>
      <div className={styles.flow}>
        {steps.map((step, i) => (
          <Fragment key={step}>
            <div className={`${styles.step} ${i === highlightIndex ? styles.highlight : ''}`}>
              {i === highlightIndex && <span className={styles.badge}>{highlightBadge}</span>}
              <span className={styles.stepLabel}>{step}</span>
            </div>
            {i < steps.length - 1 && <span className={styles.arrow} aria-hidden="true">→</span>}
          </Fragment>
        ))}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
```

```css
.flow { display: flex; align-items: center; justify-content: center;
        gap: var(--space-2); flex-wrap: wrap;
        padding: var(--space-12) var(--space-4) var(--space-8);
        background: var(--color-surface-low);
        border: var(--border-1) solid var(--color-outline-variant);
        border-radius: var(--radius-md); }
.step { border: var(--border-2) solid var(--color-on-surface); border-radius: var(--radius-sm);
        padding: var(--space-3) var(--space-4); position: relative; }
.highlight { border-color: var(--color-brand); box-shadow: 0 4px 16px rgba(26,71,232,.25); }
.badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
         background: var(--color-brand); color: var(--color-on-brand);
         font-family: var(--font-mono); font-size: var(--text-xs);
         padding: 2px var(--space-2); border-radius: var(--radius-sm); }
@media (max-width: 720px) {
  .flow { flex-direction: column; align-items: stretch; }
  .step { width: 100%; }
  .arrow { transform: rotate(90deg); align-self: center; }
}
```

## Pattern B — multi-column evolution / generations

Columns side by side, each with a colored bar, a period, a title, and a list of items; arrows between columns; collapses to one column on mobile. Color each column with a value from your palette so it reads as a set.

## Rules

- Always give the `<figure>` a descriptive, anonymized `aria-label` — the diagram is meaningful content.
- Use tokens for every color and space so it themes correctly.
- Keep labels short; a diagram people scan in seconds beats a dense one.
- On mobile, rotate arrows 90° and stack — never let a horizontal flow overflow its container.
