"use client";

import { useMemo } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Character, NewsItem, VideoItem, Work } from "@/lib/types";
import { RelatedNewsList } from "@/components/RelatedNewsList";
import { Container } from "@/components/Container";
import { ExternalLinks } from "@/components/ExternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeCharacter, localizeVideo, localizeWork } from "@/lib/i18n/localize";

export type CharacterDetailPageProps = {
  character: Character;
  work?: Work;
  videos: VideoItem[];
  relatedNews?: NewsItem[];
};

function useLocalizedCharacterDetail({ character, work, videos, relatedNews }: CharacterDetailPageProps) {
  const locale = useLocale();
  const localizedCharacter = useMemo(
    () => localizeCharacter(character, locale),
    [character, locale],
  );
  const localizedWork = useMemo(
    () => (work ? localizeWork(work, locale) : undefined),
    [work, locale],
  );
  const localizedVideos = useMemo(
    () => videos.map((v) => localizeVideo(v, locale)),
    [videos, locale],
  );
  return { character: localizedCharacter, work: localizedWork, videos: localizedVideos, relatedNews };
}

function CharacterHero({ character }: { character: Character }) {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-[var(--radius-card)] shadow-xl lg:mx-0">
      <ContentImage
        src={character.image}
        alt={character.name}
        fill
        priority
        className="object-cover"
        sizes="320px"
      />
    </div>
  );
}

function CharacterBody({
  character,
  work,
  videos,
  relatedNews,
}: {
  character: Character;
  work?: Work;
  videos: VideoItem[];
  relatedNews?: NewsItem[];
}) {
  const t = useT();
  return (
    <>
      <p className="mt-4 text-sm text-ink-mute">
        {character.workTitle} · {character.year}
      </p>
      {character.quote && (
        <blockquote className="mt-6 border-l-2 border-gold pl-4 text-lg italic text-ink-soft">
          「{character.quote}」
        </blockquote>
      )}
      <div className="mt-8">
        <h2 className="kicker">{t("common.characterIntro")}</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">{character.description}</p>
      </div>
      {work && (
        <div className="mt-8">
          <h2 className="kicker">{t("common.relatedWork")}</h2>
          <Link
            href={`/works/${work.slug}`}
            className="mt-4 inline-flex flex-col gap-1 rounded-2xl border border-border bg-paper px-5 py-4 transition-colors hover:border-wine"
          >
            <span className="font-medium text-wine">{work.title}</span>
            <span className="text-sm text-ink-mute">
              {t("work.role")} {work.role}
            </span>
          </Link>
        </div>
      )}
      {videos.length > 0 && (
        <div className="mt-10">
          <h2 className="kicker">{t("common.relatedVideos")}</h2>
          <ul className="mt-4 space-y-3">
            {videos.map((v) => (
              <li key={v.slug}>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-wine hover:underline"
                >
                  {v.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {relatedNews && relatedNews.length > 0 && (
        <RelatedNewsList items={relatedNews} className="mt-10" />
      )}
      {work?.externalLinks && work.externalLinks.length > 0 && (
        <div className="mt-10">
          <h2 className="kicker">{t("common.watchInfo")}</h2>
          <ExternalLinks links={work.externalLinks} className="mt-4" size="md" />
        </div>
      )}
    </>
  );
}

export function CharacterDetailWarmCinema(props: CharacterDetailPageProps) {
  const t = useT();
  const { character, work, videos, relatedNews } = useLocalizedCharacterDetail(props);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        className="mb-8"
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.characters"), href: "/characters" },
          { label: character.name },
        ]}
      />
      <div className="grid gap-12 lg:grid-cols-[360px_1fr]">
        <CharacterHero character={character} />
        <div>
          <h1 className="zh-display text-5xl text-wine-deep">{character.name}</h1>
          <CharacterBody character={character} work={work} videos={videos} relatedNews={relatedNews} />
        </div>
      </div>
    </Container>
  );
}

export default CharacterDetailWarmCinema;
