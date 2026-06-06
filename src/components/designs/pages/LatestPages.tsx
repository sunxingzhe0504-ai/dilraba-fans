"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Rss } from "lucide-react";
import type { NewsItem } from "@/lib/types";
import { NEWS_CATEGORY_LABELS } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FadeIn } from "@/components/FadeIn";
import { formatDate } from "@/lib/format";
import { DesignPageRouter } from "../DesignPageRouter";

export type LatestPageProps = { news: NewsItem[] };

function NewsList({ news, className }: { news: NewsItem[]; className?: string }) {
  return (
    <ul className={className}>
      {news.map((item) => (
        <li
          key={item.slug}
          className="edit-card flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="pill bg-blush/50 text-wine">
                {NEWS_CATEGORY_LABELS[item.category]}
              </span>
              <time className="text-xs text-ink-mute">{formatDate(item.date)}</time>
            </div>
            <Link href={`/latest/${item.slug}`} className="mt-2 block text-lg font-medium text-ink hover:text-wine">
              {item.title}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
          </div>
          <Link href={`/latest/${item.slug}`} className="btn-ghost shrink-0 self-start">
            查看详情
          </Link>
        </li>
      ))}
    </ul>
  );
}

function RssHint() {
  return (
    <p className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-mute">
      <Rss size={14} />
      订阅
      <Link href="/feed.xml" className="text-wine hover:underline">
        RSS 动态
      </Link>
      · 资讯整理自公开报道
    </p>
  );
}

export function LatestWarmCinema({ news }: LatestPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <FadeIn>
        <SectionTitle
          index="—"
          kicker="Latest"
          title="最新动态"
          subtitle="她在镜头里外的每一个闪光时刻，按时间整理。"
        />
      </FadeIn>
      <NewsList news={news} className="mt-10 space-y-4" />
      <RssHint />
    </Container>
  );
}

export function LatestXianxia({ news }: LatestPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-10 text-center">
        <p className="kicker justify-center">讯 · Latest</p>
        <h1 className="zh-display text-5xl text-wine-deep">近日风讯</h1>
      </div>
      <NewsList news={news} className="container-main mx-auto max-w-2xl space-y-0" />
      <RssHint />
    </div>
  );
}

export function LatestFanSticker({ news }: LatestPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-10 text-center text-4xl font-extrabold text-wine-deep">
        新鲜动态 ✨
      </h1>
      <NewsList news={news} className="space-y-4" />
      <RssHint />
    </Container>
  );
}

export function LatestEditorial({ news }: LatestPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Bulletin</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">最新动态</p>
      <div className="gold-rule mt-6 h-px" />
      <NewsList news={news} className="mt-10 space-y-0 divide-y divide-border" />
      <RssHint />
    </Container>
  );
}

const variants = {
  c: LatestWarmCinema,
  a: LatestXianxia,
  b: LatestFanSticker,
  d: LatestEditorial,
};

export function LatestPageDesign({ news }: LatestPageProps) {
  return <DesignPageRouter variants={variants} props={{ news }} />;
}
