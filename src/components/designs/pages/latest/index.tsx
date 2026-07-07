"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { LatestPageProps } from "./_shared";

export const LatestPageDesign = createThemedPageDesign<import("./_shared").LatestPageProps>("latest", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
