"use client";

import { ChevronRight } from "lucide-react";
import { LocaleLink } from "@/components/LocaleLink";
import { cn } from "@/lib/cn";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: Props) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-ink-mute", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight size={14} className="shrink-0 text-ink-mute/60" aria-hidden />
              )}
              {item.href && !isLast ? (
                <LocaleLink href={item.href} className="transition-colors hover:text-wine">
                  {item.label}
                </LocaleLink>
              ) : (
                <span className={isLast ? "font-medium text-ink-soft" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
