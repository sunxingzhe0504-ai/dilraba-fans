import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCharacterByWorkSlug, getWorkBySlug, getWorkSlugs } from "@content/index";
import { WorkDetailPageDesign } from "@/components/designs/pages/WorkDetailPages";

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

  return {
    title: work.title,
    description: work.synopsis.slice(0, 120),
    openGraph: {
      title: `${work.title} | 迪丽热巴作品`,
      description: work.synopsis.slice(0, 120),
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  const character = getCharacterByWorkSlug(slug);

  return <WorkDetailPageDesign work={work} character={character} />;
}
