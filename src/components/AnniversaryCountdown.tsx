"use client";

import { useMemo } from "react";
import { CalendarHeart } from "lucide-react";
import { getFanCulture } from "@content/index";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeFanCulture } from "@/lib/i18n/localize";
import { formatCountdown, getNextAnniversary } from "@/lib/anniversary";
import { cn } from "@/lib/cn";

type Props = {
  compact?: boolean;
  className?: string;
};

export function AnniversaryCountdown({ compact = false, className }: Props) {
  const locale = useLocale();
  const t = useT();
  const culture = useMemo(
    () => localizeFanCulture(getFanCulture(), locale),
    [locale],
  );
  const next = useMemo(
    () => getNextAnniversary(culture.anniversaries),
    [culture.anniversaries],
  );

  if (!next) return null;

  const countdown = formatCountdown(next.daysUntil, locale);
  const title = next.title;

  if (compact) {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-2 border-y border-border/60 bg-blush/15 px-4 py-2.5 text-center text-sm",
          className,
        )}
      >
        <CalendarHeart size={14} className="shrink-0 text-wine" aria-hidden />
        <span className="text-ink-soft">
          {next.isToday ? (
            <span className="font-medium text-wine">
              {t("fanBand.anniversaryToday", { title })}
            </span>
          ) : (
            <>
              <span className="font-medium text-wine">{title}</span>
              <span className="mx-1.5 text-ink-mute">·</span>
              <span>{t("fanBand.countdown", { countdown })}</span>
            </>
          )}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("edit-card overflow-hidden", className)}>
      <div className="bg-gradient-to-r from-blush/40 via-paper to-blush/20 px-6 py-8 text-center">
        <p className="kicker justify-center">{t("fanBand.calendarKicker")}</p>
        <h2 className="display mt-2 text-3xl text-wine-deep">{title}</h2>
        <p className="mt-4 text-5xl font-light tabular-nums text-gold">
          {next.isToday ? "✦" : countdown}
        </p>
        <p className="mt-3 text-sm text-ink-soft">
          {next.isToday
            ? t("fanBand.anniversaryTodaySub", { date: next.date })
            : t("fanBand.untilDate", { date: next.date })}
        </p>
      </div>
      <ul className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {culture.anniversaries.map((a) => (
          <li key={a.id} className="px-5 py-4 text-center">
            <p className="text-xs uppercase tracking-widest text-ink-mute">{a.date}</p>
            <p className="mt-1 text-sm font-medium text-ink">{a.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
