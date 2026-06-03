"use client";

import { useState } from "react";
import type { WorkType } from "@/lib/types";
import { WORK_TYPE_LABELS } from "@/lib/types";
import { cn } from "@/lib/cn";

const filters: { value: WorkType | "all"; label: string }[] = [
  { value: "all", label: "全部 ✨" },
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
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="作品类型筛选"
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          role="tab"
          aria-selected={active === filter.value}
          onClick={() => onChange(filter.value)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-all",
            active === filter.value
              ? "bg-gradient-to-r from-primary to-primary-soft text-white shadow-md shadow-primary/20"
              : "bg-white/80 text-muted ring-1 ring-border hover:bg-rose-glow/50 hover:text-primary",
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export function useWorkFilter(initial: WorkType | "all" = "all") {
  return useState<WorkType | "all">(initial);
}
