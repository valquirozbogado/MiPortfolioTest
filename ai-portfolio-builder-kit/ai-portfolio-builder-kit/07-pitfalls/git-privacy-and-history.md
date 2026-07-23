# Pitfalls: Git, Privacy & History

The hardest privacy lessons live in version control. Renaming in the present doesn't erase the past.

## 1. Slugs leak names even when titles don't

**Symptom:** titles say "Project One" but the URL is `/works/realclient/realproduct`.
**Cause:** anonymizing visible copy but not the route slugs — which are shown in the address bar and shared in links.
**Fix:** anonymize slugs, i18n keys, and identifiers too. `/works/project-one/module-one`.
**Rule:** the URL bar is a publication surface. Treat slugs like titles.

## 2. A rename doesn't remove a name from history

**Symptom:** you renamed everything, but the old name is still in `git log`.
**Cause:** past commits are immutable snapshots; renaming adds a new commit, it doesn't rewrite old ones.
**Fix:** rewrite history across **all** commits — both file contents and commit messages:
```bash
# Preferred: git filter-repo. Fallback: git filter-branch.
# Replace tokens in every blob and every message, then drop backup refs and gc.
git filter-branch -f --tree-filter \
  "find . -type f \( -name '*.ts' -o -name '*.tsx' \) -exec sed -i 's/RealName/Alias/g' {} +" \
  --msg-filter "sed 's/RealName/Alias/g'" -- --all
git for-each-ref --format='%(refname)' refs/original | xargs -n1 git update-ref -d
git reflog expire --expire=now --all && git gc --prune=now
```
**Rule:** to erase a name from a repo, you must rewrite history, not just the latest commit.

## 3. History rewrite doesn't fully purge a public host

**Symptom:** after rewriting + force-pushing, the old commit is still reachable on GitHub by its SHA.
**Cause:** force-push orphans old commits but doesn't delete them; the host keeps them reachable by hash (e.g. via a deploy provider's build log) until it garbage-collects — timing not guaranteed.
**Fix (to be certain):** **delete and recreate the repo**, then push the clean history. Verify old SHAs return "not found."
**Trade-off:** this severs the deploy host's link (new repo ID) — you must **re-link** it (see `06-deployment/vercel.md`) and you lose deploy history.
**Rule:** for guaranteed removal from a public host, recreate the repo; a rewrite alone leaves orphans.

## 4. Deleting the repo needs an extra permission

**Symptom:** `gh repo delete` fails with a scope error.
**Cause:** the token lacks `delete_repo`.
**Fix:** `gh auth refresh -h github.com -s delete_repo` (interactive; the user completes it in a browser). This is a user action — the agent can't complete the device-code flow.

## 5. Secondary local copies can re-leak

**Symptom:** the name is gone from the main repo, but an old clone / a nested `src` backup / a second local repo still has it — and could be pushed by accident.
**Fix:** disconnect their remotes (`git remote remove origin`) or delete them. Local-only notes/docs that never publish are lower risk but worth tidying.
**Rule:** enumerate **every** copy on disk. A clean main repo doesn't help if a sibling folder still points at the same remote.

## 6. Always sweep before you push

Run the privacy grep (code + built output + history) before every push, not just the first. See `06-deployment/pre-deploy-checklist.md`. A security-audit step before pushing is worth automating.

## 7. Line-ending noise on Windows

**Symptom:** git warns "LF will be replaced by CRLF."
**Impact:** cosmetic; doesn't break anything. Optionally add a `.gitattributes` with `* text=auto eol=lf` for consistency across OSes.
