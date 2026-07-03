import type { Magazine } from "@/lib/types";
import { IMAGES } from "./images";

const m = IMAGES.magazines;

/**
 * 杂志封面 / 大片清单。
 * 封面图均为本地托管的真实刊物封面，已逐张核对刊名、期号与人物（迪丽热巴）。
 */
export const magazines: Magazine[] = [
  {
    slug: "jia-ren-2026-06",
    name: "嘉人 MARIE CLAIRE",
    issue: "2026 年 6 月 · 生日刊「AS SHE IS / 如她所是」",
    year: 2026,
    cover: m.jiaren2026,
    tags: ["生日刊", "嘉人"],
    featured: true,
    description:
      "2026 年 6 月生日刊封面大片「AS SHE IS / 如她所是」，与高定造型、MIKIMOTO 珠宝联动呈现。",
  },
  {
    slug: "elle-2026-03",
    name: "ELLE 世界时装之苑",
    issue: "2026 年 3 月开季刊 ·「万变之中」",
    year: 2026,
    cover: m.elle2026,
    tags: ["开季封面", "ELLE Beauty Star"],
    featured: true,
    description:
      "2026 开季封面大片，以「万变之中」为主题，呈现迪丽热巴在时尚镜头下的多元气质与从容气场。",
  },
  {
    slug: "grazia-2026-xinnian",
    name: "红秀 GRAZIA",
    issue: "2026 新年刊 ·「新幕启程 The New Stage」",
    year: 2026,
    cover: m.grazia2026,
    tags: ["新年刊", "封面人物"],
    featured: true,
    description:
      "2026 新年开年封面，以「新幕启程」为题，记录迪丽热巴在新一年工作与形象上的全新起点。",
  },
  {
    slug: "bazaar-2026-kainian",
    name: "时尚芭莎 Harper's BAZAAR",
    issue: "2026 开年刊 ·「芭莎剧场」封面大片",
    year: 2026,
    cover: m.bazaar2026,
    tags: ["开年刊", "封面大片"],
    featured: true,
    description:
      "芭莎 2026 开年「剧场」主题封面，以戏剧感构图与高级时装语言，展现迪丽热巴作为封面人物的镜头表现力。",
  },
  {
    slug: "bazaar-2025-09",
    name: "时尚芭莎 Harper's BAZAAR",
    issue: "2025 年 9 月号 ·「大冒险家 Limitless」",
    year: 2025,
    cover: m.bazaar2025,
    tags: ["封面人物", "Limitless"],
    featured: true,
  },
  {
    slug: "figaro-2023-12",
    name: "madame 费加罗 Figaro",
    issue: "2023 年 12 月刊 ·「明月入怀 The New Radiance」",
    year: 2023,
    cover: m.figaro2023,
    tags: ["封面人物"],
    featured: true,
  },
  {
    slug: "elle-2023-05",
    name: "ELLE 世界时装之苑",
    issue: "2023 年 5 月开季刊 ·「心生浪漫美好」",
    year: 2023,
    cover: m.elle2023,
    tags: ["开季封面", "be Enchanted"],
    featured: true,
  },
  {
    slug: "lofficiel-2023-03",
    name: "时装 L'OFFICIEL",
    issue: "2023 年 3 月刊封面",
    year: 2023,
    cover: m.lofficiel2023,
    tags: ["封面人物"],
  },
  {
    slug: "grazia-2018",
    name: "红秀 GRAZIA",
    issue: "2018 年刊 ·「闪耀得刚刚好」",
    year: 2018,
    cover: m.grazia2018,
    tags: ["封面人物"],
  },
];
