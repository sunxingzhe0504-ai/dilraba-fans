"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { FansPageProps } from "./_shared";

export const FansPageDesign = createThemedPageDesign<import("./_shared").FansPageProps>("fans", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
