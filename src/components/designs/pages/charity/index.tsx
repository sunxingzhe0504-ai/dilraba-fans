"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { CharityPageProps } from "./_shared";

export const CharityPageDesign = createThemedPageDesign<import("./_shared").CharityPageProps>("charity", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
