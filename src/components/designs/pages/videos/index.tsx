"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { VideosPageProps } from "./_shared";

export const VideosPageDesign = createThemedPageDesign<import("./_shared").VideosPageProps>("videos", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
