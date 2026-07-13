import type { UiKey } from "@/lib/i18n/ui";

/** Shared home-page anchor ids — used by chapter nav and scroll targets. */
export const HOME_SECTIONS = {
  latest: "home-latest",
  upcoming: "home-upcoming",
  works: "featured-works",
  characters: "home-characters",
  magazines: "home-magazines",
  events: "home-events",
} as const;

export const HOME_SECTION_SCROLL_MT = "scroll-mt-24";

export type HomeChapter = {
  id: string;
  labelKey: UiKey;
};

export const HOME_CHAPTERS: HomeChapter[] = [
  { id: HOME_SECTIONS.latest, labelKey: "homeChapters.latest" },
  { id: HOME_SECTIONS.upcoming, labelKey: "homeChapters.upcoming" },
  { id: HOME_SECTIONS.works, labelKey: "homeChapters.works" },
  { id: HOME_SECTIONS.characters, labelKey: "homeChapters.characters" },
  { id: HOME_SECTIONS.magazines, labelKey: "homeChapters.magazines" },
  { id: HOME_SECTIONS.events, labelKey: "homeChapters.events" },
];
