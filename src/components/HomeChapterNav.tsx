"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useT } from "@/components/LocaleProvider";
import { HOME_CHAPTERS } from "@/lib/home-sections";
import { stripLocalePrefix } from "@/lib/i18n/path";
import { cn } from "@/lib/cn";

export function HomeChapterNav() {
  const pathname = usePathname();
  const barePath = stripLocalePrefix(pathname);
  const t = useT();
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const isHome = barePath === "/";

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isHome || !visible) return;

    const sections = HOME_CHAPTERS.map((chapter) =>
      document.getElementById(chapter.id),
    ).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries[0]) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, visible]);

  if (!isHome) return null;

  return (
    <nav
      aria-label={t("homeChapters.label")}
      className={cn(
        "fixed inset-x-0 top-20 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl transition-all duration-300",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0",
      )}
    >
      <div className="container-wide flex items-center gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {HOME_CHAPTERS.map((chapter) => {
          const active = activeId === chapter.id;
          return (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors",
                active
                  ? "bg-wine/12 text-wine"
                  : "text-ink/75 hover:bg-blush/40 hover:text-wine",
              )}
            >
              {t(chapter.labelKey)}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
