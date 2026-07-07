"use client";

import { useMemo, useState } from "react";
import type { GalleryItem, GalleryCategory } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { GalleryGrid } from "@/components/GalleryGrid";
import { useLocale, useT } from "@/components/LocaleProvider";
import {
  filterAllLabel,
  galleryCategoryLabel,
  wallpaperPicksLabel,
} from "@/lib/i18n/labels";
import { ThemeCategoryFilter } from "../../shared/ThemeCategoryFilter";

export type GalleryPageProps = {
  items: GalleryItem[];
  wallpapers: GalleryItem[];
};

type Filter = GalleryCategory | "all" | "wallpaper-only";

function useGalleryFilters(items: GalleryItem[], wallpapers: GalleryItem[], cat: Filter) {
  return useMemo(() => {
    if (cat === "wallpaper-only") return wallpapers;
    if (cat === "all") return items;
    return items.filter((g) => g.category === cat);
  }, [items, wallpapers, cat]);
}

const CATEGORIES: GalleryCategory[] = ["portrait", "red-carpet", "magazine", "wallpaper"];

function GalleryBody({
  variant,
  items,
  wallpapers,
}: GalleryPageProps & { variant: "c" | "a" | "b" | "d" }) {
  const locale = useLocale();
  const t = useT();
  const [cat, setCat] = useState<Filter>("all");
  const filtered = useGalleryFilters(items, wallpapers, cat);

  const filterOptions = useMemo(
    () => [
      { value: "all" as const, label: filterAllLabel(locale) },
      { value: "wallpaper-only" as const, label: wallpaperPicksLabel(locale) },
      ...CATEGORIES.map((value) => ({
        value,
        label: galleryCategoryLabel(value, locale),
      })),
    ],
    [locale],
  );

  return (
    <>
      <div className={variant === "a" ? "container-main mb-8 flex justify-center" : "mt-8"}>
        <ThemeCategoryFilter
          variant={variant}
          active={cat}
          onChange={setCat}
          filters={filterOptions}
          ariaLabel={t("common.filterGallery")}
        />
      </div>
      <GalleryGrid items={filtered} className="mt-10" />
    </>
  );
}

export function GalleryXianxia(props: GalleryPageProps) {
  const t = useT();
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">图 · Gallery</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("design.gallery.xianxiaTitle")}</h1>
      </div>
      <div className="container-main">
        <GalleryBody variant="a" {...props} />
      </div>
    </div>
  );
}

export default GalleryXianxia;
