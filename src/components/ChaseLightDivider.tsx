"use client";

import { useT } from "@/components/LocaleProvider";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** Show the brand motto in the beam center. */
  showLabel?: boolean;
  compact?: boolean;
};

/** Brand section divider — soft light beam for「追光而行」. */
export function ChaseLightDivider({
  className,
  showLabel = true,
  compact = false,
}: Props) {
  const t = useT();

  return (
    <div
      className={cn(
        "chase-light relative flex items-center justify-center overflow-hidden",
        compact ? "py-6" : "py-10 sm:py-14",
        className,
      )}
      role="presentation"
    >
      <div className="chase-light__beam" aria-hidden />
      <div className="chase-light__flare" aria-hidden />
      {showLabel && (
        <p className="chase-light__mark relative z-[1] px-4 text-center text-xs tracking-[0.35em] text-wine/70 sm:text-[13px]">
          {t("brand.chaseLight")}
        </p>
      )}
    </div>
  );
}
