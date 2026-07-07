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

export function WorksWarmCinema({ works }: WorksPageProps) {
  const t = useT();
  const [active, setActive] = useState<WorkType | "all">("all");
  const filtered = useFiltered(works, active);

  return (
    <Container wide className="section-padding pt-16">
      <FadeIn>
        <SectionTitle
          index="—"
          kicker="Filmography"
          title={t("pages.works.title")}
          subtitle={t("pages.works.subtitle")}
        />
      </FadeIn>
      <WatchlistPanel works={works} />
      <WorkTypeFilter variant="c" active={active} onChange={setActive} />
      {filtered.length === 0 ? (
        <div className="mt-12">
          <EmptyState title={t("pages.works.empty")} />
        </div>
      ) : (
        <StaggerGrid className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {filtered.map((work) => (
            <StaggerItem key={work.slug}>
              <WorkCard work={work} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      )}
    </Container>
  );
}

export default WorksWarmCinema;
