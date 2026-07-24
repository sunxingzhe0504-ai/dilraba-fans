"use client";

import type { CharityItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { useT } from "@/components/LocaleProvider";
import { CharityList } from "./CharityList";

export type CharityPageProps = { items: CharityItem[] };

export function CharityEditorial({ items }: CharityPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Impact</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">{t("pages.charity.title")}</p>
      <div className="gold-rule mt-6 h-px" />
      <CharityList items={items} variant="d" />
    </Container>
  );
}

export default CharityEditorial;
