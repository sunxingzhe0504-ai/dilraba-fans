import { buildRssFeed } from "@/lib/feed";

export const dynamic = "force-static";

export async function GET() {
  return new Response(buildRssFeed("en"), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
