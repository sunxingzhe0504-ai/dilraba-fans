"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { WorkDetailPageProps } from "./_shared";

export const WorkDetailPageDesign = createThemedPageDesign<import("./_shared").WorkDetailPageProps>("work-detail", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
