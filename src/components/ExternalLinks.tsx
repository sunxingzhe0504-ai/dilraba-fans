import { ExternalLink } from "lucide-react";
import type { ExternalLink as ExternalLinkType } from "@/lib/types";
import { cn } from "@/lib/cn";

type Props = {
  links: ExternalLinkType[];
  className?: string;
  /** inline：横排小按钮；stack：纵向列表 */
  layout?: "inline" | "stack";
  size?: "sm" | "md";
};

const kindLabel: Record<string, string> = {
  info: "资料",
  watch: "观看",
  buy: "购买",
  official: "官方",
};

export function ExternalLinks({
  links,
  className,
  layout = "inline",
  size = "sm",
}: Props) {
  if (!links.length) return null;

  const btnClass =
    size === "sm"
      ? "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-wine hover:text-wine"
      : "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-wine hover:text-wine";

  return (
    <div
      className={cn(
        layout === "inline" ? "flex flex-wrap gap-2" : "flex flex-col gap-2",
        className,
      )}
    >
      {links.map((link) => (
        <a
          key={`${link.href}-${link.label}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          title={link.kind ? kindLabel[link.kind] : undefined}
        >
          <ExternalLink size={size === "sm" ? 12 : 14} aria-hidden />
          {link.label}
        </a>
      ))}
    </div>
  );
}
