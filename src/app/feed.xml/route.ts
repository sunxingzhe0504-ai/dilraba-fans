import { getLatestNews, getChangelog } from "@content/index";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

function escapeXml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const news = getLatestNews(20);
  const changelog = getChangelog();

  const items = [
    ...news.map((n) => ({
      title: n.title,
      link: `${siteUrl}/latest/${n.slug}`,
      description: n.summary,
      pubDate: new Date(n.date).toUTCString(),
      guid: `${siteUrl}/latest/${n.slug}`,
    })),
    ...changelog.flatMap((entry) =>
      entry.items.map((item, i) => ({
        title: `站点更新 · ${item}`,
        link: `${siteUrl}/changelog`,
        description: item,
        pubDate: new Date(entry.date).toUTCString(),
        guid: `${siteUrl}/changelog#${entry.date}-${i}`,
      })),
    ),
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>迪丽热巴 · 粉丝资讯站</title>
    <link>${siteUrl}</link>
    <description>迪丽热巴粉丝资讯站最新动态与更新 — 非官方</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${escapeXml(item.guid)}</guid>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
