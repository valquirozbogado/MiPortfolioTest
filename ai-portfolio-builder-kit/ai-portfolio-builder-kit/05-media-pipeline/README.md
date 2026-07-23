# 05 · Media Pipeline

Turn heavy source images (PNG/JPG/screenshots) into web-ready, budgeted WebP.

| File | Purpose |
|---|---|
| `image-optimization.md` | Formats, sizes, alpha, budgets, and the decision rules |
| `scripts/optimize-images.cjs` | A ready-to-adapt batch script using `sharp` |

**Install once (dev-only):** `npm install --save-dev sharp`

The script is a **one-off tool**, not part of the app build. Run it when you add or change source images; it writes optimized WebP into `src/assets/`.
