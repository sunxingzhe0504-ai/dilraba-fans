"use client";

import type { ComponentType } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { DEFAULT_THEME, type ThemeId } from "@/lib/themes";

type Props<P extends object> = {
  variants: Record<ThemeId, ComponentType<P>>;
  props: P;
};

/** 按当前百变风格渲染对应内页版式 */
export function DesignPageRouter<P extends object>({ variants, props }: Props<P>) {
  const { theme } = useTheme();
  const Component = variants[theme] ?? variants[DEFAULT_THEME];
  return <Component {...props} />;
}
