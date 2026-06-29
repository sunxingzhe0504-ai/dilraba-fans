import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEventBySlug, getEventSlugs, getNewsForEvent } from "@content/index";
import { EventDetailPageDesign } from "@/components/designs/lazy-pages";
import { JsonLd } from "@/components/JsonLd";
import { detailMetadata } from "@/lib/i18n/metadata";
import { breadcrumbJsonLd, eventJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site-url";

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
    path: `/events/${slug}`,
  });
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const relatedNews = getNewsForEvent(slug);

  return (
    <>
      <JsonLd data={eventJsonLd(event)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl("/") },
          { name: "Events", url: siteUrl("/events") },
          { name: event.titleEn ?? event.title, url: siteUrl(`/events/${slug}`) },
        ])}
      />
      <EventDetailPageDesign event={event} relatedNews={relatedNews} />
    </>
  );
}
