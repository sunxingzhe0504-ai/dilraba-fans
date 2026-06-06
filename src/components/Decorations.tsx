"use client";

import { useMemo } from "react";
import { getDecorForTheme } from "@/lib/themes";
import { useTheme } from "./ThemeProvider";

/** 伪随机（基于种子）确保 SSR/CSR 一致 */
function seeded(i: number, salt = 1) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function Decorations() {
  const { theme } = useTheme();
  const decor = getDecorForTheme(theme);

  const items = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      left: `${Math.round(seeded(i, 1) * 100)}%`,
      delay: `${(seeded(i, 2) * 14).toFixed(2)}s`,
      duration: `${(10 + seeded(i, 3) * 12).toFixed(2)}s`,
      size: 0.75 + seeded(i, 4) * 1.1,
      glyph: seeded(i, 5),
      top: `${Math.round(seeded(i, 6) * 88)}%`,
    }));
  }, []);

  if (decor === "minimal") return null;

  if (decor === "lightflare") {
    const glows = [
      { top: "8%", left: "6%", size: 320, color: "var(--gold-glow)", d: "11s" },
      { top: "40%", left: "82%", size: 380, color: "var(--blush)", d: "14s" },
      { top: "72%", left: "18%", size: 300, color: "var(--rouge)", d: "13s" },
    ];
    return (
      <div className="decor-layer" aria-hidden>
        {glows.map((g, i) => (
          <span
            key={i}
            className="decor-glow"
            style={{
              top: g.top,
              left: g.left,
              width: g.size,
              height: g.size,
              background: g.color,
              animationDuration: g.d,
              animationDelay: `${i * 1.5}s`,
              opacity: 0.26,
            }}
          />
        ))}
      </div>
    );
  }

  if (decor === "petals") {
    return (
      <div className="decor-layer" aria-hidden>
        {items.map((it, i) => (
          <span
            key={i}
            className="decor-petal"
            style={{
              left: it.left,
              animationDelay: it.delay,
              animationDuration: it.duration,
              fontSize: `${it.size}rem`,
            }}
          >
            {it.glyph > 0.5 ? "🌸" : "🌼"}
          </span>
        ))}
      </div>
    );
  }

  // hearts
  return (
    <div className="decor-layer" aria-hidden>
      {items.map((it, i) => {
        const isHeart = it.glyph > 0.35;
        return (
          <span
            key={i}
            className={isHeart ? "decor-heart" : "decor-spark"}
            style={{
              left: it.left,
              ...(isHeart ? {} : { top: it.top }),
              animationDelay: it.delay,
              animationDuration: isHeart ? it.duration : "3.5s",
              fontSize: `${it.size}rem`,
            }}
          >
            {isHeart ? "♥" : "✦"}
          </span>
        );
      })}
    </div>
  );
}
