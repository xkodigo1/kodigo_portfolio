import fs from "node:fs";

const COMMIT_RULES = {
  build: ["\\ud83d\\udce6", ":package:"],
  chore: ["\\ud83d\\udd27", "\\ud83e\\uddf0", ":wrench:", ":toolbox:"],
  ci: ["\\ud83d\\udc77", ":construction_worker:"],
  docs: ["\\ud83d\\udcdd", ":memo:"],
  feat: ["\\u2728", ":sparkles:"],
  fix: ["\\ud83d\\udc1b", ":bug:"],
  perf: ["\\u26a1", "\\u26a1\\ufe0f", ":zap:"],
  refactor: ["\\u267b", "\\u267b\\ufe0f", ":recycle:"],
  revert: ["\\u23ea", "\\u23ea\\ufe0f", ":rewind:"],
  style: ["\\ud83d\\udc84", ":lipstick:"],
  test: ["\\u2705", ":white_check_mark:"],
};

const COMMIT_PATTERN =
  /^(?<gitmoji>(:\w[\w+-]*:|(?:\p{Extended_Pictographic}\uFE0F?)+)) (?<type>build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(?:\((?<scope>[a-z0-9-]+(?:\/[a-z0-9-]+)*)\))?(?<breaking>!)?: (?<description>[a-z0-9][^\r\n]{2,100})$/u;

const EXAMPLES = [
  ":sparkles: feat(hero): launch editorial landing layout",
  ":bug: fix(ci): restore pnpm cache key",
  ":memo: docs(readme): document strict workflow",
];

function normalizeHeader(value) {
  return value.trim().split(/\r?\n/u)[0]?.trim() ?? "";
}

export function validateCommitHeader(header) {
  const normalizedHeader = normalizeHeader(header);
  const match = COMMIT_PATTERN.exec(normalizedHeader);

  if (!match?.groups) {
    return {
      valid: false,
      error:
        "Commit header must follow `gitmoji type(scope): description` using a Conventional Commit type.",
    };
  }

  const { gitmoji, type, description } = match.groups;
  const allowedGitmojis = COMMIT_RULES[type];

  if (!allowedGitmojis?.includes(gitmoji)) {
    return {
      valid: false,
      error: `Type \`${type}\` must use one of: ${allowedGitmojis.join(", ")}.`,
    };
  }

  if (/^[A-Z]/u.test(description)) {
    return {
      valid: false,
      error: "Description must start in lowercase to keep commit history consistent.",
    };
  }

  return {
    valid: true,
  };
}

export function readCommitMessage(source) {
  if (!source) {
    return "";
  }

  if (fs.existsSync(source)) {
    return fs.readFileSync(source, "utf8");
  }

  return source;
}

export function printCommitError(header, error) {
  console.error("Invalid commit message:");
  console.error(`  ${header}`);
  console.error("");
  console.error(error);
  console.error("");
  console.error("Use one of these formats:");
  for (const example of EXAMPLES) {
    console.error(`  ${example}`);
  }
}
