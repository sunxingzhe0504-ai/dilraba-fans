"use client";

import { useMemo } from "react";
import { ContentImage } from "@/components/ContentImage";
import type { Magazine, NewsItem, Story } from "@/lib/types";
import { Container } from "@/components/Container";
import { ExternalLinks } from "@/components/ExternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedNewsList } from "@/components/RelatedNewsList";
import { RelatedStoriesList } from "@/components/RelatedStoriesList";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeMagazine } from "@/lib/i18n/localize";

export type MagazineDetailPageProps = {
  magazine: Magazine;
  relatedNews?: NewsItem[];
  relatedStories?: Story[];
};

function useLocalizedMagazine(magazine: Magazine) {
  const locale = useLocale();
  return useMemo(() => localizeMagazine(magazine, locale), [magazine, locale]);
}

function MagazineMeta({ magazine }: { magazine: Magazine }) {
  return (
    <>
      <p className="kicker">{magazine.year}</p>
      <p className="mt-4 text-lg text-ink-soft">{magazine.issue}</p>
      {magazine.tags && (
        <div className="mt-6 flex flex-wrap gap-2">
          {magazine.tags.map((tag) => (
            <span key={tag} className="pill bg-blush/50 text-wine">
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

function MagazineBody({
  magazine,
  relatedNews,
  relatedStories,
}: {
  magazine: Magazine;
  relatedNews?: NewsItem[];
  relatedStories?: Story[];
}) {
  const t = useT();
  return (
    <>
      {magazine.description && (
        <p className="mt-6 leading-relaxed text-ink-soft">{magazine.description}</p>
      )}
      {magazine.externalLinks && magazine.externalLinks.length > 0 && (
        <div className="mt-10">
          <h2 className="kicker">{t("common.relatedLinks")}</h2>
          <ExternalLinks links={magazine.externalLinks} className="mt-4" size="md" />
        </div>
      )}
      {relatedStories && relatedStories.length > 0 && (
        <RelatedStoriesList items={relatedStories} className="mt-10" />
      )}
      {relatedNews && relatedNews.length > 0 && (
        <RelatedNewsList items={relatedNews} className="mt-10" />
      )}
    </>
  );
}

function MagazineCover({ magazine, className }: { magazine: Magazine; className?: string }) {
  return (
    <div className={`relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden shadow-xl lg:mx-0 ${className ?? ""}`}>
      <ContentImage src={magazine.cover} alt={magazine.name} fill priority className="object-cover" sizes="360px" />
    </div>
  );
}

export function MagazineDetailXianxia({ magazine: raw, relatedNews, relatedStories }: MagazineDetailPageProps) {
  const t = useT();
  const magazine = useLocalizedMagazine(raw);
  return (
    <div className="section-padding pt-16">
      <div className="container-main text-center">
        <Breadcrumbs
          className="mb-6"
          items={[
            { label: t("nav.home"), href: "/" },
            { label: t("nav.magazine"), href: "/magazine" },
            { label: magazine.name },
          ]}
        />
        <div className="relative mx-auto mt-10 w-56">
          <MagazineCover magazine={magazine} className="rounded-[2rem] border-2 border-gold/50 p-2" />
        </div>
        <h1 className="zh-display mt-10 text-4xl text-wine-deep">{magazine.name}</h1>
        <div className="mx-auto mt-8 max-w-xl text-left">
          <MagazineMeta magazine={magazine} />
          <MagazineBody magazine={magazine} relatedNews={relatedNews} relatedStories={relatedStories} />
        </div>
      </div>
    </div>
  );
}

export default MagazineDetailXianxia;
