"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { IMAGES } from "@content/images";
import { WORK_TYPE_LABELS } from "@/lib/types";
import { FeaturedVideoStrip } from "@/components/FeaturedVideoStrip";
import { LatestStrip } from "@/components/LatestStrip";
import { CharacterCard } from "@/components/GalleryGrid";
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
  const { hero, works, magazines, events, stats, latestNews, upcoming, characters, videos } = data;
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden">
      {/* ===== Hero · 居中书法 ===== */}
      <section className="relative px-5 pb-10 pt-24 text-center sm:pt-28">
        {/* 竖排对联 */}
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

        {/* 画卷人物图 */}
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
                alt="迪丽热巴写真"
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
            入卷赏作 →
          </Link>
          <Link href="/about" className="btn-ghost">
            ❀ 识她
          </Link>
        </div>
      </section>

      <LatestStrip items={latestNews} />

      {upcoming.length > 0 && (
        <div className="container-main py-4 text-center">
          <Link href="/upcoming" className="text-sm text-wine hover:text-wine-deep">
            ❀ {upcoming.length} 部待播 · 展开期待卷 →
          </Link>
        </div>
      )}

      <InkRule />

      {/* ===== 卷一 · 作品（画卷式交替）===== */}
      <section className="container-main">
        <div className="mb-12 text-center">
          <p className="kicker justify-center">卷一 · Filmography</p>
          <h2 className="zh-display mt-3 text-4xl text-wine-deep sm:text-5xl">
            荧幕之上
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
                    {WORK_TYPE_LABELS[work.type]} · 饰 {work.role}
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
            展开全卷作品 →
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
                角色名册
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {characters.map((c) => (
                <CharacterCard key={c.slug} character={c} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/characters" className="btn-ghost">
                展开全部角色 →
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

      {/* ===== 卷二 · 杂志 ===== */}
      <section className="container-main">
        <div className="mb-12 text-center">
          <p className="kicker justify-center">卷二 · Editorial</p>
          <h2 className="zh-display mt-3 text-4xl text-wine-deep sm:text-5xl">
            时尚镜匣
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

      {/* ===== 卷三 · 活动 ===== */}
      <section className="container-main">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">卷三 · Recent</p>
          <h2 className="zh-display mt-3 text-4xl text-wine-deep sm:text-5xl">
            近来行迹
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

      {/* ===== 荣誉数据 + 结语 ===== */}
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
            愿以山海为卷，<br className="sm:hidden" />共赴一程温柔时光
          </p>
          <Link href="/about" className="btn-primary mt-10">
            了解更多关于她 →
          </Link>
        </div>
      </section>
    </div>
  );
}
