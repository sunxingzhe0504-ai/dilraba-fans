"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { GalleryPageProps } from "./_shared";

export const GalleryPageDesign = createThemedPageDesign<import("./_shared").GalleryPageProps>("gallery", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
