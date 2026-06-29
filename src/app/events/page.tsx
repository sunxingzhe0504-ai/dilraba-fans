import { getEvents } from "@content/index";
import { EventsPageDesign } from "@/components/designs/lazy-pages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("events");

export const dynamic = "force-static";

export default function EventsPage() {
  return <EventsPageDesign events={getEvents()} />;
}
