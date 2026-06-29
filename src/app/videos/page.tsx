import { getVideos } from "@content/index";
import { VideosPageDesign } from "@/components/designs/lazy-pages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("videos");

export default function VideosPage() {
  return <VideosPageDesign videos={getVideos()} />;
}
