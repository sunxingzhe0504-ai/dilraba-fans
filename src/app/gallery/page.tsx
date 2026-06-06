import type { Metadata } from "next";
import { getGallery, getWallpapers } from "@content/index";
import { GalleryPageDesign } from "@/components/designs/pages/GalleryPages";

export const metadata: Metadata = {
  title: "图库 · 壁纸",
  description: "迪丽热巴精选写真、杂志大片与壁纸下载。",
};

export default function GalleryPage() {
  return (
    <GalleryPageDesign items={getGallery()} wallpapers={getWallpapers()} />
  );
}
