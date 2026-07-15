"use client";

import { useState } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { Download } from "lucide-react";
import type { GalleryItem, GalleryCategory, Character } from "@/lib/types";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeCharacter, localizeGalleryItem } from "@/lib/i18n/localize";
import { galleryCategoryLabel } from "@/lib/i18n/labels";
import { GalleryLightbox, GalleryLightboxTrigger } from "@/components/GalleryLightbox";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/cn";

type Props = {
  items: GalleryItem[];
  className?: string;
};

export function GalleryGrid({ items, className }: Props) {
  const locale = useLocale();
  const t = useT();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4", className)}>
        {items.map((raw, index) => {
          const item = localizeGalleryItem(raw, locale);
          return (
            <article key={item.slug} className="edit-card group overflow-hidden">
              <GalleryLightboxTrigger onClick={() => setLightboxIndex(index)}>
                <div className="relative aspect-[3/4] overflow-hidden bg-background-deep">
                  <ContentImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="portrait-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pill absolute left-2 top-2 bg-paper/90 text-wine text-[10px]">
                    {galleryCategoryLabel(item.category as GalleryCategory, locale)}
                  </span>
                </div>
              </GalleryLightboxTrigger>
              <div className="p-4">
                <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                {item.year && (
                  <p className="mt-0.5 text-xs text-ink-mute">{item.year}</p>
                )}
                {item.wallpaper && (
                <a
                href={assetPath(item.image)}
                download
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-wine hover:text-wine-deep"
                  >
                    <Download size={12} />
                    {t("common.download")}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={items}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

export function CharacterCard({ character: raw }: { character: Character }) {
  const locale = useLocale();
  const character = localizeCharacter(raw, locale);

  return (
    <Link
      href={`/characters/${character.slug}`}
      id={character.slug}
      className="character-card group block overflow-hidden scroll-mt-24"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <ContentImage
          src={character.image}
          alt={character.name}
          fill
          sizes="25vw"
          className="portrait-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--gold-glow)_55%,transparent),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        {character.quote && (
          <div className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-wine-deep/90 via-wine-deep/55 to-transparent px-5 pb-5 pt-16 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="display text-center text-base leading-snug text-paper sm:text-lg">
              「{character.quote}」
            </p>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs text-wine">
          {character.workTitle} · {character.year}
        </p>
        <h3 className="zh-display mt-1 text-2xl text-ink transition-colors group-hover:text-wine-deep">
          {character.name}
        </h3>
        {character.quote && (
          <p className="mt-2 line-clamp-2 text-sm italic text-ink-soft">
            「{character.quote}」
          </p>
        )}
        <p className="mt-3 line-clamp-2 text-sm text-ink-mute">{character.description}</p>
      </div>
    </Link>
  );
}
