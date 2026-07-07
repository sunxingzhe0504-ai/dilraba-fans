"use client";

import { useMemo } from "react";
import { Calendar, MapPin } from "lucide-react";
import type { FanEvent, NewsItem, Story } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { Container } from "@/components/Container";
import { ExternalLinks } from "@/components/ExternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedNewsList } from "@/components/RelatedNewsList";
import { RelatedStoriesList } from "@/components/RelatedStoriesList";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeEvent } from "@/lib/i18n/localize";
import { eventCategoryLabel } from "@/lib/i18n/labels";

export type EventDetailPageProps = {
  event: FanEvent;
  relatedNews?: NewsItem[];
  relatedStories?: Story[];
};

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

function EventBody({
  event,
  relatedNews,
  relatedStories,
}: {
  event: FanEvent;
  relatedNews?: NewsItem[];
  relatedStories?: Story[];
}) {
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
      {relatedStories && relatedStories.length > 0 && (
        <RelatedStoriesList items={relatedStories} className="mt-10" />
      )}
      {relatedNews && relatedNews.length > 0 && (
        <RelatedNewsList items={relatedNews} className="mt-10" />
      )}
    </>
  );
}

export function EventDetailEditorial({ event: raw, relatedNews, relatedStories }: EventDetailPageProps) {
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
        <EventBody event={event} relatedNews={relatedNews} relatedStories={relatedStories} />
      </article>
    </Container>
  );
}

export default EventDetailEditorial;
