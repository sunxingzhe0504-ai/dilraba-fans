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

export function EventsEditorial({ events }: EventsPageProps) {
  const locale = useLocale();
  const t = useT();
  const [active, setActive] = useState<EventCategory | "all">("all");
  const filtered = useFiltered(events, active);
  const localized = useMemo(
    () => filtered.map((e) => localizeEvent(e, locale)),
    [filtered, locale],
  );

  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Agenda</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">{t("pages.events.title")}</p>
      <div className="gold-rule mt-6 h-px" />
      <div className="mt-8">
        <EventCategoryFilter variant="d" active={active} onChange={setActive} />
      </div>
      <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
        {localized.map((ev) => (
          <div
            key={ev.slug}
            className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border py-6"
          >
            <span className="text-xs uppercase tracking-[0.12em] text-gold">{ev.date}</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-ink-mute">
                {eventCategoryLabel(ev.category, locale)}
              </p>
              <h2 className="mt-1 font-medium text-ink">{ev.title}</h2>
              <p className="mt-2 text-sm text-ink-soft">{ev.summary}</p>
              {ev.externalLinks && ev.externalLinks.length > 0 && (
                <ExternalLinks links={ev.externalLinks} className="mt-3" />
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default EventsEditorial;
