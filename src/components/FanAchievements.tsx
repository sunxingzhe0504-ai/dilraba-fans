"use client";

import { useSyncExternalStore } from "react";
import { LocaleLink } from "@/components/LocaleLink";
import { useLocale, useT } from "@/components/LocaleProvider";
import { ACHIEVEMENTS } from "@/lib/achievements";
import {
  getEmptyStringList,
  getUnlockedAchievements,
  subscribeFanStorage,
} from "@/lib/fan-storage";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "c" | "a" | "b" | "d";
};

export function FanAchievements({ variant = "c" }: Props) {
  const locale = useLocale();
  const t = useT();
  const unlocked = useSyncExternalStore(
    subscribeFanStorage,
    getUnlockedAchievements,
    getEmptyStringList,
  );

  const cardClass =
    variant === "b"
      ? "rounded-3xl border-2 border-dashed border-wine/25 bg-blush/10"
      : "edit-card";

  return (
    <section className={cn(cardClass, "p-6 sm:p-8")}>
      <p className="kicker">{t("achievements.kicker")}</p>
      <h2 className="display mt-1 text-2xl text-wine-deep">{t("achievements.title")}</h2>
      <p className="mt-2 text-sm text-ink-soft">{t("achievements.subtitle")}</p>
      <p className="mt-2 rounded-xl border border-border/80 bg-background-deep/50 px-3 py-2 text-xs leading-relaxed text-ink-mute">
        {t("achievements.localNote")}{" "}
        <LocaleLink href="/fans" className="text-wine underline-offset-2 hover:underline">
          {t("achievements.backupLink")}
        </LocaleLink>
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a) => {
          const isOn = unlocked.includes(a.id);
          return (
            <li
              key={a.id}
              className={cn(
                "rounded-xl border p-4 text-center transition-all",
                isOn
                  ? "border-gold/40 bg-gold-glow/30"
                  : "border-border bg-background-deep/40 opacity-55 grayscale",
              )}
            >
              <span className="text-2xl" aria-hidden>
                {a.icon}
              </span>
              <p className="mt-2 text-sm font-medium text-ink">
                {locale === "zh" ? a.titleZh : a.titleEn}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-ink-mute">
                {locale === "zh" ? a.descZh : a.descEn}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-center text-xs text-ink-mute">
        {t("achievements.unlocked", {
          n: unlocked.length,
          total: ACHIEVEMENTS.length,
        })}
      </p>
    </section>
  );
}
