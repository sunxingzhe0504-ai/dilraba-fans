"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import type { GalleryItem } from "@/lib/types";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeGalleryItem } from "@/lib/i18n/localize";
import { galleryCategoryLabel } from "@/lib/i18n/labels";
import { assetPath } from "@/lib/asset-path";
import { unlockAchievement } from "@/lib/fan-storage";
import { cn } from "@/lib/cn";

type Props = {
  items: GalleryItem[];
  initialIndex: number;
  onClose: () => void;
};

export function GalleryLightbox({ items, initialIndex, onClose }: Props) {
  const locale = useLocale();
  const t = useT();
  const [index, setIndex] = useState(initialIndex);

  const item = localizeGalleryItem(items[index]!, locale);
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) setIndex((i) => i - 1);
  }, [hasPrev]);

  const goNext = useCallback(() => {
    if (hasNext) setIndex((i) => i + 1);
  }, [hasNext]);

  useEffect(() => {
    unlockAchievement("gallery-light");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-paper/10 p-2 text-paper transition-colors hover:bg-paper/20"
        aria-label={t("gallery.lightboxClose")}
      >
        <X size={22} />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-paper/10 p-2 text-paper hover:bg-paper/20 sm:left-4"
          aria-label={t("gallery.lightboxPrev")}
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-paper/10 p-2 text-paper hover:bg-paper/20 sm:right-4"
          aria-label={t("gallery.lightboxNext")}
        >
          <ChevronRight size={28} />
        </button>
      )}

      <figure
        className="relative flex max-h-[90vh] max-w-5xl flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[78vh] w-auto overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(item.image)}
            alt={item.title}
            className="max-h-[78vh] w-auto object-contain"
          />
        </div>
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2 text-paper">
          <div>
            <p className="text-lg font-medium">{item.title}</p>
            <p className="text-sm text-paper/70">
              {galleryCategoryLabel(item.category, locale)}
              {item.year ? ` · ${item.year}` : ""}
              <span className="ml-2 text-paper/50">
                {index + 1} / {items.length}
              </span>
            </p>
          </div>
          {item.wallpaper && (
            <a
              href={assetPath(item.image)}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-paper/15 px-4 py-2 text-sm font-medium text-paper hover:bg-paper/25"
            >
              <Download size={14} />
              {t("common.download")}
            </a>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

export function GalleryLightboxTrigger({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("block w-full cursor-zoom-in text-left", className)}
      aria-haspopup="dialog"
    >
      {children}
    </button>
  );
}
