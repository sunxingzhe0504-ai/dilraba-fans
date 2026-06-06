import type { FanEvent, NewsItem, WorkStatus } from "@/lib/types";

/**
 * 待播作品「一键开播」配置
 *
 * 定档后只需：
 * 1. 将 `live` 改为 `true`
 * 2. 填写 `premiereDate` 与 `airInfo`
 *
 * 站点会自动：作品 status → released、注入首播动态/活动、图库标签更新。
 */
export type WorkReleaseConfig = {
  status: WorkStatus;
  airInfo: string;
  /** 设为 true 即正式开播（覆盖 status 为 released） */
  live?: boolean;
  premiereDate?: string;
  premiereNews?: Omit<NewsItem, "slug" | "workSlug"> & { slug?: string };
  premiereEvent?: Omit<FanEvent, "slug" | "featured"> & { slug?: string };
};

export const WORK_RELEASE: Record<string, WorkReleaseConfig> = {
  "sui-ran-bu-neng-yiqie": {
    status: "upcoming",
    airInfo: "爱奇艺 · 2026 年 5–6 月待播（以平台官宣为准）",
    live: false,
    premiereDate: "2026-06-15",
    premiereNews: {
      slug: "sui-ran-bu-neng-yiqie-air",
      title: "《虽然不能同时拥有一切》爱奇艺开播",
      date: "2026-06-15",
      category: "work",
      summary:
        "微尘剧场 6 集都市奇幻迷你剧正式开播，迪丽热巴一人分饰双生卫蓝，搭档陈昊森；改编自山本文绪《蓝，另一种蓝》。",
      featured: true,
      externalUrl: "https://movie.douban.com/subject/36707564/",
    },
    premiereEvent: {
      slug: "sui-ran-bu-neng-yiqie-premiere-2026",
      title: "《虽然不能同时拥有一切》爱奇艺开播",
      date: "2026-06-15",
      category: "premiere",
      location: "爱奇艺 · 微尘剧场",
      summary:
        "6 集迷你剧独播上线，迪丽热巴分饰双生卫蓝，探讨选择与自我觉醒。",
    },
  },
};

export function isWorkLive(slug: string): boolean {
  return WORK_RELEASE[slug]?.live === true;
}

export function applyWorkRelease<T extends { slug: string; status: WorkStatus; airInfo?: string }>(
  work: T,
): T {
  const patch = WORK_RELEASE[work.slug];
  if (!patch) return work;
  if (patch.live) {
    return {
      ...work,
      status: "released",
      airInfo: patch.airInfo,
    };
  }
  return {
    ...work,
    status: patch.status,
    airInfo: patch.airInfo ?? work.airInfo,
  };
}

export function getPremiereNewsItems(): NewsItem[] {
  return Object.entries(WORK_RELEASE)
    .filter(([, cfg]) => cfg.live && cfg.premiereNews)
    .map(([workSlug, cfg]) => ({
      slug: cfg.premiereNews!.slug ?? `${workSlug}-premiere`,
      workSlug,
      ...cfg.premiereNews!,
    }));
}

export function getPremiereEvents(): FanEvent[] {
  return Object.entries(WORK_RELEASE)
    .filter(([, cfg]) => cfg.live && cfg.premiereEvent)
    .map(([workSlug, cfg]) => ({
      featured: true,
      ...cfg.premiereEvent!,
      slug: cfg.premiereEvent!.slug ?? `${workSlug}-premiere-2026`,
    }));
}

/** 图库 slug → 开播后替换的标签 */
export const GALLERY_LIVE_TAG_PATCH: Record<string, string[]> = {
  "sui-ran-poster": ["已播"],
};
