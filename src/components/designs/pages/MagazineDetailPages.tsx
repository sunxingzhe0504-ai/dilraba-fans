"use client";

import { useMemo } from "react";
import { ContentImage } from "@/components/ContentImage";
import type { Magazine } from "@/lib/types";
import { Container } from "@/components/Container";
import { ExternalLinks } from "@/components/ExternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeMagazine } from "@/lib/i18n/localize";
import { DesignPageRouter } from "../DesignPageRouter";

export type MagazineDetailPageProps = { magazine: Magazine };

function useLocalizedMagazine(magazine: Magazine) {
  const locale = useLocale();
  return useMemo(() => localizeMagazine(magazine, locale), [magazine, locale]);
}

function MagazineMeta({ magazine }: { magazine: Magazine }) {
  return (
    <>
      <p className="kicker">{magazine.year}</p>
      <p className="mt-4 text-lg text-ink-soft">{magazine.issue}</p>
      {magazine.tags && (
        <div className="mt-6 flex flex-wrap gap-2">
          {magazine.tags.map((tag) => (
            <span key={tag} className="pill bg-blush/50 text-wine">
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

function MagazineBody({ magazine }: { magazine: Magazine }) {
  const t = useT();
  return (
    <>
      {magazine.description && (
        <p className="mt-6 leading-relaxed text-ink-soft">{magazine.description}</p>
      )}
      {magazine.externalLinks && magazine.externalLinks.length > 0 && (
        <div className="mt-10">
          <h2 className="kicker">{t("common.relatedLinks")}</h2>
          <ExternalLinks links={magazine.externalLinks} className="mt-4" size="md" />
        </div>
      )}
    </>
  );
}

function MagazineCover({ magazine, className }: { magazine: Magazine; className?: string }) {
  return (
    <div className={`relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden shadow-xl lg:mx-0 ${className ?? ""}`}>
      <ContentImage src={magazine.cover} alt={magazine.name} fill priority className="object-cover" sizes="360px" />
    </div>
  );
}

export function MagazineDetailWarmCinema({ magazine: raw }: MagazineDetailPageProps) {
  const t = useT();
  const magazine = useLocalizedMagazine(raw);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        className="mb-8"
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.magazine"), href: "/magazine" },
          { label: magazine.name },
        ]}
      />
      <div className="grid gap-12 lg:grid-cols-[360px_1fr]">
        <MagazineCover magazine={magazine} className="rounded-[var(--radius-card)]" />
        <div>
          <MagazineMeta magazine={magazine} />
          <h1 className="display mt-2 text-4xl text-wine-deep">{magazine.name}</h1>
          <MagazineBody magazine={magazine} />
        </div>
      </div>
    </Container>
  );
}

export function MagazineDetailXianxia({ magazine: raw }: MagazineDetailPageProps) {
  const t = useT();
  const magazine = useLocalizedMagazine(raw);
  return (
    <div className="section-padding pt-16">
      <div className="container-main text-center">
        <Breadcrumbs
          className="mb-6"
          items={[
            { label: t("nav.home"), href: "/" },
            { label: t("nav.magazine"), href: "/magazine" },
            { label: magazine.name },
          ]}
        />
        <div className="relative mx-auto mt-10 w-56">
          <MagazineCover magazine={magazine} className="rounded-[2rem] border-2 border-gold/50 p-2" />
        </div>
        <h1 className="zh-display mt-10 text-4xl text-wine-deep">{magazine.name}</h1>
        <div className="mx-auto mt-8 max-w-xl text-left">
          <MagazineMeta magazine={magazine} />
          <MagazineBody magazine={magazine} />
        </div>
      </div>
    </div>
  );
}

export function MagazineDetailFanSticker({ magazine: raw }: MagazineDetailPageProps) {
  const t = useT();
  const magazine = useLocalizedMagazine(raw);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        className="mb-6"
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.magazine"), href: "/magazine" },
          { label: magazine.name },
        ]}
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        <div className="rotate-1 rounded-2xl bg-paper p-3 shadow-xl">
          <MagazineCover magazine={magazine} className="rounded-xl" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-wine-deep">{magazine.name}</h1>
          <MagazineMeta magazine={magazine} />
          <MagazineBody magazine={magazine} />
        </div>
      </div>
    </Container>
  );
}

export function MagazineDetailEditorial({ magazine: raw }: MagazineDetailPageProps) {
  const t = useT();
  const magazine = useLocalizedMagazine(raw);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.magazine"), href: "/magazine" },
          { label: magazine.name },
        ]}
      />
      <div className="gold-rule mt-8 h-px" />
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Cover Story</p>
          <h1 className="display mt-2 text-5xl text-wine-deep">{magazine.name}</h1>
          <MagazineMeta magazine={magazine} />
          <MagazineBody magazine={magazine} />
        </div>
        <MagazineCover magazine={magazine} className="max-w-md border border-border lg:max-w-none lg:justify-self-end" />
      </div>
    </Container>
  );
}

const magazineDetailVariants = {
  c: MagazineDetailWarmCinema,
  a: MagazineDetailXianxia,
  b: MagazineDetailFanSticker,
  d: MagazineDetailEditorial,
};

export function MagazineDetailPageDesign({ magazine }: MagazineDetailPageProps) {
  return <DesignPageRouter variants={magazineDetailVariants} props={{ magazine }} />;
}
