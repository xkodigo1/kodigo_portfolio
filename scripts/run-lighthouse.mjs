import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const tmpDir = path.join(repoRoot, ".lighthouseci", "tmp");
const lhciBinary = path.join(
  repoRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "lhci.cmd" : "lhci",
);

mkdirSync(tmpDir, { recursive: true });

const result =
  process.platform === "win32"
    ? spawnSync(`"${lhciBinary}" autorun --config=.github/lighthouse/lighthouserc.json`, {
        cwd: repoRoot,
        env: {
          ...process.env,
          TEMP: tmpDir,
          TMP: tmpDir,
        },
        shell: true,
        stdio: "inherit",
      })
    : spawnSync(lhciBinary, ["autorun", "--config=.github/lighthouse/lighthouserc.json"], {
        cwd: repoRoot,
        env: {
          ...process.env,
          TEMP: tmpDir,
          TMP: tmpDir,
        },
        shell: false,
        stdio: "inherit",
      });

if (result.error) {
  console.error(result.error);
}

process.exit(result.status ?? 1);
