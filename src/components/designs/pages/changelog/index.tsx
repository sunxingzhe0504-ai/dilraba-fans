"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { ChangelogPageProps } from "./_shared";

export const ChangelogPageDesign = createThemedPageDesign<import("./_shared").ChangelogPageProps>("changelog", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
