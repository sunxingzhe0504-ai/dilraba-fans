"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { isInternalPath, localizePath } from "@/lib/i18n/path";

type Props = ComponentProps<typeof NextLink>;

/** 站内 Link，自动按当前语言加 /en 前缀 */
export function LocaleLink({ href, ...props }: Props) {
  const locale = useLocale();
  const resolved =
    typeof href === "string" && isInternalPath(href) ? localizePath(href, locale) : href;
  return <NextLink href={resolved} {...props} />;
}
