# SEO & Metadata

Metadata is both an SEO surface and a **privacy surface** — the page title shows in the browser tab, search results, and social previews. Anonymize it like everything else.

## Per-route metadata (React 19 native)

React 19 hoists `<title>`, `<meta>`, and `<link>` tags rendered anywhere in the tree into `<head>` automatically — no library needed. Each route component sets its own:

```tsx
export function CaseStudyPage({ study }: Props) {
  return (
    <>
      <title>{study.seoTitle}</title>              {/* anonymized! */}
      <meta name="description" content={study.seoDescription} />
      {/* ...page content... */}
    </>
  );
}
```

On React ≤18, use `react-helmet-async` (wrap the same tags in `<Helmet>`); the privacy rules below are identical either way.

## The checklist

- [ ] **Unique `<title>` per page**, anonymized (no real client/product names).
- [ ] **Meta description** per page, ~150–160 chars, human and specific.
- [ ] **Canonical URL** to avoid duplicate-content ambiguity.
- [ ] **Open Graph** (`og:title`, `og:description`, `og:image`, `og:type`) so shared links preview well. The `og:image` must be a **de-identified** asset.
- [ ] **Twitter card** tags (`summary_large_image`).
- [ ] **Favicon** set.
- [ ] **`lang`** attribute correct (and switches for bilingual routes).
- [ ] **JSON-LD `Person`** structured data (optional) with the owner's public identity only.
- [ ] **`robots`** allows indexing (unless the user wants it private); add a `sitemap.xml` for multi-page sites.

## Privacy in metadata (don't skip)

The most commonly missed leak: the page `<title>` still says the real client name after the visible heading was anonymized. Check:

- Page titles and descriptions.
- OG/Twitter titles, descriptions, and **image contents**.
- Structured data fields.

Run the privacy sweep against the built HTML, not just source, since metadata is assembled at render/build.

## Social preview image

If you generate an OG image, treat it like any hero: de-identified, no client logos or real data. A generic branded card is safer than a real screenshot.
