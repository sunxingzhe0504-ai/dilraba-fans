import type { Character, NewsItem, VideoItem, Work } from "@/lib/types";
export type CharacterDetailPageProps = {
  character: Character;
  work?: Work;
  videos: VideoItem[];
  relatedNews?: NewsItem[];
};
