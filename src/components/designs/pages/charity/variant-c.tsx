"use client";

import type { CharityItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useT } from "@/components/LocaleProvider";
import { CharityList } from "./CharityList";

export type CharityPageProps = { items: CharityItem[] };

export function CharityWarmCinema({ items }: CharityPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Charity"
        title={t("pages.charity.warmTitle")}
        subtitle={t("pages.charity.warmSubtitle")}
        align="center"
      />
      <CharityList items={items} variant="c" />
    </Container>
  );
}

export default CharityWarmCinema;
