# Anonymization Protocol

> **The unbreakable rule:** real client names, employer names under NDA, internal product names, confidential data, and personal details beyond what the user intentionally exposes must never reach the code, the URLs, the metadata, the git history, or the deployed site.

Most people anonymize the **visible titles** and stop there. That's the mistake. A real name hides in far more surfaces than the headline. This is the full list.

## Every surface where a name can leak

| Surface | Why it leaks | Example |
|---|---|---|
| Visible titles & body copy | Obvious | "Case study: RealCorp" |
| **URL slugs** | Shown in the browser address bar — as public as the title | `/works/realcorp/internal-product` |
| **Page `<title>` & meta tags** | Shown in the browser tab, search results, social previews | `<title>RealCorp Case Study</title>` |
| **i18n keys** | Key names ship in the bundle; readable in the built JS | `diagram_realcorp_caption` |
| **Code identifiers** | Variable names, object keys, component props | `const REALCORP_COLOR = …` |
| **Alt text & captions** | Published strings | `alt="RealCorp dashboard"` |
| **Image contents** | Logos, real data, recognizable UI in screenshots | a screenshot with the client logo |
| **Image file names** | Fingerprinted but the source name can persist | `realcorp-hero.png` |
| **Image EXIF metadata** | Photos can embed GPS location, author name, device, software | a phone photo with GPS coordinates |
| **Commit messages** | Public in git history | `"fix realcorp gallery"` |
| **Git history (old commits)** | Survive a rename; reachable by SHA even after a rewrite | an old commit with the real slug |
| **Testimonials** | Real reviewer names | "— Jane Doe, RealCorp" |
| Comments & docs in the repo | Often forgotten | `// RealCorp wants…` |

## The de-identification workflow

1. **Agree on an alias per project during intake.** e.g. real name → "a B2B insurance platform" / "Project 1". Never store the real→alias mapping in the public repo (it's a decoder).
2. **Apply the alias everywhere in the table above**, not just the title. Use one search across the whole repo for each real token and confirm zero hits before shipping.
3. **Neutralize identifiers and keys** — name them by function: `diagram_process_caption`, `PROJECT_ONE_COLOR`. No real tokens.
4. **Handle images** (next section).
5. **Sweep git history** (next section).

## Handling images of confidential work

You usually can't publish a real screenshot. Options, best first:

- **Recreate, de-identified.** Rebuild the UI as a portfolio mockup: shift the hue 15–40°, replace all labels with generic equivalents in the same domain, swap the icon set, invent fake data, remove logos. Keep the *structure and complexity* (that's what shows your skill), change every identifier.
- **Two-stage generation** when a single AI prompt won't render clean UI text: stage 1 produces the de-identified UI (real components/text), stage 2 composes it into a hero (isometric, transparent background, shadows). Don't ask the compositor to reinterpret colors/text — only to compose.
- **Redraw diagrams with code** (see `03-components/diagrams.md`) — nothing to anonymize.
- **Omit.** If it can't be safely shown, leave it out. A missing image beats a leaked one.

> **EXIF metadata:** original photos (especially phone photos) can embed GPS coordinates, the author's name, and device info. The media pipeline (`05-media-pipeline/`) strips this by default — `sharp` drops metadata unless explicitly told to keep it — so route **every** published image through the pipeline; never copy an original into the public assets folder.

> **Do not "blur to hide."** Baking a blur over a screenshot to obscure text looks bad *and* isn't reliably safe (text can remain legible or recoverable). De-identify the source instead. A blur baked onto a transparent hero also destroys the floating-mockup look — see `03-components/figure-image.md`.

## Sweeping git history

Renaming in the latest commit doesn't remove a name from **past** commits. Public hosts keep those reachable.

1. **Rewrite history** to replace tokens across all commits (blobs *and* commit messages). Tools: `git filter-repo` (preferred) or `git filter-branch`.
2. **Rewrites don't fully purge a public host.** Orphaned commits stay reachable by their SHA (e.g. via a deploy provider's build log) until the host garbage-collects — timing not guaranteed.
3. **To be certain, delete and recreate the repo**, then push the clean history. This severs the deploy host's link (new repo ID) — you must re-link it (see `06-deployment/`).
4. **Verify:** after the rewrite/recreate, confirm the old commit SHAs return "not found" and a code search for each real token yields zero results.
5. **Local hygiene:** old repo clones, `src` backups, and secondary local repos can still hold the names and could be pushed by accident. Disconnect their remotes (`git remote remove origin`) or delete them. Notes/docs on disk that never publish are lower risk but worth cleaning for tidiness.

## Final privacy sweep (before every deploy)

```
# For each real token the project ever used:
grep -rniE "realname1|realname2|realproduct" --exclude-dir=node_modules --exclude-dir=.git .
# Expect: zero hits. Also check the built output and git log.
```

Run it against **code, built output, and git history.** Green means safe. See `06-deployment/pre-deploy-checklist.md`.

## What is intentionally public

The user's **own name as author credit**, and any **contact link they explicitly approved**, are meant to be visible. Anonymization protects *clients and confidential work*, not the portfolio owner's chosen public identity.
