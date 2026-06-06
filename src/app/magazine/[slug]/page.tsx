import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMagazineBySlug, getMagazineSlugs } from "@content/index";
import { MagazineDetailPageDesign } from "@/components/designs/pages/MagazineDetailPages";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getMagazineSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mag = getMagazineBySlug(slug);
  if (!mag) return { title: "杂志未找到" };
  return { title: mag.name, description: mag.issue };
}

export default async function MagazineDetailPage({ params }: Props) {
  const { slug } = await params;
  const mag = getMagazineBySlug(slug);
  if (!mag) notFound();

  return <MagazineDetailPageDesign magazine={mag} />;
}
