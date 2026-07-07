"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { StoriesPageProps } from "./_shared";

export const StoriesPageDesign = createThemedPageDesign<import("./_shared").StoriesPageProps>("stories", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
