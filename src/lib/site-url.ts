/** 站点根 URL，用于 RSS / OG / Sitemap；部署时设置 NEXT_PUBLIC_SITE_URL */
export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return url || "http://localhost:3000";
}

/** 拼接站内绝对 URL（path 需以 / 开头） */
export function siteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}
