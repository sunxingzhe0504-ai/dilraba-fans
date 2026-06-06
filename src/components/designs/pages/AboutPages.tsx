"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Heart } from "lucide-react";
import { IMAGES } from "@content/images";
import type { Honor, TimelineEntry } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Timeline } from "@/components/Timeline";
import { FadeIn } from "@/components/FadeIn";
import { THEMES } from "@/lib/themes";
import { DesignPageRouter } from "../DesignPageRouter";

export type AboutPageProps = {
  bio: string;
  bioExtended: string[];
  officialLinks: { label: string; href: string }[];
  honors: Honor[];
  timeline: TimelineEntry[];
};

export function AboutWarmCinema({
  bio,
  bioExtended,
  officialLinks,
  honors,
  timeline,
}: AboutPageProps) {
  return (
    <>
      <section className="paper-grain section-padding">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] shadow-2xl shadow-wine-deep/20">
              <Image
                src={IMAGES.portraits.tealFloral}
                alt="迪丽热巴写真"
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
              About · 关于她
            </p>
            <h1 className="zh-display text-5xl text-wine-deep sm:text-6xl">迪丽热巴</h1>
            <p className="display mt-4 text-xl text-ink">认真生活 · 用心演戏 · 温柔有力量</p>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">{bio}</p>
          </FadeIn>
        </div>
      </section>
      <StyleGallerySection />
      <Container wide className="soft-section">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <SectionTitle index="01 —" kicker="Story" title="成长故事" className="mb-0" />
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
        <SectionTitle index="02 —" kicker="Timeline" title="成长时间轴" subtitle="从出道到今日的公开里程碑。" />
        <Timeline entries={timeline} />
      </Container>
      <Container wide className="soft-section">
        <SectionTitle index="03 —" kicker="Recognition" title="代表荣誉" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {honors.map((h) => (
            <li key={`${h.year}-${h.title}`} className="rounded-2xl border border-border bg-paper px-6 py-5">
              <time className="display text-2xl text-gold">{h.year}</time>
              <p className="mt-1 font-medium text-ink">{h.title}</p>
            </li>
          ))}
        </ul>
      </Container>
      <OfficialLinksBlock links={officialLinks} variant="c" />
    </>
  );
}

function StyleGallerySection() {
  return (
    <Container wide>
      <SectionTitle
        index="—"
        kicker="Styles"
        title="百变风格，四套并存"
        subtitle="全站页面随所选风格变化——首页、最新、视频、图库、作品、杂志、活动、粉丝文化等，皆是不同版式。"
        align="center"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {THEMES.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl border border-border bg-paper px-5 py-6 text-center"
          >
            <span className="mx-auto flex w-fit overflow-hidden rounded-full border border-border-strong">
              {t.swatch.map((c) => (
                <span key={c} className="h-6 w-3" style={{ background: c }} />
              ))}
            </span>
            <p className="mt-4 text-sm font-medium text-ink">{t.name}</p>
            <p className="pill mx-auto mt-2 bg-blush/50 text-wine">{t.facet}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-soft">
        右下角「百变风格」可随时切换；你的偏好会保存在本机，浏览任意页面都会保持一致。
      </p>
    </Container>
  );
}

export function AboutXianxia({ bio, bioExtended, officialLinks, honors, timeline }: AboutPageProps) {
  return (
    <>
      <section className="section-padding pt-20 text-center">
        <p className="kicker justify-center">识 · About</p>
        <h1 className="zh-display mt-4 text-6xl text-wine-deep">迪丽热巴</h1>
        <div className="relative mx-auto mt-10 w-full max-w-xs">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border-2 border-gold/50 p-2">
            <Image
              src={IMAGES.portraits.tealFloral}
              alt="迪丽热巴"
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
        <h2 className="zh-display mb-8 text-center text-3xl text-wine-deep">生平事略</h2>
        <div className="mx-auto max-w-2xl space-y-6 text-center leading-relaxed text-ink-soft">
          {bioExtended.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
      <div className="container-main pb-12">
        <h2 className="zh-display mb-8 text-center text-3xl text-wine-deep">岁月长卷</h2>
        <Timeline entries={timeline} />
      </div>
      <div className="container-main pb-16">
        <h2 className="zh-display mb-6 text-center text-3xl text-wine-deep">荣誉</h2>
        <ul className="mx-auto max-w-xl space-y-4">
          {honors.map((h) => (
            <li key={`${h.year}-${h.title}`} className="flex gap-4 border-b border-gold/30 py-4">
              <span className="index-num">{h.year}</span>
              <span className="text-sm text-ink">{h.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <OfficialLinksBlock links={officialLinks} variant="a" />
    </>
  );
}

export function AboutFanSticker({ bio, bioExtended, officialLinks, honors, timeline }: AboutPageProps) {
  return (
    <>
      <section className="container-wide grid items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <span className="pill bg-rouge/20 text-wine">关于热巴 💗</span>
          <h1 className="mt-4 text-5xl font-extrabold text-wine-deep">认识她</h1>
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
        <h2 className="mb-6 text-2xl font-bold text-wine-deep">成长故事 ✨</h2>
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
      <OfficialLinksBlock links={officialLinks} variant="b" />
    </>
  );
}

export function AboutEditorial({ bio, bioExtended, officialLinks, honors, timeline }: AboutPageProps) {
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
              alt="迪丽热巴"
              fill
              className="portrait-cover"
              sizes="50vw"
            />
          </div>
          <div>
            <p className="display text-2xl italic text-ink">About Her</p>
            <p className="zh-display mt-4 text-3xl text-wine-deep">迪丽热巴</p>
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
        <h2 className="display text-4xl text-ink">Timeline</h2>
        <div className="gold-rule mt-4 h-px" />
        <Timeline entries={timeline} />
      </Container>
      <Container wide className="pb-16">
        <h2 className="display text-4xl text-ink">Honors</h2>
        <ul className="mt-8 divide-y divide-border">
          {honors.map((h) => (
            <li key={`${h.year}-${h.title}`} className="grid grid-cols-[5rem_1fr] gap-6 py-5">
              <span className="display text-2xl text-gold">{h.year}</span>
              <span className="text-ink">{h.title}</span>
            </li>
          ))}
        </ul>
      </Container>
      <OfficialLinksBlock links={officialLinks} variant="d" />
    </>
  );
}

function OfficialLinksBlock({
  links,
  variant,
}: {
  links: AboutPageProps["officialLinks"];
  variant: "a" | "b" | "c" | "d";
}) {
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
          关注官方渠道
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {links.map((link) => (
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

const aboutVariants = {
  c: AboutWarmCinema,
  a: AboutXianxia,
  b: AboutFanSticker,
  d: AboutEditorial,
};

export function AboutPageDesign(props: AboutPageProps) {
  return <DesignPageRouter variants={aboutVariants} props={props} />;
}
