# Deploying on Netlify

## Config (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

# SPA fallback: every route serves index.html (react-router handles it client-side)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Cache fingerprinted assets aggressively; never cache HTML
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

## Notes

- **The SPA redirect is required** for client-side routing. Without it, deep links (`/works/project-one`) 404 on refresh.
- **Cache strategy:** Vite fingerprints asset filenames, so they're safe to cache forever (`immutable`). HTML must not be cached, or users get stale references after a deploy.
- Like Vercel, Netlify serves the **last successful build**; the site survives repo issues but only updates on a new build.
- Same privacy discipline applies — run the pre-deploy checklist regardless of host.

## Pick one host

You don't need both. Keeping configs for two hosts is fine as documentation, but connect only one to avoid double deploys and confusion about which URL is canonical.
