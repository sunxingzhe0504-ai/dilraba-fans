"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  applyColorScheme,
  readStoredColorScheme,
  type ColorSchemePreference,
  type ResolvedColorScheme,
  COLOR_SCHEME_STORAGE_KEY,
} from "@/lib/color-scheme";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  type ThemeId,
} from "@/lib/themes";
import { prefetchHomeTheme } from "@/components/designs/HomeDesignRouter";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  colorScheme: ColorSchemePreference;
  setColorScheme: (pref: ColorSchemePreference) => void;
  resolvedColorScheme: ResolvedColorScheme;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
  colorScheme: "system",
  setColorScheme: () => {},
  resolvedColorScheme: "light",
});

export function useTheme() {
  return useContext(ThemeContext);
}

function subscribeSystemScheme(onChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSystemSchemeSnapshot(): ResolvedColorScheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      const current = (stored ||
        document.documentElement.dataset.theme ||
        DEFAULT_THEME) as ThemeId;
      document.documentElement.dataset.theme = current;
      return current;
    } catch {
      return DEFAULT_THEME;
    }
  });

  const [colorScheme, setColorSchemeState] = useState<ColorSchemePreference>(() =>
    readStoredColorScheme(),
  );

  const systemScheme = useSyncExternalStore(
    subscribeSystemScheme,
    getSystemSchemeSnapshot,
    () => "light" as ResolvedColorScheme,
  );

  const resolvedColorScheme = useMemo((): ResolvedColorScheme => {
    if (colorScheme === "dark") return "dark";
    if (colorScheme === "light") return "light";
    return systemScheme;
  }, [colorScheme, systemScheme]);

  useEffect(() => {
    applyColorScheme(resolvedColorScheme);
  }, [resolvedColorScheme]);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    document.documentElement.dataset.theme = id;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
    prefetchHomeTheme(id);
  }, []);

  const setColorScheme = useCallback((pref: ColorSchemePreference) => {
    setColorSchemeState(pref);
    try {
      window.localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, pref);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, colorScheme, setColorScheme, resolvedColorScheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
