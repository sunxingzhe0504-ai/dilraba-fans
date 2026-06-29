import { getNews } from "@content/index";
import { LatestPageDesign } from "@/components/designs/lazy-pages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("latest", {
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "RSS · 中文" },
        { url: "/feed-en.xml", title: "RSS · English" },
      ],
    },
  },
});

export default function LatestPage() {
  return <LatestPageDesign news={getNews()} />;
}
