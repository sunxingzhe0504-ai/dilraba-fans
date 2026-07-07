"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { EventsPageProps } from "./_shared";

export const EventsPageDesign = createThemedPageDesign<import("./_shared").EventsPageProps>("events", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
