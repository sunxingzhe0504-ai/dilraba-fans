"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
import { WorkTypeFilter } from "../shared/WorkTypeFilter";
import { DesignPageRouter } from "../DesignPageRouter";

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

export function WorksXianxia({ works }: WorksPageProps) {
  const locale = useLocale();
  const t = useT();
  const [active, setActive] = useState<WorkType | "all">("all");
  const filtered = useFiltered(works, active);
  const localized = useMemo(
    () => filtered.map((w) => localizeWork(w, locale)),
    [filtered, locale],
  );

  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-12 text-center">
        <p className="kicker justify-center">卷 · Filmography</p>
        <h1 className="zh-display mt-3 text-5xl text-wine-deep sm:text-6xl">
          {t("pages.works.titleA")}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft">
          {t("pages.works.subtitleA")}
        </p>
        <div className="mt-8">
          <WorkTypeFilter variant="a" active={active} onChange={setActive} />
        </div>
      </div>
      <div className="container-main space-y-14 pb-8">
        {localized.map((work, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={work.slug}
              className={`flex flex-col items-center gap-8 sm:flex-row ${
                flip ? "sm:flex-row-reverse" : ""
              }`}
            >
              <Link href={`/works/${work.slug}`} className="relative w-40 shrink-0 sm:w-48">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-gold/40 bg-paper shadow-lg">
                  <Image src={work.poster} alt={work.title} fill sizes="12rem" className="object-cover" />
                </div>
              </Link>
              <div className={`flex-1 ${flip ? "sm:text-right" : ""}`}>
                <span className="index-num">{work.year}</span>
                <h2 className="zh-display mt-1 text-3xl text-ink">{work.title}</h2>
                <p className="mt-2 text-sm text-wine">
                  {workTypeLabel(work.type, locale)} · {t("work.role")} {work.role}
                </p>
                <p className={`mt-3 line-clamp-3 text-sm text-ink-soft ${flip ? "sm:ml-auto sm:max-w-md" : "max-w-md"}`}>
                  {work.synopsis}
                </p>
                {work.externalLinks && work.externalLinks.length > 0 && (
                  <ExternalLinks
                    links={work.externalLinks}
                    className={`mt-4 ${flip ? "sm:justify-end" : ""}`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
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
              <Image src={work.poster} alt={work.title} fill sizes="20vw" className="object-cover" />
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

export function WorksEditorial({ works }: WorksPageProps) {
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
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep sm:text-6xl">{t("pages.works.titleD")}</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-ink-mute">
        {t("design.works.editorialIndex")}
      </p>
      <div className="gold-rule mt-6 h-px" />
      <div className="mt-8">
        <WorkTypeFilter variant="d" active={active} onChange={setActive} />
      </div>
      <ul className="mt-10">
        {localized.map((work, i) => (
          <li key={work.slug}>
            <Link
              href={`/works/${work.slug}`}
              className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-border py-5 transition-colors hover:bg-blush/15 sm:grid-cols-[4rem_5rem_1fr_auto]"
            >
              <span className="display text-xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative hidden aspect-[3/4] w-14 overflow-hidden sm:block">
                <Image src={work.poster} alt="" fill sizes="3rem" className="portrait-cover" />
              </div>
              <div>
                <h2 className="zh-display text-xl text-ink group-hover:text-wine-deep">
                  {work.title}
                </h2>
                <p className="text-sm text-ink-mute">
                  {workTypeLabel(work.type, locale)} · {t("work.role")} {work.role}
                </p>
              </div>
              <span className="display text-lg text-ink-mute">{work.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const worksVariants = {
  c: WorksWarmCinema,
  a: WorksXianxia,
  b: WorksFanSticker,
  d: WorksEditorial,
};

export function WorksPageDesign({ works }: WorksPageProps) {
  return <DesignPageRouter variants={worksVariants} props={{ works }} />;
}
