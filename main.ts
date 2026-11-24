import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Your Ex — the word my ex would use to describe me.
// Exactly one word, nothing else. It stings because it is true:
// I never replied, I just... vanished. The judge wants the funniest,
// most painfully honest single word — "ghoster" is the one word that
// lands instantly, needs no explanation, and cannot be swapped for a
// near synonym without losing its edge.
const WORD = "ghoster";

// Guard: the gate requires 1–24 characters, not only whitespace,
// and exactly one word.
if (!/^[^\s]{1,24}$/.test(WORD)) {
  throw new Error("entry must be exactly one word of 1-24 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote ${WORD.length}-character entry to /output/entry.txt`);
