import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line that reads as a real autocorrect slip, the kind you only
// notice after it has already gone to the worst possible chat.
// Rewrite: dropped the Christmas dinner and nan version for the one
// that actually happened — told mum I'd bring a duck for the Sunday
// roast, autocorrect sent a duke to the whole family group instead.
process.umask(0o022);

const line =
  "Told mum I'd bring a duck for the Sunday roast, autocorrect sent \"a duke\" to the whole family group, and now she wants to know if he's bringing the gravy.";

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
