import type { Metadata } from "next";
import { getNews } from "@content/index";
import { LatestPageDesign } from "@/components/designs/pages/LatestPages";

export const metadata: Metadata = {
  title: "最新动态",
  description: "迪丽热巴近期作品、时尚、活动与公益动态。",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function LatestPage() {
  return <LatestPageDesign news={getNews()} />;
}
