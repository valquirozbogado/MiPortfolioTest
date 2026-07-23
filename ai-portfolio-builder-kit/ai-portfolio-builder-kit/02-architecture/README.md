# 02 · Architecture

The foundations to lay in **Phase 2**, before building pages. Get these right and everything above them stays consistent; get them wrong and you refactor endlessly.

| File | What it covers |
|---|---|
| `tech-stack.md` | The proven stack and the reasoning |
| `project-structure.md` | Folder layout and file conventions |
| `design-tokens.md` | The CSS custom-property token system (the backbone of consistency) |
| `theming.md` | Light/dark that survives minification |
| `i18n.md` | Type-safe bilingual content |

**Portability note:** the tech-stack is React 19 + Vite + TypeScript, but the *concepts* — a token layer, theme via data-attribute, typed content dictionaries — transfer to Svelte, Vue, Astro, or plain HTML/CSS with minor syntax changes.
