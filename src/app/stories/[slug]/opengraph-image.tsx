import { getStories, getStoryBySlug } from "@content/index";
import {
  createDetailOgImage,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og/create-detail-og";

export const alt = "Dilraba story";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return getStories().map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) {
    return createDetailOgImage({ title: "Story not found", tag: "Stories" });
  }
  return createDetailOgImage({
    title: story.titleEn ?? story.title,
    subtitle: story.summaryEn ?? story.summary,
    tag: "Stories · 专题",
    imagePath: story.cover,
  });
}
