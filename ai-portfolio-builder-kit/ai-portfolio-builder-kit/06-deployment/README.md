# 06 · Deployment

Ship it — safely.

| File | Purpose |
|---|---|
| `pre-deploy-checklist.md` | The gate to run before **every** push. Includes the privacy sweep. |
| `vercel.md` | Vercel config + the integration gotcha |
| `netlify.md` | Netlify config + caching headers |

**Golden rule:** the privacy sweep in the checklist runs before every deploy, not just the first. A confidential name can slip in during any edit.
