"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { StoryDetailPageProps } from "./_shared";

export const StoryDetailPageDesign = createThemedPageDesign<import("./_shared").StoryDetailPageProps>("story-detail", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
