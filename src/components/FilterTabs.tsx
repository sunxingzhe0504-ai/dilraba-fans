"use client";

import { useState } from "react";
import type { WorkType } from "@/lib/types";
import { WORK_TYPE_LABELS } from "@/lib/types";
import { cn } from "@/lib/cn";

const filters: { value: WorkType | "all"; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "tv", label: WORK_TYPE_LABELS.tv },
  { value: "film", label: WORK_TYPE_LABELS.film },
  { value: "variety", label: WORK_TYPE_LABELS.variety },
];

type FilterTabsProps = {
  active: WorkType | "all";
  onChange: (value: WorkType | "all") => void;
};

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div
      className="flex flex-wrap gap-6 border-b border-border pb-px"
      role="tablist"
      aria-label="作品类型筛选"
    >
      {filters.map((filter) => {
        const isActive = active === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.value)}
            className={cn(
              "relative -mb-px pb-3 text-sm tracking-wide transition-colors",
              isActive ? "text-wine" : "text-ink-mute hover:text-ink",
            )}
          >
            {filter.label}
            {isActive && (
              <span className="absolute -bottom-px left-0 h-0.5 w-full bg-wine" />
            )}
          </button>
        );
      })}
    </div>
  );
}

export function useWorkFilter(initial: WorkType | "all" = "all") {
  return useState<WorkType | "all">(initial);
}
