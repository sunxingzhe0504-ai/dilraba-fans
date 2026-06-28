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

export function localizeWork(work: Work, locale: Locale): Work {
  if (locale === "zh") return work;
  return {
    ...work,
    title: pick(work, "title", locale),
    role: pick(work, "role", locale),
    synopsis: pick(work, "synopsis", locale),
    airInfo: work.airInfo ? pick(work, "airInfo", locale) : work.airInfo,
    highlights: work.highlights?.map((_, i) => {
      const en = (work as Work & { highlightsEn?: string[] }).highlightsEn;
      return en?.[i] ?? work.highlights![i];
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
  return {
    ...mag,
    name: pick(mag, "name", locale),
    issue: pick(mag, "issue", locale),
    description: mag.description ? pick(mag, "description", locale) : mag.description,
  };
}

export function localizeCharacter(c: Character, locale: Locale): Character {
  if (locale === "zh") return c;
  return {
    ...c,
    name: pick(c, "name", locale),
    workTitle: pick(c, "workTitle", locale),
    quote: c.quote ? pick(c, "quote", locale) : c.quote,
    description: pick(c, "description", locale),
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
  return {
    ...item,
    title: pick(item, "title", locale),
    summary: pick(item, "summary", locale),
  };
}

export function localizeGalleryItem(
  item: import("@/lib/types").GalleryItem,
  locale: Locale,
): import("@/lib/types").GalleryItem {
  if (locale === "zh") return item;
  return {
    ...item,
    title: pick(item, "title", locale),
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
  return {
    ...q,
    text: pick(q, "text", locale),
    source: pick(q, "source", locale),
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
