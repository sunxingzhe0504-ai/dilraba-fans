/** Client-only localStorage helpers for fan progress (watchlist, achievements, streaks). */

const WATCHED_KEY = "dlrb-watched";
const ACHIEVEMENTS_KEY = "dlrb-achievements";
const VISIT_DAYS_KEY = "dlrb-visit-days";
const QUIZ_BEST_KEY = "dlrb-quiz-best";

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function readStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  return window.localStorage;
}

export function getWatchedWorks(): string[] {
  return safeParse(readStorage()?.getItem(WATCHED_KEY) ?? null, []);
}

export function toggleWatchedWork(slug: string): string[] {
  const storage = readStorage();
  if (!storage) return getWatchedWorks();
  const set = new Set(getWatchedWorks());
  if (set.has(slug)) set.delete(slug);
  else set.add(slug);
  const next = [...set];
  storage.setItem(WATCHED_KEY, JSON.stringify(next));
  return next;
}

export function getUnlockedAchievements(): string[] {
  return safeParse(readStorage()?.getItem(ACHIEVEMENTS_KEY) ?? null, []);
}

export function unlockAchievement(id: string): boolean {
  const storage = readStorage();
  if (!storage) return false;
  const current = new Set(getUnlockedAchievements());
  if (current.has(id)) return false;
  current.add(id);
  storage.setItem(ACHIEVEMENTS_KEY, JSON.stringify([...current]));
  return true;
}

export function recordDailyVisit(): number {
  const storage = readStorage();
  if (!storage) return 0;
  const today = new Date().toISOString().slice(0, 10);
  const days = safeParse<string[]>(storage.getItem(VISIT_DAYS_KEY), []);
  if (!days.includes(today)) {
    days.push(today);
    days.sort();
    storage.setItem(VISIT_DAYS_KEY, JSON.stringify(days.slice(-90)));
  }
  return computeStreak(days.includes(today) ? days : [...days, today]);
}

function computeStreak(sortedDays: string[]): number {
  if (sortedDays.length === 0) return 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let streak = 0;
  for (let i = 0; i < 90; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (sortedDays.includes(key)) streak++;
    else break;
  }
  return streak;
}

export function getVisitStreak(): number {
  const days = safeParse<string[]>(readStorage()?.getItem(VISIT_DAYS_KEY) ?? null, []);
  return computeStreak(days);
}

export function saveQuizBest(score: number, total: number): void {
  const storage = readStorage();
  if (!storage) return;
  const prev = safeParse<{ score: number; total: number } | null>(
    storage.getItem(QUIZ_BEST_KEY),
    null,
  );
  if (!prev || score > prev.score) {
    storage.setItem(QUIZ_BEST_KEY, JSON.stringify({ score, total }));
  }
}

export function getQuizBest(): { score: number; total: number } | null {
  return safeParse(readStorage()?.getItem(QUIZ_BEST_KEY) ?? null, null);
}
