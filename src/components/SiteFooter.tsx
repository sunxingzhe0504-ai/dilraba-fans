"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { getSiteMeta } from "@content/index";
import { useT } from "@/components/LocaleProvider";
import { useLocale } from "@/components/LocaleProvider";
import { localizeSiteMeta } from "@/lib/i18n/localize";

export function SiteFooter() {
  const t = useT();
  const locale = useLocale();
  const { officialLinks } = localizeSiteMeta(getSiteMeta(), locale);

  return (
    <footer className="paper-grain mt-auto border-t border-blush-deep/40 bg-gradient-to-br from-wine via-wine to-wine-deep text-paper">
      <div className="container-wide section-padding pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
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
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              <li>
                <LocaleLink href="/latest" className="hover:text-gold-light">
                  {t("nav.latestNews")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/works" className="hover:text-gold-light">
                  {t("nav.worksLib")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/videos" className="hover:text-gold-light">
                  {t("nav.videoZone")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/gallery" className="hover:text-gold-light">
                  {t("nav.galleryWall")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/characters" className="hover:text-gold-light">
                  {t("nav.charactersAtlas")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/magazine" className="hover:text-gold-light">
                  {t("nav.magazineCovers")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/events" className="hover:text-gold-light">
                  {t("nav.eventNews")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/upcoming" className="hover:text-gold-light">
                  {t("nav.upcomingWorks")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/fashion" className="hover:text-gold-light">
                  {t("nav.fashionBrand")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/charity" className="hover:text-gold-light">
                  {t("nav.charity")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/fans" className="hover:text-gold-light">
                  {t("nav.fans")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/about" className="hover:text-gold-light">
                  {t("nav.aboutHer")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/changelog" className="hover:text-gold-light">
                  {t("nav.changelog")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/stories" className="hover:text-gold-light">
                  {t("nav.stories")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/contact" className="hover:text-gold-light">
                  {t("nav.contact")}
                </LocaleLink>
              </li>
            </ul>
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
