"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

export type { ContactPageProps } from "./_shared";

export const ContactPageDesign = createThemedPageDesign<import("./_shared").ContactPageProps>("contact", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
