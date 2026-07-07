export type ColorSchemePreference = "light" | "dark" | "system";
export type ResolvedColorScheme = "light" | "dark";

export const COLOR_SCHEME_STORAGE_KEY = "dlrb-color-scheme";
export const DEFAULT_COLOR_SCHEME: ColorSchemePreference = "system";

export function resolveColorScheme(pref: ColorSchemePreference): ResolvedColorScheme {
  if (pref === "dark") return "dark";
  if (pref === "light") return "light";
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function applyColorScheme(resolved: ResolvedColorScheme): void {
  if (typeof document !== "undefined") {
    document.documentElement.dataset.colorScheme = resolved;
  }
}

export function readStoredColorScheme(): ColorSchemePreference {
  if (typeof window === "undefined") return DEFAULT_COLOR_SCHEME;
  try {
    const stored = window.localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_COLOR_SCHEME;
}
