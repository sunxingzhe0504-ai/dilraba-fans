"use client";

import { useState } from "react";
import { Check, Sparkles, X } from "lucide-react";
import { STYLE_COUNT, THEMES } from "@/lib/themes";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/cn";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const current = THEMES.find((t) => t.id === theme);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[19rem] overflow-hidden rounded-3xl border border-border bg-paper/95 shadow-2xl backdrop-blur-xl sm:w-80">
          <div className="border-b border-border px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-ink">百变风格 · 四套并存</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-mute">
                  像热巴一样美丽且多变——首页与全部内页均为独立版式，随时切换，选择会保存在本机。
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="关闭"
                className="shrink-0 text-ink-mute transition-colors hover:text-wine"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <ul className="max-h-[58vh] space-y-1.5 overflow-auto p-3">
            {THEMES.map((t) => {
              const active = t.id === theme;
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => setTheme(t.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-2xl border px-3 py-2.5 text-left transition-all",
                      active
                        ? "border-wine bg-blush/40"
                        : "border-transparent hover:border-border hover:bg-background-deep/50",
                    )}
                  >
                    <span className="flex shrink-0 overflow-hidden rounded-full border border-border-strong">
                      {t.swatch.map((c) => (
                        <span
                          key={c}
                          className="h-7 w-3.5"
                          style={{ background: c }}
                        />
                      ))}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-medium text-ink">
                          {t.name}
                        </span>
                        <span className="pill shrink-0 bg-wine/10 py-0.5 text-[10px] text-wine">
                          {t.facet}
                        </span>
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-ink-mute">
                        {t.tagline}
                      </span>
                    </span>
                    {active && (
                      <Check size={16} className="shrink-0 text-wine" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="border-t border-border px-5 py-3 text-center text-[11px] text-ink-mute">
            共 {STYLE_COUNT} 套风格 · 无需只选其一
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="切换百变风格"
        aria-expanded={open}
        className="btn-primary !px-5 !py-3 shadow-xl"
      >
        <Sparkles size={18} />
        <span className="hidden sm:inline">
          {current ? current.name : "百变风格"}
        </span>
      </button>
    </div>
  );
}
