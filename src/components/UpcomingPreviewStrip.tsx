"use client";

import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Work } from "@/lib/types";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeWork } from "@/lib/i18n/localize";
import { UpcomingCountdownBadge } from "@/components/UpcomingCountdownBadge";

type Props = {
  items: Work[];
};

/** Compact upcoming strip with countdown for the home page. */
export function UpcomingPreviewStrip({ items }: Props) {
  const locale = useLocale();
  const t = useT();
  if (items.length === 0) return null;

  return (
    <section className="border-y border-border/60 bg-gradient-to-r from-blush/20 via-paper to-blush/10 py-8">
      <div className="container-wide">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="kicker">{t("upcomingPreview.kicker")}</p>
            <h2 className="display text-xl text-wine-deep">{t("upcomingPreview.title")}</h2>
          </div>
          <Link href="/upcoming" className="text-sm font-medium text-wine hover:underline">
            {t("upcomingPreview.viewAll")}
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((raw) => {
            const work = localizeWork(raw, locale);
            return (
              <li key={work.slug}>
                <Link
                  href={`/works/${work.slug}`}
                  className="edit-card flex gap-3 overflow-hidden p-3 transition-shadow hover:shadow-md"
                >
                  <div className="relative h-20 w-14 shrink-0 overflow-hidden rounded-lg">
                    <ContentImage
                      src={work.poster}
                      alt={work.title}
                      fill
                      sizes="3.5rem"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium text-ink">{work.title}</h3>
                    <p className="mt-1 text-xs text-ink-mute">{work.year}</p>
                    <div className="mt-2">
                      <UpcomingCountdownBadge work={raw} />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
