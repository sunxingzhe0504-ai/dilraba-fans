"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { MagazineDetailPageProps } from "./_shared";

export const MagazineDetailPageDesign = createThemedPageDesign<import("./_shared").MagazineDetailPageProps>("magazine-detail", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
