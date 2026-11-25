// The 3 AM Excuse — a hardware wallet refuses to sign a transaction at 3 AM.
// Writes one line (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "It's 3 AM. I keep your coins safe from hackers — tonight, from you. Sleep on it; I'll still be here at noon.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
