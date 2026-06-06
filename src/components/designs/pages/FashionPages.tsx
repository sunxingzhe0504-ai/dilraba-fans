"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { BrandHighlight, Magazine, NewsItem } from "@/lib/types";
import { resolveNewsHref } from "@content/index";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MagazineCard } from "@/components/MagazineCard";
import { formatDate } from "@/lib/format";
import { DesignPageRouter } from "../DesignPageRouter";

export type FashionPageProps = {
  highlights: BrandHighlight[];
  magazines: Magazine[];
  fashionNews: NewsItem[];
};

function FashionMagazines({ magazines }: { magazines: Magazine[] }) {
  if (!magazines.length) return null;
  return (
    <div className="mt-16">
      <SectionTitle
        index="—"
        kicker="Covers"
        title="封面大片"
        subtitle="主流时尚女刊与品牌活动造型。"
        className="mb-8"
      />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {magazines.map((mag) => (
          <MagazineCard key={mag.slug} magazine={mag} className="w-full" />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/magazine" className="text-sm text-wine hover:underline">
          查看全部杂志 →
        </Link>
      </div>
    </div>
  );
}

function FashionNews({ fashionNews }: { fashionNews: NewsItem[] }) {
  if (!fashionNews.length) return null;
  return (
    <div className="mt-16">
      <SectionTitle
        index="—"
        kicker="News"
        title="时尚动态"
        subtitle="封面发布、品牌活动与红毯高光。"
        className="mb-8"
      />
      <ul className="space-y-4">
        {fashionNews.map((item) => {
          const { href, external } = resolveNewsHref(item);
          return (
            <li key={item.slug} className="edit-card p-5">
              <time className="text-xs text-ink-mute">{formatDate(item.date)}</time>
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="mt-1 block font-medium text-ink hover:text-wine"
              >
                {item.title}
              </Link>
              <p className="mt-2 text-sm text-ink-soft">{item.summary}</p>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 text-center">
        <Link href="/latest" className="text-sm text-wine hover:underline">
          更多动态 →
        </Link>
      </div>
    </div>
  );
}

function FashionList({ highlights, variant }: { highlights: BrandHighlight[]; variant: "c" | "a" | "b" | "d" }) {
  return (
    <div className={variant === "d" ? "mt-12 space-y-0 divide-y divide-border" : "mt-12 space-y-8"}>
      {highlights.map((item) => (
        <article
          key={item.slug}
          className={
            variant === "b"
              ? "overflow-hidden rounded-3xl border border-border bg-paper shadow-md lg:flex"
              : variant === "a"
                ? "border-b border-gold/30 py-8 first:border-t first:border-gold/30"
                : "edit-card grid overflow-hidden lg:grid-cols-[240px_1fr]"
          }
        >
          {item.image && variant !== "a" && (
            <div
              className={
                variant === "b"
                  ? "relative aspect-[3/4] w-full lg:w-56"
                  : "relative aspect-[3/4] w-full overflow-hidden"
              }
            >
              <Image src={item.image} alt="" fill className="portrait-cover" sizes="240px" />
            </div>
          )}
          <div className={variant === "b" ? "p-6" : "p-8"}>
            <time className={variant === "a" ? "index-num" : "text-xs uppercase tracking-widest text-gold"}>
              {item.date}
            </time>
            <h2
              className={
                variant === "a"
                  ? "zh-display mt-2 text-2xl text-ink"
                  : variant === "d"
                    ? "display mt-2 text-2xl text-ink"
                    : "display mt-2 text-2xl text-ink"
              }
            >
              {item.title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{item.summary}</p>
            {item.externalUrl && (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-6"
              >
                <ExternalLink size={14} />
                官方链接
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function FashionWarmCinema({ highlights, magazines, fashionNews }: FashionPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Fashion"
        title="高定 × 热巴"
        subtitle="Dior 全球品牌大使，在国际时尚舞台上的东方气质。"
      />
      <FashionList highlights={highlights} variant="c" />
      <FashionMagazines magazines={magazines} />
      <FashionNews fashionNews={fashionNews} />
    </Container>
  );
}

export function FashionXianxia({ highlights, magazines, fashionNews }: FashionPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">华 · Fashion</p>
        <h1 className="zh-display text-5xl text-wine-deep">高定华章</h1>
      </div>
      <div className="container-main">
        <FashionList highlights={highlights} variant="a" />
        <FashionMagazines magazines={magazines} />
        <FashionNews fashionNews={fashionNews} />
      </div>
    </div>
  );
}

export function FashionFanSticker({ highlights, magazines, fashionNews }: FashionPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        时尚高光 ✨
      </h1>
      <FashionList highlights={highlights} variant="b" />
      <FashionMagazines magazines={magazines} />
      <FashionNews fashionNews={fashionNews} />
    </Container>
  );
}

export function FashionEditorial({ highlights, magazines, fashionNews }: FashionPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Haute</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">时尚 · Dior</p>
      <div className="gold-rule mt-6 h-px" />
      <FashionList highlights={highlights} variant="d" />
      <FashionMagazines magazines={magazines} />
      <FashionNews fashionNews={fashionNews} />
    </Container>
  );
}

const variants = {
  c: FashionWarmCinema,
  a: FashionXianxia,
  b: FashionFanSticker,
  d: FashionEditorial,
};

export function FashionPageDesign(props: FashionPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
