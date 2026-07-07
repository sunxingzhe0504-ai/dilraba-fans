"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { WorksPageProps } from "./_shared";

export const WorksPageDesign = createThemedPageDesign<import("./_shared").WorksPageProps>("works", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
