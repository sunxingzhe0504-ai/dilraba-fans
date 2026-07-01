"use client";

import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Story } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLocale, useT } from "@/components/LocaleProvider";
import { DesignPageRouter } from "../DesignPageRouter";

export type StoriesPageProps = { stories: Story[] };

function StoryList({ stories }: StoriesPageProps) {
  const locale = useLocale();
  return (
    <ul className="mt-10 space-y-6">
      {stories.map((story) => {
        const title = locale === "en" && story.titleEn ? story.titleEn : story.title;
        const summary =
          locale === "en" && story.summaryEn ? story.summaryEn : story.summary;
        return (
          <li
            key={story.slug}
            className="overflow-hidden rounded-2xl border border-border bg-paper transition-shadow hover:shadow-md"
          >
            <Link href={`/stories/${story.slug}`} className="flex flex-col sm:flex-row">
              {story.cover && (
                <div className="relative aspect-[16/10] w-full shrink-0 sm:w-56">
                  <ContentImage src={story.cover} alt="" fill className="object-cover" sizes="14rem" />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-center p-5">
                <time className="text-xs text-ink-mute">{story.date}</time>
                <h2 className="mt-1 text-lg font-medium text-ink">{title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{summary}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function StoriesWarmCinema(props: StoriesPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Stories"
        title={t("pages.stories.title")}
        subtitle={t("pages.stories.subtitle")}
      />
      <StoryList {...props} />
    </Container>
  );
}

export function StoriesXianxia(props: StoriesPageProps) {
  const t = useT();
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">文 · Stories</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("pages.stories.title")}</h1>
      </div>
      <div className="container-main">
        <StoryList {...props} />
      </div>
    </div>
  );
}

export function StoriesFanSticker(props: StoriesPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        {t("pages.stories.title")}
      </h1>
      <StoryList {...props} />
    </Container>
  );
}

export function StoriesEditorial(props: StoriesPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Stories</p>
      <h1 className="display mt-2 text-5xl text-wine-deep">{t("pages.stories.title")}</h1>
      <StoryList {...props} />
    </Container>
  );
}

const variants = {
  c: StoriesWarmCinema,
  a: StoriesXianxia,
  b: StoriesFanSticker,
  d: StoriesEditorial,
};

export function StoriesPageDesign(props: StoriesPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
