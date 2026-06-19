import type {
  EventCategory,
  GalleryCategory,
  NewsCategory,
  VideoCategory,
  VideoPlatform,
  WorkType,
} from "@/lib/types";
import type { Locale } from "./types";

const WORK_TYPE: Record<Locale, Record<WorkType, string>> = {
  zh: { tv: "电视剧", film: "电影", variety: "综艺" },
  en: { tv: "TV Series", film: "Film", variety: "Variety" },
};

const EVENT_CATEGORY: Record<Locale, Record<EventCategory, string>> = {
  zh: {
    brand: "品牌活动",
    charity: "公益慈善",
    premiere: "首映发布",
    award: "颁奖典礼",
    other: "其他活动",
  },
  en: {
    brand: "Brand",
    charity: "Charity",
    premiere: "Premiere",
    award: "Awards",
    other: "Other",
  },
};

const NEWS_CATEGORY: Record<Locale, Record<NewsCategory, string>> = {
  zh: {
    work: "作品",
    fashion: "时尚",
    event: "活动",
    charity: "公益",
    studio: "工作室",
    other: "其他",
  },
  en: {
    work: "Work",
    fashion: "Fashion",
    event: "Event",
    charity: "Charity",
    studio: "Studio",
    other: "Other",
  },
};

const GALLERY_CATEGORY: Record<Locale, Record<GalleryCategory, string>> = {
  zh: {
    portrait: "写真",
    "red-carpet": "红毯",
    magazine: "杂志大片",
    wallpaper: "壁纸",
  },
  en: {
    portrait: "Portrait",
    "red-carpet": "Red Carpet",
    magazine: "Editorial",
    wallpaper: "Wallpaper",
  },
};

const VIDEO_CATEGORY: Record<Locale, Record<VideoCategory, string>> = {
  zh: {
    mv: "MV / 音乐",
    studio: "工作室",
    trailer: "预告 / 花絮",
    interview: "访谈",
    event: "活动现场",
    variety: "综艺",
  },
  en: {
    mv: "MV / Music",
    studio: "Studio",
    trailer: "Trailer / BTS",
    interview: "Interview",
    event: "Event",
    variety: "Variety",
  },
};

const VIDEO_PLATFORM: Record<Locale, Record<VideoPlatform, string>> = {
  zh: {
    bilibili: "哔哩哔哩",
    youtube: "YouTube",
    weibo: "微博",
    tencent: "腾讯视频",
    youku: "优酷",
    douyin: "抖音",
    other: "其他",
  },
  en: {
    bilibili: "Bilibili",
    youtube: "YouTube",
    weibo: "Weibo",
    tencent: "Tencent Video",
    youku: "Youku",
    douyin: "Douyin",
    other: "Other",
  },
};

export function workTypeLabel(type: WorkType, locale: Locale) {
  return WORK_TYPE[locale][type];
}

export function eventCategoryLabel(cat: EventCategory, locale: Locale) {
  return EVENT_CATEGORY[locale][cat];
}

export function newsCategoryLabel(cat: NewsCategory, locale: Locale) {
  return NEWS_CATEGORY[locale][cat];
}

export function galleryCategoryLabel(cat: GalleryCategory, locale: Locale) {
  return GALLERY_CATEGORY[locale][cat];
}

export function videoCategoryLabel(cat: VideoCategory, locale: Locale) {
  return VIDEO_CATEGORY[locale][cat];
}

export function videoPlatformLabel(platform: VideoPlatform, locale: Locale) {
  return VIDEO_PLATFORM[locale][platform];
}

export function filterAllLabel(locale: Locale) {
  return locale === "en" ? "All" : "全部";
}

export function wallpaperPicksLabel(locale: Locale) {
  return locale === "en" ? "Wallpapers" : "壁纸精选";
}
