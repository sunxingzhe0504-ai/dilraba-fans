"use client";

import type { GalleryItem } from "@/lib/types";
import { useT } from "@/components/LocaleProvider";
import { GalleryFilterBody } from "./GalleryFilterBody";

export type GalleryPageProps = {
  items: GalleryItem[];
  wallpapers: GalleryItem[];
};

export function GalleryXianxia(props: GalleryPageProps) {
  const t = useT();
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">图 · Gallery</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("design.gallery.xianxiaTitle")}</h1>
      </div>
      <div className="container-main">
        <GalleryFilterBody variant="a" {...props} />
      </div>
    </div>
  );
}

export default GalleryXianxia;
