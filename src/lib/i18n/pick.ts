import type { Locale } from "./types";

/** 取本地化字段：en 时优先 `fieldEn`，否则回退中文字段 */
export function pick<T extends Record<string, unknown>>(
  obj: T,
  field: keyof T & string,
  locale: Locale,
): string {
  if (locale === "en") {
    const enKey = `${field}En` as keyof T;
    const enVal = obj[enKey];
    if (typeof enVal === "string" && enVal) return enVal;
  }
  const val = obj[field];
  return typeof val === "string" ? val : String(val ?? "");
}

/** 取本地化字符串数组 */
export function pickArray<T extends Record<string, unknown>>(
  obj: T,
  field: keyof T & string,
  locale: Locale,
): string[] {
  if (locale === "en") {
    const enKey = `${field}En` as keyof T;
    const enVal = obj[enKey];
    if (Array.isArray(enVal) && enVal.length > 0) return enVal as string[];
  }
  const val = obj[field];
  return Array.isArray(val) ? (val as string[]) : [];
}
