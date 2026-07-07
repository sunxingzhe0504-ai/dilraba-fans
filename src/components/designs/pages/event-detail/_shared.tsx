import type { FanEvent, NewsItem, Story } from "@/lib/types";
export type EventDetailPageProps = {
  event: FanEvent;
  relatedNews?: NewsItem[];
  relatedStories?: Story[];
};
