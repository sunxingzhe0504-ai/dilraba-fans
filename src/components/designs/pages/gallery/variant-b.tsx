"use client";

import type { GalleryItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { useT } from "@/components/LocaleProvider";
import { GalleryFilterBody } from "./GalleryFilterBody";

export type GalleryPageProps = {
  items: GalleryItem[];
  wallpapers: GalleryItem[];
};

export function GalleryFanSticker(props: GalleryPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        {t("design.gallery.fanStickerTitle")}
      </h1>
      <GalleryFilterBody variant="b" {...props} />
    </Container>
  );
}

export default GalleryFanSticker;
