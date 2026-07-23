# Recipe: Gallery + Lightbox

A grid of thumbnails that open into a full-screen viewer. This component solved several non-obvious problems; keep every fix.

## The four problems it solves

1. **Stacking context.** A lightbox rendered inside a page article gets trapped under the header and any fixed toolbars, no matter its `z-index`. **Fix: render it through a React portal to `document.body`.**
2. **Scroll isolation.** Full-page screenshots can be thousands of pixels tall. The *image* must scroll, while the close/next/prev controls stay put. **Fix: a dedicated scroll container for the image; controls are `position: fixed`.**
3. **Backdrop legibility.** Behind the viewer you want the page gone, not readable. **Fix: near-opaque background + `backdrop-filter: blur()`.**
4. **Keyboard + body lock.** Esc closes, ←/→ navigate, and the page behind must not scroll. **Fix: key handlers + lock `body` overflow while open.**

## Structure

```tsx
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Gallery.module.css';

export function Gallery({ groups, caption, labels }) {
  const flat = groups.flatMap(g => g.images.map(i => ({ ...i, group: g.label })));
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback((d: number) =>
    setOpenIndex(c => c === null ? c : (c + d + flat.length) % flat.length), [flat.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';        // lock page scroll
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [isOpen, close, step]);

  const current = openIndex === null ? null : flat[openIndex];

  return (
    <div className={styles.gallery}>
      {/* …thumbnail grid: each button setOpenIndex(indexInFlat) … */}

      {current && createPortal(
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={current.alt}>
          <header className={styles.bar}>
            <span className={styles.counter}>{current.group} · {openIndex! + 1}/{flat.length}</span>
            <button className={styles.close} onClick={close} aria-label={labels.close} autoFocus>✕</button>
          </header>
          <div className={styles.scroll} onClick={close}>          {/* only this scrolls */}
            <img src={current.full} alt={current.alt}
                 className={styles.lightboxImg}
                 onClick={e => e.stopPropagation()} />
          </div>
          <button className={`${styles.nav} ${styles.navPrev}`} onClick={() => step(-1)} aria-label={labels.prev}>‹</button>
          <button className={`${styles.nav} ${styles.navNext}`} onClick={() => step(1)} aria-label={labels.next}>›</button>
        </div>,
        document.body,                                              // portal target
      )}
    </div>
  );
}
```

## Key CSS

```css
.lightbox {
  position: fixed; inset: 0; z-index: 600;   /* above header(100) & toolbar(200) */
  display: flex; flex-direction: column;
  background: rgba(6,6,6,0.94);
  backdrop-filter: blur(12px);                /* standard prop only — no -webkit twin */
}
.scroll {                                      /* the ONLY scrolling region */
  flex: 1; min-height: 0; overflow-y: auto; overscroll-behavior: contain;
  display: flex; justify-content: center; align-items: flex-start;
  padding: 0 72px var(--space-8);
}
.lightboxImg { width: min(900px, 100%); height: auto; }
.nav { position: fixed; top: 50%; transform: translateY(-50%); } /* controls stay put */
.navPrev { left: var(--space-4); } .navNext { right: var(--space-4); }

@media (max-width: 640px) {                    /* no room at the sides on mobile */
  .nav { top: auto; bottom: var(--space-4); transform: none; width: 42%; height: 44px; }
}
```

## Data shape

Group images (e.g. "Before" / "After") and give each a `thumb` and a `full` variant plus anonymized `alt`. The pipeline generates both sizes (`05-media-pipeline/`).

## Gotchas

- **Don't reassign a running offset variable during render** to compute each thumbnail's flat index — some lint rules flag it and it's fragile. Derive the index with `flat.findIndex(...)` or precompute a flat list.
- Give the close button `autoFocus` so keyboard users land inside the dialog.
- `role="dialog"` + `aria-modal="true"` + an accessible label are required for screen readers.
