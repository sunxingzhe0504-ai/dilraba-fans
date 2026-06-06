"use client";

import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/lib/types";
import { WORK_TYPE_LABELS } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { ExternalLinks } from "@/components/ExternalLinks";
import { DesignPageRouter } from "../DesignPageRouter";

export type UpcomingPageProps = { upcoming: Work[] };

function EmptyState() {
  return (
    <p className="mt-12 text-center text-ink-soft">暂无待播项目，敬请关注官方动态。</p>
  );
}

function UpcomingCards({ upcoming, layout }: { upcoming: Work[]; layout: "card" | "list" }) {
  if (upcoming.length === 0) return <EmptyState />;

  if (layout === "list") {
    return (
      <ul className="mx-auto mt-10 max-w-2xl space-y-8">
        {upcoming.map((work) => (
          <li key={work.slug} className="border-b border-gold/30 pb-8">
            <span className="index-num">{work.year}</span>
            <h2 className="zh-display mt-2 text-2xl text-ink">{work.title}</h2>
            <p className="mt-1 text-sm text-wine">饰 {work.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{work.synopsis}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={`/works/${work.slug}`} className="btn-ghost text-sm">
                详情 →
              </Link>
              {work.externalLinks && <ExternalLinks links={work.externalLinks} />}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-2">
      {upcoming.map((work) => (
        <article key={work.slug} className="edit-card overflow-hidden lg:flex">
          <div className="relative aspect-[3/4] w-full shrink-0 lg:w-56">
            <Image src={work.poster} alt={work.title} fill className="object-cover" sizes="14rem" />
            <span className="pill absolute left-3 top-3 bg-gold text-ink">即将上映</span>
          </div>
          <div className="flex flex-col p-6">
            <p className="text-xs text-wine">
              {WORK_TYPE_LABELS[work.type]} · {work.year}
            </p>
            <h2 className="zh-display mt-2 text-3xl text-ink">{work.title}</h2>
            <p className="mt-2 text-sm text-ink-soft">饰 {work.role}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{work.synopsis}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/works/${work.slug}`} className="btn-primary">
                作品详情 →
              </Link>
              {work.externalLinks && <ExternalLinks links={work.externalLinks} />}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function UpcomingWarmCinema({ upcoming }: UpcomingPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Upcoming"
        title="待播 · 期待"
        subtitle="尚未正式与观众见面的作品，信息以官方公布为准。"
      />
      <UpcomingCards upcoming={upcoming} layout="card" />
      <p className="mt-10 text-center">
        <Link href="/latest" className="text-sm text-wine hover:text-wine-deep">
          查看最新动态 →
        </Link>
      </p>
    </Container>
  );
}

export function UpcomingXianxia({ upcoming }: UpcomingPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">候 · Upcoming</p>
        <h1 className="zh-display text-5xl text-wine-deep">待启之卷</h1>
      </div>
      <UpcomingCards upcoming={upcoming} layout="list" />
    </div>
  );
}

export function UpcomingFanSticker({ upcoming }: UpcomingPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        期待清单 🎬
      </h1>
      <UpcomingCards upcoming={upcoming} layout="card" />
    </Container>
  );
}

export function UpcomingEditorial({ upcoming }: UpcomingPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Preview</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">待播专区</p>
      <div className="gold-rule mt-6 h-px" />
      <UpcomingCards upcoming={upcoming} layout="card" />
    </Container>
  );
}

const variants = {
  c: UpcomingWarmCinema,
  a: UpcomingXianxia,
  b: UpcomingFanSticker,
  d: UpcomingEditorial,
};

export function UpcomingPageDesign(props: UpcomingPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
