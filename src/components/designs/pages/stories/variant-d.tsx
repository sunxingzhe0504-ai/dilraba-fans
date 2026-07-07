"use client";

import { useMemo, useState } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Story } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { formatDate } from "@/lib/format";
import { useLocale, useT } from "@/components/LocaleProvider";
import { useTheme } from "@/components/ThemeProvider";
import { StoryTagFilter } from "../../shared/StoryTagFilter";

export type StoriesPageProps = {
  stories: Story[];
  tags: string[];
};

function useFilteredStories(stories: Story[], active: string | "all") {
  return useMemo(
    () =>
      active === "all"
        ? stories
        : stories.filter((story) => story.tags?.includes(active)),
    [stories, active],
  );
}

function StoryList({ stories }: { stories: Story[] }) {
  const locale = useLocale();
  const t = useT();

  if (stories.length === 0) {
    return <p className="mt-10 text-center text-ink-mute">{t("common.noContent")}</p>;
  }

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
                <div className="flex flex-wrap items-center gap-2">
                  <time className="text-xs text-ink-mute">{formatDate(story.date, locale)}</time>
                  {story.tags?.map((tag) => (
                    <span key={tag} className="pill bg-blush/40 text-[10px] text-wine">
                      {tag}
                    </span>
                  ))}
                </div>
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

function StoriesBody({ stories, tags }: StoriesPageProps) {
  const { theme } = useTheme();
  const [active, setActive] = useState<string | "all">("all");
  const filtered = useFilteredStories(stories, active);

  return (
    <>
      {tags.length > 0 && (
        <StoryTagFilter variant={theme} tags={tags} active={active} onChange={setActive} className="mt-8" />
      )}
      <StoryList stories={filtered} />
    </>
  );
}

export function StoriesEditorial(props: StoriesPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Stories</p>
      <h1 className="display mt-2 text-5xl text-wine-deep">{t("pages.stories.title")}</h1>
      <StoriesBody {...props} />
    </Container>
  );
}

export default StoriesEditorial;
