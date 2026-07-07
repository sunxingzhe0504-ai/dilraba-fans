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

export function MagazineXianxia({ magazines }: MagazinePageProps) {
  const locale = useLocale();
  const t = useT();
  const items = useMemo(
    () => magazines.map((m) => localizeMagazine(m, locale)),
    [magazines, locale],
  );

  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-12 text-center">
        <p className="kicker justify-center">匣 · Editorial</p>
        <h1 className="zh-display text-5xl text-wine-deep sm:text-6xl">{t("design.magazine.xianxiaTitle")}</h1>
      </div>
      <div className="container-main grid grid-cols-2 gap-6 pb-8 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((m) => (
          <div key={m.slug} className="text-center">
            <Link href={`/magazine/${m.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-[5rem] rounded-b-[1.75rem] border border-gold/40 shadow-lg">
                <ContentImage src={m.cover} alt={m.name} fill sizes="22vw" className="portrait-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="zh-display mt-3 text-lg text-ink">{m.name}</p>
              <p className="text-xs text-ink-mute">{m.issue}</p>
            </Link>
            {m.externalLinks && m.externalLinks.length > 0 && (
              <div className="mt-3 flex justify-center">
                <ExternalLinks links={m.externalLinks} className="justify-center" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MagazineXianxia;
