"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Heart, Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/works", label: "作品" },
  { href: "/magazine", label: "杂志" },
  { href: "/events", label: "活动" },
  { href: "/about", label: "关于" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-white/75 backdrop-blur-xl">
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-soft to-primary text-white shadow-sm shadow-primary/30 transition-transform group-hover:scale-105">
            <Heart size={14} fill="currentColor" aria-hidden />
          </span>
          <div className="leading-tight">
            <span className="block font-[family-name:var(--font-ma-shan)] text-xl text-primary-dark">
              迪丽热巴
            </span>
            <span className="hidden text-[10px] tracking-wider text-muted sm:block">
              粉丝资讯站 · Dear Bar
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-all",
                pathname === item.href
                  ? "bg-gradient-to-r from-primary to-primary-soft text-white shadow-sm shadow-primary/25"
                  : "text-muted hover:bg-rose-glow/60 hover:text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full bg-rose-glow/50 p-2.5 text-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border/50 bg-white/95 px-4 py-3 md:hidden"
          aria-label="移动端导航"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-2 rounded-2xl px-4 py-3 text-sm",
                pathname === item.href
                  ? "bg-gradient-to-r from-primary to-primary-soft text-white"
                  : "text-muted hover:bg-rose-glow/50",
              )}
            >
              {pathname === item.href && (
                <Sparkles size={14} aria-hidden />
              )}
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
