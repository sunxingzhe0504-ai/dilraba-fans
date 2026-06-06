"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import type { FanEvent } from "@/lib/types";
import { EVENT_CATEGORY_LABELS } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { Container } from "@/components/Container";
import { ExternalLinks } from "@/components/ExternalLinks";
import { DesignPageRouter } from "../DesignPageRouter";

export type EventDetailPageProps = { event: FanEvent };

function EventMeta({ event }: { event: FanEvent }) {
  return (
    <>
      <span className="pill bg-blush/50 text-wine">
        {EVENT_CATEGORY_LABELS[event.category]}
      </span>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-ink-mute">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} className="text-gold" />
          {formatDate(event.date)}
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
  return (
    <>
      <p className="mt-8 text-lg leading-relaxed text-ink-soft">
        {event.description ?? event.summary}
      </p>
      {event.externalLinks && event.externalLinks.length > 0 && (
        <div className="mt-10">
          <h2 className="kicker">相关链接</h2>
          <ExternalLinks links={event.externalLinks} className="mt-4" size="md" />
        </div>
      )}
    </>
  );
}

export function EventDetailWarmCinema({ event }: EventDetailPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/events" className="mb-8 inline-flex items-center gap-2 text-sm text-ink-soft hover:text-wine">
        <ArrowLeft size={16} /> 返回活动列表
      </Link>
      <article className="mx-auto max-w-3xl">
        <EventMeta event={event} />
        <h1 className="display mt-4 text-4xl text-wine-deep sm:text-5xl">{event.title}</h1>
        <EventBody event={event} />
      </article>
    </Container>
  );
}

export function EventDetailXianxia({ event }: EventDetailPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main mx-auto max-w-2xl text-center">
        <Link href="/events" className="text-sm text-wine hover:text-wine-deep">
          ← 返回行迹
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

export function EventDetailFanSticker({ event }: EventDetailPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/events" className="font-medium text-wine">
        ← 回活动墙
      </Link>
      <article className="mt-8 max-w-2xl rounded-3xl border border-border bg-paper p-8 shadow-md">
        <EventMeta event={event} />
        <h1 className="mt-4 text-3xl font-extrabold text-wine-deep">{event.title}</h1>
        <EventBody event={event} />
      </article>
    </Container>
  );
}

export function EventDetailEditorial({ event }: EventDetailPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/events" className="text-xs uppercase tracking-[0.25em] text-ink-mute hover:text-wine">
        ← Agenda Index
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
