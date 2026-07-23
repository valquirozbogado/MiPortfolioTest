# Principles — Do's and Don'ts

The philosophy behind every decision in this kit. When a specific doc doesn't cover your case, fall back to these.

## Core philosophy

**A portfolio is evidence, not a blog.** A UX/UI designer who writes 2,000 words about the value of visual design but shows zero screenshots has contradicted themselves. Show the work. Text supports the visuals; it doesn't replace them.

**Legibility beats cleverness.** The recruiter spends seconds, not minutes. Lead every page with the outcome. A diagram that's scanned in 3 seconds beats three paragraphs describing the same process.

**Every element earns its place.** No placeholder rectangles for content that doesn't exist yet on a shipped site. No decorative image that says nothing. If it doesn't inform or move the reader forward, cut it.

---

## Do

- **Do lead with the result.** First line of any page/section = what happened or what you'd want as the TLDR.
- **Do reference design tokens**, never raw hex or pixel values, so theming and consistency hold.
- **Do preserve transparency** on PNG/WebP mockups meant to float on the page — no frame, no baked background.
- **Do render overlays (lightbox, modals) via a portal to `body`** so they escape parent stacking contexts.
- **Do let the bundler add vendor prefixes.** Write only the standard CSS property.
- **Do run the production build and inspect it** before calling a visual feature done.
- **Do anonymize as you write**, not as a cleanup pass.
- **Do sketch layout changes in ASCII and confirm** before coding them.
- **Do keep the hero image eager/high-priority** and lazy-load everything else.

## Don't

- **Don't invent CSS token names.** A reference to a token that doesn't exist fails silently and the style just… doesn't apply. Verify the token exists.
- **Don't hand-write `-webkit-` prefixes next to the standard property.** Minifiers deduplicate and may keep only the prefixed one, silently dropping the standard property in production. (See `07-pitfalls/dev-vs-production-build.md`.)
- **Don't put `z-index: -1` on a `backdrop-filter` element.** It gets an empty backdrop and the blur does nothing. Stack it at `0` and lift siblings to `1`.
- **Don't nest a live backup copy of `src/` inside the project.** File watchers choke on it (EBUSY) and it bloats everything. Keep backups outside the project tree.
- **Don't reassign a variable during render** to compute indices — it trips lint rules and causes inconsistent renders. Derive values instead.
- **Don't put brand/client/product names in URL slugs.** The slug shows in the browser address bar — it's as public as the title. Anonymize slugs too.
- **Don't assume a git history rewrite purges a public host.** Orphaned commits stay reachable by SHA until GC. To be certain, delete and recreate the repo (and re-link the deploy host).
- **Don't ship placeholder rectangles.** They read as "unfinished," which is worse than a shorter, complete page.

---

## The privacy principle above all

If any other principle ever appears to conflict with privacy, **privacy wins.** A slightly less impressive but safe portfolio beats an impressive one that leaks an NDA'd client. Anonymize, or omit.
