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

export function EventsXianxia({ events }: EventsPageProps) {
  const locale = useLocale();
  const t = useT();
  const [active, setActive] = useState<EventCategory | "all">("all");
  const filtered = useFiltered(events, active);
  const localized = useMemo(
    () => filtered.map((e) => localizeEvent(e, locale)),
    [filtered, locale],
  );

  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-10 text-center">
        <p className="kicker justify-center">迹 · Events</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("design.events.xianxiaTitle")}</h1>
        <div className="mt-8">
          <EventCategoryFilter variant="a" active={active} onChange={setActive} />
        </div>
      </div>
      <ul className="container-main mx-auto max-w-2xl pb-8">
        {localized.map((ev) => (
          <li
            key={ev.slug}
            className="border-b border-gold/30 py-6 first:border-t first:border-gold/30"
          >
            <span className="index-num">{ev.date}</span>
            <span className="ml-3 text-xs text-wine">
              {eventCategoryLabel(ev.category, locale)}
            </span>
            <h2 className="zh-display mt-2 text-xl text-ink">{ev.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ev.summary}</p>
            {ev.externalLinks && ev.externalLinks.length > 0 && (
              <ExternalLinks links={ev.externalLinks} className="mt-3" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsXianxia;
