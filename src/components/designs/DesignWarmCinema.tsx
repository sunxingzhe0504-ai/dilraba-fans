"use client";

import { LocaleLink as Link } from "@/components/LocaleLink";
import { useMemo } from "react";
import { Heart } from "lucide-react";
import { getSiteMeta } from "@content/index";
import { FeaturedVideoStrip } from "@/components/FeaturedVideoStrip";
import { Hero } from "@/components/Hero";
import { LatestStrip } from "@/components/LatestStrip";
import { HomeFanBand } from "@/components/HomeFanBand";
import { StoriesStrip } from "@/components/StoriesStrip";
import { UpcomingPreviewStrip } from "@/components/UpcomingPreviewStrip";
import { CharacterCard } from "@/components/GalleryGrid";
import { Container } from "@/components/Container";
import { CinematicBand } from "@/components/CinematicBand";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { MagazineCard } from "@/components/MagazineCard";
import { EventCard, ViewAllLink } from "@/components/EventCard";
import { StatStrip } from "@/components/StatStrip";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { useLocale, useT } from "@/components/LocaleProvider";
import { ChaseLightDivider } from "@/components/ChaseLightDivider";
import { localizeHonor, localizeSiteMeta } from "@/lib/i18n/localize";
import { HOME_SECTION_SCROLL_MT, HOME_SECTIONS } from "@/lib/home-sections";
import { cn } from "@/lib/cn";
import type { HomeData } from "./types";

export function DesignWarmCinema({ data }: { data: HomeData }) {
  const locale = useLocale();
  const t = useT();
  const { works, magazines, events, latestNews, featuredStories, upcoming, characters, videos } = data;

  const stats = useMemo(
    () => localizeSiteMeta(getSiteMeta(), locale).stats,
    [locale],
  );
  const honors = useMemo(
    () => data.honors.map((h) => localizeHonor(h, locale)),
    [data.honors, locale],
  );

  return (
    <>
      <Hero />
      <HomeFanBand />
      <LatestStrip items={latestNews} />
      <StoriesStrip items={featuredStories} />

      <UpcomingPreviewStrip items={upcoming} />

      <ChaseLightDivider />

      <Container id={HOME_SECTIONS.works} wide className={HOME_SECTION_SCROLL_MT}>
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              index="01 —"
              kicker={t("home.works.kicker")}
              title={t("home.works.title")}
              subtitle={t("home.works.subtitle")}
              className="mb-0"
            />
            <ViewAllLink href="/works" label={t("home.works.viewAll")} />
          </div>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {works.map((work) => (
            <StaggerItem key={work.slug}>
              <WorkCard work={work} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>

      {characters.length > 0 && (
        <Container id={HOME_SECTIONS.characters} wide className={HOME_SECTION_SCROLL_MT}>
          <FadeIn>
            <SectionTitle
              index="02 —"
              kicker={t("home.characters.kicker")}
              title={t("home.characters.title")}
              subtitle={t("home.characters.subtitle")}
              className="mb-8"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {characters.map((c) => (
              <CharacterCard key={c.slug} character={c} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/characters" className="text-sm text-wine hover:underline">
              {t("home.characters.viewAll")}
            </Link>
          </div>
        </Container>
      )}

      {videos.length > 0 && (
        <div className="py-12">
          <FeaturedVideoStrip videos={videos} variant="c" />
        </div>
      )}

      <CinematicBand />

      <ChaseLightDivider compact />

      <Container id={HOME_SECTIONS.magazines} wide className={cn("soft-section", HOME_SECTION_SCROLL_MT)}>
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              index="03 —"
              kicker={t("home.magazines.kicker")}
              title={t("home.magazines.title")}
              subtitle={t("home.magazines.subtitle")}
              className="mb-0"
            />
            <ViewAllLink href="/magazine" label={t("home.magazines.viewAll")} />
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {magazines.map((magazine) => (
            <MagazineCard
              key={magazine.slug}
              magazine={magazine}
              className="w-full"
            />
          ))}
        </div>
      </Container>

      <Container id={HOME_SECTIONS.events} wide className={HOME_SECTION_SCROLL_MT}>
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              index="04 —"
              kicker={t("home.events.kicker")}
              title={t("design.home.warmCinema.eventsTitle")}
              subtitle={t("design.home.warmCinema.eventsSubtitle")}
              className="mb-0"
            />
            <ViewAllLink href="/events" label={t("home.events.viewAll")} />
          </div>
        </FadeIn>
        <div className="grid gap-5 lg:grid-cols-2">
          {events.map((event) => (
            <FadeIn key={event.slug}>
              <EventCard event={event} />
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container wide className="soft-section">
        <FadeIn>
          <SectionTitle
            index="05 —"
            kicker={t("home.honors.kicker")}
            title={t("design.home.warmCinema.honorsTitle")}
            subtitle={t("design.home.warmCinema.honorsSubtitle")}
            align="center"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <StatStrip stats={stats} />
        </FadeIn>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {honors.map((honor) => (
            <li
              key={`${honor.year}-${honor.title}`}
              className="flex items-baseline gap-4 rounded-2xl border border-border bg-paper px-6 py-5 shadow-[0_12px_30px_-24px_rgba(176,78,105,0.3)]"
            >
              <span className="index-num shrink-0">{honor.year}</span>
              <span className="text-sm text-ink">{honor.title}</span>
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <FadeIn>
          <div className="soft-section relative overflow-hidden rounded-[2.25rem] border border-blush-deep/40 px-6 py-16 text-center">
            <p className="kicker mb-6 justify-center">
              <Heart size={13} className="fill-rouge text-rouge" aria-hidden />
              With Love
            </p>
            <h2 className="zh-display text-4xl text-wine-deep sm:text-5xl">
              {t("design.home.warmCinema.ctaTitle")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink-soft">
              {t("design.home.warmCinema.ctaBody")}
            </p>
            <Link href="/about" className="btn-primary mt-10">
              {t("common.learnMoreAbout")}
            </Link>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
