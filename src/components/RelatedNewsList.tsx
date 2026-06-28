"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { NewsItem } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeNews } from "@/lib/i18n/localize";
import { newsCategoryLabel } from "@/lib/i18n/labels";

type Props = {
  items: NewsItem[];
  className?: string;
};

export function RelatedNewsList({ items, className }: Props) {
  const locale = useLocale();
  const t = useT();
  const news = useMemo(
    () => items.map((item) => localizeNews(item, locale)),
    [items, locale],
  );

  if (news.length === 0) return null;

  return (
    <div className={className}>
      <h2 className="kicker">{t("common.relatedNews")}</h2>
      <ul className="mt-4 space-y-3">
        {news.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/latest/${item.slug}`}
              className="block rounded-xl border border-border bg-paper px-4 py-3 transition-colors hover:border-wine"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="pill bg-blush/50 text-[10px] text-wine">
                  {newsCategoryLabel(item.category, locale)}
                </span>
                <time className="text-xs text-ink-mute">{formatDate(item.date, locale)}</time>
              </div>
              <p className="mt-1 font-medium text-ink">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
