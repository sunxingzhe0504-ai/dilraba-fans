import { getChangelog, getLatestNews, getStories } from "@content/index";
import { siteUrl } from "@/lib/site-url";

export type FeedLocale = "zh" | "en";

export function escapeXml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function pickText(zh: string, en?: string, locale: FeedLocale = "zh") {
  if (locale === "en" && en?.trim()) return en.trim();
  return zh;
}

export function buildRssFeed(locale: FeedLocale = "zh") {
  const news = getLatestNews(20);
  const stories = getStories().slice(0, 10);
  const changelog = getChangelog();

  const channel =
    locale === "en"
      ? {
          title: "Dilraba · Fan Info Site",
          description:
            "Latest news, story features, and site updates — unofficial Dilraba Dilmurat fan site.",
          language: "en-US",
        }
      : {
          title: "迪丽热巴 · 粉丝资讯站",
          description: "最新动态、专题长文与站点更新 — 非官方粉丝资讯站",
          language: "zh-CN",
        };

  const storyPrefix = locale === "en" ? "Story · " : "专题 · ";

  const newsItems = news.map((n) => ({
    title: pickText(n.title, n.titleEn, locale),
    link: siteUrl(`/latest/${n.slug}`),
    description: pickText(n.summary, n.summaryEn, locale),
    pubDate: new Date(n.date).toUTCString(),
    guid: siteUrl(`/latest/${n.slug}`),
  }));

  const storyItems = stories.map((s) => ({
    title: `${storyPrefix}${pickText(s.title, s.titleEn, locale)}`,
    link: siteUrl(`/stories/${s.slug}`),
    description: pickText(s.summary, s.summaryEn, locale),
    pubDate: new Date(s.date).toUTCString(),
    guid: siteUrl(`/stories/${s.slug}`),
  }));

  const changelogItems = changelog.flatMap((entry) => {
    const lines =
      locale === "en" && entry.itemsEn?.length ? entry.itemsEn : entry.items;
    const prefix = locale === "en" ? "Site update · " : "站点更新 · ";
    return lines.map((item, i) => ({
      title: `${prefix}${item}`,
      link: siteUrl("/changelog"),
      description: item,
      pubDate: new Date(entry.date).toUTCString(),
      guid: `${siteUrl("/changelog")}#${entry.date}-${i}-${locale}`,
    }));
  });

  const items = [...newsItems, ...storyItems, ...changelogItems].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
  );

  const selfHref = siteUrl(locale === "en" ? "/feed-en.xml" : "/feed.xml");
  const altHref = siteUrl(locale === "en" ? "/feed.xml" : "/feed-en.xml");
  const altLabel = locale === "en" ? "zh-CN" : "en-US";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channel.title)}</title>
    <link>${siteUrl("/")}</link>
    <description>${escapeXml(channel.description)}</description>
    <language>${channel.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${selfHref}" rel="self" type="application/rss+xml"/>
    <atom:link href="${altHref}" rel="alternate" type="application/rss+xml" hreflang="${altLabel}"/>
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

  return xml.trim();
}
