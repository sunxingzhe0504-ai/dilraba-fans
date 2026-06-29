import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MAGAZINES_EN } from "@content/translations/en";
import { getMagazineBySlug, getMagazineSlugs } from "@content/index";
import { MagazineDetailPageDesign } from "@/components/designs/lazy-pages";
import { JsonLd } from "@/components/JsonLd";
import { detailMetadata } from "@/lib/i18n/metadata";
import { assetPath } from "@/lib/asset-path";
import { breadcrumbJsonLd, magazineJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site-url";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getMagazineSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mag = getMagazineBySlug(slug);
  if (!mag) return { title: "杂志未找到" };
  const extra = MAGAZINES_EN[slug];
  return detailMetadata({
    title: mag.name,
    titleEn: extra?.nameEn ?? mag.nameEn,
    description: mag.description ?? mag.issue,
    descriptionEn: extra?.descriptionEn ?? extra?.issueEn ?? mag.issueEn,
    image: mag.cover ? assetPath(mag.cover) : undefined,
    canonical: siteUrl(`/magazine/${slug}`),
  });
}

export default async function MagazineDetailPage({ params }: Props) {
  const { slug } = await params;
  const mag = getMagazineBySlug(slug);
  if (!mag) notFound();

  const extra = MAGAZINES_EN[slug];

  return (
    <>
      <JsonLd data={magazineJsonLd(mag)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl("/") },
          { name: "Magazine", url: siteUrl("/magazine") },
          { name: extra?.nameEn ?? mag.nameEn ?? mag.name, url: siteUrl(`/magazine/${slug}`) },
        ])}
      />
      <MagazineDetailPageDesign magazine={mag} />
    </>
  );
}
