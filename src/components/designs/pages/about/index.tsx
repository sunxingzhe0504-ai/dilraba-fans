"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { AboutPageProps } from "./_shared";

export const AboutPageDesign = createThemedPageDesign<import("./_shared").AboutPageProps>("about", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
