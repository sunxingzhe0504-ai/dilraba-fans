"use client";

import Image from "next/image";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getSiteMeta } from "@content/index";
import { IMAGES } from "@content/images";
import { FeaturedVideoStrip } from "@/components/FeaturedVideoStrip";
import { LatestStrip } from "@/components/LatestStrip";
import { StoriesStrip } from "@/components/StoriesStrip";
import { CharacterCard } from "@/components/GalleryGrid";
import { useLocale, useT } from "@/components/LocaleProvider";
import {
  localizeEvent,
  localizeMagazine,
  localizeSiteMeta,
  localizeWork,
} from "@/lib/i18n/localize";
import { workTypeLabel } from "@/lib/i18n/labels";
import type { HomeData } from "./types";

function Seal({ text }: { text: string }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-wine/90 text-[11px] leading-tight text-paper [writing-mode:vertical-rl]">
      {text}
    </span>
  );
}

function InkRule() {
  return (
    <div className="mx-auto my-16 flex max-w-xs items-center gap-3 text-gold">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-50" />
      <span className="text-lg">❀</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-50" />
    </div>
  );
}

export function DesignXianxia({ data }: { data: HomeData }) {
  const locale = useLocale();
  const t = useT();
  const { works: rawWorks, magazines: rawMagazines, events: rawEvents, latestNews, featuredStories, upcoming, characters, videos } = data;
  const reduce = useReducedMotion();

  const hero = useMemo(
    () => {
      const meta = localizeSiteMeta(getSiteMeta(), locale);
      return { tagline: meta.heroTagline, subtitle: meta.heroSubtitle };
    },
    [locale],
  );
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
      <section className="relative px-5 pb-10 pt-24 text-center sm:pt-28">
        <div className="pointer-events-none absolute inset-y-24 left-4 hidden text-2xl tracking-[0.4em] text-wine/40 [writing-mode:vertical-rl] lg:block zh-display">
          一笑千山暖
        </div>
        <div className="pointer-events-none absolute inset-y-24 right-4 hidden text-2xl tracking-[0.4em] text-wine/40 [writing-mode:vertical-rl] lg:block zh-display">
          回眸万水柔
        </div>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="kicker justify-center"
        >
          ❀ Dilraba · 迪丽热巴 ❀
        </motion.p>

        <motion.h1
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="zh-display mt-6 text-wine-deep"
          style={{ fontSize: "clamp(3.6rem, 13vw, 9rem)", lineHeight: 1 }}
        >
          迪丽热巴
        </motion.h1>

        <p className="display mx-auto mt-5 max-w-xl text-2xl text-ink sm:text-3xl">
          {hero.tagline}
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
          {hero.subtitle}
        </p>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative mx-auto mt-12 w-full max-w-sm"
        >
          <div className="relative rounded-[3rem] border-2 border-gold/50 bg-paper p-2 shadow-[0_30px_70px_-40px_rgba(80,90,80,0.5)]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem]">
              <Image
                src={IMAGES.heroAlt}
                alt={t("hero.portraitAlt")}
                fill
                priority
                sizes="(max-width:768px) 90vw, 24rem"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute -left-3 top-8 hidden lg:block">
            <Seal text="心向暖" />
          </div>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/works" className="btn-primary">
            {t("design.home.xianxia.browseWorks")}
          </Link>
          <Link href="/about" className="btn-ghost">
            {t("design.home.xianxia.knowHer")}
          </Link>
        </div>
      </section>

      <LatestStrip items={latestNews} />
      <StoriesStrip items={featuredStories} />

      {upcoming.length > 0 && (
        <div className="container-main py-4 text-center">
          <Link href="/upcoming" className="text-sm text-wine hover:text-wine-deep">
            {t("design.home.xianxia.upcoming", { n: upcoming.length })}
          </Link>
        </div>
      )}

      <InkRule />

      <section className="container-main">
        <div className="mb-12 text-center">
          <p className="kicker justify-center">卷一 · Filmography</p>
          <h2 className="zh-display mt-3 text-4xl text-wine-deep sm:text-5xl">
            {t("design.home.xianxia.worksTitle")}
          </h2>
        </div>

        <div className="space-y-14">
          {works.map((work, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.div
                key={work.slug}
                initial={reduce ? undefined : { opacity: 0, y: 30 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col items-center gap-8 sm:flex-row ${
                  flip ? "sm:flex-row-reverse" : ""
                }`}
              >
                <Link
                  href={`/works/${work.slug}`}
                  className="group relative w-44 shrink-0 sm:w-52"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-gold/40 bg-paper shadow-xl">
                    <Image
                      src={work.poster}
                      alt={work.title}
                      fill
                      sizes="13rem"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className={`flex-1 ${flip ? "sm:text-right" : ""}`}>
                  <span className="index-num">{work.year}</span>
                  <h3 className="zh-display mt-1 text-3xl text-ink sm:text-4xl">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-sm text-wine">
                    {workTypeLabel(work.type, locale)} · {t("work.role")} {work.role}
                  </p>
                  <p
                    className={`mt-4 max-w-md text-sm leading-relaxed text-ink-soft ${
                      flip ? "sm:ml-auto" : ""
                    }`}
                  >
                    {work.synopsis}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link href="/works" className="btn-ghost">
            {t("design.home.xianxia.viewAllWorks")}
          </Link>
        </div>
      </section>

      {characters.length > 0 && (
        <>
          <InkRule />
          <section className="container-main">
            <div className="mb-10 text-center">
              <p className="kicker justify-center">卷 · Characters</p>
              <h2 className="zh-display mt-3 text-4xl text-wine-deep sm:text-5xl">
                {t("design.home.xianxia.charactersTitle")}
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {characters.map((c) => (
                <CharacterCard key={c.slug} character={c} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/characters" className="btn-ghost">
                {t("design.home.xianxia.viewAllCharacters")}
              </Link>
            </div>
          </section>
        </>
      )}

      {videos.length > 0 && (
        <>
          <InkRule />
          <FeaturedVideoStrip videos={videos} variant="a" />
        </>
      )}

      <InkRule />

      <section className="container-main">
        <div className="mb-12 text-center">
          <p className="kicker justify-center">卷二 · Editorial</p>
          <h2 className="zh-display mt-3 text-4xl text-wine-deep sm:text-5xl">
            {t("design.home.xianxia.magazinesTitle")}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {magazines.slice(0, 4).map((m) => (
            <Link key={m.slug} href={`/magazine/${m.slug}`} className="group text-center">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-[6rem] rounded-b-[2rem] border border-gold/40 bg-paper shadow-lg">
                <Image
                  src={m.cover}
                  alt={m.name}
                  fill
                  sizes="(max-width:640px) 45vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="zh-display mt-3 text-lg text-ink">{m.name}</p>
              <p className="text-xs text-ink-mute">{m.issue}</p>
            </Link>
          ))}
        </div>
      </section>

      <InkRule />

      <section className="container-main">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">卷三 · Recent</p>
          <h2 className="zh-display mt-3 text-4xl text-wine-deep sm:text-5xl">
            {t("design.home.xianxia.eventsTitle")}
          </h2>
        </div>
        <ul className="mx-auto max-w-2xl">
          {events.map((ev) => (
            <li key={ev.slug}>
              <Link
                href={`/events/${ev.slug}`}
                className="flex flex-col gap-1 border-b border-gold/30 py-5 transition-colors hover:text-wine sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="index-num shrink-0 sm:w-28">{ev.date}</span>
                <div>
                  <h3 className="zh-display text-xl text-ink">{ev.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {ev.summary}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <InkRule />

      <section className="container-main pb-24 text-center">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-y-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex-1 px-6 ${
                i !== stats.length - 1 ? "border-r border-gold/30" : ""
              }`}
            >
              <p className="gradient-text display text-4xl sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs tracking-widest text-ink-mute">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="zh-display text-3xl leading-relaxed text-wine-deep sm:text-4xl">
            {t("design.home.xianxia.closing")}
          </p>
          <Link href="/about" className="btn-primary mt-10">
            {t("common.learnMoreAbout")}
          </Link>
        </div>
      </section>
    </div>
  );
}
