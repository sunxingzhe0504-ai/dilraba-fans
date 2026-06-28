import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WORKS_EN } from "@content/translations/en";
import { getCharacterByWorkSlug, getWorkBySlug, getWorkSlugs } from "@content/index";
import { WorkDetailPageDesign } from "@/components/designs/pages/WorkDetailPages";
import { detailMetadata } from "@/lib/i18n/metadata";
import { assetPath } from "@/lib/asset-path";

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
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  const character = getCharacterByWorkSlug(slug);

  return <WorkDetailPageDesign work={work} character={character} />;
}
