import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStoryBySlug, getStorySlugs } from "@content/index";
import { StoryDetailPageDesign } from "@/components/designs/lazy-pages";
import { detailMetadata } from "@/lib/i18n/metadata";
import { assetPath } from "@/lib/asset-path";

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

  return <StoryDetailPageDesign story={story} />;
}
