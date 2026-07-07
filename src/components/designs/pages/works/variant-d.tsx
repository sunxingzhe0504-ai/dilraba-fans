"use client";

import { useMemo, useState } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Work, WorkType } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { EmptyState } from "@/components/EmptyState";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeWork } from "@/lib/i18n/localize";
import { workTypeLabel } from "@/lib/i18n/labels";
import { WorkTypeFilter } from "../../shared/WorkTypeFilter";
import { WatchlistPanel } from "@/components/WatchlistPanel";

const TILTS = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-3"];

export type WorksPageProps = { works: Work[] };

function useFiltered(works: Work[], active: WorkType | "all") {
  return useMemo(() => {
    if (active === "all") return works;
    return works.filter((w) => w.type === active);
  }, [works, active]);
}

export function WorksEditorial({ works }: WorksPageProps) {
  const locale = useLocale();
  const t = useT();
  const [active, setActive] = useState<WorkType | "all">("all");
  const filtered = useFiltered(works, active);
  const localized = useMemo(
    () => filtered.map((w) => localizeWork(w, locale)),
    [filtered, locale],
  );

  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep sm:text-6xl">{t("pages.works.titleD")}</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-ink-mute">
        {t("design.works.editorialIndex")}
      </p>
      <div className="gold-rule mt-6 h-px" />
      <div className="mt-8">
        <WatchlistPanel works={works} />
      </div>
      <div className="mt-8">
        <WorkTypeFilter variant="d" active={active} onChange={setActive} />
      </div>
      <ul className="mt-10">
        {localized.map((work, i) => (
          <li key={work.slug}>
            <Link
              href={`/works/${work.slug}`}
              className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-border py-5 transition-colors hover:bg-blush/15 sm:grid-cols-[4rem_5rem_1fr_auto]"
            >
              <span className="display text-xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative hidden aspect-[3/4] w-14 overflow-hidden sm:block">
                <ContentImage src={work.poster} alt="" fill sizes="3rem" className="portrait-cover" />
              </div>
              <div>
                <h2 className="zh-display text-xl text-ink group-hover:text-wine-deep">
                  {work.title}
                </h2>
                <p className="text-sm text-ink-mute">
                  {workTypeLabel(work.type, locale)} · {t("work.role")} {work.role}
                </p>
              </div>
              <span className="display text-lg text-ink-mute">{work.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default WorksEditorial;
