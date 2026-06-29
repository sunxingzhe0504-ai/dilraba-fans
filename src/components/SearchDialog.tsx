"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchSite, type SearchResult } from "@content/index";
import { useLocale, useT } from "@/components/LocaleProvider";

type Props = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showTrigger?: boolean;
};

function useModKey() {
  const [modKey] = useState(() =>
    typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform)
      ? "⌘"
      : "Ctrl",
  );
  return modKey;
}

export function SearchDialog({
  open: controlledOpen,
  onOpenChange,
  showTrigger = true,
}: Props) {
  const t = useT();
  const locale = useLocale();
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;
  const [query, setQuery] = useState("");
  const modKey = useModKey();

  const results = useMemo(() => searchSite(query, 12, locale), [query, locale]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      {showTrigger && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-ink-mute transition-colors hover:border-wine hover:text-wine lg:inline-flex"
          aria-label={t("nav.search")}
        >
          <Search size={14} />
          {t("nav.search")}
          <kbd className="rounded bg-background-deep px-1.5 py-0.5 text-[10px]">{modKey}K</kbd>
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/30 p-4 pt-[12vh] backdrop-blur-sm"
          onClick={close}
          role="presentation"
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-paper shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={t("search.dialog")}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-border px-4">
              <Search size={18} className="text-ink-mute" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("search.placeholder")}
                className="flex-1 bg-transparent py-4 text-sm outline-none"
              />
              <button type="button" onClick={close} aria-label={t("search.close")}>
                <X size={18} className="text-ink-mute" />
              </button>
            </div>
            <ul className="max-h-[50vh] overflow-auto p-2">
              {results.length === 0 ? (
                <li className="px-3 py-8 text-center text-sm text-ink-mute">
                  {query ? t("search.noResults") : t("search.empty")}
                </li>
              ) : (
                results.map((r: SearchResult) => (
                  <li key={`${r.href}-${r.title}`}>
                    <Link
                      href={r.href}
                      onClick={close}
                      className="block rounded-xl px-3 py-3 hover:bg-blush/30"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-wine">
                        {r.type}
                      </span>
                      <p className="font-medium text-ink">{r.title}</p>
                      {r.excerpt && (
                        <p className="mt-0.5 truncate text-xs text-ink-mute">{r.excerpt}</p>
                      )}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
