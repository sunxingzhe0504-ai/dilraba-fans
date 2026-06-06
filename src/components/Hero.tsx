"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Heart, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getSiteMeta } from "@content/index";
import { IMAGES } from "@content/images";

export function Hero() {
  const { heroTagline, heroSubtitle } = getSiteMeta();
  const reduce = useReducedMotion();

  const rise = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section className="relative overflow-hidden bg-background paper-grain">
      {/* 柔和光晕背景 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[62vh] w-[62vh] translate-x-1/3 rounded-full bg-blush/70 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[46vh] w-[46vh] -translate-x-1/4 rounded-full bg-rouge/20 blur-[130px]" />
        <div className="absolute left-1/3 top-1/4 h-[30vh] w-[30vh] rounded-full bg-gold-glow/60 blur-[120px]" />
      </div>

      <div className="container-wide relative grid min-h-[92vh] items-center gap-10 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* 文字 */}
        <motion.div
          {...rise}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="order-2 lg:order-1"
        >
          <p className="kicker mb-6">
            <Heart size={13} className="fill-rouge text-rouge" aria-hidden />
            Dilraba Dilmurat · 迪丽热巴
          </p>

          <h1 className="zh-display text-wine-deep leading-[0.95]">
            <span
              className="block"
              style={{ fontSize: "clamp(3.4rem, 11vw, 8rem)" }}
            >
              迪丽热巴
            </span>
          </h1>

          <p
            className="display mt-6 max-w-xl text-ink"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
          >
            {heroTagline}
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
            {heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/works" className="btn-primary group">
              浏览作品
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link href="/about" className="btn-ghost">
              <Heart size={15} className="text-rouge" aria-hidden />
              认识她
            </Link>
          </div>
        </motion.div>

        {/* 人物大图 */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 1.04 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2.25rem] shadow-2xl shadow-wine-deep/20 lg:max-w-none">
            <Image
              src={IMAGES.hero}
              alt="迪丽热巴写真"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 rounded-[2.25rem] ring-1 ring-inset ring-paper/30" />
          </div>

          {/* 装饰边框 */}
          <div className="absolute -right-3 -top-3 -z-10 hidden h-full w-full rounded-[2.25rem] border-2 border-blush-deep/60 lg:block" />

          {/* 漂浮爱心装饰 */}
          <Sparkles
            size={26}
            className="absolute -left-2 top-6 text-gold drop-shadow lg:-left-4"
            aria-hidden
          />

          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-paper/95 px-5 py-3 shadow-lg backdrop-blur lg:left-auto lg:right-8">
            <Heart size={18} className="fill-rouge text-rouge" aria-hidden />
            <div>
              <p className="index-num">EST. 2013</p>
              <p className="display text-lg text-wine">演员 · 时尚 · 公益</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Link
        href="#featured-works"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink-mute transition-colors hover:text-wine"
        aria-label="向下滚动浏览精选内容"
      >
        Scroll
        <ArrowDown className="animate-bounce" size={16} aria-hidden />
      </Link>
    </section>
  );
}
