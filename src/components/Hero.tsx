"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Heart, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getSiteMeta } from "@content/index";
import { IMAGES } from "@content/images";

export function Hero() {
  const { heroTagline, heroSubtitle } = getSiteMeta();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="迪丽热巴"
          fill
          priority
          className="object-cover object-top sm:object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary-soft/30 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-accent-light/40 blur-3xl" />
      </div>

      <div className="container-main relative z-10 grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
        {prefersReducedMotion ? (
          <HeroContent tagline={heroTagline} subtitle={heroSubtitle} />
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HeroContent tagline={heroTagline} subtitle={heroSubtitle} />
          </motion.div>
        )}

        <div className="hidden lg:flex lg:justify-end">
          <div className="fan-card relative max-w-sm rotate-2 p-6">
            <Sparkles className="absolute -right-2 -top-2 text-accent" size={22} aria-hidden />
            <Heart className="mb-3 text-primary" size={20} fill="currentColor" aria-hidden />
            <p className="font-serif text-lg leading-relaxed text-foreground/90">
              「认真生活，用心演戏，温柔对待世界。」
            </p>
            <p className="mt-3 text-sm text-muted">—— Dear Bar 共勉</p>
          </div>
        </div>
      </div>

      <Link
        href="#featured-works"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-sm text-primary-dark/70 transition-colors hover:text-primary"
        aria-label="向下滚动浏览精选内容"
      >
        <span>一起追光</span>
        <ChevronDown className="animate-bounce" size={20} aria-hidden />
      </Link>
    </section>
  );
}

function HeroContent({
  tagline,
  subtitle,
}: {
  tagline: string;
  subtitle: string;
}) {
  return (
    <div className="text-left">
      <p className="mb-3 flex items-center gap-2 text-sm tracking-widest text-primary">
        <span className="sparkle-dot" />
        <span className="uppercase">Dilraba · Dear Bar</span>
      </p>
      <h1
        className="font-[family-name:var(--font-ma-shan)] leading-tight text-primary-dark"
        style={{ fontSize: "clamp(3rem, 10vw, 5.5rem)" }}
      >
        迪丽热巴
      </h1>
      <p
        className="mt-4 font-serif font-medium text-primary"
        style={{ fontSize: "clamp(1.25rem, 3.5vw, 2rem)" }}
      >
        {tagline}
      </p>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/80 sm:text-lg">
        {subtitle}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/works"
          className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-white shadow-md shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-lg"
        >
          看她的作品
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-primary/30 bg-white/70 px-7 py-3 text-sm font-medium text-primary backdrop-blur-sm transition-all hover:bg-white"
        >
          认识她
        </Link>
      </div>
    </div>
  );
}
