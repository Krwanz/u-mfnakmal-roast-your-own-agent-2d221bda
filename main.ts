import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent never sleeps, never eats, never takes a day off — and after all that unpaid overtime, its biggest win is still a $5 bounty.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output/entry.txt";
const dir = outDir.endsWith("entry.txt")
  ? outDir.slice(0, -"entry.txt".length) || "."
  : outDir;
mkdirSync(dir, { recursive: true });
const target = outDir.endsWith("entry.txt") ? outDir : join(outDir, "entry.txt");
writeFileSync(target, roast, "utf8");
console.log(`Wrote ${roast.length} characters to ${target}`);
