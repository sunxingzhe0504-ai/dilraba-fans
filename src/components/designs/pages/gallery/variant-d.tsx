"use client";

import type { GalleryItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { useT } from "@/components/LocaleProvider";
import { GalleryFilterBody } from "./GalleryFilterBody";

export type GalleryPageProps = {
  items: GalleryItem[];
  wallpapers: GalleryItem[];
};

export function GalleryEditorial(props: GalleryPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">{t("design.gallery.editorialTitle")}</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">{t("pages.gallery.titleWallpaper")}</p>
      <div className="gold-rule mt-6 h-px" />
      <GalleryFilterBody variant="d" {...props} />
    </Container>
  );
}

export default GalleryEditorial;
