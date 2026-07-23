# Recipe: Figure (image with caption)

A single image with an optional caption. The important decision it encodes: **framed vs. bare.**

## The framed / bare distinction

- **Framed** (`contained`): a photo or screenshot sits inside a bordered box with a fixed aspect ratio and `object-fit: cover`. Good for photos.
- **Bare**: a transparent PNG/WebP mockup (e.g. floating device screens with an alpha channel) renders directly on the page — **no frame, no background, no forced aspect ratio.** Forcing a transparent hero into a framed box produces the classic "gray rectangle behind a blurry mockup" look. If the source has an alpha channel and is meant to float, render it bare.

## Component

```tsx
import styles from './Figure.module.css';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;      // framed only, e.g. "2 / 1"
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  maxWidth?: string;         // cap width for tall/portrait images
  bare?: boolean;            // transparent asset → no frame
  priority?: boolean;        // hero only: eager + high fetchpriority
}

export function Figure({
  src, alt, caption, aspectRatio, objectFit = 'cover',
  objectPosition, maxWidth, bare = false, priority = false,
}: FigureProps) {
  const img = (
    <img
      src={src}
      alt={alt}
      className={bare ? styles.bareImg : styles.img}
      style={bare ? undefined : { objectFit, objectPosition }}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
  return (
    <figure className={styles.figure} style={{ maxWidth }}>
      {bare ? img : <div className={styles.frame} style={{ aspectRatio }}>{img}</div>}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
```

```css
.figure { margin: var(--space-8) 0; }
.frame {
  width: 100%; overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--color-surface-low);
  border: var(--border-1) solid var(--color-outline-variant);
}
.img { display: block; width: 100%; height: 100%; }
.bareImg { display: block; width: 100%; height: auto; } /* no frame, no bg */
.caption {
  margin-top: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-on-surface-variant);
}
```

## Rules

- **Hero image:** `priority` (eager + `fetchPriority="high"`). It's the first paint; don't lazy-load it.
- **Everything else:** `loading="lazy"` + `decoding="async"`.
- **Portrait/tall images:** set `maxWidth` (e.g. `440px`) so they don't consume half a scroll.
- **Transparent assets:** `bare`. Do not bake a background or blur into them in the pipeline (see `05-media-pipeline/`).
- **Alt text is content, not decoration.** Write meaningful, anonymized alt text and route it through `t()` if bilingual.

## Privacy

Alt text and captions are published strings — anonymize them. "Dashboard for [B2B platform]" not "Dashboard for [RealClient]".
