"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { UpcomingPageProps } from "./_shared";

export const UpcomingPageDesign = createThemedPageDesign<import("./_shared").UpcomingPageProps>("upcoming", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
