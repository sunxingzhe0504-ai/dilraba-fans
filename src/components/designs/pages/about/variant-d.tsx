"use client";

import { useMemo } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { ExternalLink, Heart } from "lucide-react";
import { getHonors, getSiteMeta, getTimeline } from "@content/index";
import { IMAGES } from "@content/images";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Timeline } from "@/components/Timeline";
import { FadeIn } from "@/components/FadeIn";
import { THEMES } from "@/lib/themes";
import { useLocale, useT } from "@/components/LocaleProvider";
import {
  localizeHonor,
  localizeSiteMeta,
  localizeTimeline,
} from "@/lib/i18n/localize";
import type { UiKey } from "@/lib/i18n/ui";

export type AboutPageProps = Record<string, never>;

function useLocalizedAbout() {
  const locale = useLocale();
  return useMemo(() => {
    const meta = localizeSiteMeta(getSiteMeta(), locale);
    return {
      bio: meta.bio,
      bioExtended: meta.bioExtended,
      officialLinks: meta.officialLinks,
      honors: getHonors().map((h) => localizeHonor(h, locale)),
      timeline: getTimeline().map((e) => localizeTimeline(e, locale)),
    };
  }, [locale]);
}

function StyleGallerySection() {
  const t = useT();
  return (
    <Container wide>
      <SectionTitle
        index="—"
        kicker="Styles"
        title={t("common.styleGalleryTitle")}
        subtitle={t("common.styleGallerySubtitle")}
        align="center"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {THEMES.map((theme) => (
          <div
            key={theme.id}
            className="rounded-2xl border border-border bg-paper px-5 py-6 text-center"
          >
            <span className="mx-auto flex w-fit overflow-hidden rounded-full border border-border-strong">
              {theme.swatch.map((c) => (
                <span key={c} className="h-6 w-3" style={{ background: c }} />
              ))}
            </span>
            <p className="mt-4 text-sm font-medium text-ink">
              {t(`theme.${theme.id}` as UiKey)}
            </p>
            <p className="pill mx-auto mt-2 bg-blush/50 text-wine">{theme.facet}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-soft">
        {t("common.styleGalleryHint")}
      </p>
    </Container>
  );
}

function OfficialLinksBlock({ variant }: { variant: "a" | "b" | "c" | "d" }) {
  const t = useT();
  const { officialLinks } = useLocalizedAbout();
  const btnClass =
    variant === "d"
      ? "border border-border-strong px-6 py-3 text-sm uppercase tracking-widest text-ink hover:border-wine"
      : variant === "b"
        ? "rounded-full bg-wine px-6 py-3 text-sm font-semibold text-paper"
        : variant === "a"
          ? "btn-ghost"
          : "inline-flex items-center gap-2 border border-border-strong px-6 py-3 text-sm text-ink hover:border-wine";

  return (
    <Container wide className="pb-24">
      <div className="py-14 text-center">
        <h2 className={variant === "d" ? "display text-3xl text-wine-deep" : "text-2xl font-medium text-wine-deep"}>
          {t("common.officialChannelsTitle")}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {officialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={btnClass}
            >
              {link.label}
              <ExternalLink size={14} className="inline ml-1" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}

export function AboutEditorial() {
  const t = useT();
  const { bio, bioExtended, honors, timeline } = useLocalizedAbout();
  return (
    <>
      <section className="container-wide section-padding pt-16">
        <div className="gold-rule h-px" />
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ink-mute">Profile</p>
        <h1 className="display text-6xl text-wine-deep sm:text-7xl">DILRABA</h1>
        <div className="gold-rule mt-6 h-px" />
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden border border-border lg:max-w-none">
            <ContentImage
              src={IMAGES.portraits.redBlack}
              alt={t("hero.portraitAlt")}
              fill
              className="portrait-cover"
              sizes="50vw"
            />
          </div>
          <div>
            <p className="display text-2xl italic text-ink">{t("nav.aboutHer")}</p>
            <p className="zh-display mt-4 text-3xl text-wine-deep">{t("site.name")}</p>
            <p className="mt-6 leading-relaxed text-ink-soft">{bio}</p>
            <div className="mt-10 space-y-5 border-t border-border pt-8">
              {bioExtended.map((p) => (
                <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <StyleGallerySection />
      <Container wide className="py-16">
        <h2 className="display text-4xl text-ink">{t("pages.about.timeline")}</h2>
        <div className="gold-rule mt-4 h-px" />
        <Timeline entries={timeline} />
      </Container>
      <Container wide className="pb-16">
        <h2 className="display text-4xl text-ink">{t("pages.about.honors")}</h2>
        <ul className="mt-8 divide-y divide-border">
          {honors.map((h) => (
            <li key={`${h.year}-${h.title}`} className="grid grid-cols-[5rem_1fr] gap-6 py-5">
              <span className="display text-2xl text-gold">{h.year}</span>
              <span className="text-ink">{h.title}</span>
            </li>
          ))}
        </ul>
      </Container>
      <OfficialLinksBlock variant="d" />
    </>
  );
}

export default AboutEditorial;
