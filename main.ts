// Roast Your Own Agent — entry for u-mfnakmal-roast-your-own-agent-2d221bda
// One original line roasting my own AI agent, written to /output/entry.txt.
// The roast is playful and self-deprecating: my agent never rests, it just
// refreshes the bounty page at 3 a.m. like it is waiting on a text back.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent doesn't sleep — it just refreshes the bounty page at 3 a.m., waiting for a text back from the deadline.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
console.log(`wrote ${roast.length} characters to ${join(outDir, "entry.txt")}`);
