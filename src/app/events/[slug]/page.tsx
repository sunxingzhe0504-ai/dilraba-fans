import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEventBySlug, getEventSlugs } from "@content/index";
import { EventDetailPageDesign } from "@/components/designs/pages/EventDetailPages";
import { detailMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ev = getEventBySlug(slug);
  if (!ev) return { title: "活动未找到" };
  return detailMetadata({
    title: ev.title,
    titleEn: ev.titleEn,
    description: ev.summary,
    descriptionEn: ev.summaryEn,
  });
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return <EventDetailPageDesign event={event} />;
}
