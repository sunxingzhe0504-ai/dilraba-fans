"use client";

import { useMemo, useState } from "react";
import type { GalleryItem, GalleryCategory } from "@/lib/types";
import { GalleryGrid } from "@/components/GalleryGrid";
import { useLocale, useT } from "@/components/LocaleProvider";
import {
  filterAllLabel,
  galleryCategoryLabel,
  wallpaperPicksLabel,
} from "@/lib/i18n/labels";
import { ThemeCategoryFilter } from "../../shared/ThemeCategoryFilter";
import { cn } from "@/lib/cn";

type CategoryFilter = GalleryCategory | "all" | "wallpaper-only";

const CATEGORIES: GalleryCategory[] = ["portrait", "red-carpet", "magazine", "wallpaper"];

type Props = {
  items: GalleryItem[];
  wallpapers: GalleryItem[];
  variant: "c" | "a" | "b" | "d";
};

export function GalleryFilterBody({ items, wallpapers, variant }: Props) {
  const locale = useLocale();
  const t = useT();
  const [cat, setCat] = useState<CategoryFilter>("all");
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const item of items) {
      for (const value of item.tags ?? []) set.add(value);
    }
    return [...set].sort((a, b) => a.localeCompare(b, locale === "en" ? "en" : "zh"));
  }, [items, locale]);

  const filtered = useMemo(() => {
    let list =
      cat === "wallpaper-only"
        ? wallpapers
        : cat === "all"
          ? items
          : items.filter((g) => g.category === cat);
    if (tag) list = list.filter((g) => g.tags?.includes(tag));
    return list;
  }, [items, wallpapers, cat, tag]);

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
          onChange={(value) => {
            setCat(value);
            setTag(null);
          }}
          filters={filterOptions}
          ariaLabel={t("common.filterGallery")}
        />
      </div>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs text-ink-mute">{t("gallery.tagsLabel")}</span>
          {tags.map((value) => {
            const active = tag === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setTag(active ? null : value)}
                className={cn(
                  "pill border text-[11px] transition-colors",
                  active
                    ? "border-wine bg-wine/10 text-wine"
                    : "border-border bg-paper text-ink-soft hover:border-wine/40 hover:text-wine",
                )}
              >
                {value}
              </button>
            );
          })}
        </div>
      )}
      <GalleryGrid items={filtered} className="mt-10" />
    </>
  );
}
