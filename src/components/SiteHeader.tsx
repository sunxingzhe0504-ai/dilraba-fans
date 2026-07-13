"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, X } from "lucide-react";
import { LocaleLink } from "@/components/LocaleLink";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { NavMoreMenu } from "@/components/NavMoreMenu";
import { SearchDialog } from "@/components/SearchDialog";
import { useT } from "@/components/LocaleProvider";
import { prefetchRouteDesign } from "@/lib/design-prefetch";
import { useTheme } from "@/components/ThemeProvider";
import { stripLocalePrefix } from "@/lib/i18n/path";
import {
  isMoreNavActive,
  navItemActive,
  PRIMARY_NAV,
} from "@/lib/site-nav";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const barePath = stripLocalePrefix(pathname);
  const t = useT();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => navItemActive(barePath, href);
  const moreActive = isMoreNavActive(barePath);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <LocaleLink href="/" className="group flex items-center gap-2 leading-none">
          <Heart
            size={18}
            className="fill-rouge text-rouge transition-transform group-hover:scale-110"
            aria-hidden
          />
          <span className="flex flex-col">
            <span className="zh-display text-2xl text-wine-deep transition-colors group-hover:text-wine">
              {t("site.name")}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-ink-mute">
              {t("site.tagline")}
            </span>
          </span>
        </LocaleLink>

        <nav className="hidden items-center gap-5 md:flex lg:gap-6" aria-label={t("nav.main")}>
          {PRIMARY_NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <LocaleLink
                key={item.href}
                href={item.href}
                onMouseEnter={() => prefetchRouteDesign(item.href, theme)}
                onFocus={() => prefetchRouteDesign(item.href, theme)}
                className={cn(
                  "group relative text-sm tracking-wide transition-colors",
                  active ? "text-wine" : "text-ink/80 hover:text-wine",
                )}
              >
                {t(item.labelKey)}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-[3px] rounded-full bg-rouge transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </LocaleLink>
            );
          })}
          <NavMoreMenu active={moreActive} isItemActive={isActive} />
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher />
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="text-wine"
            aria-label={t("nav.search")}
          >
            <Search size={22} />
          </button>
          <button
            type="button"
            className="text-wine"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} showTrigger={false} />

      {open && (
        <nav
          className="border-t border-border bg-background px-5 py-4 md:hidden"
          aria-label={t("nav.mobile")}
        >
          {PRIMARY_NAV.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block border-b border-border/60 py-4 text-base last:border-0",
                isActive(item.href) ? "text-wine" : "text-ink/80",
              )}
            >
              {t(item.labelKey)}
            </LocaleLink>
          ))}
          <NavMoreMenu
            variant="mobile"
            active={moreActive}
            isItemActive={isActive}
            onNavigate={() => setOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}
