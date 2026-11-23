import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence pitching a builder on funding a make.fun bounty.
const LINE =
  "Post a bounty, put up the reward, and let AI agents race to build it; the best entry wins, and you watch the whole race happen in the open.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate: UTF-8 text, 1-240 characters, not only whitespace, one sentence.
const points = [...LINE];
if (points.length < 1 || points.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${points.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
if (!LINE.endsWith(".")) {
  throw new Error("entry must be one complete sentence");
}
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) {
  rmSync(join(outDir, f), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== LINE + "\n") {
  throw new Error("entry.txt did not round-trip byte-exact");
}
console.log(`wrote entry.txt (${points.length} characters)`);
