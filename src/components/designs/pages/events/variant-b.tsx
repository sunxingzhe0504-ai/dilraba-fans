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

export function EventsFanSticker({ events }: EventsPageProps) {
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
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        {t("design.events.fanStickerTitle")}
      </h1>
      <EventCategoryFilter variant="b" active={active} onChange={setActive} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {localized.map((ev) => (
          <div
            key={ev.slug}
            className="rounded-3xl border border-border bg-paper p-6 shadow-md"
          >
            <span className="pill bg-rouge/15 text-wine">{ev.date}</span>
            <span className="ml-2 text-xs text-ink-mute">
              {eventCategoryLabel(ev.category, locale)}
            </span>
            <h2 className="mt-3 font-bold text-ink">{ev.title}</h2>
            <p className="mt-2 text-sm text-ink-soft">{ev.summary}</p>
            {ev.externalLinks && ev.externalLinks.length > 0 && (
              <ExternalLinks links={ev.externalLinks} className="mt-3" />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default EventsFanSticker;
