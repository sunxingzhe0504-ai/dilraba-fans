import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsItem } from "@/lib/types";
import { resolveNewsHref } from "@content/index";
import { NEWS_CATEGORY_LABELS } from "@/lib/types";
import { formatDate } from "@/lib/format";

type Props = {
  items: NewsItem[];
  limit?: number;
};

export function LatestStrip({ items, limit = 4 }: Props) {
  const list = items.slice(0, limit);
  if (!list.length) return null;

  return (
    <section className="border-y border-border bg-paper/60">
      <div className="container-wide flex flex-wrap items-center gap-4 py-4">
        <span className="pill shrink-0 bg-wine/10 text-wine">Latest · 最新</span>
        <ul className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1">
          {list.map((item) => {
            const { href, external } = resolveNewsHref(item);
            return (
              <li key={item.slug} className="min-w-0">
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-baseline gap-2 text-sm text-ink-soft hover:text-wine"
                >
                  <span className="shrink-0 text-xs text-ink-mute">
                    {formatDate(item.date)}
                  </span>
                  <span className="truncate">{item.title}</span>
                  <span className="hidden shrink-0 text-[10px] uppercase tracking-wider text-wine/70 sm:inline">
                    {NEWS_CATEGORY_LABELS[item.category]}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/latest"
          className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-wine hover:text-wine-deep"
        >
          全部动态
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
