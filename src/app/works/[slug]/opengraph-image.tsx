import { getWorkBySlug, getWorkSlugs } from "@content/index";
import { WORKS_EN } from "@content/translations/en";
import {
  createDetailOgImage,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og/create-detail-og";

export const alt = "Dilraba work";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) {
    return createDetailOgImage({ title: "Work not found", tag: "Works" });
  }
  const extra = WORKS_EN[slug];
  return createDetailOgImage({
    title: work.titleEn ?? work.title,
    subtitle: extra?.roleEn ?? work.role,
    tag: "Works · 作品",
    imagePath: work.poster,
  });
}
