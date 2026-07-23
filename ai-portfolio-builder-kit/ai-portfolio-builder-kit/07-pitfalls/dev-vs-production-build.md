# Pitfalls: Dev vs. Production Build

The most treacherous class of bug: **it works in `npm run dev` and breaks in production.** Dev serves unminified; production minifies. Some things only fail after minification.

## The flagship case: `backdrop-filter` prefix stripping

**Symptom:** a glass/blur effect works perfectly in local dev and on the deployed site in Chrome, but shows **no blur in production** — often only in Firefox.

**Cause:** you wrote both the standard and the prefixed property:
```css
backdrop-filter: blur(8px) saturate(125%);
-webkit-backdrop-filter: blur(8px) saturate(125%);
```
The production minifier (esbuild) **deduplicates** these two declarations and keeps only the **last** one — the `-webkit-` version — dropping the standard property from the minified CSS. Firefox doesn't support `-webkit-backdrop-filter`, so the blur vanishes. Dev never minifies, so it looked fine locally the whole time.

**Fix:** write **only the standard property** and let the bundler add the prefix:
```css
backdrop-filter: blur(8px) saturate(125%);   /* that's it */
```
Verify by grepping the built CSS — you should see *both* `backdrop-filter` and `-webkit-backdrop-filter` present and balanced.

**Rule:** don't hand-write vendor prefixes next to the standard property for things the bundler auto-prefixes. (Exception: `mask-image` — the bundler does *not* auto-add `-webkit-mask-image`, and it isn't deduplicated the same way, so write both there.)

## How to catch this whole class of bug

1. **Build and inspect the output**, don't trust dev:
   ```bash
   npm run build
   grep -o "backdrop-filter:[^;}]*" dist/assets/*.css   # confirm the standard prop survived
   ```
2. **Test in a second engine.** Chrome-only testing hides prefix and standards bugs. Open Firefox too.
3. **Hard-refresh production** (Ctrl/Cmd+Shift+R) so you're not fooled by cached old CSS.

## Don't chase the wrong cause

In the real incident, an unrelated `z-index: -1` fix was applied first and *looked* plausible — but the actual culprit was the minifier stripping the property. The tell was that dev worked and prod didn't: that pattern points at the **build**, not at runtime CSS logic. When "works in dev, breaks in prod," inspect the built artifact before theorizing.

## Other dev/prod divergences to keep in mind

- **`devDependencies` not installed in prod.** A library imported by app code but listed under devDependencies can break a production install. Keep app-imported libs in `dependencies`.
- **Environment variables.** Anything not prefixed for client exposure (e.g. Vite's `VITE_`) won't exist in the client bundle. Remove references to env vars you don't actually inject.
- **Case-sensitive imports.** Windows/macOS are case-insensitive; Linux build servers are not. `import './Button'` vs a file named `button.tsx` breaks only in the cloud build.
