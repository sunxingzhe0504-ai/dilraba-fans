"use client";

import type { CharityItem } from "@/lib/types";
import { useT } from "@/components/LocaleProvider";
import { CharityList } from "./CharityList";

export type CharityPageProps = { items: CharityItem[] };

export function CharityXianxia({ items }: CharityPageProps) {
  const t = useT();
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">善 · Charity</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("design.charity.xianxiaTitle")}</h1>
      </div>
      <CharityList items={items} variant="a" />
    </div>
  );
}

export default CharityXianxia;
