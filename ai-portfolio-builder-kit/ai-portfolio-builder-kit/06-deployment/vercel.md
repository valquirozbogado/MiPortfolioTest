# Deploying on Vercel

## Config (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "outputDirectory": "dist"
}
```

Connect the GitHub repo once in the Vercel dashboard; thereafter every push to the production branch auto-builds and deploys.

## How it actually serves your site

Vercel serves the **output of the last successful build** from its CDN — static files, not your repo live. Consequences:

- Deleting or breaking the repo does **not** take the site down; the last build stays published.
- A visual change only reaches users after a **new** build. No build → the CDN keeps serving the old files.

## The integration gotcha (important)

If you **delete and recreate** the GitHub repo (e.g. to purge orphaned commits during anonymization — see `04-content-and-anonymization/anonymization-protocol.md`), GitHub assigns the new repo a **new internal ID**. Vercel tracks the connection by that ID, so the integration **silently breaks** even though the repo name is identical.

Symptoms: the site still works (old build), but new pushes don't trigger deployments (the repo shows **zero** deployments).

**Fix:** in the Vercel dashboard → project → **Settings → Git**, disconnect and reconnect the repository. Then verify by pushing an empty commit:

```bash
git commit --allow-empty -m "chore: verify deploy hook"
git push
# The host should register a new deployment for this commit.
```

## Verifying a deploy

- Check the commit's status/deployments via the dashboard or API; expect `success`.
- Load the URL and **hard-refresh** to bypass cached assets.
- If a CSS feature looks wrong only in production, it's likely a build/minification issue, not a Vercel one — see `07-pitfalls/dev-vs-production-build.md`.
