"use client";

import { LocaleLink as Link } from "@/components/LocaleLink";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Story } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { useLocale, useT } from "@/components/LocaleProvider";

type Props = {
  items: Story[];
  limit?: number;
};

export function StoriesStrip({ items, limit = 2 }: Props) {
  const locale = useLocale();
  const t = useT();
  const list = items.slice(0, limit);
  if (!list.length) return null;

  return (
    <section className="border-b border-border bg-background-deep/40">
      <div className="container-wide flex flex-wrap items-center gap-4 py-4">
        <span className="pill inline-flex shrink-0 items-center gap-1.5 bg-gold-glow/50 text-wine">
          <BookOpen size={12} aria-hidden />
          {t("stories.pill")}
        </span>
        <ul className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1">
          {list.map((item) => {
            const title = locale === "en" && item.titleEn ? item.titleEn : item.title;
            return (
              <li key={item.slug} className="min-w-0">
                <Link
                  href={`/stories/${item.slug}`}
                  className="group flex items-baseline gap-2 text-sm text-ink-soft hover:text-wine"
                >
                  <span className="shrink-0 text-xs text-ink-mute">
                    {formatDate(item.date, locale)}
                  </span>
                  <span className="truncate">{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/stories"
          className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-wine hover:text-wine-deep"
        >
          {t("stories.viewAll")}
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
