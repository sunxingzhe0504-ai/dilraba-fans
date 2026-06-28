import type { MetadataRoute } from "next";
import {
  getCharacterSlugs,
  getEventSlugs,
  getEvents,
  getMagazineSlugs,
  getMagazines,
  getNews,
  getNewsSlugs,
  getWorkSlugs,
  getWorks,
} from "@content/index";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

const STATIC_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/latest", priority: 0.9, changeFrequency: "daily" },
  { path: "/works", priority: 0.9, changeFrequency: "weekly" },
  { path: "/upcoming", priority: 0.8, changeFrequency: "weekly" },
  { path: "/videos", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/characters", priority: 0.8, changeFrequency: "weekly" },
  { path: "/magazine", priority: 0.8, changeFrequency: "weekly" },
  { path: "/events", priority: 0.8, changeFrequency: "weekly" },
  { path: "/fashion", priority: 0.7, changeFrequency: "weekly" },
  { path: "/charity", priority: 0.6, changeFrequency: "monthly" },
  { path: "/fans", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/changelog", priority: 0.5, changeFrequency: "weekly" },
];

function parseDate(value?: string, fallbackYear?: number): Date {
  if (value) {
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d;
  }
  if (fallbackYear) return new Date(`${fallbackYear}-06-01`);
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();
  const newsDates = Object.fromEntries(getNews().map((n) => [n.slug, parseDate(n.date)]));
  const eventDates = Object.fromEntries(getEvents().map((e) => [e.slug, parseDate(e.date)]));
  const workDates = Object.fromEntries(
    getWorks().map((w) => [w.slug, parseDate(undefined, w.year)]),
  );
  const magazineDates = Object.fromEntries(
    getMagazines().map((m) => [m.slug, parseDate(undefined, m.year)]),
  );

  const latestNewsDate =
    getNews().length > 0
      ? getNews().reduce(
          (max, n) => Math.max(max, parseDate(n.date).getTime()),
          0,
        )
      : buildTime.getTime();

  return [
    ...STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: siteUrl(path),
      lastModified:
        path === "/latest" ? new Date(latestNewsDate) : buildTime,
      changeFrequency,
      priority,
    })),
    ...getWorkSlugs().map((slug) => ({
      url: siteUrl(`/works/${slug}`),
      lastModified: workDates[slug] ?? buildTime,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getMagazineSlugs().map((slug) => ({
      url: siteUrl(`/magazine/${slug}`),
      lastModified: magazineDates[slug] ?? buildTime,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...getEventSlugs().map((slug) => ({
      url: siteUrl(`/events/${slug}`),
      lastModified: eventDates[slug] ?? buildTime,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...getNewsSlugs().map((slug) => ({
      url: siteUrl(`/latest/${slug}`),
      lastModified: newsDates[slug] ?? buildTime,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getCharacterSlugs().map((slug) => ({
      url: siteUrl(`/characters/${slug}`),
      lastModified: buildTime,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
