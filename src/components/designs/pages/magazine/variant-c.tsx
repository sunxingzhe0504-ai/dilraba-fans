"use client";

import { useMemo } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Magazine } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MagazineCard } from "@/components/MagazineCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeMagazine } from "@/lib/i18n/localize";

export type MagazinePageProps = { magazines: Magazine[] };

const TILTS = ["rotate-2", "-rotate-2", "rotate-1", "-rotate-3", "rotate-3", "-rotate-1"];

export function MagazineWarmCinema({ magazines }: MagazinePageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <FadeIn>
        <SectionTitle
          index="—"
          kicker="Editorial"
          title={t("pages.magazine.title")}
          subtitle={t("design.magazine.warmSubtitle")}
        />
      </FadeIn>
      <StaggerGrid className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {magazines.map((m) => (
          <StaggerItem key={m.slug}>
            <MagazineCard magazine={m} className="w-full" />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Container>
  );
}

export default MagazineWarmCinema;
