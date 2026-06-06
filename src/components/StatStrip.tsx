import type { SiteMeta } from "@/lib/types";

type StatStripProps = {
  stats: SiteMeta["stats"];
};

export function StatStrip({ stats }: StatStripProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[1.5rem] border border-border bg-paper px-6 py-9 text-center shadow-[0_14px_34px_-24px_rgba(176,78,105,0.3)]"
        >
          <p className="display gradient-text text-5xl sm:text-6xl">
            {stat.value}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-ink-mute">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
