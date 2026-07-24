"use client";

import { ExternalLink } from "lucide-react";
import { LocaleLink } from "@/components/LocaleLink";
import type { CharityItem } from "@/lib/types";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeCharity } from "@/lib/i18n/localize";
import { useMemo } from "react";

type Props = {
  items: CharityItem[];
  variant?: "c" | "a" | "b" | "d";
};

export function CharityList({ items, variant = "c" }: Props) {
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
          <div className="mt-5 flex flex-wrap gap-3">
            {item.href && (
              <LocaleLink href={item.href} className="btn-ghost">
                {t("common.viewDetail")}
              </LocaleLink>
            )}
            {item.externalUrl && (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <ExternalLink size={14} />
                {t("design.charity.learnMore")}
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
