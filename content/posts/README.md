# Markdown 专题 (`content/posts/`)

将活动回顾、深度图文等内容写为 **Markdown + YAML frontmatter**，构建时自动同步到 `/stories/[slug]`。

## 快速开始

1. 在本目录新建 `my-story.md`（可参考 `cms-example-post.md`）
2. 运行 `npm run sync:stories`
3. `npm run dev` 后访问 `/stories/my-story`

## Frontmatter 字段

| 字段 | 必填 | 说明 |
|------|------|------|
| `slug` | ✅ | URL 路径 |
| `title` | ✅ | 中文标题 |
| `date` | ✅ | YYYY-MM-DD |
| `summary` | ✅ | 摘要 |
| `titleEn` | | 英文标题 |
| `summaryEn` | | 英文摘要 |
| `bodyEn` | | 英文正文（Markdown） |
| `cover` | | 封面图路径，如 `/images/...` |
| `tags` | | `[标签1, 标签2]` |
| `featured` | | `true` / `false` |
| `workSlug` / `eventSlug` / `newsSlug` / `magazineSlug` | | 关联条目 |

正文为 Markdown，与 `stories.ts` 内联专题格式相同。

## Notion 同步（可选）

在环境变量中配置：

- `NOTION_TOKEN`
- `NOTION_STORIES_DATABASE_ID`

然后：

```bash
npm run sync:notion
npm run sync:stories
```

Notion 数据库属性名需包含：`slug`、`title`、`date`、`summary`（及可选英文字段、`body` 等）。
