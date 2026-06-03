# 迪丽热巴粉丝资讯站

非官方粉丝向资讯展示站，汇聚迪丽热巴相关的**正面、公开**信息：影视作品、杂志封面、活动资讯与荣誉介绍。

## 技术栈

- **Next.js 16**（App Router）
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
  works.ts            # 影视作品
  magazines.ts        # 杂志封面
  events.ts           # 公开活动
  honors.ts           # 荣誉与时间轴
  site-meta.ts        # 站点元信息
  index.ts            # 统一查询函数
public/images/        # 图片资源（请替换为授权素材）
src/
  app/                # 页面路由
  components/         # UI 组件
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
  poster: "/images/works/my-new-work.svg",
  synopsis: "剧情简介…",
  status: "released",   // released | upcoming
  featured: true,       // 是否在首页展示
}
```

### 添加杂志 / 活动

分别编辑 [`content/magazines.ts`](content/magazines.ts) 与 [`content/events.ts`](content/events.ts)。

### 替换图片

图片链接统一维护在 [`content/images.ts`](content/images.ts)：

- **影视海报**：来自 [TMDB](https://www.themoviedb.org/) 公开海报 CDN
- **杂志/时尚图**：来自 [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Dilraba_Dilmurat) 等公开渠道
- **首页 Hero**：迪丽热巴公开活动写真

如需更换，直接修改 `content/images.ts` 中的 URL，并确保域名已在 `next.config.ts` 的 `remotePatterns` 中允许。

## 部署

### Vercel（推荐）

1. 将项目推送到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入仓库
3. 使用默认 Next.js 构建设置，一键部署

### 其他平台

```bash
npm run build
npm run start
```

## 页面一览

| 路由 | 说明 |
|------|------|
| `/` | 首页 |
| `/works` | 作品库（支持类型筛选） |
| `/works/[slug]` | 作品详情 |
| `/magazine` | 杂志封面 |
| `/events` | 活动资讯 |
| `/about` | 关于她 |

## 后续扩展（Roadmap）

- [ ] 接入 Headless CMS（Notion / Contentful）
- [ ] MDX 长文（`/stories/[slug]`）活动回顾
- [ ] 多语言支持
- [ ] 站内搜索

## 免责声明

本站为**非官方粉丝资讯站**，所有内容整理自公开信息，仅供粉丝交流与欣赏。素材版权归原权利人所有，如有侵权请联系下架。请通过官方渠道获取第一手资讯，理性追星，文明交流。
