"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import type { GalleryItem, GalleryCategory } from "@/lib/types";
import { GALLERY_CATEGORY_LABELS } from "@/lib/types";
import { cn } from "@/lib/cn";

type Props = {
  items: GalleryItem[];
  className?: string;
};

export function GalleryGrid({ items, className }: Props) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4", className)}>
      {items.map((item) => (
        <article key={item.slug} className="edit-card group overflow-hidden">
          <div className="relative aspect-[3/4] overflow-hidden bg-background-deep">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="portrait-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="pill absolute left-2 top-2 bg-paper/90 text-wine text-[10px]">
              {GALLERY_CATEGORY_LABELS[item.category as GalleryCategory]}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-sm font-medium text-ink">{item.title}</h3>
            {item.year && (
              <p className="mt-0.5 text-xs text-ink-mute">{item.year}</p>
            )}
            {item.wallpaper && (
              <a
                href={item.image}
                download
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-wine hover:text-wine-deep"
              >
                <Download size={12} />
                下载壁纸
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function CharacterCard({
  character,
}: {
  character: import("@/lib/types").Character;
}) {
  return (
    <Link
      href={`/characters/${character.slug}`}
      id={character.slug}
      className="edit-card hover-zoom group block overflow-hidden scroll-mt-24"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          fill
          sizes="25vw"
          className="portrait-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-wine">{character.workTitle} · {character.year}</p>
        <h3 className="zh-display mt-1 text-2xl text-ink group-hover:text-wine-deep">
          {character.name}
        </h3>
        {character.quote && (
          <p className="mt-2 text-sm italic text-ink-soft">「{character.quote}」</p>
        )}
        <p className="mt-3 line-clamp-2 text-sm text-ink-mute">{character.description}</p>
      </div>
    </Link>
  );
}
