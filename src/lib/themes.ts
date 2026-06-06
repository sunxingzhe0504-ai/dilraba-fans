export type DecorKind = "petals" | "hearts" | "lightflare" | "minimal";

/** 每套 id = 独立首页版式 + 全站配色 + 装饰，四套长期并存 */
export type ThemeId = "a" | "b" | "c" | "d";

export type ThemeMeta = {
  id: ThemeId;
  name: string;
  /** 对应热巴的哪一面气质 */
  facet: string;
  tagline: string;
  decor: DecorKind;
  swatch: [string, string, string];
};

/** 四套风格同时保留，不设「最终版」——像热巴一样美丽且多变 */
export const THEMES: ThemeMeta[] = [
  {
    id: "c",
    name: "影院暖阳",
    facet: "追光治愈",
    tagline: "电影感分屏 · 暖光引言 · 落日橘金",
    decor: "lightflare",
    swatch: ["#fdf4ea", "#d3697a", "#ef9a4e"],
  },
  {
    id: "a",
    name: "古风长卷",
    facet: "仙气古偶",
    tagline: "居中书法 · 水墨卷轴 · 粉桃青碧",
    decor: "petals",
    swatch: ["#eef4f1", "#d27d97", "#9ec9bb"],
  },
  {
    id: "b",
    name: "甜桃应援",
    facet: "甜系活力",
    tagline: "拍立得拼贴 · 贴纸跑马灯 · 蜜桃暖橘",
    decor: "hearts",
    swatch: ["#fff2f5", "#ff6f9c", "#ffb24d"],
  },
  {
    id: "d",
    name: "高定刊物",
    facet: "时尚高定",
    tagline: "大刊头 · 目录索引 · 玫瑰金线",
    decor: "minimal",
    swatch: ["#f7f1e8", "#9c3850", "#b08d4f"],
  },
];

export const DEFAULT_THEME: ThemeId = "c";
export const THEME_STORAGE_KEY = "dlrb-theme";
export const STYLE_COUNT = THEMES.length;

export function getThemeMeta(id: string | null | undefined): ThemeMeta | undefined {
  return THEMES.find((x) => x.id === id);
}

export function getDecorForTheme(id: string | null | undefined): DecorKind {
  return getThemeMeta(id)?.decor ?? "lightflare";
}
