/**
 * Validates content/*.ts data: slug uniqueness, image paths, cross-references.
 * Usage: npm run validate
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "content");
const publicDir = join(root, "public");

const errors = [];
const warnings = [];

function readContent(name) {
  return readFileSync(join(contentDir, name), "utf8");
}

function extractSlugs(source, label) {
  const slugs = [];
  const re = /\bslug:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(source)) !== null) slugs.push({ slug: m[1], label });
  return slugs;
}

function extractImagePaths(source) {
  const paths = new Set();
  const re =
    /(?:poster|cover|image|thumbnail|src|hero|heroAlt):\s*[`'"](\/images[^`'"]+)[`'"]/g;
  let m;
  while ((m = re.exec(source)) !== null) paths.add(m[1]);
  // IMAGES.xxx template paths in images.ts
  const assetRe = /assetPath\(\s*[`'"](\/images[^`'"]+)[`'"]\s*\)/g;
  while ((m = assetRe.exec(source)) !== null) paths.add(m[1]);
  return [...paths];
}

function checkDuplicateSlugs(entries) {
  const byLabel = new Map();
  for (const { slug, label } of entries) {
    if (!byLabel.has(label)) byLabel.set(label, new Set());
    const seen = byLabel.get(label);
    if (seen.has(slug)) {
      errors.push(`Duplicate slug "${slug}" in ${label}`);
    }
    seen.add(slug);
  }
}

function checkImages(paths) {
  for (const p of paths) {
    const file = join(publicDir, p.replace(/^\//, ""));
    if (!existsSync(file)) {
      errors.push(`Missing image file: ${p} (expected at public${p})`);
    }
  }
}

function checkRefs(source, field, validSlugs, fileLabel, targetLabel) {
  const re = new RegExp(`\\b${field}:\\s*"([^"]+)"`, "g");
  let m;
  while ((m = re.exec(source)) !== null) {
    if (!validSlugs.has(m[1])) {
      errors.push(`${fileLabel}: ${field} "${m[1]}" not found in ${targetLabel}`);
    }
  }
}

// --- Slug collections ---
const worksSrc = readContent("works.ts");
const magazinesSrc = readContent("magazines.ts");
const eventsSrc = readContent("events.ts");
const newsSrc = readContent("news.ts");
const charactersSrc = readContent("characters.ts");
const gallerySrc = readContent("gallery.ts");
const videosSrc = readContent("videos.ts");
const storiesSrc = readContent("stories.ts");
const imagesSrc = readContent("images.ts");

const workSlugs = new Set(extractSlugs(worksSrc, "works").map((x) => x.slug));
const magazineSlugs = new Set(extractSlugs(magazinesSrc, "magazines").map((x) => x.slug));
const eventSlugs = new Set(extractSlugs(eventsSrc, "events").map((x) => x.slug));
const newsSlugs = new Set(extractSlugs(newsSrc, "news").map((x) => x.slug));
const storySlugs = new Set(extractSlugs(storiesSrc, "stories").map((x) => x.slug));

checkDuplicateSlugs([
  ...extractSlugs(worksSrc, "works"),
  ...extractSlugs(magazinesSrc, "magazines"),
  ...extractSlugs(eventsSrc, "events"),
  ...extractSlugs(newsSrc, "news"),
  ...extractSlugs(charactersSrc, "characters"),
  ...extractSlugs(gallerySrc, "gallery"),
  ...extractSlugs(videosSrc, "videos"),
  ...extractSlugs(storiesSrc, "stories"),
]);

// Cross-references in news
checkRefs(newsSrc, "workSlug", workSlugs, "news", "works");
checkRefs(newsSrc, "eventSlug", eventSlugs, "news", "events");
checkRefs(newsSrc, "magazineSlug", magazineSlugs, "news", "magazines");

// Stories cross-refs
checkRefs(storiesSrc, "eventSlug", eventSlugs, "stories", "events");
checkRefs(storiesSrc, "newsSlug", newsSlugs, "stories", "news");
checkRefs(storiesSrc, "magazineSlug", magazineSlugs, "stories", "magazines");
checkRefs(storiesSrc, "workSlug", workSlugs, "stories", "works");

// Characters → works
checkRefs(charactersSrc, "workSlug", workSlugs, "characters", "works");

// work-release.ts slugs
const workReleaseSrc = readFileSync(join(contentDir, "work-release.ts"), "utf8");
const releaseBlock = workReleaseSrc.match(
  /export const WORK_RELEASE[^=]*=\s*\{([\s\S]*?)\n\};/,
);
if (releaseBlock) {
  const keys = [...releaseBlock[1].matchAll(/^\s+"([\w-]+)":/gm)].map((m) => m[1]);
  for (const slug of keys) {
    if (!workSlugs.has(slug)) {
      errors.push(`work-release.ts: key "${slug}" not found in works`);
    }
  }
}

// Images
const allContentFiles = readdirSync(contentDir).filter((f) => f.endsWith(".ts"));
const imagePaths = new Set();
for (const file of allContentFiles) {
  for (const p of extractImagePaths(readContent(file))) imagePaths.add(p);
}
for (const p of extractImagePaths(imagesSrc)) imagePaths.add(p);
checkImages(imagePaths);

// WORKS_EN keys in translations/en.ts
const enSrc = readFileSync(join(contentDir, "translations/en.ts"), "utf8");
const worksEnBlock = enSrc.match(/export const WORKS_EN[^=]*=\s*\{([\s\S]*?)\n\};/);
if (worksEnBlock) {
  const keys = [...worksEnBlock[1].matchAll(/^\s+"([\w-]+)":/gm)].map((m) => m[1]);
  for (const slug of workSlugs) {
    if (!keys.includes(slug)) {
      warnings.push(`translations/en.ts WORKS_EN missing entry for work "${slug}"`);
    }
  }
  for (const key of keys) {
    if (!workSlugs.has(key)) {
      warnings.push(`translations/en.ts WORKS_EN has orphan key "${key}" (no matching work)`);
    }
  }
}

// --- Report ---
if (warnings.length) {
  console.warn(`\n⚠ ${warnings.length} warning(s):`);
  for (const w of warnings) console.warn(`  · ${w}`);
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} error(s):`);
  for (const e of errors) console.error(`  · ${e}`);
  process.exit(1);
}

console.log(
  `\n✓ Content OK — ${workSlugs.size} works, ${magazineSlugs.size} magazines, ${eventSlugs.size} events, ${newsSlugs.size} news, ${storySlugs.size} stories, ${imagePaths.size} image paths checked`,
);
