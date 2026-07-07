import type { Character, NewsItem, Story, Work } from "@/lib/types";
export type WorkDetailPageProps = {
  work: Work;
  character?: Character;
  relatedNews?: NewsItem[];
  relatedStories?: Story[];
};
