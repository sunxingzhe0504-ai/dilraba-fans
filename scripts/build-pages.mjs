/**
 * Local GitHub Pages build — mirrors CI env vars.
 * Usage: npm run build:pages
 * Optional: BASE_PATH=/my-repo NEXT_PUBLIC_SITE_URL=https://user.github.io/my-repo npm run build:pages
 */
import { spawnSync } from "node:child_process";

const basePath = process.env.BASE_PATH ?? "/dilraba-fans";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://example.github.io${basePath}`.replace(/\/$/, "");

const result = spawnSync(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["run", "build"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_PAGES: "true",
      BASE_PATH: basePath,
      NEXT_PUBLIC_SITE_URL: siteUrl,
    },
  },
);

process.exit(result.status ?? 1);
