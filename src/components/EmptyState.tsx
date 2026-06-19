"use client";

import { SearchX } from "lucide-react";
import { useT } from "@/components/LocaleProvider";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  const t = useT();
  const displayTitle = title ?? t("common.empty");
  const displayDescription = description ?? t("common.emptyHint");

  return (
    <div className="flex flex-col items-center justify-center border border-dashed border-border-strong px-8 py-20 text-center">
      <SearchX className="mb-4 text-gold" size={36} aria-hidden />
      <h3 className="display text-xl text-ink">{displayTitle}</h3>
      <p className="mt-2 max-w-sm text-sm text-ink-soft">{displayDescription}</p>
    </div>
  );
}
