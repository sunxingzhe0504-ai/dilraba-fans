/**
 * Ensures src/app/en mirrors exist for every app route.
 * Regenerate with: npm run generate:en-routes
 */
import { existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appDir = join(root, "src", "app");
const enDir = join(appDir, "en");

const SKIP_DIRS = new Set(["en"]);

/** Route segments relative to app/, e.g. "" | "works" | "works/[slug]" */
const routes = [];

function walk(dir, segments = []) {
  if (existsSync(join(dir, "page.tsx"))) {
    routes.push(segments.join("/"));
  }
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full, [...segments, name]);
    }
  }
}

walk(appDir);

const errors = [];
for (const route of routes) {
  const expected = route
    ? join(enDir, route, "page.tsx")
    : join(enDir, "page.tsx");
  if (!existsSync(expected)) {
    errors.push(`src/app/en/${route ? `${route}/` : ""}page.tsx`);
  }
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} English route mirror(s) missing:`);
  for (const e of errors) console.error(`  · ${e}`);
  console.error("\nRun: npm run generate:en-routes\n");
  process.exit(1);
}

console.log(`✓ English route mirrors OK (${routes.length} routes)`);
