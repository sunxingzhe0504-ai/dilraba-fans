"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { DEFAULT_THEME, type ThemeId } from "@/lib/themes";
import { DesignPageFallback } from "./DesignPageFallback";

export type VariantLoaders<P extends object> = Record<
  ThemeId,
  () => Promise<{ default: ComponentType<P> }>
>;

function lazyVariant<P extends object>(
  pageId: string,
  theme: ThemeId,
  loader: () => Promise<{ default: ComponentType<P> }>,
): ComponentType<P> {
  return dynamic(loader, {
    loading: () => <DesignPageFallback />,
    ssr: true,
  }) as ComponentType<P>;
}

/** Code-split themed page: only loads the active theme variant chunk. */
export function createThemedPageDesign<P extends object>(
  pageId: string,
  loaders: VariantLoaders<P>,
): ComponentType<P> {
  registerPageVariantLoaders(pageId, loaders as VariantLoaders<object>);

  const components: Record<ThemeId, ComponentType<P>> = {
    c: lazyVariant(`${pageId}-c`, "c", loaders.c),
    a: lazyVariant(`${pageId}-a`, "a", loaders.a),
    b: lazyVariant(`${pageId}-b`, "b", loaders.b),
    d: lazyVariant(`${pageId}-d`, "d", loaders.d),
  };

  function ThemedPageDesign(props: P) {
    const { theme } = useTheme();
    const Component = components[theme] ?? components[DEFAULT_THEME];
    return <Component {...props} />;
  }

  ThemedPageDesign.displayName = `ThemedPageDesign(${pageId})`;
  return ThemedPageDesign as ComponentType<P>;
}

/** Registry for idle prefetch of inactive theme variants. */
export function registerPageVariantLoaders(
  pageId: string,
  loaders: VariantLoaders<object>,
) {
  pageVariantRegistry.set(pageId, loaders as VariantLoaders<object>);
}

const pageVariantRegistry = new Map<string, VariantLoaders<object>>();

export function getPageVariantLoaders(pageId: string) {
  return pageVariantRegistry.get(pageId);
}

export function registerAllPageLoaders(
  entries: Record<string, VariantLoaders<object>>,
) {
  for (const [id, loaders] of Object.entries(entries)) {
    registerPageVariantLoaders(id, loaders);
  }
}

export { pageVariantRegistry };
