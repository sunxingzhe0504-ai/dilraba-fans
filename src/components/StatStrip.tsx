import type { SiteMeta } from "@/lib/types";

type StatStripProps = {
  stats: SiteMeta["stats"];
};

export function StatStrip({ stats }: StatStripProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="fan-card px-5 py-7 text-center sm:px-6 sm:py-8"
        >
          <p className="font-serif text-3xl font-bold gradient-text sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
