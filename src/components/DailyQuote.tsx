"use client";

import { useMemo } from "react";
import { Sparkles } from "lucide-react";
import { getQuotes } from "@content/index";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeQuote } from "@/lib/i18n/localize";
import { getDailyQuote } from "@/lib/daily-quote";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

export function DailyQuote({ className }: Props) {
  const locale = useLocale();
  const t = useT();
  const quote = useMemo(() => {
    const raw = getDailyQuote(getQuotes());
    return localizeQuote(raw, locale);
  }, [locale]);

  return (
    <aside
      className={cn(
        "border-b border-border/50 bg-paper/80 px-4 py-4 text-center backdrop-blur-sm",
        className,
      )}
      aria-label={t("fanBand.dailyQuoteLabel")}
    >
      <p className="mb-2 flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-mute">
        <Sparkles size={11} className="text-gold" aria-hidden />
        {t("fanBand.dailyQuote")}
      </p>
      <blockquote className="mx-auto max-w-2xl text-sm italic leading-relaxed text-ink sm:text-base">
        「{quote.text}」
      </blockquote>
      <p className="mt-2 text-xs text-ink-mute">— {quote.source}</p>
    </aside>
  );
}
