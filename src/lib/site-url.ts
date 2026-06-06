/** 站点根 URL，用于 RSS / OG 等；部署时设置 NEXT_PUBLIC_SITE_URL */
export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return url || "http://localhost:3000";
}
