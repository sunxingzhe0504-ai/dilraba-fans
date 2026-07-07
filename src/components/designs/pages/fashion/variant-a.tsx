"use client";

import { useMemo } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { ExternalLink } from "lucide-react";
import type { BrandHighlight, FanEvent, GalleryItem, Magazine, NewsItem, Story } from "@/lib/types";
import { resolveNewsHref } from "@content/index";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MagazineCard } from "@/components/MagazineCard";
import { StoriesStrip } from "@/components/StoriesStrip";
import { formatDate } from "@/lib/format";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeNews, localizeBrandHighlight } from "@/lib/i18n/localize";
import { RedCarpetTimeline } from "@/components/RedCarpetTimeline";

export type FashionPageProps = {
  highlights: BrandHighlight[];
  magazines: Magazine[];
  fashionNews: NewsItem[];
  fashionStories: Story[];
  redCarpetEvents: FanEvent[];
  redCarpetGallery: GalleryItem[];
};

function FashionStories({ stories }: { stories: Story[] }) {
  const t = useT();
  if (!stories.length) return null;
  return (
    <div className="mt-16">
      <SectionTitle
        index="—"
        kicker="Stories"
        title={t("pages.fashion.storiesTitle")}
        subtitle={t("pages.fashion.storiesSubtitle")}
        className="mb-0"
      />
      <StoriesStrip items={stories} limit={stories.length} />
    </div>
  );
}

function FashionMagazines({ magazines }: { magazines: Magazine[] }) {
  const t = useT();
  if (!magazines.length) return null;
  return (
    <div className="mt-16">
      <SectionTitle
        index="—"
        kicker="Covers"
        title={t("pages.fashion.coversTitle")}
        subtitle={t("pages.fashion.coversSubtitle")}
        className="mb-8"
      />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {magazines.map((mag) => (
          <MagazineCard key={mag.slug} magazine={mag} className="w-full" />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/magazine" className="text-sm text-wine hover:underline">
          {t("common.viewAllMagazine")}
        </Link>
      </div>
    </div>
  );
}

function FashionNews({ fashionNews }: { fashionNews: NewsItem[] }) {
  const locale = useLocale();
  const t = useT();
  const news = useMemo(
    () => fashionNews.map((item) => localizeNews(item, locale)),
    [fashionNews, locale],
  );
  if (!news.length) return null;
  return (
    <div className="mt-16">
      <SectionTitle
        index="—"
        kicker="News"
        title={t("pages.fashion.newsTitle")}
        subtitle={t("pages.fashion.newsSubtitle")}
        className="mb-8"
      />
      <ul className="space-y-4">
        {news.map((item) => {
          const { href, external } = resolveNewsHref(item);
          return (
            <li key={item.slug} className="edit-card p-5">
              <time className="text-xs text-ink-mute">{formatDate(item.date, locale)}</time>
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
          {t("common.moreUpdates")}
        </Link>
      </div>
    </div>
  );
}

function FashionList({ highlights, variant }: { highlights: BrandHighlight[]; variant: "c" | "a" | "b" | "d" }) {
  const t = useT();
  const locale = useLocale();
  const items = useMemo(
    () => highlights.map((h) => localizeBrandHighlight(h, locale)),
    [highlights, locale],
  );
  return (
    <div className={variant === "d" ? "mt-12 space-y-0 divide-y divide-border" : "mt-12 space-y-8"}>
      {items.map((item) => (
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
              <ContentImage src={item.image} alt="" fill className="portrait-cover" sizes="240px" />
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
                {t("common.officialLink")}
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function FashionXianxia({ highlights, magazines, fashionNews, fashionStories, redCarpetEvents, redCarpetGallery }: FashionPageProps) {
  const t = useT();
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">华 · Fashion</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("design.fashion.xianxiaTitle")}</h1>
      </div>
      <div className="container-main">
        <FashionList highlights={highlights} variant="a" />
        <FashionMagazines magazines={magazines} />
        <FashionStories stories={fashionStories} />
        <RedCarpetTimeline events={redCarpetEvents} gallery={redCarpetGallery} />
        <FashionNews fashionNews={fashionNews} />
      </div>
    </div>
  );
}

export default FashionXianxia;
