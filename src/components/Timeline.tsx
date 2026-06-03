import type { TimelineEntry } from "@/lib/types";

type TimelineProps = {
  entries: TimelineEntry[];
};

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border sm:before:left-1/2">
      {entries.map((entry, index) => (
        <div
          key={`${entry.year}-${entry.title}`}
          className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
            index % 2 === 0 ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div className="hidden flex-1 sm:block" />
          <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-background sm:left-1/2">
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <div className="ml-12 flex-1 sm:ml-0">
            <article className="fan-card p-6 shadow-sm">
              <time className="text-sm font-medium text-accent">
                {entry.year} 年
              </time>
              <h3 className="mt-1 font-serif text-lg font-semibold text-primary">
                {entry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {entry.description}
              </p>
            </article>
          </div>
        </div>
      ))}
    </div>
  );
}
