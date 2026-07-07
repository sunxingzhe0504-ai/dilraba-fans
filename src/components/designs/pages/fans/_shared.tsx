import type { Character, FanCulture, Quote } from "@/lib/types";
import type { FanMilestones } from "@/lib/fan-milestones";
export type FansPageProps = {
  culture: FanCulture;
  quotes: Quote[];
  characters: Character[];
  milestones: FanMilestones;
};
