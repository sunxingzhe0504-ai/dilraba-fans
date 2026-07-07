/**
 * Optional Notion → Markdown sync for content/posts/.
 * Requires NOTION_TOKEN and NOTION_STORIES_DATABASE_ID in env.
 * Run: node scripts/sync-notion-stories.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const postsDir = join(root, "content", "posts");

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_STORIES_DATABASE_ID;

if (!token || !databaseId) {
  console.log("Skip Notion sync: set NOTION_TOKEN and NOTION_STORIES_DATABASE_ID to enable.");
  process.exit(0);
}

async function fetchStories() {
  const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page_size: 100 }),
  });
  if (!res.ok) throw new Error(`Notion API ${res.status}: ${await res.text()}`);
  return res.json();
}

function propText(prop) {
  if (!prop) return "";
  if (prop.type === "title") return prop.title.map((t) => t.plain_text).join("");
  if (prop.type === "rich_text") return prop.rich_text.map((t) => t.plain_text).join("");
  if (prop.type === "date") return prop.date?.start ?? "";
  if (prop.type === "checkbox") return prop.checkbox;
  if (prop.type === "select") return prop.select?.name ?? "";
  return "";
}

async function main() {
  mkdirSync(postsDir, { recursive: true });
  const data = await fetchStories();
  let count = 0;

  for (const page of data.results ?? []) {
    const p = page.properties ?? {};
    const slug = propText(p.slug ?? p.Slug);
    const title = propText(p.title ?? p.Title ?? p.Name);
    if (!slug || !title) continue;

    const md = `---
slug: ${slug}
title: ${title}
titleEn: ${propText(p.titleEn ?? p["Title EN"])}
date: ${propText(p.date ?? p.Date)}
summary: ${propText(p.summary ?? p.Summary)}
summaryEn: ${propText(p.summaryEn ?? p["Summary EN"])}
featured: ${propText(p.featured ?? p.Featured) === true}
---

${propText(p.body ?? p.Body)}
`;

    writeFileSync(join(postsDir, `${slug}.md`), md, "utf8");
    count++;
  }

  console.log(`Synced ${count} stories from Notion -> content/posts/`);
  console.log("Run: node scripts/sync-stories-from-markdown.mjs");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
