"use client";

import { useMemo, useState } from "react";
import type { GalleryItem, GalleryCategory } from "@/lib/types";
import { GALLERY_CATEGORY_LABELS } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ThemeCategoryFilter } from "../shared/ThemeCategoryFilter";
import { DesignPageRouter } from "../DesignPageRouter";

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

const filterOptions: { value: Filter; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "wallpaper-only", label: "壁纸精选" },
  ...(
    Object.entries(GALLERY_CATEGORY_LABELS) as [GalleryCategory, string][]
  ).map(([value, label]) => ({ value, label })),
];

function GalleryBody({
  variant,
  items,
  wallpapers,
}: GalleryPageProps & { variant: "c" | "a" | "b" | "d" }) {
  const [cat, setCat] = useState<Filter>("all");
  const filtered = useGalleryFilters(items, wallpapers, cat);

  return (
    <>
      <div className={variant === "a" ? "container-main mb-8 flex justify-center" : "mt-8"}>
        <ThemeCategoryFilter
          variant={variant}
          active={cat}
          onChange={setCat}
          filters={filterOptions}
          ariaLabel="图库分类"
        />
      </div>
      <GalleryGrid items={filtered} className="mt-10" />
    </>
  );
}

export function GalleryWarmCinema(props: GalleryPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Gallery"
        title="图库 · 壁纸"
        subtitle="精选写真、杂志大片与角色壁纸，点击可下载壁纸（仅供个人欣赏）。"
      />
      <GalleryBody variant="c" {...props} />
    </Container>
  );
}

export function GalleryXianxia(props: GalleryPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">图 · Gallery</p>
        <h1 className="zh-display text-5xl text-wine-deep">光影图卷</h1>
      </div>
      <div className="container-main">
        <GalleryBody variant="a" {...props} />
      </div>
    </div>
  );
}

export function GalleryFanSticker(props: GalleryPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        美图收藏 📸
      </h1>
      <GalleryBody variant="b" {...props} />
    </Container>
  );
}

export function GalleryEditorial(props: GalleryPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Visuals</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">图库 · 壁纸</p>
      <div className="gold-rule mt-6 h-px" />
      <GalleryBody variant="d" {...props} />
    </Container>
  );
}

const variants = {
  c: GalleryWarmCinema,
  a: GalleryXianxia,
  b: GalleryFanSticker,
  d: GalleryEditorial,
};

export function GalleryPageDesign(props: GalleryPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
