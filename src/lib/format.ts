export function formatDate(dateStr: string, locale: "zh" | "en" = "zh"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatYear(year: number, locale: "zh" | "en" = "zh"): string {
  return locale === "en" ? `${year}` : `${year} 年`;
}
