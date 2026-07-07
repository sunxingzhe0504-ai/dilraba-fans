"use client";

import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { useMemo } from "react";
import type { Work } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeWork } from "@/lib/i18n/localize";
import { workTypeLabel } from "@/lib/i18n/labels";
import { UpcomingCountdownBadge } from "@/components/UpcomingCountdownBadge";

export type UpcomingPageProps = { upcoming: Work[] };

function EmptyState() {
  const t = useT();
  return (
    <p className="mt-12 text-center text-ink-soft">{t("common.noUpcoming")}</p>
  );
}

function UpcomingCards({ upcoming, layout }: { upcoming: Work[]; layout: "card" | "list" }) {
  const locale = useLocale();
  const t = useT();
  const works = useMemo(
    () => upcoming.map((w) => localizeWork(w, locale)),
    [upcoming, locale],
  );

  if (works.length === 0) return <EmptyState />;

  if (layout === "list") {
    return (
      <ul className="mx-auto mt-10 max-w-2xl space-y-8">
        {works.map((work) => (
          <li key={work.slug} className="border-b border-gold/30 pb-8">
            <span className="index-num">{work.year}</span>
            <h2 className="zh-display mt-2 text-2xl text-ink">{work.title}</h2>
            <div className="mt-2">
              <UpcomingCountdownBadge work={work} />
            </div>
            <p className="mt-1 text-sm text-wine">{t("work.role")} {work.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{work.synopsis}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={`/works/${work.slug}`} className="btn-ghost text-sm">
                {t("common.viewDetailsArrow")}
              </Link>
              {work.externalLinks && <ExternalLinks links={work.externalLinks} />}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-2">
      {works.map((work) => (
        <article key={work.slug} className="edit-card overflow-hidden lg:flex">
          <div className="relative aspect-[3/4] w-full shrink-0 lg:w-56">
            <ContentImage src={work.poster} alt={work.title} fill className="object-cover" sizes="14rem" />
            <span className="pill absolute left-3 top-3 bg-gold text-ink">{t("work.upcoming")}</span>
            <div className="absolute bottom-3 left-3">
              <UpcomingCountdownBadge work={work} size="md" />
            </div>
          </div>
          <div className="flex flex-col p-6">
            <p className="text-xs text-wine">
              {workTypeLabel(work.type, locale)} · {work.year}
            </p>
            <h2 className="zh-display mt-2 text-3xl text-ink">{work.title}</h2>
            <p className="mt-2 text-sm text-ink-soft">{t("work.role")} {work.role}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{work.synopsis}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/works/${work.slug}`} className="btn-primary">
                {t("common.workDetails")}
              </Link>
              {work.externalLinks && <ExternalLinks links={work.externalLinks} />}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function UpcomingWarmCinema({ upcoming }: UpcomingPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Upcoming"
        title={t("pages.upcoming.warmTitle")}
        subtitle={t("pages.upcoming.warmSubtitle")}
      />
      <UpcomingCards upcoming={upcoming} layout="card" />
      <p className="mt-10 text-center">
        <Link href="/latest" className="text-sm text-wine hover:text-wine-deep">
          {t("common.viewLatestUpdates")}
        </Link>
      </p>
    </Container>
  );
}

export default UpcomingWarmCinema;
