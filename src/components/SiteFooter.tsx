import Link from "next/link";
import { getSiteMeta } from "@content/index";

export function SiteFooter() {
  const { officialLinks } = getSiteMeta();

  return (
    <footer className="paper-grain mt-auto border-t border-blush-deep/40 bg-gradient-to-br from-wine via-wine to-wine-deep text-paper">
      <div className="container-wide section-padding pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="zh-display text-3xl text-gold-light">迪丽热巴</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-paper/50">
              Fan Site · Dilraba
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
              追光而遇，沐光而行。本站为非官方粉丝资讯站，内容整理自公开信息，仅供同好交流与欣赏。素材版权归原权利人所有，如有侵权请联系下架。
            </p>
            <p className="mt-4 text-xs tracking-wide text-gold-light/80">
              理性追星 · 文明交流 · 尊重官方
            </p>
            <p className="mt-3 text-xs leading-relaxed text-paper/55">
              本站四套百变风格贯穿全站页面，右下角可随时切换，偏好保存在本机。
            </p>
            <p className="mt-3 text-xs text-paper/55">
              <a href="/feed.xml" className="hover:text-gold-light">
                RSS 订阅
              </a>
              {" · "}
              <Link href="/videos" className="hover:text-gold-light">
                视频专区
              </Link>
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold-light">
              官方渠道
            </h3>
            <ul className="mt-5 space-y-3">
              {officialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold-light">
              站点导航
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              <li>
                <Link href="/latest" className="hover:text-gold-light">
                  最新动态
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-gold-light">
                  作品库
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-gold-light">
                  视频专区
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-light">
                  图库
                </Link>
              </li>
              <li>
                <Link href="/characters" className="hover:text-gold-light">
                  角色图鉴
                </Link>
              </li>
              <li>
                <Link href="/magazine" className="hover:text-gold-light">
                  杂志封面
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gold-light">
                  活动资讯
                </Link>
              </li>
              <li>
                <Link href="/upcoming" className="hover:text-gold-light">
                  待播待映
                </Link>
              </li>
              <li>
                <Link href="/fashion" className="hover:text-gold-light">
                  时尚代言
                </Link>
              </li>
              <li>
                <Link href="/charity" className="hover:text-gold-light">
                  公益足迹
                </Link>
              </li>
              <li>
                <Link href="/fans" className="hover:text-gold-light">
                  粉丝文化
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-light">
                  关于她
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-gold-light">
                  更新日志
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-paper/15 pt-8 text-xs text-paper/50 sm:flex-row">
          <p>© {new Date().getFullYear()} 迪丽热巴粉丝资讯站 · 非官方</p>
          <p className="tracking-wide">Made with love for Dear Bar 💗</p>
        </div>
      </div>
    </footer>
  );
}
