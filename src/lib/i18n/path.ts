import type { Locale } from "./types";

export const EN_PREFIX = "/en";

/** 从 pathname 推断界面语言（/en 前缀 → 英文） */
export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`)) return "en";
  return "zh";
}

/** 去掉 /en 前缀，得到中文站 canonical 路径 */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === EN_PREFIX) return "/";
  if (pathname.startsWith(`${EN_PREFIX}/`)) {
    const rest = pathname.slice(EN_PREFIX.length);
    return rest || "/";
  }
  return pathname;
}

/** 为站内路径加上或去掉 /en 前缀 */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith("/")) return path;
  if (path.startsWith("http") || path.startsWith("//")) return path;
  const bare = stripLocalePrefix(path.split("?")[0]!);
  const query = path.includes("?") ? path.slice(path.indexOf("?")) : "";
  if (locale === "en") {
    const localized = bare === "/" ? EN_PREFIX : `${EN_PREFIX}${bare}`;
    return `${localized}${query}`;
  }
  return `${bare}${query}`;
}

export function isInternalPath(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

/** 生成 hreflang alternates（canonical 始终为中文路径） */
export function localeAlternates(canonicalPath: string) {
  const bare = stripLocalePrefix(canonicalPath.split("?")[0]!);
  return {
    canonical: bare,
    languages: {
      "zh-CN": bare,
      en: localizePath(bare, "en"),
    },
  };
}
