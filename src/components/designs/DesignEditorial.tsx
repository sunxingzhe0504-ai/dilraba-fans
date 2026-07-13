"use client";

import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getSiteMeta } from "@content/index";
import { IMAGES } from "@content/images";
import { FeaturedVideoStrip } from "@/components/FeaturedVideoStrip";
import { LatestStrip } from "@/components/LatestStrip";
import { HomeFanBand } from "@/components/HomeFanBand";
import { StoriesStrip } from "@/components/StoriesStrip";
import { UpcomingPreviewStrip } from "@/components/UpcomingPreviewStrip";
import { CharacterCard } from "@/components/GalleryGrid";
import { useLocale, useT } from "@/components/LocaleProvider";
import {
  localizeEvent,
  localizeMagazine,
  localizeSiteMeta,
  localizeWork,
} from "@/lib/i18n/localize";
import { workTypeLabel } from "@/lib/i18n/labels";
import { HOME_SECTION_SCROLL_MT, HOME_SECTIONS } from "@/lib/home-sections";
import { cn } from "@/lib/cn";
import type { HomeData } from "./types";

export function DesignEditorial({ data }: { data: HomeData }) {
  const locale = useLocale();
  const t = useT();
  const { works: rawWorks, magazines: rawMagazines, events: rawEvents, latestNews, featuredStories, upcoming, characters, videos } = data;
  const reduce = useReducedMotion();

  const hero = useMemo(() => {
    const meta = localizeSiteMeta(getSiteMeta(), locale);
    return { tagline: meta.heroTagline, subtitle: meta.heroSubtitle };
  }, [locale]);
  const stats = useMemo(
    () => localizeSiteMeta(getSiteMeta(), locale).stats,
    [locale],
  );
  const works = useMemo(
    () => rawWorks.map((w) => localizeWork(w, locale)),
    [rawWorks, locale],
  );
  const magazines = useMemo(
    () => rawMagazines.map((m) => localizeMagazine(m, locale)),
    [rawMagazines, locale],
  );
  const events = useMemo(
    () => rawEvents.map((e) => localizeEvent(e, locale)),
    [rawEvents, locale],
  );

  return (
    <div className="overflow-hidden">
      <section className="container-wide pt-12">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-ink-mute">
          <span>迪丽热巴 · Fan Editorial</span>
          <span>Vol.01 — Summer 2026</span>
        </div>
        <div className="gold-rule mt-3 h-px" />

        <h1
          className="display mt-4 text-center font-semibold leading-none text-wine-deep"
          style={{ fontSize: "clamp(3.5rem, 16vw, 12rem)", letterSpacing: "-0.02em" }}
        >
          DILRABA
        </h1>
        <div className="gold-rule mt-4 h-px" />

        <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[1fr_1.25fr]">
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Cover Story
            </p>
            <p className="display mt-3 text-4xl leading-tight text-ink sm:text-5xl">
              The Light Within
            </p>
            <p className="zh-display mt-4 text-2xl text-wine-deep">
              {hero.tagline}
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/works" className="btn-primary !rounded-none">
                {t("design.home.editorial.enterFeature")}
              </Link>
              <Link href="/about" className="btn-ghost !rounded-none">
                {t("design.home.editorial.profile")}
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="display text-3xl text-wine-deep">{s.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 1.03 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative aspect-[3/4] w-full max-w-lg justify-self-center overflow-hidden lg:max-w-none lg:justify-self-stretch"
          >
            <ContentImage
              src={IMAGES.portraits.redBlack}
              alt={t("hero.portraitAlt")}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 55vw"
              className="portrait-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/45 via-transparent to-transparent" />
            <p className="display absolute bottom-6 left-6 text-5xl text-paper sm:text-6xl">
              RADIANT
            </p>
            <span className="absolute right-5 top-5 text-[11px] uppercase tracking-[0.3em] text-paper/85">
              Issue No.01
            </span>
          </motion.div>
        </div>
      </section>

      <HomeFanBand />
      <LatestStrip items={latestNews} />
      <StoriesStrip items={featuredStories} />
      <UpcomingPreviewStrip items={upcoming} />

      <section
        id={HOME_SECTIONS.works}
        className={cn("container-wide py-24", HOME_SECTION_SCROLL_MT)}
      >
        <div className="flex items-end justify-between">
          <h2 className="display text-4xl text-ink sm:text-5xl">Contents</h2>
          <span className="text-[11px] uppercase tracking-[0.3em] text-ink-mute">
            Filmography · 作品
          </span>
        </div>
        <div className="gold-rule mt-4 h-px" />

        <ul>
          {works.map((work, i) => (
            <li key={work.slug}>
              <Link
                href={`/works/${work.slug}`}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-5 border-b border-border py-6 transition-colors hover:bg-blush/20 sm:grid-cols-[4rem_8rem_1fr_auto]"
              >
                <span className="display text-2xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative hidden aspect-[3/4] w-16 overflow-hidden sm:block">
                  <ContentImage
                    src={work.poster}
                    alt={work.title}
                    fill
                    sizes="4rem"
                    className="portrait-cover"
                  />
                </div>
                <div>
                  <h3 className="zh-display text-2xl text-ink transition-colors group-hover:text-wine-deep">
                    {work.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {workTypeLabel(work.type, locale)} · {t("work.role")} {work.role}
                  </p>
                </div>
                <span className="display text-xl text-ink-mute">{work.year}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-right">
          <Link
            href="/works"
            className="text-sm uppercase tracking-[0.2em] text-wine hover:text-wine-deep"
          >
            {t("design.home.editorial.viewFullIndex")}
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-background-deep/40 py-24">
        <div className="container-main text-center">
          <p className="display mx-auto max-w-3xl text-3xl italic leading-snug text-wine-deep sm:text-4xl">
            “{t("home.quote")}”
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-ink-mute">
            {t("home.quoteCaption")}
          </p>
        </div>
      </section>

      {characters.length > 0 && (
        <section
          id={HOME_SECTIONS.characters}
          className={cn("container-wide py-24", HOME_SECTION_SCROLL_MT)}
        >
          <div className="flex items-end justify-between">
            <h2 className="display text-4xl text-ink sm:text-5xl">Characters</h2>
            <span className="text-[11px] uppercase tracking-[0.3em] text-ink-mute">
              Roles · 角色
            </span>
          </div>
          <div className="gold-rule mt-4 h-px" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {characters.map((c) => (
              <CharacterCard key={c.slug} character={c} />
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link
              href="/characters"
              className="text-sm uppercase tracking-[0.2em] text-wine hover:text-wine-deep"
            >
              {t("design.home.editorial.viewAllCharacters")}
            </Link>
          </div>
        </section>
      )}

      {videos.length > 0 && (
        <div className="pb-12">
          <FeaturedVideoStrip videos={videos} variant="d" />
        </div>
      )}

      <section
        id={HOME_SECTIONS.magazines}
        className={cn("container-wide py-24", HOME_SECTION_SCROLL_MT)}
      >
        <div className="flex items-end justify-between">
          <h2 className="display text-4xl text-ink sm:text-5xl">Editorials</h2>
          <span className="text-[11px] uppercase tracking-[0.3em] text-ink-mute">
            Covers · 杂志
          </span>
        </div>
        <div className="gold-rule mt-4 h-px" />
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {magazines.map((m, i) => (
            <Link key={m.slug} href={`/magazine/${m.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden border border-border">
                <ContentImage
                  src={m.cover}
                  alt={m.name}
                  fill
                  sizes="(max-width:640px) 45vw, 22vw"
                  className="portrait-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <p className="text-sm font-medium text-ink">{m.name}</p>
                <span className="display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs text-ink-mute">{m.issue}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        id={HOME_SECTIONS.events}
        className={cn("container-wide pb-24", HOME_SECTION_SCROLL_MT)}
      >
        <div className="flex items-end justify-between">
          <h2 className="display text-4xl text-ink sm:text-5xl">Agenda</h2>
          <span className="text-[11px] uppercase tracking-[0.3em] text-ink-mute">
            Recent · 活动
          </span>
        </div>
        <div className="gold-rule mt-4 h-px" />
        <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
          {events.map((ev) => (
            <Link
              key={ev.slug}
              href={`/events/${ev.slug}`}
              className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-6 transition-colors hover:bg-blush/10"
            >
              <span className="text-sm uppercase tracking-[0.15em] text-gold">
                {ev.date}
              </span>
              <div>
                <h3 className="text-lg font-medium text-ink">{ev.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {ev.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/about" className="btn-primary !rounded-none">
            {t("common.learnMoreAbout")}
          </Link>
        </div>
      </section>
    </div>
  );
}
