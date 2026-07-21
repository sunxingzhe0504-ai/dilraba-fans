"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { getSiteMeta } from "@content/index";
import { useT } from "@/components/LocaleProvider";
import { useLocale } from "@/components/LocaleProvider";
import { localizeSiteMeta } from "@/lib/i18n/localize";
import { MORE_NAV_GROUPS, PRIMARY_NAV } from "@/lib/site-nav";

export function SiteFooter() {
  const t = useT();
  const locale = useLocale();
  const { officialLinks } = localizeSiteMeta(getSiteMeta(), locale);

  const primaryLinks = PRIMARY_NAV.filter((item) => item.href !== "/");

  return (
    <footer className="paper-grain mt-auto border-t border-blush-deep/40 bg-gradient-to-br from-wine via-wine to-wine-deep text-paper">
      <div className="container-wide section-padding pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <p className="zh-display text-3xl text-gold-light">{t("site.name")}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-paper/50">
              {t("site.tagline")}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
              {t("site.disclaimer")}
            </p>
            <p className="mt-4 text-xs tracking-wide text-gold-light/80">
              {t("site.motto")}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-paper/55">
              {t("site.themeHint")}
            </p>
            <p className="mt-3 text-xs text-paper/55">
              <a
                href={locale === "en" ? "/feed-en.xml" : "/feed.xml"}
                className="hover:text-gold-light"
              >
                {t("site.rss")}
              </a>
              {" · "}
              <LocaleLink href="/videos" className="hover:text-gold-light">
                {t("site.videos")}
              </LocaleLink>
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold-light">
              {t("site.officialChannels")}
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
              {t("site.siteNav")}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-paper/70 sm:grid-cols-1">
              {primaryLinks.map((item) => (
                <li key={item.href}>
                  <LocaleLink href={item.href} className="hover:text-gold-light">
                    {t(item.labelKey)}
                  </LocaleLink>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4">
              {MORE_NAV_GROUPS.map((group) => (
                <div key={group.titleKey}>
                  <p className="text-[11px] font-medium tracking-wide text-gold-light/75">
                    {t(group.titleKey)}
                  </p>
                  <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-paper/70 sm:grid-cols-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <LocaleLink href={item.href} className="hover:text-gold-light">
                          {t(item.labelKey)}
                        </LocaleLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-paper/15 pt-8 text-xs text-paper/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t("site.copyright")}
          </p>
          <p className="tracking-wide">{t("site.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
