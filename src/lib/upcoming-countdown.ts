import type { Work } from "@/lib/types";

export type UpcomingCountdownInfo =
  | { kind: "days"; days: number; approximate: boolean; targetLabel: string }
  | { kind: "filming"; labelZh: string; labelEn: string }
  | { kind: "tbd"; labelZh: string; labelEn: string };

export function getUpcomingCountdown(work: Work, locale: "zh" | "en" = "zh"): UpcomingCountdownInfo | null {
  if (work.status !== "upcoming") return null;

  if (work.countdownTarget) {
    const target = new Date(work.countdownTarget);
    target.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.round((target.getTime() - today.getTime()) / 86_400_000);
    const targetLabel = work.countdownTarget;
    if (days < 0) {
      return {
        kind: "tbd",
        labelZh: "档期待官宣",
        labelEn: "Release TBD",
      };
    }
    return {
      kind: "days",
      days,
      approximate: work.countdownApproximate ?? false,
      targetLabel,
    };
  }

  if (work.slug === "jiu-chong-tian") {
    return { kind: "filming", labelZh: "拍摄中", labelEn: "Filming" };
  }

  return {
    kind: "tbd",
    labelZh: locale === "zh" ? "档期待官宣" : "Release TBD",
    labelEn: "Release TBD",
  };
}

export function formatUpcomingCountdown(
  info: UpcomingCountdownInfo,
  locale: "zh" | "en",
): string {
  if (info.kind === "filming") return locale === "zh" ? info.labelZh : info.labelEn;
  if (info.kind === "tbd") return locale === "zh" ? info.labelZh : info.labelEn;
  const prefix = info.approximate ? (locale === "zh" ? "约 " : "~") : "";
  if (info.days === 0) return locale === "zh" ? "就是今天" : "Today";
  if (info.days === 1) return locale === "zh" ? "明天" : "Tomorrow";
  return locale === "zh" ? `${prefix}${info.days} 天` : `${prefix}${info.days} days`;
}
