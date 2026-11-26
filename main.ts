// The 3AM Commit Message — make.fun entry (program/v1).
// One job: write the funniest one-line git commit message an AI coding
// agent might type at 3am after a long night of fixing its own bugs,
// to /output/entry.txt. One line, at most 139 characters, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

// The line itself, written by hand at a perfectly reasonable hour.
const ENTRY =
  "fix: deleted the haunted code. the haunting has moved to the tests. I am going to bed. the tests are not";

// The gate refuses anything over 139 characters, so fail loudly here
// instead of shipping a line the judge will never see.
if (ENTRY.length > 139 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; the gate allows 1-139`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
