"use client";

import type { ChangelogEntry } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLocale, useT } from "@/components/LocaleProvider";

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

export default ChangelogWarmCinema;
