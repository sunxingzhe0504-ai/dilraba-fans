import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsSlugs, getNewsWithRelated } from "@content/index";
import { NewsDetailPageDesign } from "@/components/designs/lazy-pages";
import { JsonLd } from "@/components/JsonLd";
import { detailMetadata } from "@/lib/i18n/metadata";
import { breadcrumbJsonLd, newsJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site-url";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getNewsWithRelated(slug);
  if (!data) return { title: "动态未找到" };
  return detailMetadata({
    title: data.item.title,
    titleEn: data.item.titleEn,
    description: data.item.summary,
    descriptionEn: data.item.summaryEn,
    path: `/latest/${slug}`,
  });
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getNewsWithRelated(slug);
  if (!data) notFound();

  return (
    <>
      <JsonLd data={newsJsonLd(data.item)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl("/") },
          { name: "Latest", url: siteUrl("/latest") },
          { name: data.item.titleEn ?? data.item.title, url: siteUrl(`/latest/${slug}`) },
        ])}
      />
      <NewsDetailPageDesign item={data.item} related={data.related} />
    </>
  );
}
