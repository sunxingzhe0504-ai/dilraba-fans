import type { Magazine, NewsItem, Story } from "@/lib/types";
export type MagazineDetailPageProps = {
  magazine: Magazine;
  relatedNews?: NewsItem[];
  relatedStories?: Story[];
};
