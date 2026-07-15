"use client";

import { useSyncExternalStore, type MouseEvent } from "react";
import { Check, BookmarkPlus } from "lucide-react";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { ContentImage } from "@/components/ContentImage";
import type { Work } from "@/lib/types";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeWork } from "@/lib/i18n/localize";
import { workTypeLabel } from "@/lib/i18n/labels";
import {
  getEmptyStringList,
  getWatchedWorks,
  subscribeFanStorage,
  toggleWatchedWork,
  unlockAchievement,
} from "@/lib/fan-storage";
import { checkAchievements } from "@/lib/achievements";
import { cn } from "@/lib/cn";

type WorkCardProps = {
  work: Work;
  className?: string;
};

export function WorkCard({ work: raw, className }: WorkCardProps) {
  const locale = useLocale();
  const t = useT();
  const work = localizeWork(raw, locale);
  const watched = useSyncExternalStore(
    subscribeFanStorage,
    getWatchedWorks,
    getEmptyStringList,
  );
  const isWatched = watched.includes(work.slug);
  const isUpcoming = work.status === "upcoming";
  const hoverMeta =
    work.airInfo ??
    (work.highlights?.[0] ? work.highlights[0] : null) ??
    work.synopsis;

  const toggleWatched = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const next = toggleWatchedWork(work.slug);
    checkAchievements({ watchedCount: next.length, streak: 0 }).forEach((id) =>
      unlockAchievement(id),
    );
  };

  return (
    <div className={cn("group work-card flex flex-col", className)}>
      <Link href={`/works/${work.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-[2/3] overflow-hidden bg-background-deep">
          <ContentImage
            src={work.poster}
            alt={`${work.title} ${t("work.posterAlt")}`}
            fill
            className="portrait-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/75 via-wine-deep/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {isUpcoming && (
              <span className="pill bg-paper/90 font-medium text-wine shadow-sm backdrop-blur">
                {t("work.upcoming")}
              </span>
            )}
            {isWatched && (
              <span className="pill inline-flex items-center gap-1 bg-wine/90 font-medium text-paper shadow-sm">
                <Check size={11} aria-hidden />
                {t("work.watched")}
              </span>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="line-clamp-2 text-xs leading-relaxed text-paper/90">
              {hoverMeta}
            </p>
            <span className="mt-2 inline-block text-[11px] uppercase tracking-[0.18em] text-gold-light">
              {t("work.viewDetail")}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center gap-3 text-xs text-ink-mute">
            <span className="uppercase tracking-[0.15em] text-wine">
              {workTypeLabel(work.type, locale)}
            </span>
            <span className="h-3 w-px bg-border-strong" />
            <span className="index-num">{work.year}</span>
          </div>
          <h3 className="display text-xl text-ink transition-colors group-hover:text-wine">
            {work.title}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            {t("work.role")} {work.role}
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-2 px-5 pb-5 pt-0">
        {!isUpcoming && (
          <button
            type="button"
            onClick={toggleWatched}
            aria-pressed={isWatched}
            aria-label={isWatched ? t("work.unmarkWatched") : t("work.markWatched")}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors",
              isWatched
                ? "border-wine/40 bg-blush/40 text-wine"
                : "border-border text-ink-soft hover:border-wine/50 hover:text-wine",
            )}
          >
            {isWatched ? <Check size={12} aria-hidden /> : <BookmarkPlus size={12} aria-hidden />}
            {isWatched ? t("work.watched") : t("work.markWatched")}
          </button>
        )}
        {work.externalLinks && work.externalLinks.length > 0 && (
          <div className="min-w-0 flex-1">
            <ExternalLinks links={work.externalLinks.slice(0, 2)} />
          </div>
        )}
      </div>
    </div>
  );
}
