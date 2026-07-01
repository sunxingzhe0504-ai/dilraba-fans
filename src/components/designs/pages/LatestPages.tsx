"use client";

import { useMemo, useState } from "react";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { Rss } from "lucide-react";
import type { NewsCategory, NewsItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FadeIn } from "@/components/FadeIn";
import { formatDate } from "@/lib/format";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeNews } from "@/lib/i18n/localize";
import { newsCategoryLabel } from "@/lib/i18n/labels";
import { DesignPageRouter } from "../DesignPageRouter";
import { NewsCategoryFilter } from "../shared/NewsCategoryFilter";

export type LatestPageProps = { news: NewsItem[] };

function useFilteredNews(news: NewsItem[], active: NewsCategory | "all") {
  return useMemo(
    () => (active === "all" ? news : news.filter((item) => item.category === active)),
    [news, active],
  );
}

function NewsList({ news, className }: { news: NewsItem[]; className?: string }) {
  const locale = useLocale();
  const t = useT();
  const items = useMemo(
    () => news.map((item) => localizeNews(item, locale)),
    [news, locale],
  );

  if (items.length === 0) {
    return (
      <p className={className ? `${className} text-center text-ink-mute` : "text-center text-ink-mute"}>
        {t("common.noContent")}
      </p>
    );
  }

  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={item.slug}
          className="edit-card flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="pill bg-blush/50 text-wine">
                {newsCategoryLabel(item.category, locale)}
              </span>
              <time className="text-xs text-ink-mute">{formatDate(item.date, locale)}</time>
            </div>
            <Link href={`/latest/${item.slug}`} className="mt-2 block text-lg font-medium text-ink hover:text-wine">
              {item.title}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
          </div>
          <Link href={`/latest/${item.slug}`} className="btn-ghost shrink-0 self-start">
            {t("common.viewDetail")}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function RssHint() {
  const t = useT();
  const locale = useLocale();
  return (
    <p className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-mute">
      <Rss size={14} />
      {t("common.subscribe")}
      <Link
        href={locale === "en" ? "/feed-en.xml" : "/feed.xml"}
        className="text-wine hover:underline"
      >
        {t("common.rssUpdates")}
      </Link>
      · {t("common.rssDisclaimer")}
    </p>
  );
}

export function LatestWarmCinema({ news }: LatestPageProps) {
  const t = useT();
  const [active, setActive] = useState<NewsCategory | "all">("all");
  const filtered = useFilteredNews(news, active);

  return (
    <Container wide className="section-padding pt-16">
      <FadeIn>
        <SectionTitle
          index="—"
          kicker="Latest"
          title={t("pages.latest.title")}
          subtitle={t("design.latest.warmSubtitle")}
        />
      </FadeIn>
      <NewsCategoryFilter variant="c" active={active} onChange={setActive} className="mt-8" />
      <NewsList news={filtered} className="mt-10 space-y-4" />
      <RssHint />
    </Container>
  );
}

export function LatestXianxia({ news }: LatestPageProps) {
  const t = useT();
  const [active, setActive] = useState<NewsCategory | "all">("all");
  const filtered = useFilteredNews(news, active);

  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-10 text-center">
        <p className="kicker justify-center">讯 · Latest</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("design.latest.xianxiaTitle")}</h1>
      </div>
      <div className="container-main mx-auto max-w-2xl">
        <NewsCategoryFilter variant="a" active={active} onChange={setActive} />
        <NewsList news={filtered} className="mt-8 space-y-0" />
      </div>
      <RssHint />
    </div>
  );
}

export function LatestFanSticker({ news }: LatestPageProps) {
  const t = useT();
  const [active, setActive] = useState<NewsCategory | "all">("all");
  const filtered = useFilteredNews(news, active);

  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-10 text-center text-4xl font-extrabold text-wine-deep">
        {t("design.latest.fanStickerTitle")}
      </h1>
      <NewsCategoryFilter variant="b" active={active} onChange={setActive} />
      <NewsList news={filtered} className="mt-8 space-y-4" />
      <RssHint />
    </Container>
  );
}

export function LatestEditorial({ news }: LatestPageProps) {
  const t = useT();
  const [active, setActive] = useState<NewsCategory | "all">("all");
  const filtered = useFilteredNews(news, active);

  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">{t("design.latest.editorialTitle")}</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">{t("pages.latest.title")}</p>
      <div className="gold-rule mt-6 h-px" />
      <NewsCategoryFilter variant="d" active={active} onChange={setActive} className="mt-8" />
      <NewsList news={filtered} className="mt-10 space-y-0 divide-y divide-border" />
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
