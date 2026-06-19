"use client";

import type { WorkType } from "@/lib/types";
import { useLocale, useT } from "@/components/LocaleProvider";
import { filterAllLabel, workTypeLabel } from "@/lib/i18n/labels";
import { cn } from "@/lib/cn";
import type { ThemeId } from "@/lib/themes";
import { useMemo } from "react";

type Props = {
  variant: ThemeId;
  active: WorkType | "all";
  onChange: (v: WorkType | "all") => void;
};

export function WorkTypeFilter({ variant, active, onChange }: Props) {
  const locale = useLocale();
  const t = useT();
  const filters = useMemo(
    () => [
      { value: "all" as const, label: filterAllLabel(locale) },
      { value: "tv" as const, label: workTypeLabel("tv", locale) },
      { value: "film" as const, label: workTypeLabel("film", locale) },
      { value: "variety" as const, label: workTypeLabel("variety", locale) },
    ],
    [locale],
  );
  const aria = t("common.filterWorks");

  if (variant === "b") {
    return (
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={aria}>
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={active === f.value}
            onClick={() => onChange(f.value)}
            className={cn(
              "pill border text-sm font-medium transition-all",
              active === f.value
                ? "border-wine bg-wine text-paper"
                : "border-wine/25 bg-paper text-wine hover:bg-blush/50",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    );
  }

  if (variant === "d") {
    return (
      <div
        className="flex flex-wrap gap-x-8 gap-y-2 border-b border-border"
        role="tablist"
        aria-label={aria}
      >
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={active === f.value}
            onClick={() => onChange(f.value)}
            className={cn(
              "pb-3 text-xs uppercase tracking-[0.25em] transition-colors",
              active === f.value ? "text-wine" : "text-ink-mute hover:text-ink",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    );
  }

  if (variant === "a") {
    return (
      <div className="flex flex-wrap justify-center gap-4" role="tablist" aria-label={aria}>
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={active === f.value}
            onClick={() => onChange(f.value)}
            className={cn(
              "rounded-full px-5 py-2 text-sm transition-colors",
              active === f.value
                ? "bg-wine/15 text-wine-deep"
                : "text-ink-mute hover:text-wine",
            )}
          >
            ❀ {f.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex flex-wrap gap-x-7 gap-y-3 border-b border-border pb-px"
      role="tablist"
      aria-label={aria}
    >
      {filters.map((f) => {
        const isActive = active === f.value;
        return (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(f.value)}
            className={cn(
              "relative -mb-px pb-3 text-sm tracking-wide transition-colors",
              isActive ? "text-wine" : "text-ink-mute hover:text-ink",
            )}
          >
            {f.label}
            {isActive && (
              <span className="absolute -bottom-px left-0 h-0.5 w-full bg-wine" />
            )}
          </button>
        );
      })}
    </div>
  );
}
