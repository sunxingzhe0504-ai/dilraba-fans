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

export function getWorkSlugs() {
  return works.map((work) => work.slug);
}

export type SearchResult = {
  title: string;
  href: string;
  type: string;
  excerpt?: string;
};

/** 全站搜索索引（静态内容） */
export function searchSite(query: string, limit = 12): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const pool: SearchResult[] = [
    ...getWorks().map((w) => ({
      title: w.title,
      href: `/works/${w.slug}`,
      type: "作品",
      excerpt: `饰 ${w.role}`,
    })),
    ...getMagazines().map((m) => ({
      title: m.name,
      href: `/magazine/${m.slug}`,
      type: "杂志",
      excerpt: m.issue,
    })),
    ...getEvents().map((e) => ({
      title: e.title,
      href: `/events/${e.slug}`,
      type: "活动",
      excerpt: e.summary.slice(0, 60),
    })),
    ...getNews().map((n) => ({
      title: n.title,
      href: `/latest/${n.slug}`,
      type: "动态",
      excerpt: n.summary.slice(0, 60),
    })),
    ...getCharacters().map((c) => ({
      title: c.name,
      href: `/characters/${c.slug}`,
      type: "角色",
      excerpt: c.workTitle,
    })),
    ...getGallery().map((g) => ({
      title: g.title,
      href: "/gallery",
      type: "图库",
      excerpt: g.tags?.join(" "),
    })),
    ...getVideos().map((v) => ({
      title: v.title,
      href: "/videos",
      type: "视频",
      excerpt: v.summary?.slice(0, 60),
    })),
  ];

  return pool
    .filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.excerpt?.toLowerCase().includes(q) ||
        item.type.includes(q),
    )
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
};
