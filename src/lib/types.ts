export type WorkType = "tv" | "film" | "variety";
export type WorkStatus = "released" | "upcoming";
export type EventCategory =
  | "brand"
  | "charity"
  | "premiere"
  | "award"
  | "other";

/** 外部链接类型：info=资料 / watch=观看 / buy=购买 / official=官方 */
export type ExternalLinkKind = "info" | "watch" | "buy" | "official";

export type ExternalLink = {
  label: string;
  href: string;
  kind?: ExternalLinkKind;
};

export type Work = {
  slug: string;
  title: string;
  titleEn?: string;
  type: WorkType;
  year: number;
  role: string;
  roleEn?: string;
  poster: string;
  synopsis: string;
  synopsisEn?: string;
  highlights?: string[];
  highlightsEn?: string[];
  status: WorkStatus;
  featured?: boolean;
  /** @deprecated 请使用 externalLinks */
  externalUrl?: string;
  externalLinks?: ExternalLink[];
  /** 播出平台、集数等补充信息 */
  airInfo?: string;
  airInfoEn?: string;
  cast?: string[];
};

export type Magazine = {
  slug: string;
  name: string;
  nameEn?: string;
  issue: string;
  issueEn?: string;
  year: number;
  cover: string;
  tags?: string[];
  featured?: boolean;
  externalLinks?: ExternalLink[];
  description?: string;
  descriptionEn?: string;
};

export type FanEvent = {
  slug: string;
  title: string;
  titleEn?: string;
  date: string;
  category: EventCategory;
  location?: string;
  locationEn?: string;
  summary: string;
  summaryEn?: string;
  images?: string[];
  featured?: boolean;
  externalLinks?: ExternalLink[];
  description?: string;
  descriptionEn?: string;
};

export type Honor = {
  year: number;
  title: string;
  titleEn?: string;
  source?: string;
  sourceEn?: string;
};

export type TimelineEntry = {
  year: number;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
};

export type SiteMeta = {
  heroTagline: string;
  heroTaglineEn?: string;
  heroSubtitle: string;
  heroSubtitleEn?: string;
  stats: { label: string; value: string }[];
  statsEn?: { label: string; value: string }[];
  bio: string;
  bioEn?: string;
  bioExtended: string[];
  bioExtendedEn?: string[];
  officialLinks: { label: string; labelEn?: string; href: string }[];
};

export type NewsCategory =
  | "work"
  | "fashion"
  | "event"
  | "charity"
  | "studio"
  | "other";

export type NewsItem = {
  slug: string;
  title: string;
  titleEn?: string;
  date: string;
  category: NewsCategory;
  summary: string;
  summaryEn?: string;
  externalUrl?: string;
  featured?: boolean;
  /** 关联作品详情页 */
  workSlug?: string;
  /** 关联活动详情页 */
  eventSlug?: string;
  /** 关联杂志详情页 */
  magazineSlug?: string;
  /** 详情页补充正文（可选） */
  body?: string;
  bodyEn?: string;
};

export type GalleryCategory =
  | "portrait"
  | "red-carpet"
  | "magazine"
  | "wallpaper";

export type GalleryItem = {
  slug: string;
  title: string;
  category: GalleryCategory;
  image: string;
  year?: number;
  tags?: string[];
  /** 是否推荐为壁纸下载 */
  wallpaper?: boolean;
};

export type Character = {
  slug: string;
  name: string;
  nameEn?: string;
  workSlug: string;
  workTitle: string;
  workTitleEn?: string;
  year: number;
  image: string;
  quote?: string;
  quoteEn?: string;
  description: string;
  descriptionEn?: string;
  featured?: boolean;
};

export type Quote = {
  id: string;
  text: string;
  textEn?: string;
  source: string;
  sourceEn?: string;
  context?: "interview" | "drama" | "event";
};

export type Anniversary = {
  id: string;
  title: string;
  date: string; // MM-DD
  description: string;
};

export type CommunityLink = {
  label: string;
  href: string;
  note?: string;
};

export type FanCulture = {
  fanName: string;
  fanNameNote: string;
  fanNameNoteEn?: string;
  nicknames: string[];
  fanGuide: string[];
  fanGuideEn?: string[];
  anniversaries: Anniversary[];
  communityLinks: CommunityLink[];
};

export type BrandHighlight = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  image?: string;
  externalUrl?: string;
};

export type CharityItem = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  externalUrl?: string;
};

export type ChangelogEntry = {
  date: string;
  items: string[];
  itemsEn?: string[];
};

export type VideoCategory =
  | "mv"
  | "studio"
  | "trailer"
  | "interview"
  | "event"
  | "variety";

export type VideoPlatform =
  | "bilibili"
  | "youtube"
  | "weibo"
  | "tencent"
  | "youku"
  | "douyin"
  | "other";

export type VideoItem = {
  slug: string;
  title: string;
  date: string;
  category: VideoCategory;
  platform: VideoPlatform;
  /** 站外播放页 */
  href: string;
  thumbnail: string;
  duration?: string;
  summary?: string;
  featured?: boolean;
  workSlug?: string;
};

export const VIDEO_CATEGORY_LABELS: Record<VideoCategory, string> = {
  mv: "MV / 音乐",
  studio: "工作室",
  trailer: "预告 / 花絮",
  interview: "访谈",
  event: "活动现场",
  variety: "综艺",
};

export const VIDEO_PLATFORM_LABELS: Record<VideoPlatform, string> = {
  bilibili: "哔哩哔哩",
  youtube: "YouTube",
  weibo: "微博",
  tencent: "腾讯视频",
  youku: "优酷",
  douyin: "抖音",
  other: "其他",
};

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  work: "作品",
  fashion: "时尚",
  event: "活动",
  charity: "公益",
  studio: "工作室",
  other: "其他",
};

export const GALLERY_CATEGORY_LABELS: Record<GalleryCategory, string> = {
  portrait: "写真",
  "red-carpet": "红毯",
  magazine: "杂志大片",
  wallpaper: "壁纸",
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
