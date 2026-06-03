"use client";

import { useMemo, useState } from "react";
import type { EventCategory, FanEvent } from "@/lib/types";
import { EVENT_CATEGORY_LABELS } from "@/lib/types";
import { EventCard } from "@/components/EventCard";
import { EmptyState } from "@/components/EmptyState";
import { cn } from "@/lib/cn";
import { StaggerGrid, StaggerItem } from "@/components/FadeIn";

const filters: { value: EventCategory | "all"; label: string }[] = [
  { value: "all", label: "全部" },
  ...(
    Object.entries(EVENT_CATEGORY_LABELS) as [EventCategory, string][]
  ).map(([value, label]) => ({ value, label })),
];

type EventsGridProps = {
  events: FanEvent[];
};

export function EventsGrid({ events }: EventsGridProps) {
  const [active, setActive] = useState<EventCategory | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return events;
    return events.filter((event) => event.category === active);
  }, [events, active]);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="活动类型筛选">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={active === filter.value}
            onClick={() => setActive(filter.value)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
            active === filter.value
              ? "bg-gradient-to-r from-primary to-primary-soft text-white shadow-md shadow-primary/20"
              : "bg-white/80 text-muted ring-1 ring-border hover:bg-rose-glow/50 hover:text-primary",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState />
        </div>
      ) : (
        <StaggerGrid className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((event) => (
            <StaggerItem key={event.slug}>
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      )}
    </>
  );
}
