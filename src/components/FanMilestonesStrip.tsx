"use client";

import type { FanMilestones } from "@/lib/fan-milestones";
import { useT } from "@/components/LocaleProvider";
import { cn } from "@/lib/cn";

type Props = {
  data: FanMilestones;
  variant?: "c" | "a" | "b" | "d";
};

export function FanMilestonesStrip({ data, variant = "c" }: Props) {
  const t = useT();

  const items = [
    { key: "works", value: data.works, label: t("milestones.works") },
    { key: "characters", value: data.characters, label: t("milestones.characters") },
    { key: "magazines", value: data.magazines, label: t("milestones.magazines") },
    { key: "stories", value: data.stories, label: t("milestones.stories") },
    { key: "gallery", value: data.gallery, label: t("milestones.gallery") },
    { key: "career", value: `${data.careerYears}+`, label: t("milestones.career") },
  ];

  return (
    <div className={cn(variant === "b" ? "rounded-3xl border-2 border-wine/20 bg-blush/10 p-6" : "edit-card p-6")}>
      <p className="kicker">{t("milestones.kicker")}</p>
      <h2 className="display mt-1 text-2xl text-wine-deep">{t("milestones.title")}</h2>
      <p className="mt-2 text-sm text-ink-soft">{t("milestones.subtitle")}</p>
      <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.key} className="text-center">
            <dd className="display text-3xl text-gold tabular-nums">{item.value}</dd>
            <dt className="mt-1 text-xs text-ink-mute">{item.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
