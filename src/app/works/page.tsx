import { getWorks } from "@content/index";
import { WorksPageDesign } from "@/components/designs/lazy-pages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("works");

export const dynamic = "force-static";

export default function WorksPage() {
  return <WorksPageDesign works={getWorks()} />;
}
