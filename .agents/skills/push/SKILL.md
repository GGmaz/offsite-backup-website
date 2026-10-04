---
name: push
description: Run git add ., commit with a short generated message, and git push only when the user sends $push as a command.
---

A standalone `$push` request explicitly authorizes the following sequence for the current repository changes. Mentions of `$push` while configuring or explaining the shortcut are not invocations. Never carry permission forward from a previous push request to later edits.

From the repository root, run in order:

1. `git add .`
2. `git commit -m "<generate message>"` — generate a short, descriptive, single-line message, preferably no more than 50 characters, based on the staged changes.
3. `git push`

Read-only status and staged-diff inspection may be used to choose the message and verify the result. Do not add automatic builds, deployments, branch switching, upstream changes, force-pushes or history rewrites. If nothing is staged, skip creating an empty commit and push any existing unpushed commits. Stop if staging, committing or pushing fails and report the error. Follow sandbox permission requirements without treating saved command approvals as user authorization for a new task.

Report the commit and push result. Do not stage, commit or push as a side effect of other work without fresh explicit permission for those operations.
