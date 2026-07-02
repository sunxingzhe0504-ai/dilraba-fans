"use client";

import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Story } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { ContentImage } from "@/components/ContentImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { StoryMarkdown } from "@/components/StoryMarkdown";
import { useLocale, useT } from "@/components/LocaleProvider";
import { DesignPageRouter } from "../DesignPageRouter";

export type StoryDetailPageProps = { story: Story };

function StoryArticle({ story }: StoryDetailPageProps) {
  const locale = useLocale();
  const t = useT();
  const title = locale === "en" && story.titleEn ? story.titleEn : story.title;
  const body = locale === "en" && story.bodyEn ? story.bodyEn : story.body;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("pages.stories.title"), href: "/stories" },
          { label: title },
        ]}
      />
      <article className="mt-8 max-w-3xl">
        <time className="text-xs text-ink-mute">{formatDate(story.date, locale)}</time>
        <h1 className="mt-2 text-3xl font-medium text-ink sm:text-4xl">{title}</h1>
        {story.cover && (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <ContentImage src={story.cover} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 48rem" priority />
          </div>
        )}
        <div className="mt-8">
          <StoryMarkdown content={body} />
        </div>
        {(story.eventSlug || story.newsSlug || story.magazineSlug) && (
          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-6 text-sm">
            {story.magazineSlug && (
              <Link href={`/magazine/${story.magazineSlug}`} className="text-wine hover:underline">
                {t("pages.stories.relatedMagazine")}
              </Link>
            )}
            {story.eventSlug && (
              <Link href={`/events/${story.eventSlug}`} className="text-wine hover:underline">
                {t("pages.stories.relatedEvent")}
              </Link>
            )}
            {story.newsSlug && (
              <Link href={`/latest/${story.newsSlug}`} className="text-wine hover:underline">
                {t("pages.stories.relatedNews")}
              </Link>
            )}
          </div>
        )}
      </article>
    </>
  );
}

function StoryDetailShell({ story, variant }: StoryDetailPageProps & { variant: "c" | "a" | "b" | "d" }) {
  if (variant === "a") {
    return (
      <div className="section-padding pt-16">
        <div className="container-main">
          <StoryArticle story={story} />
        </div>
      </div>
    );
  }
  return (
    <Container wide className="section-padding pt-16">
      <StoryArticle story={story} />
    </Container>
  );
}

export function StoryDetailWarmCinema(props: StoryDetailPageProps) {
  return <StoryDetailShell {...props} variant="c" />;
}
export function StoryDetailXianxia(props: StoryDetailPageProps) {
  return <StoryDetailShell {...props} variant="a" />;
}
export function StoryDetailFanSticker(props: StoryDetailPageProps) {
  return <StoryDetailShell {...props} variant="b" />;
}
export function StoryDetailEditorial(props: StoryDetailPageProps) {
  return <StoryDetailShell {...props} variant="d" />;
}

const variants = {
  c: StoryDetailWarmCinema,
  a: StoryDetailXianxia,
  b: StoryDetailFanSticker,
  d: StoryDetailEditorial,
};

export function StoryDetailPageDesign(props: StoryDetailPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
