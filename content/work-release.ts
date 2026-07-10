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
    airInfo: "爱奇艺微尘剧场 · 待播（平台专页已上线，开播日期待官宣）",
    live: false,
    premiereNews: {
      slug: "sui-ran-bu-neng-yiqie-air",
      title: "《虽然不能同时拥有一切》爱奇艺开播",
      titleEn: "You Can't Have Everything Premieres on iQiyi",
      date: "2026-06-15",
      category: "work",
      summary:
        "微尘剧场 6 集都市奇幻迷你剧正式开播，迪丽热巴一人分饰双生卫蓝，搭档陈昊森；改编自山本文绪《蓝，另一种蓝》。",
      summaryEn:
        "Six-episode iQiyi micro drama premieres — Dilraba as twin Wei Lans with Chen Haosen.",
      featured: true,
      externalUrl: "https://movie.douban.com/subject/36707564/",
    },
    premiereEvent: {
      slug: "sui-ran-bu-neng-yiqie-premiere-2026",
      title: "《虽然不能同时拥有一切》爱奇艺开播",
      titleEn: "You Can't Have Everything · iQiyi Premiere",
      date: "2026-06-15",
      category: "premiere",
      location: "爱奇艺 · 微尘剧场",
      locationEn: "iQiyi · Micro Drama",
      summary:
        "6 集迷你剧独播上线，迪丽热巴分饰双生卫蓝，探讨选择与自我觉醒。",
      summaryEn:
        "Six-episode exclusive premiere exploring choice and self-awakening.",
    },
  },
  "jiu-chong-tian": {
    status: "upcoming",
    airInfo: "腾讯视频 · 拍摄中（角色待官宣）",
  },
  "ri-yue": {
    status: "upcoming",
    airInfo: "上映信息待官宣",
  },
  "shaolin-nvzu": {
    status: "upcoming",
    airInfo: "2026 年 7 月 11 日全国上映",
    live: false,
    premiereDate: "2026-07-11",
    premiereNews: {
      slug: "shaolin-nvzu-premiere-2026",
      title: "《功夫女足》全国上映",
      titleEn: "Kung Fu Women's Soccer Opens Nationwide",
      date: "2026-07-11",
      category: "work",
      summary:
        "周星驰编剧执导的喜剧电影《功夫女足》于全国院线上映，迪丽热巴饰前锋钰珑，与张小斐、张艺兴领衔主演。",
      summaryEn:
        "Stephen Chow's Kung Fu Women's Soccer opens nationwide — Dilraba as forward Yu Long with Zhang Xiaofei and Lay Zhang.",
      featured: true,
      externalUrl: "https://ent.sina.cn/2026-07-06/detail-inifwfpx1891264.d.html",
    },
    premiereEvent: {
      slug: "shaolin-nvzu-premiere-2026",
      title: "《功夫女足》全国上映",
      titleEn: "Kung Fu Women's Soccer · Nationwide Release",
      date: "2026-07-11",
      category: "premiere",
      location: "全国院线",
      locationEn: "Nationwide cinemas",
      summary:
        "周星驰导演功夫足球喜剧全国上映，迪丽热巴饰前锋钰珑。",
      summaryEn:
        "Stephen Chow's kung fu soccer comedy opens nationwide — Dilraba as Yu Long.",
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
