export type FanMilestones = {
  works: number;
  characters: number;
  magazines: number;
  stories: number;
  gallery: number;
  videos: number;
  events: number;
  careerYears: number;
};

export function computeCareerYears(debutYear = 2013): number {
  return new Date().getFullYear() - debutYear + 1;
}
