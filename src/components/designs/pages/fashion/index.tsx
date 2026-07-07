"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { FashionPageProps } from "./_shared";

export const FashionPageDesign = createThemedPageDesign<import("./_shared").FashionPageProps>("fashion", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
