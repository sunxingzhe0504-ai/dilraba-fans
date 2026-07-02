"use client";

import { useMemo } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { FanEvent, GalleryItem } from "@/lib/types";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeEvent } from "@/lib/i18n/localize";
import { formatDate } from "@/lib/format";

type Props = {
  events: FanEvent[];
  gallery: GalleryItem[];
};

export function RedCarpetTimeline({ events, gallery }: Props) {
  const locale = useLocale();
  const t = useT();

  const moments = useMemo(() => {
    const carpetGallery = gallery
      .filter((g) => g.category === "red-carpet")
      .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

    const carpetEvents = [...events]
      .filter(
        (e) =>
          e.category === "award" ||
          e.summary.includes("红毯") ||
          (e.summaryEn?.includes("red carpet") ?? false),
      )
      .sort((a, b) => b.date.localeCompare(a.date));

    return carpetEvents.map((ev) => {
      const img =
        carpetGallery.find((g) => g.year && ev.date.startsWith(String(g.year)))?.image ??
        carpetGallery[0]?.image;
      return { event: ev, image: img };
    });
  }, [events, gallery]);

  if (moments.length === 0) return null;

  return (
    <section className="mt-16">
      <p className="kicker">{t("redCarpet.kicker")}</p>
      <h2 className="display mt-1 text-2xl text-wine-deep">{t("redCarpet.title")}</h2>
      <p className="mt-2 text-sm text-ink-soft">{t("redCarpet.subtitle")}</p>

      <ol className="relative mt-8 space-y-0 border-l border-wine/20 pl-8">
        {moments.map(({ event: raw, image }, i) => {
          const event = localizeEvent(raw, locale);
          return (
            <li key={event.slug} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-wine text-[8px] text-paper"
                aria-hidden
              >
                {moments.length - i}
              </span>
              <div className="edit-card flex flex-col gap-4 overflow-hidden sm:flex-row">
                {image && (
                  <div className="relative aspect-[3/4] w-full shrink-0 sm:w-36">
                    <ContentImage
                      src={image}
                      alt={event.title}
                      fill
                      sizes="9rem"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-center p-5">
                  <time className="text-xs text-wine">{formatDate(event.date, locale)}</time>
                  <h3 className="mt-1 text-lg font-medium text-ink">{event.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{event.summary}</p>
                  <Link
                    href={`/events/${event.slug}`}
                    className="mt-3 text-sm font-medium text-wine hover:underline"
                  >
                    {t("redCarpet.viewEvent")}
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
