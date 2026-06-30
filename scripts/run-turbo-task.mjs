import { existsSync, readdirSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

const [taskName, ...extraArgs] = process.argv.slice(2);

if (!taskName) {
  console.error("Missing task name.");
  process.exit(1);
}

const workspaceRoots = ["apps", "packages"];

function hasWorkspacePackages() {
  return workspaceRoots.some((root) => {
    const absoluteRoot = path.join(process.cwd(), root);

    if (!existsSync(absoluteRoot)) {
      return false;
    }

    return readdirSync(absoluteRoot, { withFileTypes: true }).some((entry) => {
      if (!entry.isDirectory()) {
        return false;
      }

      const packageJsonPath = path.join(
        absoluteRoot,
        entry.name,
        "package.json",
      );
      return existsSync(packageJsonPath) && statSync(packageJsonPath).isFile();
    });
  });
}

if (!hasWorkspacePackages()) {
  console.log(
    `[root:${taskName}] No workspace packages exist yet under apps/* or packages/*, so this root command is intentionally a no-op during P00-002.`,
  );
  process.exit(0);
}

const result = spawnSync(
  "pnpm",
  ["exec", "turbo", "run", taskName, ...extraArgs],
  {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: process.platform === "win32",
  },
);

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
