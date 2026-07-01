import type { Metadata } from "next";
import {
  getFeaturedEvents,
  getFeaturedMagazines,
  getFeaturedStories,
  getFeaturedWorks,
  getFeaturedCharacters,
  getFeaturedVideos,
  getHonors,
  getLatestNews,
  getSiteMeta,
  getUpcomingWorks,
} from "@content/index";
import { HomeDesignRouter } from "@/components/designs/HomeDesignRouter";
import type { HomeData } from "@/components/designs/types";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata: Metadata = listPageMetadata("home");

export const dynamic = "force-static";

export default function HomePage() {
  const { stats, heroTagline, heroSubtitle } = getSiteMeta();

  const data: HomeData = {
    hero: { tagline: heroTagline, subtitle: heroSubtitle },
    latestNews: getLatestNews(5),
    featuredStories: getFeaturedStories(2),
    works: getFeaturedWorks(4),
    upcoming: getUpcomingWorks(),
    characters: getFeaturedCharacters(3),
    magazines: getFeaturedMagazines(6),
    events: getFeaturedEvents(4),
    videos: getFeaturedVideos(4),
    stats,
    honors: getHonors().slice(0, 4),
  };

  return <HomeDesignRouter data={data} />;
}
