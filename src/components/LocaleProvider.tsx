"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { translate, type UiKey } from "@/lib/i18n/ui";
import {
  getLocaleFromPathname,
  localizePath,
  stripLocalePrefix,
} from "@/lib/i18n/path";
import { LOCALE_STORAGE_KEY, type Locale } from "@/lib/i18n/types";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: UiKey, params?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue>({
  locale: "zh",
  setLocale: () => {},
  t: (key) => key,
});

export function useLocale() {
  return useContext(I18nContext).locale;
}

export function useSetLocale() {
  return useContext(I18nContext).setLocale;
}

export function useT() {
  const { t } = useContext(I18nContext);
  return t;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      router.push(localizePath(stripLocalePrefix(pathname), next));
    },
    [pathname, router],
  );

  const t = useCallback(
    (key: UiKey, params?: Record<string, string | number>) =>
      translate(locale, key, params),
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
