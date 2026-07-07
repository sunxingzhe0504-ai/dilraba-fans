"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { EventDetailPageProps } from "./_shared";

export const EventDetailPageDesign = createThemedPageDesign<import("./_shared").EventDetailPageProps>("event-detail", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
