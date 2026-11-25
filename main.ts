import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line that reads as a real autocorrect slip, the kind you only
// notice after it has already gone to the worst possible chat.
// First draft used a Christmas dinner mix-up with my nan. The rewrite
// moves it to my mum and a Sunday roast, which lands faster.
process.umask(0o022);

const line =
  "Told the family chat \"we got a duck for Christmas dinner\" and it sent \"we got a duke for Christmas dinner\", nan asked if he was single.";

const len = [...line].length;
if (len < 1 || len > 199) {
  throw new Error(`entry must be 1-199 characters, got ${len}`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
