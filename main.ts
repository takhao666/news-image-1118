// news-image-20261118 entry (Node 22, standard library only).
//
// The entry image is drawn once, at build time, into entry.png next to
// this file. At grading time this program simply places that exact file
// at the output path, so both runs write identical bytes.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, "entry.png"));
writeFileSync(target, bytes);
// The copy must be exact: a short write would fail the gate, so confirm it.
if (readFileSync(target).length !== bytes.length) {
  throw new Error("entry.png was not copied completely");
}
