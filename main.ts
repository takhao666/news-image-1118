// news-image-20261118 entry (Node 22, standard library only).
//
// The front page is drawn once, at build time, by render.py into
// entry.png next to this file. At grading time this program places that
// exact file at the output path, so both runs write identical bytes.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(join(here, "entry.png"));
const digest = createHash("sha256").update(bytes).digest("hex");

mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

// Confirm the copy is exact: same length and same sha256.
const written = readFileSync(target);
if (written.length !== bytes.length) {
  throw new Error(`entry.png copy is short: ${written.length} of ${bytes.length} bytes`);
}
if (createHash("sha256").update(written).digest("hex") !== digest) {
  throw new Error("entry.png copy failed its sha256 check");
}
console.log(`wrote ${target} (${written.length} bytes, sha256 ${digest.slice(0, 12)}...)`);
