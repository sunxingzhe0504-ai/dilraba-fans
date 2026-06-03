import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";
import { getSiteMeta } from "@content/index";

export function SiteFooter() {
  const { officialLinks } = getSiteMeta();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border/60 bg-gradient-to-b from-background-soft to-rose-glow/30">
      <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-primary-soft/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-accent-light/30 blur-3xl" />

      <div className="container-main relative section-padding pb-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Heart className="text-primary" size={18} fill="currentColor" aria-hidden />
              <span className="font-[family-name:var(--font-ma-shan)] text-xl text-primary-dark">
                迪丽热巴粉丝站
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              温柔有力量，追光而行。本站为非官方粉丝资讯站，内容整理自公开信息，仅供同好交流与欣赏。
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-primary/70">
              <Sparkles size={12} aria-hidden />
              理性追星 · 文明交流 · 尊重官方
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">官方渠道</h3>
            <ul className="space-y-2">
              {officialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">站点导航</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/works" className="hover:text-primary">
                  作品库
                </Link>
              </li>
              <li>
                <Link href="/magazine" className="hover:text-primary">
                  杂志封面
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary">
                  活动资讯
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  关于她
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-8 text-center text-xs text-muted">
          <p>
            © {new Date().getFullYear()} 迪丽热巴粉丝资讯站 · 非官方 · 素材版权归原权利人所有
          </p>
        </div>
      </div>
    </footer>
  );
}
