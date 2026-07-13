"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { LocaleLink } from "@/components/LocaleLink";
import { useT } from "@/components/LocaleProvider";
import { useTheme } from "@/components/ThemeProvider";
import { prefetchRouteDesign } from "@/lib/design-prefetch";
import { MORE_NAV_GROUPS } from "@/lib/site-nav";
import { cn } from "@/lib/cn";

type Props = {
  active: boolean;
  isItemActive: (href: string) => boolean;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function NavMoreMenu({
  active,
  isItemActive,
  onNavigate,
  variant = "desktop",
}: Props) {
  const t = useT();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (variant !== "desktop" || !open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, variant]);

  if (variant === "mobile") {
    return (
      <div className="border-t border-border/60 pt-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-mute">
          {t("nav.more")}
        </p>
        <div className="space-y-5">
          {MORE_NAV_GROUPS.map((group) => (
            <div key={group.titleKey}>
              <p className="mb-2 text-[11px] font-medium text-wine/80">{t(group.titleKey)}</p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <LocaleLink
                      href={item.href}
                      onClick={onNavigate}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-sm transition-colors",
                        isItemActive(item.href)
                          ? "bg-blush/40 text-wine"
                          : "text-ink/80 hover:bg-blush/25 hover:text-wine",
                      )}
                    >
                      {t(item.labelKey)}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "group relative inline-flex items-center gap-1 text-sm tracking-wide transition-colors",
          active || open ? "text-wine" : "text-ink/80 hover:text-wine",
        )}
      >
        {t("nav.more")}
        <ChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
          aria-hidden
        />
        <span
          className={cn(
            "absolute -bottom-1.5 left-0 h-[3px] rounded-full bg-rouge transition-all duration-300",
            active || open ? "w-full" : "w-0 group-hover:w-full",
          )}
        />
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[17rem] overflow-hidden rounded-2xl border border-border bg-paper/98 p-3 shadow-2xl backdrop-blur-xl"
        >
          {MORE_NAV_GROUPS.map((group, groupIndex) => (
            <div
              key={group.titleKey}
              className={cn(groupIndex > 0 && "mt-3 border-t border-border pt-3")}
            >
              <p className="px-2 pb-1 text-[11px] font-medium text-wine/80">
                {t(group.titleKey)}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <LocaleLink
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        onNavigate?.();
                      }}
                      onMouseEnter={() => prefetchRouteDesign(item.href, theme)}
                      onFocus={() => prefetchRouteDesign(item.href, theme)}
                      className={cn(
                        "block rounded-xl px-3 py-2 text-sm transition-colors",
                        isItemActive(item.href)
                          ? "bg-blush/40 text-wine"
                          : "text-ink/80 hover:bg-blush/25 hover:text-wine",
                      )}
                    >
                      {t(item.labelKey)}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
