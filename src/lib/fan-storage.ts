/** Client-only localStorage helpers for fan progress (watchlist, achievements, streaks). */

const WATCHED_KEY = "dlrb-watched";
const ACHIEVEMENTS_KEY = "dlrb-achievements";
const VISIT_DAYS_KEY = "dlrb-visit-days";
const QUIZ_BEST_KEY = "dlrb-quiz-best";
const FAN_STORAGE_EVENT = "dlrb-fan-storage";

const EMPTY_LIST: string[] = [];

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

/** Stable empty list for useSyncExternalStore server snapshots. */
export function getEmptyStringList(): string[] {
  return EMPTY_LIST;
}

function parseStringList(raw: string | null): string[] {
  if (!raw) return EMPTY_LIST;
  const parsed = safeParse<string[] | null>(raw, null);
  if (!parsed?.length) return EMPTY_LIST;
  return parsed;
}

let watchedRaw: string | null | undefined;
let watchedSnapshot: string[] = EMPTY_LIST;

let achievementsRaw: string | null | undefined;
let achievementsSnapshot: string[] = EMPTY_LIST;

function invalidateWatchedCache() {
  watchedRaw = undefined;
}

function invalidateAchievementsCache() {
  achievementsRaw = undefined;
}

function notifyFanStorage() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(FAN_STORAGE_EVENT));
  }
}

/** Subscribe to fan-storage updates (same tab + other tabs). */
export function subscribeFanStorage(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => onChange();
  window.addEventListener(FAN_STORAGE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(FAN_STORAGE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

export function getWatchedWorks(): string[] {
  const storage = readStorage();
  if (!storage) return EMPTY_LIST;
  const raw = storage.getItem(WATCHED_KEY);
  if (raw === watchedRaw) return watchedSnapshot;
  watchedRaw = raw;
  watchedSnapshot = parseStringList(raw);
  return watchedSnapshot;
}

export function toggleWatchedWork(slug: string): string[] {
  const storage = readStorage();
  if (!storage) return getWatchedWorks();
  const set = new Set(getWatchedWorks());
  if (set.has(slug)) set.delete(slug);
  else set.add(slug);
  const next = [...set];
  storage.setItem(WATCHED_KEY, JSON.stringify(next));
  invalidateWatchedCache();
  notifyFanStorage();
  return next;
}

export function getUnlockedAchievements(): string[] {
  const storage = readStorage();
  if (!storage) return EMPTY_LIST;
  const raw = storage.getItem(ACHIEVEMENTS_KEY);
  if (raw === achievementsRaw) return achievementsSnapshot;
  achievementsRaw = raw;
  achievementsSnapshot = parseStringList(raw);
  return achievementsSnapshot;
}

export function unlockAchievement(id: string): boolean {
  const storage = readStorage();
  if (!storage) return false;
  const current = new Set(getUnlockedAchievements());
  if (current.has(id)) return false;
  current.add(id);
  storage.setItem(ACHIEVEMENTS_KEY, JSON.stringify([...current]));
  invalidateAchievementsCache();
  notifyFanStorage();
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

/** Schema for fan progress export/import. */
export type FanDataExport = {
  version: 1;
  exportedAt: string;
  watched: string[];
  achievements: string[];
  visitDays: string[];
  quizBest: { score: number; total: number } | null;
};

function isFanDataExport(value: unknown): value is FanDataExport {
  if (!value || typeof value !== "object") return false;
  const v = value as FanDataExport;
  return (
    v.version === 1 &&
    typeof v.exportedAt === "string" &&
    Array.isArray(v.watched) &&
    Array.isArray(v.achievements) &&
    Array.isArray(v.visitDays) &&
    (v.quizBest === null ||
      (typeof v.quizBest.score === "number" && typeof v.quizBest.total === "number"))
  );
}

/** Export all fan progress as JSON string. */
export function exportFanData(): string {
  const payload: FanDataExport = {
    version: 1,
    exportedAt: new Date().toISOString(),
    watched: [...getWatchedWorks()],
    achievements: [...getUnlockedAchievements()],
    visitDays: safeParse<string[]>(readStorage()?.getItem(VISIT_DAYS_KEY) ?? null, []),
    quizBest: getQuizBest(),
  };
  return JSON.stringify(payload, null, 2);
}

/** Merge imported fan progress into localStorage. */
export function importFanData(json: string): { ok: true } | { ok: false; error: string } {
  const storage = readStorage();
  if (!storage) return { ok: false, error: "no-storage" };

  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    return { ok: false, error: "invalid-json" };
  }

  if (!isFanDataExport(parsed)) {
    return { ok: false, error: "invalid-schema" };
  }

  const watched = new Set([...getWatchedWorks(), ...parsed.watched]);
  storage.setItem(WATCHED_KEY, JSON.stringify([...watched]));
  invalidateWatchedCache();

  const achievements = new Set([...getUnlockedAchievements(), ...parsed.achievements]);
  storage.setItem(ACHIEVEMENTS_KEY, JSON.stringify([...achievements]));
  invalidateAchievementsCache();

  const visitDays = new Set([
    ...safeParse<string[]>(storage.getItem(VISIT_DAYS_KEY), []),
    ...parsed.visitDays,
  ]);
  const sortedDays = [...visitDays].sort().slice(-90);
  storage.setItem(VISIT_DAYS_KEY, JSON.stringify(sortedDays));

  if (parsed.quizBest) {
    const prev = getQuizBest();
    if (!prev || parsed.quizBest.score > prev.score) {
      storage.setItem(QUIZ_BEST_KEY, JSON.stringify(parsed.quizBest));
    }
  }

  notifyFanStorage();
  return { ok: true };
}
