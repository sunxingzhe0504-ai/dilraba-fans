"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { CharactersPageProps } from "./_shared";

export const CharactersPageDesign = createThemedPageDesign<import("./_shared").CharactersPageProps>("characters", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
