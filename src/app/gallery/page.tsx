import { getGallery, getWallpapers } from "@content/index";
import { GalleryPageDesign } from "@/components/designs/lazy-pages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("gallery");

export default function GalleryPage() {
  return (
    <GalleryPageDesign items={getGallery()} wallpapers={getWallpapers()} />
  );
}
