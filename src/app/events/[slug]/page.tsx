import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEventBySlug, getEventSlugs } from "@content/index";
import { EventDetailPageDesign } from "@/components/designs/pages/EventDetailPages";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ev = getEventBySlug(slug);
  if (!ev) return { title: "活动未找到" };
  return { title: ev.title, description: ev.summary.slice(0, 120) };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return <EventDetailPageDesign event={event} />;
}
