"use client";

import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import type { FanEvent } from "@/lib/types";
import { ExternalLinks } from "@/components/ExternalLinks";
import { formatDate } from "@/lib/format";
import { useLocale } from "@/components/LocaleProvider";
import { localizeEvent } from "@/lib/i18n/localize";
import { eventCategoryLabel } from "@/lib/i18n/labels";
import { cn } from "@/lib/cn";

type EventCardProps = {
  event: FanEvent;
  className?: string;
};

export function EventCard({ event: raw, className }: EventCardProps) {
  const locale = useLocale();
  const event = localizeEvent(raw, locale);

  return (
    <div className={cn("group edit-card flex flex-col", className)}>
      <Link
        href={`/events/${event.slug}`}
        className="flex flex-col gap-4 p-7 sm:flex-row sm:items-start"
      >
        <div className="flex shrink-0 flex-col items-start border-l-2 border-gold pl-4 sm:w-32">
          <span className="index-num">{formatDate(event.date, locale)}</span>
          <span className="mt-1 text-xs uppercase tracking-[0.18em] text-wine">
            {eventCategoryLabel(event.category, locale)}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="display text-xl text-ink transition-colors group-hover:text-wine sm:text-2xl">
            {event.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-ink-mute">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gold" aria-hidden />
              {formatDate(event.date, locale)}
            </span>
            {event.location && (
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-gold" aria-hidden />
                {event.location}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{event.summary}</p>
        </div>
      </Link>
      {event.externalLinks && event.externalLinks.length > 0 && (
        <div className="border-t border-border/60 px-7 pb-5 pt-4">
          <ExternalLinks links={event.externalLinks.slice(0, 2)} />
        </div>
      )}
    </div>
  );
}

export function ViewAllLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium tracking-wide text-ink transition-colors hover:border-wine hover:text-wine"
    >
      {label}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}
