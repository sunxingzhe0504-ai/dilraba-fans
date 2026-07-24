"use client";

import type { GalleryItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useT } from "@/components/LocaleProvider";
import { GalleryFilterBody } from "./GalleryFilterBody";

export type GalleryPageProps = {
  items: GalleryItem[];
  wallpapers: GalleryItem[];
};

export function GalleryWarmCinema(props: GalleryPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Gallery"
        title={t("pages.gallery.titleWallpaper")}
        subtitle={t("pages.gallery.subtitleWallpaper")}
      />
      <GalleryFilterBody variant="c" {...props} />
    </Container>
  );
}

export default GalleryWarmCinema;
