"use client";

import type { WorkType } from "@/lib/types";
import { WORK_TYPE_LABELS } from "@/lib/types";
import { cn } from "@/lib/cn";
import type { ThemeId } from "@/lib/themes";

const filters: { value: WorkType | "all"; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "tv", label: WORK_TYPE_LABELS.tv },
  { value: "film", label: WORK_TYPE_LABELS.film },
  { value: "variety", label: WORK_TYPE_LABELS.variety },
];

type Props = {
  variant: ThemeId;
  active: WorkType | "all";
  onChange: (v: WorkType | "all") => void;
};

export function WorkTypeFilter({ variant, active, onChange }: Props) {
  if (variant === "b") {
    return (
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="作品类型筛选">
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
        aria-label="作品类型筛选"
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
      <div className="flex flex-wrap justify-center gap-4" role="tablist" aria-label="作品类型筛选">
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
      aria-label="作品类型筛选"
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
