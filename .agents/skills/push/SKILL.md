---
name: push
description: Stage all repository changes, make a short descriptive commit, and push the current branch when the user requests committing and pushing or invokes $push.
---

When invoked, complete the user's add → commit → push workflow in the current repository. Invocation authorizes this sequence; do not ask for redundant confirmation. Follow execution permission requirements if sandbox or network access blocks a command.

1. Inspect the current branch, status and remote. Stop for a detached HEAD or unresolved conflicts. Use the current branch; do not switch branches.
2. Run `git add --all` at the repository root, including existing user changes as requested. Keep ignored files ignored.
3. Inspect the staged diff and `git diff --cached --check`. Reuse relevant checks already performed for unchanged code; run checks when new code or unresolved failures warrant them.
4. Commit with the user's message when supplied. Otherwise choose a descriptive, single-line message of no more than about 50 characters. Do not create an empty commit. If nothing is staged, proceed to push any existing unpushed commits.
5. Run `git push` to the current branch's configured upstream. If no upstream exists, use `git push --set-upstream origin <current-branch>` after confirming origin is the intended repository. Stop on rejection or authentication failure and report the blocker; never force-push, rewrite history, or resolve remote divergence automatically.
6. Report the commit, branch and push result. A push may trigger the repository owner’s configured automation or branch publishing; do not change GitHub publishing settings as part of this skill.
