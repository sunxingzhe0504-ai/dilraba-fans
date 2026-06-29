"use client";

import { useMemo } from "react";
import Image from "next/image";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Magazine } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MagazineCard } from "@/components/MagazineCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeMagazine } from "@/lib/i18n/localize";
import { DesignPageRouter } from "../DesignPageRouter";

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
                <Image src={m.cover} alt={m.name} fill sizes="22vw" className="portrait-cover transition-transform duration-700 group-hover:scale-105" />
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

export function MagazineFanSticker({ magazines }: MagazinePageProps) {
  const locale = useLocale();
  const t = useT();
  const items = useMemo(
    () => magazines.map((m) => localizeMagazine(m, locale)),
    [magazines, locale],
  );

  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-10 text-center text-4xl font-extrabold text-wine-deep">
        {t("design.magazine.fanStickerTitle")}
      </h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((m, i) => (
          <div
            key={m.slug}
            className={`overflow-hidden rounded-2xl border-2 border-paper bg-paper shadow-md ${TILTS[i % TILTS.length]} hover:rotate-0`}
          >
            <Link href={`/magazine/${m.slug}`} className="block">
              <div className="relative aspect-[3/4]">
                <Image src={m.cover} alt={m.name} fill sizes="22vw" className="portrait-cover" />
              </div>
              <p className="truncate px-2 py-2 text-center text-xs font-medium">{m.name}</p>
            </Link>
            {m.externalLinks && m.externalLinks.length > 0 && (
              <div className="px-2 pb-3">
                <ExternalLinks links={m.externalLinks} />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

export function MagazineEditorial({ magazines }: MagazinePageProps) {
  const locale = useLocale();
  const t = useT();
  const items = useMemo(
    () => magazines.map((m) => localizeMagazine(m, locale)),
    [magazines, locale],
  );

  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Editorials</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">{t("pages.magazine.title")}</p>
      <div className="gold-rule mt-6 h-px" />
      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((m, i) => (
          <div key={m.slug}>
            <Link href={`/magazine/${m.slug}`} className="group block">
              <div className="relative aspect-[3/4] border border-border">
                <Image src={m.cover} alt={m.name} fill sizes="22vw" className="portrait-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-3 flex justify-between">
                <p className="text-sm font-medium text-ink">{m.name}</p>
                <span className="display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs text-ink-mute">{m.issue}</p>
            </Link>
            {m.externalLinks && m.externalLinks.length > 0 && (
              <div className="mt-2">
                <ExternalLinks links={m.externalLinks} />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

const magazineVariants = {
  c: MagazineWarmCinema,
  a: MagazineXianxia,
  b: MagazineFanSticker,
  d: MagazineEditorial,
};

export function MagazinePageDesign({ magazines }: MagazinePageProps) {
  return <DesignPageRouter variants={magazineVariants} props={{ magazines }} />;
}
