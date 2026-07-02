import type { Anniversary } from "@/lib/types";

export type NextAnniversary = Anniversary & {
  daysUntil: number;
  nextYear: number;
  isToday: boolean;
};

function anniversaryDate(mmdd: string, year: number): Date {
  const [month, day] = mmdd.split("-").map(Number);
  return new Date(year, month - 1, day);
}

/** Find the nearest upcoming anniversary (or today) from MM-DD list. */
export function getNextAnniversary(anniversaries: Anniversary[]): NextAnniversary | null {
  if (anniversaries.length === 0) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const year = today.getFullYear();

  let best: NextAnniversary | null = null;

  for (const item of anniversaries) {
    let next = anniversaryDate(item.date, year);
    if (next < today) {
      next = anniversaryDate(item.date, year + 1);
    }
    const daysUntil = Math.round((next.getTime() - today.getTime()) / 86_400_000);
    const candidate: NextAnniversary = {
      ...item,
      daysUntil,
      nextYear: next.getFullYear(),
      isToday: daysUntil === 0,
    };
    if (!best || daysUntil < best.daysUntil) {
      best = candidate;
    }
  }

  return best;
}

export function formatCountdown(days: number, locale: "zh" | "en"): string {
  if (days === 0) return locale === "zh" ? "就是今天" : "Today";
  if (days === 1) return locale === "zh" ? "明天" : "Tomorrow";
  return locale === "zh" ? `${days} 天` : `${days} days`;
}
