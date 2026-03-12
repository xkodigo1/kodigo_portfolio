import { printCommitError, readCommitMessage, validateCommitHeader } from "./commit-rules.mjs";

const source = process.argv[2];
const header = readCommitMessage(source);
const result = validateCommitHeader(header);

if (!result.valid) {
  printCommitError(header.trim().split(/\r?\n/u)[0] ?? "", result.error);
  process.exit(1);
}
