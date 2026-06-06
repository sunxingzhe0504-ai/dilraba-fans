"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, X } from "lucide-react";
import { SearchDialog } from "@/components/SearchDialog";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/latest", label: "最新" },
  { href: "/works", label: "作品" },
  { href: "/videos", label: "视频" },
  { href: "/gallery", label: "图库" },
  { href: "/characters", label: "角色" },
  { href: "/magazine", label: "杂志" },
  { href: "/events", label: "活动" },
  { href: "/about", label: "关于" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Link href="/" className="group flex items-center gap-2 leading-none">
          <Heart
            size={18}
            className="fill-rouge text-rouge transition-transform group-hover:scale-110"
            aria-hidden
          />
          <span className="flex flex-col">
            <span className="zh-display text-2xl text-wine-deep transition-colors group-hover:text-wine">
              迪丽热巴
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-ink-mute">
              Dilraba · Fan Site
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="主导航">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
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
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="text-wine"
            aria-label="搜索"
          >
            <Search size={22} />
          </button>
          <button
            type="button"
            className="text-wine"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "关闭菜单" : "打开菜单"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} showTrigger={false} />

      {open && (
        <nav
          className="border-t border-border bg-background px-5 py-4 lg:hidden"
          aria-label="移动端导航"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block border-b border-border/60 py-4 text-base last:border-0",
                pathname === item.href ? "text-wine" : "text-ink-soft",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4 text-sm">
            <Link href="/videos" className="text-wine" onClick={() => setOpen(false)}>
              视频专区
            </Link>
            <Link href="/upcoming" className="text-wine" onClick={() => setOpen(false)}>
              待播专区
            </Link>
            <Link href="/fashion" className="text-wine" onClick={() => setOpen(false)}>
              时尚
            </Link>
            <Link href="/fans" className="text-wine" onClick={() => setOpen(false)}>
              粉丝文化
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
