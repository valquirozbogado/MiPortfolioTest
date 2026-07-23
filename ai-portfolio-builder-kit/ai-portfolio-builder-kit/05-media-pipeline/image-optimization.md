# Image Optimization

## Format & budget defaults

| Use | Format | Max width | Budget |
|---|---|---|---|
| Hero (floating mockup) | WebP (keep alpha) | 1200px | ~180–200 KB |
| Case study screenshot | WebP | 1100–1600px | ~100–170 KB |
| Gallery thumbnail | WebP | 800×600 (cover) | ~15–50 KB |
| Gallery full | WebP | ≤1600px wide | ~80–170 KB |
| Photo (portrait) | WebP | natural, capped display width | ~60–120 KB |

WebP at quality 72–85 is the sweet spot for photos and UI. Tune per image; check the output size.

## The decision rules

- **Preserve alpha on transparent assets.** If the source PNG has an alpha channel and is meant to float (device mockups), export WebP with `alphaQuality: 100` and render it **bare** (no frame). Do **not** flatten it onto a background or bake blur — that produces the "gray box behind a blurry image" bug.
- **Generate thumb + full for galleries.** Thumbnails are cropped to a consistent ratio (`cover`, top-anchored); fulls preserve the whole image. The lightbox shows the full and scrolls if it's tall.
- **Don't upscale.** Cap width to the largest size actually displayed (×2 for retina at most).
- **Lazy-load everything except the hero.** The hero is `eager` + `fetchPriority="high"`; the rest `loading="lazy"`.

## Verifying alpha and size

```js
const sharp = require('sharp');
sharp('source.png').metadata().then(m =>
  console.log(m.width + 'x' + m.height, 'alpha:', m.hasAlpha, 'channels:', m.channels));
```

If `alpha: true`, treat it as a bare/transparent asset.

## Why a script, not manual export

A repeatable script means re-running is free when you add images, the settings are documented in code, and the whole set stays consistent. Keep it in `scripts/` and commit it (it contains no secrets). See `scripts/optimize-images.cjs`.

## Privacy reminder

Optimizing an image does **not** anonymize it. A resized screenshot still shows the client logo and real data. De-identify the *source* first (see `04-content-and-anonymization/anonymization-protocol.md`), then optimize.

One thing the pipeline **does** handle: `sharp` strips EXIF metadata (GPS location, author, device) by default — as long as you don't opt into keeping it (`.keepMetadata()` / `.withMetadata()`). That's one more reason every published image must go through the script; never hand-copy an original photo into public assets.
