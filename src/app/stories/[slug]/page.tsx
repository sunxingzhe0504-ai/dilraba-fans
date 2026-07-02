import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMoreStories, getStoryBySlug, getStorySlugs } from "@content/index";
import { StoryDetailPageDesign } from "@/components/designs/lazy-pages";
import { JsonLd } from "@/components/JsonLd";
import { detailMetadata } from "@/lib/i18n/metadata";
import { assetPath } from "@/lib/asset-path";
import { breadcrumbJsonLd, storyJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site-url";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "专题未找到" };

  return detailMetadata({
    title: story.title,
    titleEn: story.titleEn,
    description: story.summary,
    descriptionEn: story.summaryEn,
    image: story.cover ? assetPath(story.cover) : undefined,
    path: `/stories/${slug}`,
  });
}

export default async function StoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const moreStories = getMoreStories(slug);

  return (
    <>
      <JsonLd data={storyJsonLd(story)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl("/") },
          { name: "Stories", url: siteUrl("/stories") },
          { name: story.titleEn ?? story.title, url: siteUrl(`/stories/${slug}`) },
        ])}
      />
      <StoryDetailPageDesign story={story} moreStories={moreStories} />
    </>
  );
}
