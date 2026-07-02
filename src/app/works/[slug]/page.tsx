import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WORKS_EN } from "@content/translations/en";
import { getCharacterByWorkSlug, getNewsForWork, getStoriesForWork, getWorkBySlug, getWorkSlugs } from "@content/index";
import { WorkDetailPageDesign } from "@/components/designs/lazy-pages";
import { JsonLd } from "@/components/JsonLd";
import { detailMetadata } from "@/lib/i18n/metadata";
import { assetPath } from "@/lib/asset-path";
import { breadcrumbJsonLd, workJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site-url";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "作品未找到" };

  const extra = WORKS_EN[slug];
  return detailMetadata({
    title: work.title,
    titleEn: work.titleEn,
    description: work.synopsis,
    descriptionEn: extra?.synopsisEn ?? work.synopsisEn,
    image: work.poster ? assetPath(work.poster) : undefined,
    path: `/works/${slug}`,
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  const character = getCharacterByWorkSlug(slug);
  const relatedNews = getNewsForWork(slug);
  const relatedStories = getStoriesForWork(slug);

  return (
    <>
      <JsonLd data={workJsonLd(work)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl("/") },
          { name: "Works", url: siteUrl("/works") },
          { name: work.titleEn ?? work.title, url: siteUrl(`/works/${slug}`) },
        ])}
      />
      <WorkDetailPageDesign
        work={work}
        character={character}
        relatedNews={relatedNews}
        relatedStories={relatedStories}
      />
    </>
  );
}
