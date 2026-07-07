"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { MagazinePageProps } from "./_shared";

export const MagazinePageDesign = createThemedPageDesign<import("./_shared").MagazinePageProps>("magazine", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
