import type { TimelineEntry } from "@/lib/types";

type TimelineProps = {
  entries: TimelineEntry[];
};

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative border-l border-border pl-8 sm:pl-12">
      {entries.map((entry) => (
        <div
          key={`${entry.year}-${entry.title}`}
          className="group relative pb-12 last:pb-0"
        >
          <span className="absolute -left-[37px] top-1.5 flex h-3 w-3 items-center justify-center sm:-left-[53px]">
            <span className="h-3 w-3 rounded-full border border-gold bg-background transition-colors group-hover:bg-wine" />
          </span>
          <time className="display text-3xl text-gold">{entry.year}</time>
          <h3 className="display mt-1 text-xl text-wine-deep">{entry.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
            {entry.description}
          </p>
        </div>
      ))}
    </div>
  );
}
