"use client";

import type { ChangelogEntry } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLocale, useT } from "@/components/LocaleProvider";
import { DesignPageRouter } from "../DesignPageRouter";

export type ChangelogPageProps = { log: ChangelogEntry[] };

function ChangelogList({ log, variant }: ChangelogPageProps & { variant: "c" | "a" | "b" | "d" }) {
  const locale = useLocale();
  return (
    <ul className={variant === "d" ? "mt-10 space-y-0 divide-y divide-border" : "mt-10 space-y-8"}>
      {log.map((entry) => {
        const items = locale === "en" && entry.itemsEn?.length ? entry.itemsEn : entry.items;
        return (
        <li
          key={entry.date}
          className={
            variant === "a"
              ? "border-b border-gold/30 py-6 first:border-t first:border-gold/30"
              : variant === "d"
                ? "py-8"
                : "border-l-2 border-gold pl-6"
          }
        >
          <time className="index-num">{entry.date}</time>
          <ul className="mt-3 space-y-2">
            {items.map((item) => (
              <li key={item} className="text-sm text-ink-soft">
                {variant === "b" ? "✦ " : "· "}
                {item}
              </li>
            ))}
          </ul>
        </li>
      );
      })}
    </ul>
  );
}

export function ChangelogWarmCinema({ log }: ChangelogPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Changelog"
        title={t("pages.changelog.title")}
        subtitle={t("pages.changelog.subtitle")}
      />
      <ChangelogList log={log} variant="c" />
    </Container>
  );
}

export function ChangelogXianxia({ log }: ChangelogPageProps) {
  const t = useT();
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">录 · Changelog</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("design.changelog.xianxiaTitle")}</h1>
      </div>
      <div className="container-main">
        <ChangelogList log={log} variant="a" />
      </div>
    </div>
  );
}

export function ChangelogFanSticker({ log }: ChangelogPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        {t("design.changelog.fanStickerTitle")}
      </h1>
      <ChangelogList log={log} variant="b" />
    </Container>
  );
}

export function ChangelogEditorial({ log }: ChangelogPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Revisions</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">{t("pages.changelog.title")}</p>
      <div className="gold-rule mt-6 h-px" />
      <ChangelogList log={log} variant="d" />
    </Container>
  );
}

const variants = {
  c: ChangelogWarmCinema,
  a: ChangelogXianxia,
  b: ChangelogFanSticker,
  d: ChangelogEditorial,
};

export function ChangelogPageDesign(props: ChangelogPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
