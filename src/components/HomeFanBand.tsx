"use client";

import { AnniversaryCountdown } from "@/components/AnniversaryCountdown";
import { DailyQuote } from "@/components/DailyQuote";

/** Shared fan-facing strip on home — daily quote + next anniversary countdown. */
export function HomeFanBand() {
  return (
    <>
      <DailyQuote />
      <AnniversaryCountdown compact />
    </>
  );
}
