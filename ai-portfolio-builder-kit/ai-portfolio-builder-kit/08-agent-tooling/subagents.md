# Subagents & Parallel Work

Some agents (e.g. Claude Code) can spawn subagents — separate contexts for delegated work — and "forks" that inherit the current context. Used well, they keep the main context lean. Used carelessly, they burn budget re-deriving what you already know.

## When subagents help a portfolio build

- **Broad read-only exploration.** "Find every place a project name appears across the repo" or "map the component conventions" — a search-oriented subagent fans out and returns only the conclusion, keeping large file dumps out of your main context.
- **Independent, parallelizable chunks.** Optimizing a large image set while drafting copy, for example — genuinely separate tracks.
- **A focused audit.** Handing the built site to an audit subagent (a11y, SEO) so its verbose output doesn't clog the main thread.

## When NOT to spawn one

- **For a task you already have the context for.** A fresh subagent starts cold and re-derives what you know — that's the expensive path. "Thorough" or "multi-part" is not a reason to spawn; handle it inline.
- **For anything needing tight back-and-forth** with the user or with your current working state.

## Rules

- **Don't spawn unless it clearly pays for itself** in saved context or real parallelism.
- **Give a subagent a crisp, self-contained brief** — it doesn't share your working memory (a fork does).
- **Privacy still applies inside subagents.** A subagent auditing for leaked names must be told the tokens to look for and must not write real values into a shared/committed file.

## Practical pattern for this kit

The single highest-value delegation is a **privacy/anonymization sweep** near shipping: point a read-only search agent at the whole repo (and history) with the list of real tokens, and have it report any hit. It's exactly the kind of exhaustive scan that benefits from a dedicated context — and catching one leak pays for it many times over.
