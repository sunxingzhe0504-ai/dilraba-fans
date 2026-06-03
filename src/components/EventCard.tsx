import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import type { FanEvent } from "@/lib/types";
import { EVENT_CATEGORY_LABELS } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/cn";

type EventCardProps = {
  event: FanEvent;
  className?: string;
};

export function EventCard({ event, className }: EventCardProps) {
  return (
    <article className={cn("card-hover fan-card p-6", className)}>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-rose-glow px-3 py-1 text-xs font-medium text-primary">
          {EVENT_CATEGORY_LABELS[event.category]}
        </span>
        {event.featured && (
          <span className="rounded-full bg-gradient-to-r from-accent to-accent-light px-3 py-1 text-xs font-medium text-white">
            ✨ 精选
          </span>
        )}
      </div>
      <h3 className="font-serif text-xl font-semibold text-primary-dark">
        {event.title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} className="text-primary-soft" aria-hidden />
          {formatDate(event.date)}
        </span>
        {event.location && (
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary-soft" aria-hidden />
            {event.location}
          </span>
        )}
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">
        {event.summary}
      </p>
    </article>
  );
}

export function ViewAllLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-white/60 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white"
    >
      {label}
      <span aria-hidden>→</span>
    </Link>
  );
}
