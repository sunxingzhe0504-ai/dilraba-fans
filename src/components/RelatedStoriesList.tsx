"use client";

import { useMemo } from "react";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Story } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { useLocale, useT } from "@/components/LocaleProvider";

type Props = {
  items: Story[];
  className?: string;
};

export function RelatedStoriesList({ items, className }: Props) {
  const locale = useLocale();
  const t = useT();
  const stories = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        title: locale === "en" && item.titleEn ? item.titleEn : item.title,
        summary: locale === "en" && item.summaryEn ? item.summaryEn : item.summary,
      })),
    [items, locale],
  );

  if (stories.length === 0) return null;

  return (
    <div className={className}>
      <h2 className="kicker">{t("common.relatedStories")}</h2>
      <ul className="mt-4 space-y-3">
        {stories.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/stories/${item.slug}`}
              className="block rounded-xl border border-border bg-paper px-4 py-3 transition-colors hover:border-wine"
            >
              <time className="text-xs text-ink-mute">{formatDate(item.date, locale)}</time>
              <p className="mt-1 font-medium text-ink">{item.title}</p>
              <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{item.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
