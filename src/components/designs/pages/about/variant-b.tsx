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

export function AboutFanSticker() {
  const t = useT();
  const { bio, bioExtended, honors, timeline } = useLocalizedAbout();
  return (
    <>
      <section className="container-wide grid items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <span className="pill bg-rouge/20 text-wine">{t("common.aboutFanSticker")}</span>
          <h1 className="mt-4 text-5xl font-extrabold text-wine-deep">{t("common.knowHer")}</h1>
          <p className="mt-6 leading-relaxed text-ink-soft">{bio}</p>
        </div>
        <div className="relative mx-auto h-80 w-64 rotate-2 rounded-2xl bg-paper p-3 shadow-xl">
          <div className="relative h-full overflow-hidden rounded-xl">
            <ContentImage src={IMAGES.portraits.warmCandid} alt="" fill className="object-cover" sizes="16rem" />
          </div>
        </div>
      </section>
      <StyleGallerySection />
      <Container wide className="py-12">
        <h2 className="mb-6 text-2xl font-bold text-wine-deep">{t("common.growthStoryFan")}</h2>
        <div className="space-y-4 rounded-3xl border-2 border-dashed border-wine/25 bg-blush/20 p-8">
          {bioExtended.map((p) => (
            <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </Container>
      <Container wide className="pb-12">
        <Timeline entries={timeline} />
      </Container>
      <Container wide className="pb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {honors.slice(0, 8).map((h) => (
            <div key={`${h.year}-${h.title}`} className="rounded-2xl bg-paper p-4 shadow-md">
              <p className="font-bold text-wine">{h.year}</p>
              <p className="text-sm text-ink">{h.title}</p>
            </div>
          ))}
        </div>
      </Container>
      <OfficialLinksBlock variant="b" />
    </>
  );
}

export default AboutFanSticker;
