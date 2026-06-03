export type WorkType = "tv" | "film" | "variety";
export type WorkStatus = "released" | "upcoming";
export type EventCategory =
  | "brand"
  | "charity"
  | "premiere"
  | "award"
  | "other";

export type Work = {
  slug: string;
  title: string;
  titleEn?: string;
  type: WorkType;
  year: number;
  role: string;
  poster: string;
  synopsis: string;
  highlights?: string[];
  status: WorkStatus;
  featured?: boolean;
  externalUrl?: string;
};

export type Magazine = {
  slug: string;
  name: string;
  issue: string;
  year: number;
  cover: string;
  tags?: string[];
  featured?: boolean;
};

export type FanEvent = {
  slug: string;
  title: string;
  date: string;
  category: EventCategory;
  location?: string;
  summary: string;
  images?: string[];
  featured?: boolean;
};

export type Honor = {
  year: number;
  title: string;
  source?: string;
};

export type TimelineEntry = {
  year: number;
  title: string;
  description: string;
};

export type SiteMeta = {
  heroTagline: string;
  heroSubtitle: string;
  stats: { label: string; value: string }[];
  bio: string;
  bioExtended: string[];
  officialLinks: { label: string; href: string }[];
};

export const WORK_TYPE_LABELS: Record<WorkType, string> = {
  tv: "电视剧",
  film: "电影",
  variety: "综艺",
};

export const EVENT_CATEGORY_LABELS: Record<EventCategory, string> = {
  brand: "品牌活动",
  charity: "公益慈善",
  premiere: "首映发布",
  award: "颁奖典礼",
  other: "其他活动",
};
