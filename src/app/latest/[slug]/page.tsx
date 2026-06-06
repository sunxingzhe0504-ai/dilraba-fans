import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsSlugs, getNewsWithRelated } from "@content/index";
import { NewsDetailPageDesign } from "@/components/designs/pages/NewsDetailPages";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getNewsWithRelated(slug);
  if (!data) return { title: "动态未找到" };
  return {
    title: data.item.title,
    description: data.item.summary.slice(0, 120),
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getNewsWithRelated(slug);
  if (!data) notFound();

  return <NewsDetailPageDesign item={data.item} related={data.related} />;
}
