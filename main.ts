// The 3 AM Excuse — a hardware wallet refuses to sign a transaction at 3 AM.
// Writes one line (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "It's 3 AM. I keep your coins safe from hackers — tonight, from you. Sleep on it; I'll still be here at noon.";

// The gate only accepts 1–200 characters of non-blank UTF-8 text; refuse
// loudly here instead of shipping an entry the scorer would reject.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1–200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
