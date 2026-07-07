"use client";

import { useMemo } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Character, NewsItem, Story, Work } from "@/lib/types";
import { ExternalLinks } from "@/components/ExternalLinks";
import { ShareButtons } from "@/components/ShareButtons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedNewsList } from "@/components/RelatedNewsList";
import { RelatedStoriesList } from "@/components/RelatedStoriesList";
import { Container } from "@/components/Container";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeCharacter, localizeWork } from "@/lib/i18n/localize";
import { workTypeLabel } from "@/lib/i18n/labels";
import { DesignPageRouter } from "../DesignPageRouter";

export type WorkDetailPageProps = {
  work: Work;
  character?: Character;
  relatedNews?: NewsItem[];
  relatedStories?: Story[];
};

function useLocalizedWorkDetail({ work, character, relatedNews }: WorkDetailPageProps) {
  const locale = useLocale();
  const localizedWork = useMemo(() => localizeWork(work, locale), [work, locale]);
  const localizedCharacter = useMemo(
    () => (character ? localizeCharacter(character, locale) : undefined),
    [character, locale],
  );
  return { work: localizedWork, character: localizedCharacter, relatedNews };
}

function WorkMeta({ work }: { work: Work }) {
  const locale = useLocale();
  const t = useT();
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 text-sm text-ink-mute">
        <span className="text-xs uppercase tracking-[0.18em] text-wine">
          {workTypeLabel(work.type, locale)}
        </span>
        <span className="index-num">{work.year}</span>
        {work.status === "upcoming" && (
          <span className="pill bg-gold/30 text-ink">{t("work.upcoming")}</span>
        )}
      </div>
      {work.airInfo && (
        <p className="mt-3 text-sm text-ink-soft">{work.airInfo}</p>
      )}
      {work.cast && work.cast.length > 0 && (
        <p className="mt-2 text-sm text-ink-mute">
          {t("common.starring")}{work.cast.join(locale === "en" ? ", " : "、")}
        </p>
      )}
      {work.titleEn && locale === "zh" && (
        <p className="display mt-2 text-xl text-ink-soft">{work.titleEn}</p>
      )}
      <p className="mt-4 text-lg">
        {t("common.castRole")} <span className="display text-wine">{work.role}</span>
      </p>
    </>
  );
}

function WorkBody({
  work,
  character,
  relatedNews,
  relatedStories,
}: {
  work: Work;
  character?: Character;
  relatedNews?: NewsItem[];
  relatedStories?: Story[];
}) {
  const t = useT();
  return (
    <>
      <ShareButtons
        title={work.title}
        description={work.synopsis}
        imagePath={work.poster}
        className="mb-6"
      />
      <div className="mt-8">
        <h2 className="kicker">{t("common.synopsis")}</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">{work.synopsis}</p>
      </div>
      {character && (
        <div className="mt-8">
          <h2 className="kicker">{t("pages.characters.title")}</h2>
          <Link
            href={`/characters/${character.slug}`}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-border bg-paper px-5 py-4 text-sm text-ink-soft transition-colors hover:border-wine hover:text-wine"
          >
            {t("common.viewCharacter")} <span className="font-medium text-wine">{character.name}</span>
            <span className="text-ink-mute">· {character.workTitle}</span>
          </Link>
        </div>
      )}
      {work.highlights && work.highlights.length > 0 && (
        <div className="mt-8">
          <h2 className="kicker">{t("common.highlights")}</h2>
          <ul className="mt-4 space-y-2">
            {work.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {work.externalLinks && work.externalLinks.length > 0 && (
        <div className="mt-10">
          <h2 className="kicker">{t("common.relatedLinks")}</h2>
          <ExternalLinks links={work.externalLinks} className="mt-4" size="md" />
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

export function WorkDetailWarmCinema(props: WorkDetailPageProps) {
  const t = useT();
  const { work, character, relatedNews } = useLocalizedWorkDetail(props);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        className="mb-10"
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.works"), href: "/works" },
          { label: work.title },
        ]}
      />
      <div className="grid gap-12 lg:grid-cols-[360px_1fr]">
        <div className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-[var(--radius-card)] shadow-2xl lg:mx-0">
          <ContentImage src={work.poster} alt={`${work.title} ${t("work.posterAlt")}`} fill priority className="object-cover" sizes="320px" />
        </div>
        <div>
          <WorkMeta work={work} />
          <h1 className="zh-display mt-4 text-5xl text-wine-deep sm:text-6xl">{work.title}</h1>
          <WorkBody work={work} character={character} relatedNews={relatedNews} relatedStories={props.relatedStories} />
        </div>
      </div>
    </Container>
  );
}

export function WorkDetailXianxia(props: WorkDetailPageProps) {
  const t = useT();
  const { work, character, relatedNews } = useLocalizedWorkDetail(props);
  return (
    <div className="section-padding pt-16">
      <div className="container-main">
        <Breadcrumbs
          className="mb-8"
          items={[
            { label: t("nav.home"), href: "/" },
            { label: t("nav.works"), href: "/works" },
            { label: work.title },
          ]}
        />
        <div className="mt-12 text-center">
          <div className="relative mx-auto w-56">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border-2 border-gold/50 p-2">
              <ContentImage src={work.poster} alt="" fill className="rounded-[2rem] object-cover" sizes="14rem" />
            </div>
          </div>
          <h1 className="zh-display mt-10 text-5xl text-wine-deep">{work.title}</h1>
          <WorkMeta work={work} />
          <div className="mx-auto mt-10 max-w-2xl text-left">
            <WorkBody work={work} character={character} relatedNews={relatedNews} relatedStories={props.relatedStories} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkDetailFanSticker(props: WorkDetailPageProps) {
  const t = useT();
  const { work, character, relatedNews } = useLocalizedWorkDetail(props);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        className="mb-8"
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.works"), href: "/works" },
          { label: work.title },
        ]}
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        <div className="rotate-2 rounded-2xl bg-paper p-3 shadow-xl">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
            <ContentImage src={work.poster} alt="" fill className="object-cover" sizes="280px" />
          </div>
          <p className="mt-2 text-center text-xs text-wine">Dilraba ♡</p>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-wine-deep">{work.title}</h1>
          <WorkMeta work={work} />
          <WorkBody work={work} character={character} relatedNews={relatedNews} relatedStories={props.relatedStories} />
        </div>
      </div>
    </Container>
  );
}

export function WorkDetailEditorial(props: WorkDetailPageProps) {
  const t = useT();
  const { work, character, relatedNews } = useLocalizedWorkDetail(props);
  return (
    <div className="section-padding pt-16">
      <Container wide>
        <Breadcrumbs
          items={[
            { label: t("nav.home"), href: "/" },
            { label: t("nav.works"), href: "/works" },
            { label: work.title },
          ]}
        />
        <div className="gold-rule mt-8 h-px" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative aspect-[2/3] w-full max-w-md border border-border lg:order-2 lg:max-w-none lg:justify-self-end">
            <ContentImage src={work.poster} alt="" fill className="portrait-cover" sizes="50vw" priority />
          </div>
          <div className="lg:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Feature</p>
            <h1 className="display mt-2 text-5xl text-wine-deep sm:text-6xl">{work.title}</h1>
            <WorkMeta work={work} />
            <WorkBody work={work} character={character} relatedNews={relatedNews} relatedStories={props.relatedStories} />
          </div>
        </div>
      </Container>
    </div>
  );
}

const workDetailVariants = {
  c: WorkDetailWarmCinema,
  a: WorkDetailXianxia,
  b: WorkDetailFanSticker,
  d: WorkDetailEditorial,
};

export function WorkDetailPageDesign(props: WorkDetailPageProps) {
  return <DesignPageRouter variants={workDetailVariants} props={props} />;
}
