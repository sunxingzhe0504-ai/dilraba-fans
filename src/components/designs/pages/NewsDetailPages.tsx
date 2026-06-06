"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { FanEvent, Magazine, NewsItem, Work } from "@/lib/types";
import { NEWS_CATEGORY_LABELS } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { Container } from "@/components/Container";
import { ExternalLinks } from "@/components/ExternalLinks";
import { DesignPageRouter } from "../DesignPageRouter";

export type NewsDetailRelated = {
  work?: Work;
  event?: FanEvent;
  magazine?: Magazine;
};

export type NewsDetailPageProps = {
  item: NewsItem;
  related: NewsDetailRelated;
};

function NewsMeta({ item }: { item: NewsItem }) {
  return (
    <>
      <span className="pill bg-blush/50 text-wine">
        {NEWS_CATEGORY_LABELS[item.category]}
      </span>
      <time className="mt-4 block text-sm text-ink-mute">{formatDate(item.date)}</time>
    </>
  );
}

function NewsRelated({ related, item }: NewsDetailPageProps) {
  const links: { label: string; href: string }[] = [];
  if (related.work) links.push({ label: `作品 · ${related.work.title}`, href: `/works/${related.work.slug}` });
  if (related.event) links.push({ label: `活动 · ${related.event.title}`, href: `/events/${related.event.slug}` });
  if (related.magazine) links.push({ label: `杂志 · ${related.magazine.name}`, href: `/magazine/${related.magazine.slug}` });

  if (links.length === 0 && !item.externalUrl) return null;

  return (
    <div className="mt-10">
      <h2 className="kicker">相关链接</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="btn-ghost text-sm">
            {l.label}
          </Link>
        ))}
        {item.externalUrl && (
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            <ExternalLink size={14} />
            原文 / 外链
          </a>
        )}
      </div>
      {related.work?.externalLinks && related.work.externalLinks.length > 0 && (
        <ExternalLinks links={related.work.externalLinks} className="mt-4" size="md" />
      )}
    </div>
  );
}

function NewsBody(props: NewsDetailPageProps) {
  const { item } = props;
  return (
    <>
      <NewsMeta item={item} />
      <h1 className="display mt-4 text-4xl text-wine-deep sm:text-5xl">{item.title}</h1>
      <p className="mt-8 text-lg leading-relaxed text-ink-soft">{item.summary}</p>
      {item.body && (
        <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
          {item.body.split("\n\n").map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      )}
      <NewsRelated {...props} />
    </>
  );
}

export function NewsDetailWarmCinema(props: NewsDetailPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/latest" className="mb-8 inline-flex items-center gap-2 text-sm text-ink-soft hover:text-wine">
        <ArrowLeft size={16} /> 返回动态列表
      </Link>
      <article className="mx-auto max-w-3xl">
        <NewsBody {...props} />
      </article>
    </Container>
  );
}

export function NewsDetailXianxia(props: NewsDetailPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main mx-auto max-w-2xl">
        <Link href="/latest" className="text-sm text-wine hover:text-wine-deep">
          ← 返回风讯
        </Link>
        <article className="mt-8">
          <NewsBody {...props} />
        </article>
      </div>
    </div>
  );
}

export function NewsDetailFanSticker(props: NewsDetailPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/latest" className="font-medium text-wine">
        ← 回动态墙
      </Link>
      <article className="mt-8 max-w-2xl rounded-3xl border border-border bg-paper p-8 shadow-md">
        <NewsBody {...props} />
      </article>
    </Container>
  );
}

export function NewsDetailEditorial(props: NewsDetailPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/latest" className="text-xs uppercase tracking-[0.25em] text-ink-mute hover:text-wine">
        ← Bulletin Index
      </Link>
      <div className="gold-rule mt-8 h-px" />
      <article className="mt-10 max-w-3xl">
        <NewsBody {...props} />
      </article>
    </Container>
  );
}

const newsDetailVariants = {
  c: NewsDetailWarmCinema,
  a: NewsDetailXianxia,
  b: NewsDetailFanSticker,
  d: NewsDetailEditorial,
};

export function NewsDetailPageDesign(props: NewsDetailPageProps) {
  return <DesignPageRouter variants={newsDetailVariants} props={props} />;
}
