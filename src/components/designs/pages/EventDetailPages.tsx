"use client";

import { useMemo } from "react";
import { Calendar, MapPin } from "lucide-react";
import type { FanEvent, NewsItem } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { Container } from "@/components/Container";
import { ExternalLinks } from "@/components/ExternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedNewsList } from "@/components/RelatedNewsList";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeEvent } from "@/lib/i18n/localize";
import { eventCategoryLabel } from "@/lib/i18n/labels";
import { DesignPageRouter } from "../DesignPageRouter";

export type EventDetailPageProps = { event: FanEvent; relatedNews?: NewsItem[] };

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

function EventBody({ event, relatedNews }: { event: FanEvent; relatedNews?: NewsItem[] }) {
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
      {relatedNews && relatedNews.length > 0 && (
        <RelatedNewsList items={relatedNews} className="mt-10" />
      )}
    </>
  );
}

export function EventDetailWarmCinema({ event: raw, relatedNews }: EventDetailPageProps) {
  const t = useT();
  const event = useLocalizedEvent(raw);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        className="mb-8"
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.events"), href: "/events" },
          { label: event.title },
        ]}
      />
      <article className="mx-auto max-w-3xl">
        <EventMeta event={event} />
        <h1 className="display mt-4 text-4xl text-wine-deep sm:text-5xl">{event.title}</h1>
        <EventBody event={event} relatedNews={relatedNews} />
      </article>
    </Container>
  );
}

export function EventDetailXianxia({ event: raw, relatedNews }: EventDetailPageProps) {
  const t = useT();
  const event = useLocalizedEvent(raw);
  return (
    <div className="section-padding pt-16">
      <div className="container-main mx-auto max-w-2xl text-center">
        <Breadcrumbs
          className="mb-6"
          items={[
            { label: t("nav.home"), href: "/" },
            { label: t("nav.events"), href: "/events" },
            { label: event.title },
          ]}
        />
        <EventMeta event={event} />
        <h1 className="zh-display mt-6 text-4xl text-wine-deep">{event.title}</h1>
        <div className="mt-8 text-left">
          <EventBody event={event} relatedNews={relatedNews} />
        </div>
      </div>
    </div>
  );
}

export function EventDetailFanSticker({ event: raw, relatedNews }: EventDetailPageProps) {
  const t = useT();
  const event = useLocalizedEvent(raw);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        className="mb-6"
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.events"), href: "/events" },
          { label: event.title },
        ]}
      />
      <article className="mt-8 max-w-2xl rounded-3xl border border-border bg-paper p-8 shadow-md">
        <EventMeta event={event} />
        <h1 className="mt-4 text-3xl font-extrabold text-wine-deep">{event.title}</h1>
        <EventBody event={event} relatedNews={relatedNews} />
      </article>
    </Container>
  );
}

export function EventDetailEditorial({ event: raw, relatedNews }: EventDetailPageProps) {
  const t = useT();
  const event = useLocalizedEvent(raw);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.events"), href: "/events" },
          { label: event.title },
        ]}
      />
      <div className="gold-rule mt-8 h-px" />
      <article className="mt-10 max-w-3xl">
        <EventMeta event={event} />
        <h1 className="display mt-4 text-5xl text-wine-deep">{event.title}</h1>
        <EventBody event={event} relatedNews={relatedNews} />
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

export function EventDetailPageDesign(props: EventDetailPageProps) {
  return <DesignPageRouter variants={eventDetailVariants} props={props} />;
}
