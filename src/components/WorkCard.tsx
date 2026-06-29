"use client";

import { LocaleLink as Link } from "@/components/LocaleLink";
import { ContentImage } from "@/components/ContentImage";
import type { Work } from "@/lib/types";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeWork } from "@/lib/i18n/localize";
import { workTypeLabel } from "@/lib/i18n/labels";
import { cn } from "@/lib/cn";

type WorkCardProps = {
  work: Work;
  className?: string;
};

export function WorkCard({ work: raw, className }: WorkCardProps) {
  const locale = useLocale();
  const t = useT();
  const work = localizeWork(raw, locale);

  return (
    <div className={cn("group edit-card hover-zoom flex flex-col", className)}>
      <Link href={`/works/${work.slug}`} className="flex flex-col flex-1">
        <div className="relative aspect-[2/3] overflow-hidden bg-background-deep">
          <ContentImage
            src={work.poster}
            alt={`${work.title} ${t("work.posterAlt")}`}
            fill
            className="portrait-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {work.status === "upcoming" && (
            <span className="pill absolute left-3 top-3 bg-paper/90 font-medium text-wine shadow-sm backdrop-blur">
              {t("work.upcoming")}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-xs uppercase tracking-[0.2em] text-paper/80">
              {t("work.viewDetail")}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center gap-3 text-xs text-ink-mute">
            <span className="uppercase tracking-[0.15em] text-wine">
              {workTypeLabel(work.type, locale)}
            </span>
            <span className="h-3 w-px bg-border-strong" />
            <span className="index-num">{work.year}</span>
          </div>
          <h3 className="display text-xl text-ink transition-colors group-hover:text-wine">
            {work.title}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            {t("work.role")} {work.role}
          </p>
        </div>
      </Link>
      {work.externalLinks && work.externalLinks.length > 0 && (
        <div className="px-5 pb-5 pt-0">
          <ExternalLinks links={work.externalLinks.slice(0, 2)} />
        </div>
      )}
    </div>
  );
}
