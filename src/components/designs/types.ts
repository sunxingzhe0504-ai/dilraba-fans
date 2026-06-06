import type { Character, FanEvent, Honor, Magazine, NewsItem, VideoItem, Work } from "@/lib/types";

export type HomeData = {
  hero: { tagline: string; subtitle: string };
  latestNews: NewsItem[];
  works: Work[];
  upcoming: Work[];
  characters: Character[];
  magazines: Magazine[];
  events: FanEvent[];
  videos: VideoItem[];
  stats: { label: string; value: string }[];
  honors: Honor[];
};