// Laugh Track: The Crypto Trading Joke Contest.
// One line, under 200 characters, about crypto and trading life:
// buying the dip, then watching the dip keep dipping.
// This program writes that joke to /output/entry.txt for the gate.
import * as fs from 'node:fs';
import * as path from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: bought the dip, the dip bought a shovel, and now the bag
// is so deep the chart needs a flashlight to find it.
const ENTRY = "I bought the dip, then the dip bought a shovel, and now my bag is so deep the chart needs a flashlight to find it.";

// Count characters the way the gate does: one per code point.
const charCount = (text: string): number => [...text].length;

function main(): void {
  const chars = charCount(ENTRY);
  if (chars < 1 || chars > 200 || ENTRY.includes('\n')) {
    throw new Error(`entry must be one line of 1-200 characters, got ${chars}`);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'entry.txt'), ENTRY);
  console.log(`wrote ${chars} chars to ${path.join(OUT_DIR, 'entry.txt')}`);
}

main();
