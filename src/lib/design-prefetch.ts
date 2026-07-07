import type { ThemeId } from "@/lib/themes";
import { getPageVariantLoaders } from "@/components/designs/create-themed-page-design";
import { prefetchHomeTheme } from "@/components/designs/HomeDesignRouter";

/** Map bare routes (no locale prefix) to design page ids for variant prefetch. */
export const ROUTE_PAGE_IDS: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/changelog": "changelog",
  "/charity": "charity",
  "/characters": "characters",
  "/contact": "contact",
  "/events": "events",
  "/fans": "fans",
  "/fashion": "fashion",
  "/gallery": "gallery",
  "/latest": "latest",
  "/magazine": "magazine",
  "/stories": "stories",
  "/upcoming": "upcoming",
  "/videos": "videos",
  "/works": "works",
};

const THEME_IDS: ThemeId[] = ["a", "b", "c", "d"];

function runIdle(fn: () => void) {
  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(fn, { timeout: 2500 });
  } else {
    setTimeout(fn, 150);
  }
}

/** Prefetch a page's theme variant chunk (skips current theme — already loaded). */
export function prefetchPageVariant(
  pageId: string,
  theme: ThemeId,
  excludeTheme?: ThemeId,
) {
  if (pageId === "home") {
    prefetchHomeTheme(theme);
    return;
  }
  const loaders = getPageVariantLoaders(pageId);
  if (!loaders) return;
  if (theme === excludeTheme) return;
  runIdle(() => {
    void loaders[theme]();
  });
}

/** Prefetch all inactive theme variants for a page (after theme switch). */
export function prefetchInactivePageVariants(pageId: string, activeTheme: ThemeId) {
  for (const theme of THEME_IDS) {
    if (theme !== activeTheme) prefetchPageVariant(pageId, theme);
  }
}

/** Resolve design page id from bare path (supports detail routes). */
export function routeToPageId(barePath: string): string | undefined {
  const normalized = barePath.replace(/\/$/, "") || "/";
  if (ROUTE_PAGE_IDS[normalized]) return ROUTE_PAGE_IDS[normalized];
  const first = normalized.split("/").filter(Boolean)[0];
  return first ? ROUTE_PAGE_IDS[`/${first}`] : undefined;
}

/** Prefetch page chunk for route hover / focus. */
export function prefetchRouteDesign(barePath: string, theme: ThemeId) {
  const pageId = routeToPageId(barePath);
  if (!pageId) return;
  prefetchPageVariant(pageId, theme);
}

/** Prefetch likely next pages from home. */
export function prefetchCommonPages(theme: ThemeId) {
  for (const path of ["/works", "/latest", "/gallery", "/fans"]) {
    prefetchRouteDesign(path, theme);
  }
}
