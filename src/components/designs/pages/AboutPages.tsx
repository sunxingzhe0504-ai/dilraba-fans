"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
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
import { DesignPageRouter } from "../DesignPageRouter";

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

export function AboutWarmCinema() {
  const t = useT();
  const { bio, bioExtended, honors, timeline } = useLocalizedAbout();
  return (
    <>
      <section className="paper-grain section-padding">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] shadow-2xl shadow-wine-deep/20">
              <Image
                src={IMAGES.portraits.tealFloral}
                alt={t("hero.portraitAlt")}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover object-top"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="kicker mb-5">
              <Heart size={13} className="fill-rouge text-rouge" aria-hidden />
              About · {t("pages.about.title")}
            </p>
            <h1 className="zh-display text-5xl text-wine-deep sm:text-6xl">{t("site.name")}</h1>
            <p className="display mt-4 text-xl text-ink">{t("common.aboutTagline")}</p>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">{bio}</p>
          </FadeIn>
        </div>
      </section>
      <StyleGallerySection />
      <Container wide className="soft-section">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <SectionTitle
            index="01 —"
            kicker="Story"
            title={t("design.about.storyTitle")}
            className="mb-0"
          />
          <div className="space-y-6">
            {bioExtended.map((p) => (
              <p key={p.slice(0, 24)} className="leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
      <Container wide>
        <SectionTitle
          index="02 —"
          kicker="Timeline"
          title={t("pages.about.timeline")}
          subtitle={t("design.about.timelineSubtitle")}
        />
        <Timeline entries={timeline} />
      </Container>
      <Container wide className="soft-section">
        <SectionTitle index="03 —" kicker="Recognition" title={t("pages.about.honors")} />
        <ul className="grid gap-4 sm:grid-cols-2">
          {honors.map((h) => (
            <li key={`${h.year}-${h.title}`} className="rounded-2xl border border-border bg-paper px-6 py-5">
              <time className="display text-2xl text-gold">{h.year}</time>
              <p className="mt-1 font-medium text-ink">{h.title}</p>
            </li>
          ))}
        </ul>
      </Container>
      <OfficialLinksBlock variant="c" />
    </>
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
            <Image
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
            <Image src={IMAGES.portraits.warmCandid} alt="" fill className="object-cover" sizes="16rem" />
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
            <Image
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

const aboutVariants = {
  c: AboutWarmCinema,
  a: AboutXianxia,
  b: AboutFanSticker,
  d: AboutEditorial,
};

export function AboutPageDesign(_props?: AboutPageProps) {
  return <DesignPageRouter variants={aboutVariants} props={{}} />;
}
