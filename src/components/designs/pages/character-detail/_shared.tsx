import type { Character, VideoItem, Work } from "@/lib/types";
export type CharacterDetailPageProps = {
  character: Character;
  work?: Work;
  videos: VideoItem[];
};
