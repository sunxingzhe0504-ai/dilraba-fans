import type { MetadataRoute } from "next";
import {
  getCharacterSlugs,
  getEventSlugs,
  getMagazineSlugs,
  getNewsSlugs,
  getWorkSlugs,
} from "@content/index";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: siteUrl(path),
      lastModified,
      changeFrequency,
      priority,
    })),
    ...getWorkSlugs().map((slug) => ({
      url: siteUrl(`/works/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getMagazineSlugs().map((slug) => ({
      url: siteUrl(`/magazine/${slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...getEventSlugs().map((slug) => ({
      url: siteUrl(`/events/${slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...getNewsSlugs().map((slug) => ({
      url: siteUrl(`/latest/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getCharacterSlugs().map((slug) => ({
      url: siteUrl(`/characters/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
