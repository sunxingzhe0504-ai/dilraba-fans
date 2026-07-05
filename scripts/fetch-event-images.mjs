#!/usr/bin/env node
/** Download curated event images from public news reports. */
import { writeFile, mkdir, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "events");

/** Verified public-report image URLs (news / brand KV) */
const EVENT_IMAGES = [
  {
    slug: "land-rover-urban-camp-2026",
    url: "http://wx3.sinaimg.cn/large/008z3Nargy1ier1xra6ayj31jk223h7z.jpg",
    fallback: "http://wx2.sinaimg.cn/large/005P16csly1iebjqwczqfj30u01cotjo.jpg",
    referer: "https://weibo.com/",
  },
  {
    slug: "land-rover-defender-2026",
    url: "http://wx2.sinaimg.cn/large/005P16csly1iebjqwczqfj30u01cotjo.jpg",
    referer: "https://weibo.com/",
  },
  {
    slug: "macalline-shenyang-2026",
    url: "http://dingyue.ws.126.net/2026/0627/2e64b51aj00thasc201fcd000u000jzc.jpg",
    referer: "https://c.m.163.com/",
  },
  {
    slug: "deeyeo-global-2026",
    url: "http://i2023.danews.cc/upload/doc/20260622/6a394bb1b778e/media/image1_sm.jpeg",
    fallback: "https://img.3news.cn/2026/0622/fd81f4c80a4d7dd.png",
    referer: "http://life.3news.cn/",
  },
  {
    slug: "lucky-coffee-global-2026",
    url: "https://inews.gtimg.com/om_ls/O29RQUxRDRbxGoFViSzOukHMuzWH8UKt5esAcw0Prp-cYAA_640330/0",
    referer: "https://news.qq.com/",
  },
  {
    slug: "china-film-tv-night-2026",
    url: "http://dingyue.ws.126.net/2026/0616/8b6cb5a7j00tgom8800hmd001o001l8p.jpg",
    referer: "https://www.163.com/",
  },
  {
    slug: "dior-suzhou-2026",
    url: "https://inews.gtimg.com/om_ls/OsSfg7YiVHjFhhrRbifSHpVw9BnwTvB1r9m2qAL-1HuCsAA_640330/0",
    referer: "https://news.qq.com/",
  },
];

async function download(url, referer) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Accept: "image/*,*/*",
      Referer: referer,
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("text/html") || ct.includes("javascript")) throw new Error(`bad content-type ${ct}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 15000) throw new Error(`too small (${buf.length})`);
  let ext = ".jpg";
  if (ct.includes("webp") || url.includes(".webp")) ext = ".webp";
  else if (ct.includes("png") || url.includes(".png")) ext = ".png";
  else if (url.includes(".jpeg") || url.includes(".jpg") || url.includes(".JPG")) ext = ".jpg";
  return { buf, ext };
}

async function save(slug, url, referer) {
  const { buf, ext } = await download(url, referer);
  for (const old of [".jpg", ".jpeg", ".png", ".webp"]) {
    try {
      await unlink(join(OUT, `${slug}${old}`));
    } catch {
      /* ignore */
    }
  }
  const path = join(OUT, `${slug}${ext}`);
  await writeFile(path, buf);
  return { path, bytes: buf.length, url };
}

async function main() {
  await mkdir(OUT, { recursive: true });
  for (const item of EVENT_IMAGES) {
    console.log(`\n=== ${item.slug} ===`);
    try {
      const r = await save(item.slug, item.url, item.referer);
      console.log(`OK ${r.path} (${r.bytes} bytes)`);
    } catch (e) {
      console.log(`primary failed: ${e.message}`);
      if (item.fallback) {
        try {
          const r = await save(item.slug, item.fallback, item.referer);
          console.log(`OK fallback ${r.path} (${r.bytes} bytes)`);
        } catch (e2) {
          console.log(`FAIL ${e2.message}`);
        }
      }
    }
  }
}

main();
