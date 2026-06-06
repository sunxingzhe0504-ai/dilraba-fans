"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { IMAGES } from "@content/images";
import { WORK_TYPE_LABELS } from "@/lib/types";
import { FeaturedVideoStrip } from "@/components/FeaturedVideoStrip";
import { LatestStrip } from "@/components/LatestStrip";
import { CharacterCard } from "@/components/GalleryGrid";
import type { HomeData } from "./types";

const TICKER = [
  "永远和热巴在一起",
  "DEAR BAR",
  "追光而行",
  "热巴今天也很美",
  "DILRABA",
  "一起发光吧",
];

const TILTS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];

export function DesignFanSticker({ data }: { data: HomeData }) {
  const { hero, works, magazines, events, stats, latestNews, upcoming, characters, videos } = data;
  const reduce = useReducedMotion();
  const photos = [
    IMAGES.portraits.redPearl,
    IMAGES.portraits.whiteBeauty,
    IMAGES.portraits.warmCandid,
  ];

  return (
    <div className="overflow-hidden">
      {/* ===== 跑马灯 ===== */}
      <div className="overflow-hidden border-y-2 border-dashed border-wine/30 bg-blush/40 py-2.5">
        <motion.div
          className="flex shrink-0 gap-8 whitespace-nowrap pr-8 text-sm font-semibold tracking-wide text-wine"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-8">
              {t}
              <Heart size={13} className="fill-rouge text-rouge" />
            </span>
          ))}
        </motion.div>
      </div>

      <LatestStrip items={latestNews} />

      {upcoming.length > 0 && (
        <div className="container-wide py-4 text-center">
          <Link
            href="/upcoming"
            className="inline-flex items-center gap-1 rounded-full bg-rouge/15 px-5 py-2 text-sm font-semibold text-wine-deep hover:bg-rouge/25"
          >
            ✨ {upcoming.length} 部待播 · 期待清单 →
          </Link>
        </div>
      )}

      {/* ===== Hero ===== */}
      <section className="container-wide grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="pill bg-rouge/20 text-wine-deep">
            <Sparkles size={12} className="mr-1" /> 官方粉丝应援站
          </span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] text-wine-deep sm:text-7xl">
            永远和
            <span className="gradient-text">热巴</span>
            <br />
            一起发光 ✨
          </h1>
          <p className="display mt-5 text-2xl text-ink">{hero.tagline}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/works" className="btn-primary">
              <Heart size={15} className="fill-paper" /> 加入应援
            </Link>
            <Link href="/events" className="btn-ghost">
              看新动态 →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {["甜妹", "古装神颜", "时尚大花", "演技派", "公益担当"].map((t) => (
              <span
                key={t}
                className="pill border border-wine/20 bg-paper text-wine-deep shadow-sm"
              >
                # {t}
              </span>
            ))}
          </div>
        </div>

        {/* 拍立得堆叠 */}
        <div className="relative mx-auto h-[26rem] w-full max-w-md">
          {photos.map((src, i) => {
            const styles = [
              "left-2 top-6 -rotate-6 z-10",
              "right-2 top-0 rotate-6 z-20",
              "left-1/2 bottom-0 -translate-x-1/2 rotate-2 z-30",
            ];
            return (
              <motion.div
                key={src}
                initial={reduce ? undefined : { opacity: 0, y: 30, rotate: 0 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`absolute w-44 rounded-2xl bg-paper p-2.5 pb-9 shadow-xl sm:w-52 ${styles[i]}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt="迪丽热巴写真"
                    fill
                    priority={i === 2}
                    sizes="13rem"
                    className="object-cover object-top"
                  />
                </div>
                <p className="absolute bottom-2 left-0 w-full text-center text-xs font-medium text-wine">
                  Dilraba ♡
                </p>
              </motion.div>
            );
          })}
          <Star
            size={28}
            className="absolute -top-3 left-1/2 z-40 fill-gold text-gold"
          />
        </div>
      </section>

      {/* ===== 作品 · 倾斜拍立得墙 ===== */}
      <section className="container-wide py-12">
        <div className="mb-10 flex items-center justify-center gap-2 text-center">
          <Heart size={18} className="fill-rouge text-rouge" />
          <h2 className="text-3xl font-extrabold text-wine-deep sm:text-4xl">
            她的高光作品
          </h2>
          <Heart size={18} className="fill-rouge text-rouge" />
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
          {works.map((work, i) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              className={`group rounded-2xl bg-paper p-2.5 pb-4 shadow-lg transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${
                TILTS[i % TILTS.length]
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={work.poster}
                  alt={work.title}
                  fill
                  sizes="(max-width:640px) 45vw, 20vw"
                  className="object-cover"
                />
                <span className="pill absolute left-2 top-2 bg-wine/85 text-paper">
                  {WORK_TYPE_LABELS[work.type]}
                </span>
              </div>
              <p className="mt-2.5 text-center text-base font-bold text-ink">
                {work.title}
              </p>
              <p className="text-center text-xs text-wine">饰 {work.role}</p>
            </Link>
          ))}
        </div>
      </section>

      {characters.length > 0 && (
        <section className="container-wide py-12">
          <div className="mb-8 flex items-center justify-center gap-2">
            <Sparkles size={18} className="text-gold" />
            <h2 className="text-3xl font-extrabold text-wine-deep">角色图鉴</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {characters.map((c) => (
              <CharacterCard key={c.slug} character={c} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/characters" className="text-sm font-semibold text-wine hover:underline">
              查看全部角色 →
            </Link>
          </div>
        </section>
      )}

      {videos.length > 0 && (
        <div className="py-6">
          <FeaturedVideoStrip videos={videos} variant="b" />
        </div>
      )}

      {/* ===== 杂志 · 贴纸卡 ===== */}
      <section className="container-wide py-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-wine-deep sm:text-4xl">
            美图杂志墙 📸
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {magazines.map((m, i) => (
            <Link
              key={m.slug}
              href={`/magazine/${m.slug}`}
              className={`group overflow-hidden rounded-2xl border-2 border-paper bg-paper shadow-md transition-transform hover:-translate-y-1 ${
                TILTS[(i + 2) % TILTS.length]
              } hover:rotate-0`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={m.cover}
                  alt={m.name}
                  fill
                  sizes="(max-width:640px) 45vw, 16vw"
                  className="object-cover"
                />
              </div>
              <p className="truncate px-2 py-2 text-center text-xs font-medium text-ink">
                {m.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== 打 call 墙 ===== */}
      <section className="container-main py-12">
        <div className="rounded-[2.5rem] border-2 border-dashed border-wine/30 bg-blush/30 px-6 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-wine-deep">为热巴打 call 💗</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="min-w-[8rem] rounded-3xl bg-paper px-6 py-5 shadow-md"
              >
                <p className="gradient-text text-4xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-xs text-ink-mute">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 活动 · 气泡卡 ===== */}
      <section className="container-main py-12">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-wine-deep">
          最近在忙这些
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {events.map((ev) => (
            <Link
              key={ev.slug}
              href={`/events/${ev.slug}`}
              className="rounded-3xl border border-border bg-paper p-6 shadow-md transition-transform hover:-translate-y-0.5"
            >
              <span className="pill bg-rouge/15 text-wine-deep">{ev.date}</span>
              <h3 className="mt-3 text-lg font-bold text-ink">{ev.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {ev.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container-main pb-24 pt-6 text-center">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-wine via-wine to-wine-deep px-6 py-16 text-paper shadow-xl">
          <Heart size={30} className="mx-auto fill-paper" />
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            一起成为她的光 ✨
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-paper/85">
            理性追星、温柔应援，把喜欢藏进每一个认真生活的日子里。
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-8 py-3.5 text-sm font-semibold text-wine transition-transform hover:-translate-y-0.5"
          >
            了解更多关于她 →
          </Link>
        </div>
      </section>
    </div>
  );
}
