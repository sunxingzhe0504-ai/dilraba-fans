"use client";

import { useMemo } from "react";
import { ExternalLink } from "lucide-react";
import type { CharityItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeCharity } from "@/lib/i18n/localize";

export type CharityPageProps = { items: CharityItem[] };

function CharityList({ items, variant }: CharityPageProps & { variant: "c" | "a" | "b" | "d" }) {
  const locale = useLocale();
  const t = useT();
  const localized = useMemo(
    () => items.map((item) => localizeCharity(item, locale)),
    [items, locale],
  );
  return (
    <ul
      className={
        variant === "a"
          ? "container-main mx-auto mt-10 max-w-2xl"
          : variant === "d"
            ? "mx-auto mt-12 max-w-3xl divide-y divide-border"
            : "mx-auto mt-12 max-w-3xl space-y-6"
      }
    >
      {localized.map((item) => (
        <li
          key={item.slug}
          className={
            variant === "b"
              ? "rounded-3xl border border-border bg-paper p-8 shadow-md"
              : variant === "a"
                ? "border-b border-gold/30 py-6 first:border-t first:border-gold/30"
                : variant === "d"
                  ? "py-8"
                  : "edit-card p-8"
          }
        >
          <time className={variant === "d" ? "text-xs uppercase tracking-widest text-gold" : "index-num"}>
            {item.date}
          </time>
          <h2
            className={
              variant === "a"
                ? "zh-display mt-2 text-xl text-ink"
                : "mt-2 text-xl font-medium text-ink"
            }
          >
            {item.title}
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{item.summary}</p>
          {item.externalUrl && (
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-5"
            >
              <ExternalLink size={14} />
              {t("design.charity.learnMore")}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

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
