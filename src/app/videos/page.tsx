import { getVideos } from "@content/index";
import { VideosPageDesign } from "@/components/designs/pages/VideosPages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("videos");

export default function VideosPage() {
  return <VideosPageDesign videos={getVideos()} />;
}
