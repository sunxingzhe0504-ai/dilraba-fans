"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, X } from "lucide-react";
import { LocaleLink } from "@/components/LocaleLink";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { SearchDialog } from "@/components/SearchDialog";
import { useT } from "@/components/LocaleProvider";
import { stripLocalePrefix } from "@/lib/i18n/path";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const barePath = stripLocalePrefix(pathname);
  const t = useT();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/latest", label: t("nav.latest") },
    { href: "/stories", label: t("nav.stories") },
    { href: "/works", label: t("nav.works") },
    { href: "/videos", label: t("nav.videos") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/characters", label: t("nav.characters") },
    { href: "/magazine", label: t("nav.magazine") },
    { href: "/events", label: t("nav.events") },
    { href: "/about", label: t("nav.about") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? barePath === "/" : barePath === href || barePath.startsWith(`${href}/`);

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

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label={t("nav.main")}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <LocaleLink
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-sm tracking-wide transition-colors",
                  active ? "text-wine" : "text-ink-soft hover:text-wine",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-[3px] rounded-full bg-rouge transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </LocaleLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher />
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
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
          className="border-t border-border bg-background px-5 py-4 lg:hidden"
          aria-label={t("nav.mobile")}
        >
          {navItems.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block border-b border-border/60 py-4 text-base last:border-0",
                isActive(item.href) ? "text-wine" : "text-ink-soft",
              )}
            >
              {item.label}
            </LocaleLink>
          ))}
          <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4 text-sm">
            <LocaleLink href="/videos" className="text-wine" onClick={() => setOpen(false)}>
              {t("nav.videoZone")}
            </LocaleLink>
            <LocaleLink href="/upcoming" className="text-wine" onClick={() => setOpen(false)}>
              {t("nav.upcoming")}
            </LocaleLink>
            <LocaleLink href="/fashion" className="text-wine" onClick={() => setOpen(false)}>
              {t("nav.fashion")}
            </LocaleLink>
            <LocaleLink href="/fans" className="text-wine" onClick={() => setOpen(false)}>
              {t("nav.fans")}
            </LocaleLink>
          </div>
        </nav>
      )}
    </header>
  );
}
