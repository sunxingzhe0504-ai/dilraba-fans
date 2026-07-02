import { getStories, getStoryTags } from "@content/index";
import { StoriesPageDesign } from "@/components/designs/lazy-pages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("stories");

export const dynamic = "force-static";

export default function StoriesPage() {
  return <StoriesPageDesign stories={getStories()} tags={getStoryTags()} />;
}
