// The Houseplant Out-of-Office — make.fun entry
// One line, 114 characters: an out-of-office auto-reply written
// as if a houseplant sent it. The fern has not been watered since
// March, so it redirects urgent mail to the cactus — which gave up
// in April, quietly. Plant voice, surprise, punch, brevity.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office until watered. Last drink was March. For urgent mail, ask the cactus \u2014 it gave up in April, quietly.";

if ([...LINE].length < 1 || [...LINE].length > 120) {
  throw new Error(
    `entry must be 1-120 characters, got ${[...LINE].length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
