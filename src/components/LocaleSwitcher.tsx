"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";
import { localizePath, stripLocalePrefix } from "@/lib/i18n/path";
import { usePathname } from "next/navigation";

const OPTIONS: { id: Locale; label: string }[] = [
  { id: "zh", label: "中文" },
  { id: "en", label: "EN" },
];

export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const barePath = stripLocalePrefix(pathname);

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-paper/90 p-0.5 shadow-sm backdrop-blur",
        className,
      )}
      role="group"
      aria-label={t("locale.switch")}
    >
      <Languages size={14} className="ml-2 text-ink-mute" aria-hidden />
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => setLocale(opt.id)}
          title={localizePath(barePath, opt.id)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
            locale === opt.id
              ? "bg-wine text-paper"
              : "text-ink-soft hover:text-wine",
          )}
          aria-pressed={locale === opt.id}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
