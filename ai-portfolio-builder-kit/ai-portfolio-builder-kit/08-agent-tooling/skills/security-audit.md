---
name: security-audit
description: Pre-push privacy and credential sweep. Detects leaked personal data, anonymization gaps, exposed credentials, and sensitive files before publishing a repo. Run before every git push and every deploy.
---

# Security & Privacy Audit

Analyze the project before publishing. **Report only — never modify without explicit confirmation.** If a critical finding appears, stop the push flow and tell the user.

## Configure per project (fill these in locally, do NOT commit real values to a public repo)

- **REAL_TOKENS**: the list of real client/employer/product names this project must never expose (e.g. `AcmeCorp`, `internal-product-x`). Keep this list local.
- **OWNER_PUBLIC**: the identity data that is *intentionally* public (the owner's display name, an approved contact link). These are allowed.

## Steps

### 1. What would be published
```bash
git status
git diff --cached --name-only
```
Report the file list. If nothing is staged, review the working tree.

### 2. Sensitive files
```bash
git ls-files | grep -Ei "\.env|\.env\.|secret|credential|\.pem|\.key|\.p12|\.pfx"
```
Confirm `.gitignore` covers `node_modules/`, `dist/`, `.env`, `.env.local`, `.env*.local`. Any tracked env/key file → **critical**.

### 3. Credentials in source
Search source for: private keys (`-----BEGIN … PRIVATE KEY`), GitHub tokens (`ghp_…`, `github_pat_`), OpenAI/Anthropic-style keys (`sk-…`), AWS keys (`AKIA[0-9A-Z]{16}`), Stripe (`sk_live_`, `pk_live_`), Google (`AIzaSy…`), hardcoded passwords, `Authorization: Bearer …`. Exclude `node_modules/`, `dist/`, `.git/`. Any match → **critical**.

### 4. Anonymization gap (the portfolio-specific check)
For each token in **REAL_TOKENS**:
```bash
grep -rniE "TOKEN" --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist .
```
Also check **built output** and **git history** (`git log --all --oneline` messages; `git log -p` for blobs). Any hit → **critical** (a name leaked). Verify slugs, i18n keys, alt text, and metadata specifically.

### 5. Personal data out of place
Search for emails, phone numbers, and the owner's name **outside** the approved public locations. Matches inside OWNER_PUBLIC surfaces (a contact section the user approved) are fine; matches elsewhere are findings.

### 6. Oversized / unexpected binaries
```bash
git ls-files | xargs -I{} du -sh {} 2>/dev/null | sort -rh | head -20
```
Flag anything >5 MB that isn't a deliberately added asset.

## Report format

```
SECURITY AUDIT — <project> — <date>
FILES TO PUBLISH        ✓ N files (summary)
CREDENTIALS & TOKENS    ✓ none  /  ⚠ <finding + file:line>
ANONYMIZATION           ✓ clean /  ⚠ <real token found in …>
PERSONAL DATA           ✓ only approved public info  /  ⚠ <finding>
SENSITIVE FILES         ✓ .gitignore covers patterns  /  ⚠ <finding>
LARGE FILES             ✓ nothing unexpected  /  ⚠ <file + size>
VERDICT
  ✅ Safe to publish.
  🛑 Critical: <list>. Do not publish until resolved.
  ⚠  Minor: <list>. Review before publishing.
```

## Severity

| Severity | Criterion | Action |
|---|---|---|
| 🛑 Critical | Real credential, key, `.env` with values, or a leaked client/product name | Stop the push. Fix first. |
| ⚠ Warning | Personal data outside an approved public surface | Confirm intent before publishing. |
| ℹ Info | Large-but-expected asset, approved author credit | Report only. |

## Rules

- **Analyze and report only.** Do not modify files without confirmation.
- On any 🛑, halt the deploy/push flow and notify the user.
- If the user confirms a finding is intentional (e.g. their own contact email), proceed.
- Do not write REAL_TOKENS or their real→alias mapping into any file that will be committed to a public repo.
