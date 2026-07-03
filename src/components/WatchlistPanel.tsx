"use client";

import { useSyncExternalStore } from "react";
import { Check, Clapperboard } from "lucide-react";
import type { Work } from "@/lib/types";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeWork } from "@/lib/i18n/localize";
import {
  getEmptyStringList,
  getWatchedWorks,
  subscribeFanStorage,
  toggleWatchedWork,
  unlockAchievement,
} from "@/lib/fan-storage";
import { checkAchievements } from "@/lib/achievements";
import { cn } from "@/lib/cn";

type Props = {
  works: Work[];
};

export function WatchlistPanel({ works }: Props) {
  const locale = useLocale();
  const t = useT();
  const released = works.filter((w) => w.status === "released");
  const watched = useSyncExternalStore(
    subscribeFanStorage,
    getWatchedWorks,
    getEmptyStringList,
  );

  const toggle = (slug: string) => {
    const next = toggleWatchedWork(slug);
    checkAchievements({ watchedCount: next.length, streak: 0 }).forEach((id) =>
      unlockAchievement(id),
    );
  };

  const watchedCount = watched.filter((s) => released.some((w) => w.slug === s)).length;
  const progress = released.length ? Math.round((watchedCount / released.length) * 100) : 0;

  if (released.length === 0) return null;

  return (
    <section className="edit-card mb-10 overflow-hidden p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker">{t("watchlist.kicker")}</p>
          <h2 className="display text-2xl text-wine-deep">{t("watchlist.title")}</h2>
          <p className="mt-1 text-sm text-ink-soft">{t("watchlist.subtitle")}</p>
        </div>
        <div className="text-right">
          <p className="display text-3xl text-gold tabular-nums">{progress}%</p>
          <p className="text-xs text-ink-mute">{t("watchlist.progress")}</p>
        </div>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-background-deep">
        <div
          className="h-full rounded-full bg-gradient-to-r from-wine to-gold transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ul className="mt-6 max-h-64 space-y-2 overflow-y-auto pr-1">
        {released.map((raw) => {
          const work = localizeWork(raw, locale);
          const done = watched.includes(work.slug);
          return (
            <li key={work.slug}>
              <button
                type="button"
                onClick={() => toggle(work.slug)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-sm transition-colors",
                  done
                    ? "border-wine/30 bg-blush/20 text-ink"
                    : "border-border bg-paper hover:border-wine/40",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
                    done ? "border-wine bg-wine text-paper" : "border-border",
                  )}
                >
                  {done && <Check size={12} />}
                </span>
                <Clapperboard size={14} className="shrink-0 text-wine/70" aria-hidden />
                <span className="min-w-0 flex-1 truncate font-medium">{work.title}</span>
                <span className="shrink-0 text-xs text-ink-mute">{work.year}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-ink-mute">{t("watchlist.hint")}</p>
    </section>
  );
}
