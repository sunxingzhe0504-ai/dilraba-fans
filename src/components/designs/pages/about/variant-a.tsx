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

export function AboutXianxia() {
  const t = useT();
  const { bio, bioExtended, honors, timeline } = useLocalizedAbout();
  return (
    <>
      <section className="section-padding pt-20 text-center">
        <p className="kicker justify-center">识 · About</p>
        <h1 className="zh-display mt-4 text-6xl text-wine-deep">{t("site.name")}</h1>
        <div className="relative mx-auto mt-10 w-full max-w-xs">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border-2 border-gold/50 p-2">
            <ContentImage
              src={IMAGES.portraits.tealFloral}
              alt={t("hero.portraitAlt")}
              fill
              className="rounded-[2.5rem] object-cover object-top"
              sizes="20rem"
            />
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-lg leading-relaxed text-ink-soft">{bio}</p>
      </section>
      <StyleGallerySection />
      <div className="container-main py-16">
        <h2 className="zh-display mb-8 text-center text-3xl text-wine-deep">
          {t("common.bioExtendedA")}
        </h2>
        <div className="mx-auto max-w-2xl space-y-6 text-center leading-relaxed text-ink-soft">
          {bioExtended.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
      <div className="container-main pb-12">
        <h2 className="zh-display mb-8 text-center text-3xl text-wine-deep">
          {t("common.timelineA")}
        </h2>
        <Timeline entries={timeline} />
      </div>
      <div className="container-main pb-16">
        <h2 className="zh-display mb-6 text-center text-3xl text-wine-deep">
          {t("common.honorsA")}
        </h2>
        <ul className="mx-auto max-w-xl space-y-4">
          {honors.map((h) => (
            <li key={`${h.year}-${h.title}`} className="flex gap-4 border-b border-gold/30 py-4">
              <span className="index-num">{h.year}</span>
              <span className="text-sm text-ink">{h.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <OfficialLinksBlock variant="a" />
    </>
  );
}

export default AboutXianxia;
