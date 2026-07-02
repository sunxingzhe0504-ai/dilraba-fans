"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  getWatchedWorks,
  recordDailyVisit,
  unlockAchievement,
} from "@/lib/fan-storage";
import { checkAchievements } from "@/lib/achievements";

/** Records visits & streak-based achievements (client-only). */
export function FanProgressTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const streak = recordDailyVisit();
    const watched = getWatchedWorks().length;
    const ids = checkAchievements({ watchedCount: watched, streak });
    ids.forEach((id) => unlockAchievement(id));
  }, [pathname]);

  return null;
}
