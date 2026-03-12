import { execSync } from "node:child_process";

import { printCommitError, validateCommitHeader } from "./commit-rules.mjs";

const range = process.argv[2] ?? process.env.COMMIT_RANGE ?? "HEAD~1..HEAD";
const logOutput = execSync(`git log --format=%H%x1f%s%x1e ${range}`, {
  encoding: "utf8",
  stdio: ["ignore", "pipe", "pipe"],
}).trim();

if (!logOutput) {
  process.exit(0);
}

const failures = [];

for (const record of logOutput.split("\u001e")) {
  if (!record.trim()) {
    continue;
  }

  const [sha, subject] = record.split("\u001f");
  const result = validateCommitHeader(subject);

  if (!result.valid) {
    failures.push({ sha, subject, error: result.error });
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`Commit ${failure.sha.slice(0, 7)} failed validation.`);
    printCommitError(failure.subject, failure.error);
    console.error("");
  }
  process.exit(1);
}
