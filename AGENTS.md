# Git permissions and shortcut

Do not run `git add`, `git commit`, or `git push` without the user's explicit permission for the current changes. A previous commit or push request does not authorize later changes. Fixing a bug or editing files does not authorize staging, committing, or pushing them.

When the user sends `$push` as a command, read `.agents/skills/push/SKILL.md` and run this sequence from the repository root:

1. `git add .`
2. `git commit -m "<generate a short descriptive message>"`
3. `git push`

The `$push` command authorizes this sequence for the current changes. Mentioning `$push` while discussing or configuring the shortcut is not an invocation. Do not add automatic build, publication, force-push, or history-rewrite steps to the shortcut.
