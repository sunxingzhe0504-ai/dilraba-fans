"use client";

import type { CharityItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { useT } from "@/components/LocaleProvider";
import { CharityList } from "./CharityList";

export type CharityPageProps = { items: CharityItem[] };

export function CharityFanSticker({ items }: CharityPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        {t("design.charity.fanStickerTitle")}
      </h1>
      <CharityList items={items} variant="b" />
    </Container>
  );
}

export default CharityFanSticker;
