import { getUpcomingWorks } from "@content/index";
import { UpcomingPageDesign } from "@/components/designs/pages/UpcomingPages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("upcoming");

export default function UpcomingPage() {
  return <UpcomingPageDesign upcoming={getUpcomingWorks()} />;
}
