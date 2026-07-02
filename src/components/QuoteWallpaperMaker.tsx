"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Download, Smartphone } from "lucide-react";
import type { Quote } from "@/lib/types";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeQuote } from "@/lib/i18n/localize";
import { unlockAchievement } from "@/lib/fan-storage";
import { cn } from "@/lib/cn";

const THEMES = [
  { id: "blush", bg: "#fdf6f4", accent: "#8b2942", text: "#2a1f24" },
  { id: "wine", bg: "#4a1528", accent: "#e8c4a8", text: "#fdf6f4" },
  { id: "gold", bg: "#1a1410", accent: "#c9a227", text: "#f5efe6" },
  { id: "paper", bg: "#f8f4ef", accent: "#6b5344", text: "#2c2420" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

type Props = {
  quotes: Quote[];
  variant?: "c" | "a" | "b" | "d";
};

export function QuoteWallpaperMaker({ quotes: raw, variant = "c" }: Props) {
  const locale = useLocale();
  const t = useT();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [quoteId, setQuoteId] = useState(raw[0]?.id ?? "");
  const [themeId, setThemeId] = useState<ThemeId>("blush");

  const quotes = useMemo(
    () => raw.map((q) => localizeQuote(q, locale)),
    [raw, locale],
  );
  const quote = quotes.find((q) => q.id === quoteId) ?? quotes[0];
  const theme = THEMES.find((th) => th.id === themeId) ?? THEMES[0]!;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !quote) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 1080;
    const h = 1920;
    canvas.width = w;
    canvas.height = h;

    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, w, h);

    // soft gradient orb
    const grad = ctx.createRadialGradient(w * 0.7, h * 0.25, 0, w * 0.7, h * 0.25, w * 0.55);
    grad.addColorStop(0, theme.accent + "33");
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = theme.accent + "55";
    ctx.lineWidth = 2;
    ctx.strokeRect(80, 120, w - 160, h - 240);

    ctx.fillStyle = theme.accent;
    ctx.font = "500 36px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("Dilraba · 迪丽热巴", w / 2, 220);

    ctx.fillStyle = theme.text;
    ctx.font = locale === "zh" ? "400 52px 'Noto Sans SC', sans-serif" : "400 48px Georgia, serif";
    const text = `「${quote.text}」`;
    wrapText(ctx, text, w / 2, h * 0.42, w - 200, 72);

    ctx.fillStyle = theme.accent;
    ctx.font = "400 32px Georgia, serif";
    ctx.fillText(`— ${quote.source}`, w / 2, h * 0.72);

    ctx.fillStyle = theme.text + "88";
    ctx.font = "300 28px sans-serif";
    ctx.fillText("Dear Bar · dilraba-fans", w / 2, h - 160);
  }, [quote, theme, locale]);

  const download = () => {
    draw();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `dilraba-quote-${quote?.id ?? "wallpaper"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    unlockAchievement("wallpaper-maker");
  };

  const cardClass =
    variant === "b"
      ? "rounded-3xl border-2 border-dashed border-wine/30 bg-blush/15"
      : "edit-card";

  return (
    <section className={cn(cardClass, "overflow-hidden p-6 sm:p-8")}>
      <div className="mb-6 flex items-start gap-3">
        <Smartphone className="mt-1 shrink-0 text-wine" size={22} aria-hidden />
        <div>
          <p className="kicker">{t("wallpaper.kicker")}</p>
          <h2 className="display text-2xl text-wine-deep">{t("wallpaper.title")}</h2>
          <p className="mt-2 text-sm text-ink-soft">{t("wallpaper.subtitle")}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <label className="block text-xs font-medium text-ink-mute">
            {t("wallpaper.pickQuote")}
            <select
              value={quoteId}
              onChange={(e) => setQuoteId(e.target.value)}
              className="mt-1 w-full rounded-xl border border-border bg-paper px-3 py-2 text-sm text-ink"
            >
              {quotes.map((q) => (
                <option key={q.id} value={q.id}>
                  {q.text.slice(0, 28)}
                  {q.text.length > 28 ? "…" : ""}
                </option>
              ))}
            </select>
          </label>

          <div>
            <p className="text-xs font-medium text-ink-mute">{t("wallpaper.pickTheme")}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {THEMES.map((th) => (
                <button
                  key={th.id}
                  type="button"
                  onClick={() => setThemeId(th.id)}
                  className={cn(
                    "h-10 w-10 rounded-full border-2 transition-transform hover:scale-105",
                    themeId === th.id ? "border-wine ring-2 ring-wine/30" : "border-border",
                  )}
                  style={{ background: th.bg }}
                  aria-label={th.id}
                />
              ))}
            </div>
          </div>

          <button type="button" onClick={download} className="btn-primary inline-flex items-center gap-2">
            <Download size={16} />
            {t("wallpaper.download")}
          </button>
        </div>

        <div
          className="flex aspect-[9/16] max-h-80 items-center justify-center rounded-2xl border border-border p-6 text-center shadow-inner"
          style={{ background: theme.bg, color: theme.text }}
        >
          <div>
            <p className="text-[10px] uppercase tracking-widest" style={{ color: theme.accent }}>
              Dilraba
            </p>
            <p className="mt-4 text-sm italic leading-relaxed sm:text-base">
              「{quote?.text}」
            </p>
            <p className="mt-4 text-xs" style={{ color: theme.accent }}>
              — {quote?.source}
            </p>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" aria-hidden />
    </section>
  );
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) {
  const chars = [...text];
  let line = "";
  const lines: string[] = [];
  for (const ch of chars) {
    const test = line + ch;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = ch;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((ln, i) => {
    ctx.fillText(ln, x, startY + i * lineHeight);
  });
}
