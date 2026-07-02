"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { isBirthdaySeason } from "@/lib/birthday-season";

function seeded(i: number) {
  const x = Math.sin(i * 9.233) * 43758.5453;
  return x - Math.floor(x);
}

/** Subtle petal drift during birthday week (Jun 3 season). */
export function BirthdayPetals() {
  const reduce = useReducedMotion();
  const active = useMemo(() => isBirthdaySeason(), []);

  const petals = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        left: `${Math.round(seeded(i) * 100)}%`,
        delay: `${(seeded(i + 3) * 12).toFixed(1)}s`,
        duration: `${(14 + seeded(i + 7) * 10).toFixed(1)}s`,
        size: 0.6 + seeded(i + 11) * 0.8,
      })),
    [],
  );

  if (!active || reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden>
      {petals.map((p, i) => (
        <span
          key={i}
          className="birthday-petal absolute text-rouge/40"
          style={{
            left: p.left,
            top: "-5%",
            fontSize: `${p.size}rem`,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          ✿
        </span>
      ))}
    </div>
  );
}
