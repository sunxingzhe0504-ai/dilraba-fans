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

export function WorksFanSticker({ works }: WorksPageProps) {
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
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-wine-deep sm:text-5xl">
          {t("design.works.fanStickerTitle")}
        </h1>
        <p className="mt-3 text-sm text-ink-soft">{t("design.works.fanStickerSubtitle")}</p>
      </div>
      <WatchlistPanel works={works} />
      <WorkTypeFilter variant="b" active={active} onChange={setActive} />
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {localized.map((work, i) => (
          <Link
            key={work.slug}
            href={`/works/${work.slug}`}
            className={`rounded-2xl bg-paper p-2 pb-4 shadow-lg transition-transform hover:-translate-y-1 hover:rotate-0 ${
              TILTS[i % TILTS.length]
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <ContentImage src={work.poster} alt={work.title} fill sizes="20vw" className="object-cover" />
              <span className="pill absolute left-2 top-2 bg-wine/90 text-paper text-[10px]">
                {workTypeLabel(work.type, locale)}
              </span>
            </div>
            <p className="mt-2 text-center font-bold text-ink">{work.title}</p>
            <p className="text-center text-xs text-wine">{t("work.role")} {work.role}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default WorksFanSticker;
