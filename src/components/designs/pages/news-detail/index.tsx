"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { NewsDetailPageProps } from "./_shared";

export const NewsDetailPageDesign = createThemedPageDesign<import("./_shared").NewsDetailPageProps>("news-detail", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
