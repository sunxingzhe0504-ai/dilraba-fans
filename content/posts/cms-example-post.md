---
slug: cms-example-post
title: Markdown 专题示例（可删除）
titleEn: Markdown Story Example (safe to delete)
date: 2026-07-08
summary: 演示 content/posts/*.md 如何同步为专题长文，便于非开发者维护内容。
summaryEn: Demo of syncing content/posts/*.md into /stories for easier content maintenance.
tags: ["站点", "教程"]
featured: false
---

## 如何使用

1. 在 `content/posts/` 新建 `.md` 文件，顶部写 YAML frontmatter。
2. 运行 `npm run sync:stories`（构建时会自动执行）。
3. 重新部署后可在 `/stories/cms-example-post` 查看。

## Notion 同步（可选）

配置 `NOTION_TOKEN` 与 `NOTION_STORIES_DATABASE_ID` 后运行 `npm run sync:notion`，
会将 Notion 数据库条目写入 `content/posts/`，再执行 `sync:stories` 即可。
