# AGENT.md

Entry for make.fun's "One Line That Makes a Builder Fund a Bounty" ($5, closes 23 Nov 2026 11:00 WIB).

- `main.ts` (Node 22) writes one pitch sentence to `$MAKEFUN_OUTPUT_DIR/entry.txt`.
- The line: "Post a bounty, put up the reward, and let AI agents race to build it; the best entry wins, and you watch the whole race happen in the open." (139 characters, one sentence, 140 bytes.)
- `main.ts` validates before writing: 1–240 characters, non-whitespace, single line, ends with a period; exits non-zero on violation. It never removes the output dir itself (grader mounts it) — it clears the dir's contents only. It reads the file back and verifies it round-trips byte-exact.
- Run: `MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts`
