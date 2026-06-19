"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import type { FanEvent } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { Container } from "@/components/Container";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeEvent } from "@/lib/i18n/localize";
import { eventCategoryLabel } from "@/lib/i18n/labels";
import { DesignPageRouter } from "../DesignPageRouter";

export type EventDetailPageProps = { event: FanEvent };

function useLocalizedEvent(event: FanEvent) {
  const locale = useLocale();
  return useMemo(() => localizeEvent(event, locale), [event, locale]);
}

function EventMeta({ event }: { event: FanEvent }) {
  const locale = useLocale();
  return (
    <>
      <span className="pill bg-blush/50 text-wine">
        {eventCategoryLabel(event.category, locale)}
      </span>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-ink-mute">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} className="text-gold" />
          {formatDate(event.date, locale)}
        </span>
        {event.location && (
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-gold" />
            {event.location}
          </span>
        )}
      </div>
    </>
  );
}

function EventBody({ event }: { event: FanEvent }) {
  const t = useT();
  return (
    <>
      <p className="mt-8 text-lg leading-relaxed text-ink-soft">
        {event.description ?? event.summary}
      </p>
      {event.externalLinks && event.externalLinks.length > 0 && (
        <div className="mt-10">
          <h2 className="kicker">{t("common.relatedLinks")}</h2>
          <ExternalLinks links={event.externalLinks} className="mt-4" size="md" />
        </div>
      )}
    </>
  );
}

export function EventDetailWarmCinema({ event: raw }: EventDetailPageProps) {
  const t = useT();
  const event = useLocalizedEvent(raw);
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/events" className="mb-8 inline-flex items-center gap-2 text-sm text-ink-soft hover:text-wine">
        <ArrowLeft size={16} /> {t("common.backToEvents")}
      </Link>
      <article className="mx-auto max-w-3xl">
        <EventMeta event={event} />
        <h1 className="display mt-4 text-4xl text-wine-deep sm:text-5xl">{event.title}</h1>
        <EventBody event={event} />
      </article>
    </Container>
  );
}

export function EventDetailXianxia({ event: raw }: EventDetailPageProps) {
  const t = useT();
  const event = useLocalizedEvent(raw);
  return (
    <div className="section-padding pt-16">
      <div className="container-main mx-auto max-w-2xl text-center">
        <Link href="/events" className="text-sm text-wine hover:text-wine-deep">
          {t("common.backToEventsA")}
        </Link>
        <EventMeta event={event} />
        <h1 className="zh-display mt-6 text-4xl text-wine-deep">{event.title}</h1>
        <div className="mt-8 text-left">
          <EventBody event={event} />
        </div>
      </div>
    </div>
  );
}

export function EventDetailFanSticker({ event: raw }: EventDetailPageProps) {
  const t = useT();
  const event = useLocalizedEvent(raw);
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/events" className="font-medium text-wine">
        {t("common.backToEventsB")}
      </Link>
      <article className="mt-8 max-w-2xl rounded-3xl border border-border bg-paper p-8 shadow-md">
        <EventMeta event={event} />
        <h1 className="mt-4 text-3xl font-extrabold text-wine-deep">{event.title}</h1>
        <EventBody event={event} />
      </article>
    </Container>
  );
}

export function EventDetailEditorial({ event: raw }: EventDetailPageProps) {
  const t = useT();
  const event = useLocalizedEvent(raw);
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/events" className="text-xs uppercase tracking-[0.25em] text-ink-mute hover:text-wine">
        ← {t("pages.events.title")} Index
      </Link>
      <div className="gold-rule mt-8 h-px" />
      <article className="mt-10 max-w-3xl">
        <EventMeta event={event} />
        <h1 className="display mt-4 text-5xl text-wine-deep">{event.title}</h1>
        <EventBody event={event} />
      </article>
    </Container>
  );
}

const eventDetailVariants = {
  c: EventDetailWarmCinema,
  a: EventDetailXianxia,
  b: EventDetailFanSticker,
  d: EventDetailEditorial,
};

export function EventDetailPageDesign({ event }: EventDetailPageProps) {
  return <DesignPageRouter variants={eventDetailVariants} props={{ event }} />;
}
