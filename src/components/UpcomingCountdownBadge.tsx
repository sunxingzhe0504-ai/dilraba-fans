"use client";

import { Clock } from "lucide-react";
import type { Work } from "@/lib/types";
import { useLocale } from "@/components/LocaleProvider";
import {
  formatUpcomingCountdown,
  getUpcomingCountdown,
} from "@/lib/upcoming-countdown";
import { cn } from "@/lib/cn";

type Props = {
  work: Work;
  className?: string;
  size?: "sm" | "md";
};

export function UpcomingCountdownBadge({ work, className, size = "sm" }: Props) {
  const locale = useLocale();
  const info = getUpcomingCountdown(work, locale);
  if (!info) return null;

  const label = formatUpcomingCountdown(info, locale);
  const isSoon = info.kind === "days" && info.days <= 30;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs",
        info.kind === "days" && isSoon
          ? "bg-wine text-paper"
          : info.kind === "filming"
            ? "bg-gold/20 text-wine-deep"
            : "bg-ink/10 text-ink-mute",
        className,
      )}
    >
      <Clock size={size === "sm" ? 10 : 12} aria-hidden />
      {label}
    </span>
  );
}
