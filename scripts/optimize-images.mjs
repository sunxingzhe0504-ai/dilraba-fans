import { existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = join(root, "public", "images");

let created = 0;
let skipped = 0;

async function walk(dir) {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    if (statSync(file).isDirectory()) {
      await walk(file);
      continue;
    }
    if (!/\.(jpe?g|png)$/i.test(name)) continue;

    const webp = join(parse(file).dir, `${parse(file).name}.webp`);
    const srcMtime = statSync(file).mtimeMs;
    if (existsSync(webp) && statSync(webp).mtimeMs >= srcMtime) {
      skipped++;
      continue;
    }

    await sharp(file).webp({ quality: 82 }).toFile(webp);
    created++;
    console.log("webp", webp.replace(root, ""));
  }
}

await walk(imagesDir);
console.log(`Done — ${created} WebP created, ${skipped} up to date.`);
