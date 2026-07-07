"use client";

import { useState } from "react";
import { Check, Monitor, Moon, Sparkles, Sun, X } from "lucide-react";
import { STYLE_COUNT, THEMES } from "@/lib/themes";
import type { ColorSchemePreference } from "@/lib/color-scheme";
import { useT } from "@/components/LocaleProvider";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/cn";

const COLOR_SCHEMES: { id: ColorSchemePreference; icon: typeof Sun }[] = [
  { id: "light", icon: Sun },
  { id: "dark", icon: Moon },
  { id: "system", icon: Monitor },
];

export function ThemeSwitcher() {
  const t = useT();
  const { theme, setTheme, colorScheme, setColorScheme } = useTheme();
  const [open, setOpen] = useState(false);
  const current = THEMES.find((item) => item.id === theme);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[19rem] overflow-hidden rounded-3xl border border-border bg-paper/95 shadow-2xl backdrop-blur-xl sm:w-80">
          <div className="border-b border-border px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-ink">{t("theme.panelTitle")}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-mute">{t("theme.panelHint")}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("theme.close")}
                className="shrink-0 text-ink-mute transition-colors hover:text-wine"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="border-b border-border px-5 py-4">
            <p className="text-xs font-medium text-ink">{t("theme.colorScheme")}</p>
            <div className="mt-2 flex gap-1.5" role="group" aria-label={t("theme.colorScheme")}>
              {COLOR_SCHEMES.map(({ id, icon: Icon }) => {
                const active = colorScheme === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setColorScheme(id)}
                    aria-pressed={active}
                    className={cn(
                      "flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-2 text-xs transition-colors",
                      active
                        ? "border-wine bg-blush/40 text-wine"
                        : "border-transparent text-ink-mute hover:border-border hover:bg-background-deep/50",
                    )}
                  >
                    <Icon size={14} aria-hidden />
                    {t(`theme.scheme.${id}`)}
                  </button>
                );
              })}
            </div>
          </div>

          <ul className="max-h-[58vh] space-y-1.5 overflow-auto p-3">
            {THEMES.map((item) => {
              const active = item.id === theme;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setTheme(item.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-2xl border px-3 py-2.5 text-left transition-all",
                      active
                        ? "border-wine bg-blush/40"
                        : "border-transparent hover:border-border hover:bg-background-deep/50",
                    )}
                  >
                    <span className="flex shrink-0 overflow-hidden rounded-full border border-border-strong">
                      {item.swatch.map((c) => (
                        <span key={c} className="h-7 w-3.5" style={{ background: c }} />
                      ))}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-medium text-ink">{item.name}</span>
                        <span className="pill shrink-0 bg-wine/10 py-0.5 text-[10px] text-wine">
                          {item.facet}
                        </span>
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-ink-mute">
                        {item.tagline}
                      </span>
                    </span>
                    {active && <Check size={16} className="shrink-0 text-wine" />}
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="border-t border-border px-5 py-3 text-center text-[11px] text-ink-mute">
            {t("theme.countHint", { n: STYLE_COUNT })}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("theme.switch")}
        aria-expanded={open}
        className="btn-primary !px-5 !py-3 shadow-xl"
      >
        <Sparkles size={18} />
        <span className="hidden sm:inline">
          {current ? current.name : t("theme.defaultName")}
        </span>
      </button>
    </div>
  );
}
