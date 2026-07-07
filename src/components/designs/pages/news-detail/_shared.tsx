import type { FanEvent, Magazine, NewsItem, Story, Work } from "@/lib/types";
export type NewsDetailRelated = {
  work?: Work;
  event?: FanEvent;
  magazine?: Magazine;
};
export type NewsDetailPageProps = {
  item: NewsItem;
  related: NewsDetailRelated;
  relatedStories?: Story[];
};
