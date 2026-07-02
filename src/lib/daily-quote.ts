import type { Quote } from "@/lib/types";

/** Deterministic daily quote — same quote all day, rotates at midnight local time. */
export function getDailyQuote(quotes: Quote[], date = new Date()): Quote {
  if (quotes.length === 0) {
    throw new Error("getDailyQuote: quotes array is empty");
  }
  const seed =
    date.getFullYear() * 10_000 + (date.getMonth() + 1) * 100 + date.getDate();
  return quotes[seed % quotes.length]!;
}
