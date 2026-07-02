"use client";

import { useMemo } from "react";
import { useLocale, useT } from "@/components/LocaleProvider";
import { filterAllLabel } from "@/lib/i18n/labels";
import { cn } from "@/lib/cn";
import type { ThemeId } from "@/lib/themes";

type Props = {
  variant: ThemeId;
  tags: string[];
  active: string | "all";
  onChange: (v: string | "all") => void;
  className?: string;
};

export function StoryTagFilter({ variant, tags, active, onChange, className }: Props) {
  const locale = useLocale();
  const t = useT();
  const filters = useMemo(
    () => [{ value: "all" as const, label: filterAllLabel(locale) }, ...tags.map((tag) => ({ value: tag, label: tag }))],
    [locale, tags],
  );
  const aria = t("common.filterStoryTags");

  if (variant === "b") {
    return (
      <div className={cn("flex flex-wrap gap-2", className)} role="tablist" aria-label={aria}>
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
                : "border-wine/25 bg-paper text-wine",
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
      <div className={cn("flex flex-wrap gap-x-8 border-b border-border", className)} role="tablist" aria-label={aria}>
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => onChange(f.value)}
            className={cn(
              "pb-3 text-xs uppercase tracking-[0.25em]",
              active === f.value ? "text-wine" : "text-ink-mute",
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
      <div className={cn("flex flex-wrap justify-center gap-3", className)} role="tablist" aria-label={aria}>
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => onChange(f.value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm",
              active === f.value ? "bg-wine/15 text-wine" : "text-ink-mute",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-7 gap-y-3 border-b border-border pb-px",
        className,
      )}
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
