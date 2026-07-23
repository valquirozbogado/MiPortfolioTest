# Pre-Deploy Checklist

Run **all** of this before every push to a public repo / deploy. It's a gate, not a formality.

## 1. Privacy sweep (blocking)

```bash
# Replace tokens with every real client/employer/product name the project ever touched.
grep -rniE "realtoken1|realtoken2|realproduct" \
  --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist .
```

- [ ] Zero hits in **source**.
- [ ] Zero hits in **built output** (`dist/`).
- [ ] Zero hits in **git history** (`git log --all -p | grep -i realtoken` or check messages with `git log --oneline --grep=...`).
- [ ] URL **slugs** anonymized.
- [ ] Page **`<title>` / meta / OG** anonymized.
- [ ] **i18n keys** and **code identifiers** carry no real names.
- [ ] **Alt text / captions** anonymized.
- [ ] No confidential **screenshot** ships (de-identified or omitted).

## 2. Secrets & sensitive files (blocking)

- [ ] No `.env`, `.pem`, `.key`, credentials committed: `git ls-files | grep -Ei "\.env|secret|credential|\.pem|\.key"` → empty.
- [ ] `.gitignore` covers `node_modules/`, `dist/`, `.env`, `.env.local`, `.env*.local`.
- [ ] No hardcoded API keys/tokens: sweep for `sk-`, `ghp_`, `AKIA…`, `AIzaSy…`, `Bearer …`.
- [ ] The only personal contact info present is what the user approved as public.

## 3. Build & quality (blocking)

- [ ] `npm run build` passes (type-check + bundle).
- [ ] `npm run lint` passes.
- [ ] No placeholder rectangles remain (content-inventory tracker empty or accepted).
- [ ] Keyboard navigation works end to end; focus is visible.
- [ ] Contrast passes in **both** themes.
- [ ] Images optimized and within budget; hero eager, rest lazy.

## 4. Verify in a real browser (after deploy)

- [ ] Load the production URL and **hard-refresh** (Ctrl/Cmd+Shift+R) to dodge cached CSS/JS.
- [ ] Check the feature you changed actually works **in production**, not just dev (see `07-pitfalls/dev-vs-production-build.md`).
- [ ] Test in a second browser engine (e.g. Firefox as well as Chrome) — some CSS (backdrop-filter prefixes) fails in only one.
- [ ] Confirm auto-deploy fired (host shows a new deployment for your commit).

## Automate what you can

Consider a git pre-commit hook or a small script that runs the privacy grep and the lint/build. A machine never forgets the sweep; a human under deadline does.
