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
import { EventCategoryFilter } from "../shared/EventCategoryFilter";
import { DesignPageRouter } from "../DesignPageRouter";

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

const eventsVariants = {
  c: EventsWarmCinema,
  a: EventsXianxia,
  b: EventsFanSticker,
  d: EventsEditorial,
};

export function EventsPageDesign({ events }: EventsPageProps) {
  return <DesignPageRouter variants={eventsVariants} props={{ events }} />;
}
