import { events } from "./events";
import { characters } from "./characters";
import { gallery } from "./gallery";
import { news } from "./news";
import {
  brandHighlights,
  charityItems,
  changelog,
  fanCulture,
  quotes,
} from "./fan-culture";
import {
  getEventExternalLinks,
  getMagazineExternalLinks,
  getWorkExternalLinks,
  withExternalLinks,
} from "./external-links";
import { honors, timeline } from "./honors";
import { magazines } from "./magazines";
import { siteMeta } from "./site-meta";
import { stories } from "./stories";
import { videos } from "./videos";
import { works } from "./works";
import {
  applyWorkRelease,
  GALLERY_LIVE_TAG_PATCH,
  getPremiereEvents,
  getPremiereNewsItems,
  isWorkLive,
} from "./work-release";
import type { EventCategory, WorkType, NewsItem } from "@/lib/types";
import {
  CHARACTERS_EN,
  GALLERY_EN,
  MAGAZINES_EN,
  VIDEOS_EN,
  WORKS_EN,
} from "./translations/en";

function enrichWork(work: (typeof works)[number]) {
  const patched = applyWorkRelease(work);
  const externalLinks = getWorkExternalLinks(work.slug);
  const enriched = withExternalLinks(patched, externalLinks);
  const watch = externalLinks.find((l) => l.kind === "watch");
  return watch ? { ...enriched, externalUrl: watch.href } : enriched;
}

function enrichMagazine(mag: (typeof magazines)[number]) {
  return withExternalLinks(mag, getMagazineExternalLinks(mag.slug));
}

function enrichEvent(ev: (typeof events)[number]) {
  return withExternalLinks(ev, getEventExternalLinks(ev.slug));
}

export function getWorks() {
  return [...works].map(enrichWork).sort((a, b) => b.year - a.year);
}

export function getWorkBySlug(slug: string) {
  const work = works.find((w) => w.slug === slug);
  return work ? enrichWork(work) : undefined;
}

export function getUpcomingWorks() {
  return getWorks().filter((w) => w.status === "upcoming");
}

export function getFeaturedWorks(limit = 3) {
  return getWorks()
    .filter((work) => work.featured)
    .slice(0, limit);
}

export function getWorksByType(type: WorkType | "all") {
  const sorted = getWorks();
  if (type === "all") return sorted;
  return sorted.filter((work) => work.type === type);
}

export function getMagazines() {
  return [...magazines].map(enrichMagazine).sort((a, b) => b.year - a.year);
}

export function getMagazineBySlug(slug: string) {
  const mag = magazines.find((m) => m.slug === slug);
  return mag ? enrichMagazine(mag) : undefined;
}

export function getMagazineSlugs() {
  return magazines.map((m) => m.slug);
}

export function getFeaturedMagazines(limit = 6) {
  return getMagazines()
    .filter((mag) => mag.featured)
    .slice(0, limit);
}

export function getEvents() {
  return [...events, ...getPremiereEvents()]
    .map(enrichEvent)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEventBySlug(slug: string) {
  const ev = [...events, ...getPremiereEvents()].find((e) => e.slug === slug);
  return ev ? enrichEvent(ev) : undefined;
}

export function getEventSlugs() {
  return [...events, ...getPremiereEvents()].map((e) => e.slug);
}

export function getFeaturedEvents(limit = 4) {
  return getEvents()
    .filter((event) => event.featured)
    .slice(0, limit);
}

export function getEventsByCategory(category: EventCategory | "all") {
  const sorted = getEvents();
  if (category === "all") return sorted;
  return sorted.filter((event) => event.category === category);
}

export function getNews() {
  const merged = [...getPremiereNewsItems(), ...news];
  const seen = new Set<string>();
  return merged
    .filter((item) => {
      if (seen.has(item.slug)) return false;
      seen.add(item.slug);
      return true;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function getNewsBySlug(slug: string) {
  return getNews().find((n) => n.slug === slug);
}

export function getNewsSlugs() {
  return getNews().map((n) => n.slug);
}

export function getNewsWithRelated(slug: string) {
  const item = getNewsBySlug(slug);
  if (!item) return undefined;
  return {
    item,
    related: {
      work: item.workSlug ? getWorkBySlug(item.workSlug) : undefined,
      event: item.eventSlug ? getEventBySlug(item.eventSlug) : undefined,
      magazine: item.magazineSlug ? getMagazineBySlug(item.magazineSlug) : undefined,
    },
    relatedStories: getStoriesForNews(slug),
  };
}

export function getLatestNews(limit = 5) {
  return getNews().slice(0, limit);
}

export function getGallery() {
  return gallery.map((item) => {
    if (item.slug === "sui-ran-poster" && isWorkLive("sui-ran-bu-neng-yiqie")) {
      return { ...item, tags: GALLERY_LIVE_TAG_PATCH["sui-ran-poster"] };
    }
    return item;
  });
}

export function getWallpapers() {
  return gallery.filter((g) => g.wallpaper);
}

export function getCharacterByWorkSlug(workSlug: string) {
  return characters.find((c) => c.workSlug === workSlug);
}

export function getCharacters() {
  return [...characters];
}

export function getFeaturedCharacters(limit = 6) {
  return characters.filter((c) => c.featured).slice(0, limit);
}

export function getCharacterBySlug(slug: string) {
  return characters.find((c) => c.slug === slug);
}

export function getCharacterSlugs() {
  return characters.map((c) => c.slug);
}

export function getNewsForWork(workSlug: string, limit = 4) {
  return getNews().filter((n) => n.workSlug === workSlug).slice(0, limit);
}

export function getNewsForEvent(eventSlug: string, limit = 4) {
  return getNews().filter((n) => n.eventSlug === eventSlug).slice(0, limit);
}

export function getCharacterWithWork(slug: string) {
  const character = getCharacterBySlug(slug);
  if (!character) return undefined;
  const work = getWorkBySlug(character.workSlug);
  const videos = getVideos().filter((v) => v.workSlug === character.workSlug).slice(0, 4);
  return { character, work, videos };
}

export function getQuotes() {
  return quotes;
}

export function getFanCulture() {
  return fanCulture;
}

export function getBrandHighlights() {
  return brandHighlights;
}

export function getCharityItems() {
  return charityItems;
}

export function getChangelog() {
  return [...changelog].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFashionNews(limit = 6) {
  return getNews()
    .filter((n) => n.category === "fashion")
    .slice(0, limit);
}

/** 动态条目：优先站内详情页，其次关联实体，最后外链 */
export function resolveNewsHref(item: NewsItem): {
  href: string;
  external: boolean;
} {
  return { href: `/latest/${item.slug}`, external: false };
}

export function resolveNewsExternalHref(item: NewsItem): string | undefined {
  if (item.workSlug) return `/works/${item.workSlug}`;
  if (item.eventSlug) return `/events/${item.eventSlug}`;
  if (item.magazineSlug) return `/magazine/${item.magazineSlug}`;
  return item.externalUrl;
}

export function getVideos() {
  return [...videos].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedVideos(limit = 4) {
  return getVideos()
    .filter((v) => v.featured)
    .slice(0, limit);
}

export function getVideosByCategory(category: import("@/lib/types").VideoCategory | "all") {
  const sorted = getVideos();
  if (category === "all") return sorted;
  return sorted.filter((v) => v.category === category);
}

export function getHonors() {
  return [...honors].sort((a, b) => b.year - a.year);
}

export function getTimeline() {
  return [...timeline].sort((a, b) => b.year - a.year);
}

export function getSiteMeta() {
  return siteMeta;
}

export function getStories() {
  return [...stories].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getStoryBySlug(slug: string) {
  return getStories().find((s) => s.slug === slug);
}

export function getStorySlugs() {
  return getStories().map((s) => s.slug);
}

export function getFeaturedStories(limit = 3) {
  return getStories()
    .filter((s) => s.featured)
    .slice(0, limit);
}

export function getStoriesForEvent(eventSlug: string, limit = 2) {
  return getStories()
    .filter((s) => s.eventSlug === eventSlug)
    .slice(0, limit);
}

export function getStoriesForNews(newsSlug: string, limit = 2) {
  return getStories()
    .filter((s) => s.newsSlug === newsSlug)
    .slice(0, limit);
}

export function getWorkSlugs() {
  return works.map((work) => work.slug);
}

export type SearchResult = {
  title: string;
  href: string;
  type: string;
  excerpt?: string;
  /** 用于跨语言匹配，不在 UI 展示 */
  altTitle?: string;
};

export type SearchLocale = "zh" | "en";

function matchesQuery(item: SearchResult, q: string) {
  return (
    item.title.toLowerCase().includes(q) ||
    item.altTitle?.toLowerCase().includes(q) ||
    item.excerpt?.toLowerCase().includes(q) ||
    item.type.toLowerCase().includes(q)
  );
}

function buildSearchPool(locale: SearchLocale): SearchResult[] {
  const isEn = locale === "en";

  return [
    ...getWorks().map((w) => {
      const extra = WORKS_EN[w.slug];
      return {
        title: isEn ? (w.titleEn ?? w.title) : w.title,
        altTitle: isEn ? w.title : w.titleEn,
        href: `/works/${w.slug}`,
        type: isEn ? "Work" : "作品",
        excerpt: isEn
          ? `as ${w.roleEn ?? extra?.roleEn ?? w.role}`
          : `饰 ${w.role}`,
      };
    }),
    ...getMagazines().map((m) => {
      const extra = MAGAZINES_EN[m.slug];
      const enName = m.nameEn ?? extra?.nameEn;
      return {
        title: isEn ? (enName ?? m.name) : m.name,
        altTitle: isEn ? m.name : enName,
        href: `/magazine/${m.slug}`,
        type: isEn ? "Magazine" : "杂志",
        excerpt: isEn ? (m.issueEn ?? extra?.issueEn ?? m.issue) : m.issue,
      };
    }),
    ...getEvents().map((e) => ({
      title: isEn ? (e.titleEn ?? e.title) : e.title,
      altTitle: isEn ? e.title : e.titleEn,
      href: `/events/${e.slug}`,
      type: isEn ? "Event" : "活动",
      excerpt: (isEn ? (e.summaryEn ?? e.summary) : e.summary).slice(0, 60),
    })),
    ...getNews().map((n) => ({
      title: isEn ? (n.titleEn ?? n.title) : n.title,
      altTitle: isEn ? n.title : n.titleEn,
      href: `/latest/${n.slug}`,
      type: isEn ? "News" : "动态",
      excerpt: (isEn ? (n.summaryEn ?? n.summary) : n.summary).slice(0, 60),
    })),
    ...getCharacters().map((c) => {
      const extra = CHARACTERS_EN[c.slug];
      const enName = extra?.nameEn;
      return {
        title: isEn ? (enName ?? c.name) : c.name,
        altTitle: isEn ? c.name : enName,
        href: `/characters/${c.slug}`,
        type: isEn ? "Character" : "角色",
        excerpt: isEn ? (extra?.workTitleEn ?? c.workTitle) : c.workTitle,
      };
    }),
    ...getGallery().map((g) => {
      const enTitle = g.titleEn ?? GALLERY_EN[g.slug]?.titleEn;
      return {
        title: isEn ? (enTitle ?? g.title) : g.title,
        altTitle: isEn ? g.title : enTitle,
        href: "/gallery",
        type: isEn ? "Gallery" : "图库",
        excerpt: g.tags?.join(" "),
      };
    }),
    ...getVideos().map((v) => {
      const extra = VIDEOS_EN[v.slug];
      const enTitle = v.titleEn ?? extra?.titleEn;
      return {
        title: isEn ? (enTitle ?? v.title) : v.title,
        altTitle: isEn ? v.title : enTitle,
        href: "/videos",
        type: isEn ? "Video" : "视频",
        excerpt: (isEn
          ? (v.summaryEn ?? extra?.summaryEn ?? v.summary)
          : v.summary
        )?.slice(0, 60),
      };
    }),
    ...getHonors().map((h) => ({
      title: isEn ? (h.titleEn ?? h.title) : h.title,
      altTitle: isEn ? h.title : h.titleEn,
      href: "/about",
      type: isEn ? "Honor" : "荣誉",
      excerpt: (isEn ? (h.sourceEn ?? h.source) : h.source)?.slice(0, 60),
    })),
    ...brandHighlights.map((b) => ({
      title: isEn ? (b.titleEn ?? b.title) : b.title,
      altTitle: isEn ? b.title : b.titleEn,
      href: "/fashion",
      type: isEn ? "Fashion" : "时尚",
      excerpt: (isEn ? (b.summaryEn ?? b.summary) : b.summary)?.slice(0, 60),
    })),
    ...charityItems.map((c) => ({
      title: isEn ? (c.titleEn ?? c.title) : c.title,
      altTitle: isEn ? c.title : c.titleEn,
      href: "/charity",
      type: isEn ? "Charity" : "公益",
      excerpt: (isEn ? (c.summaryEn ?? c.summary) : c.summary)?.slice(0, 60),
    })),
    ...getStories().map((s) => ({
      title: isEn ? (s.titleEn ?? s.title) : s.title,
      altTitle: isEn ? s.title : s.titleEn,
      href: `/stories/${s.slug}`,
      type: isEn ? "Story" : "专题",
      excerpt: (isEn ? (s.summaryEn ?? s.summary) : s.summary)?.slice(0, 60),
    })),
  ];
}

/** 全站搜索索引（随界面语言切换展示与匹配） */
export function searchSite(
  query: string,
  limit = 12,
  locale: SearchLocale = "zh",
): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return buildSearchPool(locale)
    .filter((item) => matchesQuery(item, q))
    .slice(0, limit);
}

export {
  works,
  magazines,
  events,
  honors,
  timeline,
  siteMeta,
  news,
  gallery,
  characters,
  fanCulture,
  brandHighlights,
  charityItems,
  changelog,
  videos,
  stories,
};
