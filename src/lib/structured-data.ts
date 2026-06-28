import { WORKS_EN, CHARACTERS_EN, MAGAZINES_EN } from "@content/translations/en";
import type { Character, FanEvent, Magazine, NewsItem, Work } from "@/lib/types";
import { siteUrl } from "@/lib/site-url";

const PERSON = {
  "@type": "Person" as const,
  name: "迪丽热巴",
  alternateName: ["Dilraba Dilmurat", "Dilraba"],
  jobTitle: "Actor",
};

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "迪丽热巴 · 粉丝资讯站",
    alternateName: "Dilraba Fan Info Site",
    url: siteUrl("/"),
    description:
      "Unofficial fan site for Dilraba Dilmurat — works, fashion, and public events.",
    inLanguage: ["zh-CN", "en-US"],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    ...PERSON,
    birthDate: "1992-06-03",
    birthPlace: { "@type": "Place", name: "Ürümqi, Xinjiang, China" },
    url: siteUrl("/about"),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function workSchemaType(type: Work["type"]) {
  if (type === "film") return "Movie";
  if (type === "tv") return "TVSeries";
  return "CreativeWork";
}

export function workJsonLd(work: Work) {
  const extra = WORKS_EN[work.slug];
  return {
    "@context": "https://schema.org",
    "@type": workSchemaType(work.type),
    name: work.title,
    ...(work.titleEn ? { alternateName: work.titleEn } : {}),
    description: extra?.synopsisEn ?? work.synopsisEn ?? work.synopsis,
    datePublished: String(work.year),
    url: siteUrl(`/works/${work.slug}`),
    actor: { ...PERSON, characterName: work.role },
  };
}

export function newsJsonLd(item: NewsItem) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.titleEn ?? item.title,
    ...(item.titleEn ? { alternativeHeadline: item.title } : {}),
    description: item.summaryEn ?? item.summary,
    datePublished: item.date,
    url: siteUrl(`/latest/${item.slug}`),
    author: PERSON,
  };
}

export function eventJsonLd(event: FanEvent) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.titleEn ?? event.title,
    description: event.summaryEn ?? event.summary,
    startDate: event.date,
    ...(event.location
      ? { location: { "@type": "Place", name: event.locationEn ?? event.location } }
      : {}),
    url: siteUrl(`/events/${event.slug}`),
    performer: PERSON,
  };
}

export function characterJsonLd(character: Character) {
  const extra = CHARACTERS_EN[character.slug];
  return {
    "@context": "https://schema.org",
    "@type": "PerformanceRole",
    name: extra?.nameEn ?? character.name,
    ...(extra?.nameEn ? { alternateName: character.name } : {}),
    description: extra?.descriptionEn ?? character.description,
    characterName: extra?.nameEn ?? character.name,
    url: siteUrl(`/characters/${character.slug}`),
    actor: PERSON,
    partOfSeries: {
      "@type": "CreativeWork",
      name: extra?.workTitleEn ?? character.workTitle,
      url: siteUrl(`/works/${character.workSlug}`),
    },
  };
}

export function magazineJsonLd(magazine: Magazine) {
  const extra = MAGAZINES_EN[magazine.slug];
  return {
    "@context": "https://schema.org",
    "@type": "PublicationIssue",
    name: extra?.nameEn ?? magazine.nameEn ?? magazine.name,
    description: extra?.descriptionEn ?? magazine.description ?? magazine.issue,
    datePublished: String(magazine.year),
    url: siteUrl(`/magazine/${magazine.slug}`),
    ...(magazine.cover
      ? { image: magazine.cover.startsWith("http") ? magazine.cover : siteUrl(magazine.cover) }
      : {}),
  };
}
