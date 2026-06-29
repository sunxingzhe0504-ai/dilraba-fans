"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  type ThemeId,
} from "@/lib/themes";
import { prefetchHomeTheme } from "@/components/designs/HomeDesignRouter";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
