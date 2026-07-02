# 迪丽热巴粉丝资讯站

非官方粉丝向资讯展示站，汇聚迪丽热巴相关的**正面、公开**信息：影视作品、杂志封面、活动资讯与荣誉介绍。

## 技术栈

- **Next.js 16**（App Router · 静态导出兼容 GitHub Pages）
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**（动效，支持 `prefers-reduced-motion` 降级）
- **Lucide React**（图标）

## 快速开始

```bash
npm install
npm run dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)。

## 项目结构

```
content/              # 结构化内容数据（可后期替换为 CMS）
  translations/en.ts  # 英文翻译词典（作品/杂志/角色/图库等）
  works.ts            # 影视作品
  magazines.ts        # 杂志封面
  events.ts           # 公开活动
  honors.ts           # 荣誉与时间轴
  news.ts             # 最新动态
  characters.ts       # 角色图鉴
  gallery.ts          # 图库壁纸
  videos.ts           # 视频专区
  fan-culture.ts      # 粉丝文化 / 公益 / 更新日志
  stories.ts          # 专题长文（Markdown）
  site-meta.ts        # 站点元信息
  index.ts            # 统一查询函数（含全站搜索）
public/images/        # 图片资源（本地托管）
src/
  app/                # 页面路由
  components/         # UI 组件（含四套百变风格）
  lib/                # 类型与工具函数
```

## 如何维护内容

所有内容在 `content/` 目录下以 TypeScript 对象维护，修改后重新构建即可生效。

### 添加一部作品

编辑 [`content/works.ts`](content/works.ts)，按 `Work` 类型新增条目：

```ts
{
  slug: "my-new-work",
  title: "作品名",
  type: "tv",           // tv | film | variety
  year: 2025,
  role: "角色名",
  poster: "/images/works/my-new-work.jpg",
  synopsis: "剧情简介…",
  status: "released",   // released | upcoming
  featured: true,       // 是否在首页展示
}
```

### 添加杂志 / 活动 / 动态

分别编辑 [`content/magazines.ts`](content/magazines.ts)、[`content/events.ts`](content/events.ts)、[`content/news.ts`](content/news.ts)。

### 替换图片

将图片放入 `public/images/` 对应子目录，并在 [`content/images.ts`](content/images.ts) 中维护路径映射。图片已全部本地托管，无需配置远程域名白名单。

### 待播作品一键开播

编辑 [`content/work-release.ts`](content/work-release.ts)，将对应作品的 `live` 设为 `true`，即可同步更新作品状态、动态与图库标签。

## 部署

### GitHub Pages（推荐 · 免费静态托管）

本项目已配置 GitHub Actions，推送至 `main` / `master` 分支后会自动构建并发布到 GitHub Pages。

**首次部署步骤：**

1. 在 GitHub 新建仓库（例如 `dilraba-fans`），**不要**勾选「Add a README」（若本地已有代码）。
2. 在本地项目根目录提交并推送代码：

```bash
git add .
git commit -m "chore: prepare GitHub Pages deployment"
git remote add origin https://github.com/<你的用户名>/dilraba-fans.git
git push -u origin master
```

3. 打开仓库 **Settings → Pages**，在 **Build and deployment → Source** 中选择 **GitHub Actions**（不要选 Deploy from a branch）。
4. 等待 Actions 工作流跑完，站点地址为：

   - 普通仓库：`https://<用户名>.github.io/dilraba-fans/`
   - 若仓库名为 `<用户名>.github.io`：根域名 `https://<用户名>.github.io/`

**本地预览 Pages 构建：**

```bash
npm run build:pages
npx serve out
```

`build:pages` 默认使用 `/dilraba-fans` 作为 basePath；可通过环境变量覆盖：

```bash
# PowerShell
$env:BASE_PATH="/你的仓库名"; $env:NEXT_PUBLIC_SITE_URL="https://你的用户名.github.io/你的仓库名"; npm run build:pages
```

### Vercel

1. 将项目推送到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入仓库
3. 使用默认 Next.js 构建设置，一键部署（无需 `GITHUB_PAGES` 环境变量）

### 其他 Node 平台

```bash
npm run build
npm run start
```

## 页面一览

| 路由 | 说明 |
|------|------|
| `/` | 首页（四套百变风格可切换） |
| `/latest` | 最新动态列表（支持分类筛选） |
| `/latest/[slug]` | 动态详情 |
| `/stories` | 专题长文列表 |
| `/stories/[slug]` | 专题详情（Markdown） |
| `/en/*` | 英文路径镜像（与中文页面对应） |
| `/works` | 作品库（支持类型筛选） |
| `/works/[slug]` | 作品详情 |
| `/upcoming` | 待播待映专区 |
| `/videos` | 视频专区 |
| `/gallery` | 图库壁纸 |
| `/characters` | 角色图鉴 |
| `/characters/[slug]` | 角色详情 |
| `/magazine` | 杂志封面 |
| `/magazine/[slug]` | 杂志详情 |
| `/events` | 活动资讯 |
| `/events/[slug]` | 活动详情 |
| `/fashion` | 时尚代言 |
| `/charity` | 公益足迹 |
| `/fans` | 粉丝文化 |
| `/about` | 关于她 |
| `/changelog` | 更新日志 |
| `/contact` | 联系与反馈 |
| `/feed.xml` | RSS 订阅（中文：动态 + 专题 + 站点更新） |
| `/feed-en.xml` | RSS 订阅（English） |
| `/sitemap.xml` | 站点地图 |
| `/robots.txt` | 爬虫规则 |

## 功能特性

- **全站搜索**：导航栏 `Ctrl+K` / `⌘K` 快捷搜索作品、角色、杂志、活动、动态、专题（支持中英关键词）
- **中英双语**：导航栏 `中文 / EN` 切换；`/en/*` 英文路径 + hreflang；UI 与内容字段同步本地化，偏好保存在本机
- **WebP 图片**：构建时自动生成 WebP 副本，首页与列表优先加载 WebP
- **四套百变风格**：右下角主题切换，偏好保存在本机
- **RSS 订阅**：`/feed.xml`（中文）与 `/feed-en.xml`（English）聚合最新动态与站点更新
- **SEO**：自动生成 `sitemap.xml`、`robots.txt`、Open Graph 与 Twitter Card 预览；列表页双语 metadata；JSON-LD 结构化数据
- **静态导出**：兼容 GitHub Pages，图片本地托管

## 后续扩展（Roadmap）

- [ ] 接入 Headless CMS（Notion / Contentful）
- [x] MDX / Markdown 专题长文（`/stories/[slug]`）活动回顾
- [x] URL 级英文路由（`/en/*`）与 hreflang
- [x] 构建时 WebP 图片优化（`npm run optimize:images`）
- [x] 补全更多内容的英文翻译字段（作品/角色/图库/公益等，见 `content/translations/en.ts`）

## 免责声明

本站为**非官方粉丝资讯站**，所有内容整理自公开信息，仅供粉丝交流与欣赏。素材版权归原权利人所有，如有侵权请联系下架。请通过官方渠道获取第一手资讯，理性追星，文明交流。
