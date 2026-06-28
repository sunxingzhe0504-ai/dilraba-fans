import type {
  Character,
  FanEvent,
  FanCulture,
  Honor,
  Magazine,
  NewsItem,
  Quote,
  SiteMeta,
  TimelineEntry,
  VideoItem,
  Work,
} from "@/lib/types";
import { pick, pickArray } from "./pick";
import type { Locale } from "./types";
import {
  BRAND_HIGHLIGHTS_EN,
  CHARACTERS_EN,
  GALLERY_EN,
  MAGAZINES_EN,
  QUOTES_EN,
  WORKS_EN,
} from "@content/translations/en";

export function localizeWork(work: Work, locale: Locale): Work {
  if (locale === "zh") return work;
  const extra = WORKS_EN[work.slug];
  return {
    ...work,
    title: pick(work, "title", locale),
    role: extra?.roleEn ?? pick(work, "role", locale),
    synopsis: extra?.synopsisEn ?? pick(work, "synopsis", locale),
    airInfo: work.airInfo ? (extra?.airInfoEn ?? pick(work, "airInfo", locale)) : work.airInfo,
    highlights: work.highlights?.map((h, i) => {
      const en = extra?.highlightsEn ?? (work as Work & { highlightsEn?: string[] }).highlightsEn;
      return en?.[i] ?? h;
    }),
    externalLinks: work.externalLinks?.map((link) => ({
      ...link,
      label: pick(link as { label: string; labelEn?: string }, "label", locale),
    })),
  };
}

export function localizeNews(item: NewsItem, locale: Locale): NewsItem {
  if (locale === "zh") return item;
  return {
    ...item,
    title: pick(item, "title", locale),
    summary: pick(item, "summary", locale),
    body: item.body ? pick(item, "body", locale) : item.body,
  };
}

export function localizeEvent(event: FanEvent, locale: Locale): FanEvent {
  if (locale === "zh") return event;
  return {
    ...event,
    title: pick(event, "title", locale),
    location: event.location ? pick(event, "location", locale) : event.location,
    summary: pick(event, "summary", locale),
    description: event.description ? pick(event, "description", locale) : event.description,
  };
}

export function localizeMagazine(mag: Magazine, locale: Locale): Magazine {
  if (locale === "zh") return mag;
  const extra = MAGAZINES_EN[mag.slug];
  return {
    ...mag,
    name: extra?.nameEn ?? pick(mag, "name", locale),
    issue: extra?.issueEn ?? pick(mag, "issue", locale),
    description: mag.description
      ? (extra?.descriptionEn ?? pick(mag, "description", locale))
      : mag.description,
  };
}

export function localizeCharacter(c: Character, locale: Locale): Character {
  if (locale === "zh") return c;
  const extra = CHARACTERS_EN[c.slug];
  return {
    ...c,
    name: extra?.nameEn ?? pick(c, "name", locale),
    workTitle: extra?.workTitleEn ?? pick(c, "workTitle", locale),
    quote: c.quote ? (extra?.quoteEn ?? pick(c, "quote", locale)) : c.quote,
    description: extra?.descriptionEn ?? pick(c, "description", locale),
  };
}

export function localizeVideo(v: VideoItem, locale: Locale): VideoItem {
  if (locale === "zh") return v;
  return {
    ...v,
    title: pick(v, "title", locale),
    summary: v.summary ? pick(v, "summary", locale) : v.summary,
  };
}

export function localizeBrandHighlight(
  item: import("@/lib/types").BrandHighlight,
  locale: Locale,
): import("@/lib/types").BrandHighlight {
  if (locale === "zh") return item;
  const extra = BRAND_HIGHLIGHTS_EN[item.slug];
  return {
    ...item,
    title: extra?.titleEn ?? pick(item, "title", locale),
    summary: extra?.summaryEn ?? pick(item, "summary", locale),
  };
}

export function localizeCharity(item: import("@/lib/types").CharityItem, locale: Locale) {
  if (locale === "zh") return item;
  return {
    ...item,
    title: pick(item, "title", locale),
    date: pick(item, "date", locale),
    summary: pick(item, "summary", locale),
  };
}

export function localizeGalleryItem(
  item: import("@/lib/types").GalleryItem,
  locale: Locale,
): import("@/lib/types").GalleryItem {
  if (locale === "zh") return item;
  const extra = GALLERY_EN[item.slug];
  return {
    ...item,
    title: extra?.titleEn ?? pick(item, "title", locale),
  };
}

export function localizeHonor(h: Honor, locale: Locale): Honor {
  if (locale === "zh") return h;
  return {
    ...h,
    title: pick(h, "title", locale),
    source: h.source ? pick(h, "source", locale) : h.source,
  };
}

export function localizeTimeline(entry: TimelineEntry, locale: Locale): TimelineEntry {
  if (locale === "zh") return entry;
  return {
    ...entry,
    title: pick(entry, "title", locale),
    description: pick(entry, "description", locale),
  };
}

export function localizeQuote(q: Quote, locale: Locale): Quote {
  if (locale === "zh") return q;
  const extra = QUOTES_EN[q.id];
  return {
    ...q,
    text: extra?.textEn ?? pick(q, "text", locale),
    source: extra?.sourceEn ?? pick(q, "source", locale),
  };
}

export function localizeSiteMeta(meta: SiteMeta, locale: Locale): SiteMeta {
  if (locale === "zh") return meta;
  const m = meta as SiteMeta & {
    heroTaglineEn?: string;
    heroSubtitleEn?: string;
    bioEn?: string;
    bioExtendedEn?: string[];
    statsEn?: { label: string; value: string }[];
  };
  return {
    ...meta,
    heroTagline: m.heroTaglineEn ?? meta.heroTagline,
    heroSubtitle: m.heroSubtitleEn ?? meta.heroSubtitle,
    bio: m.bioEn ?? meta.bio,
    bioExtended: m.bioExtendedEn ?? meta.bioExtended,
    stats: m.statsEn ?? meta.stats,
    officialLinks: meta.officialLinks.map((link) => ({
      ...link,
      label: pick(link as { label: string; labelEn?: string }, "label", locale),
    })),
  };
}

export function localizeFanCulture(fc: FanCulture, locale: Locale): FanCulture {
  if (locale === "zh") return fc;
  const f = fc as FanCulture & { fanNameNoteEn?: string; fanGuideEn?: string[] };
  return {
    ...fc,
    fanNameNote: f.fanNameNoteEn ?? fc.fanNameNote,
    fanGuide: f.fanGuideEn ?? fc.fanGuide,
    anniversaries: fc.anniversaries.map((a) => ({
      ...a,
      title: pick(a, "title", locale),
      description: pick(a, "description", locale),
    })),
    communityLinks: fc.communityLinks.map((link) => ({
      ...link,
      label: pick(link, "label", locale),
      note: link.note ? pick(link, "note", locale) : link.note,
    })),
  };
}

export function localizeList<T>(
  items: T[],
  fn: (item: T, locale: Locale) => T,
  locale: Locale,
): T[] {
  return locale === "zh" ? items : items.map((item) => fn(item, locale));
}
