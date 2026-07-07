"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { CharacterDetailPageProps } from "./_shared";

export const CharacterDetailPageDesign = createThemedPageDesign<import("./_shared").CharacterDetailPageProps>("character-detail", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
