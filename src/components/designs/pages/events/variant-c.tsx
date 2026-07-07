"use client";

import { useMemo, useState } from "react";
import type { EventCategory, FanEvent } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { EventCard } from "@/components/EventCard";
import { EmptyState } from "@/components/EmptyState";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeEvent } from "@/lib/i18n/localize";
import { eventCategoryLabel } from "@/lib/i18n/labels";
import { EventCategoryFilter } from "../../shared/EventCategoryFilter";

export type EventsPageProps = { events: FanEvent[] };

function useFiltered(events: FanEvent[], active: EventCategory | "all") {
  return useMemo(() => {
    if (active === "all") return events;
    return events.filter((e) => e.category === active);
  }, [events, active]);
}

export function EventsWarmCinema({ events }: EventsPageProps) {
  const t = useT();
  const [active, setActive] = useState<EventCategory | "all">("all");
  const filtered = useFiltered(events, active);

  return (
    <Container wide className="section-padding pt-16">
      <FadeIn>
        <SectionTitle
          index="—"
          kicker="Events"
          title={t("pages.events.title")}
          subtitle={t("design.events.warmSubtitle")}
        />
      </FadeIn>
      <EventCategoryFilter variant="c" active={active} onChange={setActive} />
      {filtered.length === 0 ? (
        <div className="mt-12">
          <EmptyState />
        </div>
      ) : (
        <StaggerGrid className="mt-12 grid gap-5 lg:grid-cols-2">
          {filtered.map((ev) => (
            <StaggerItem key={ev.slug}>
              <EventCard event={ev} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      )}
    </Container>
  );
}

export default EventsWarmCinema;
