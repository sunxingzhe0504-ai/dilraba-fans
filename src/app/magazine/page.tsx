import { getMagazines } from "@content/index";
import { MagazinePageDesign } from "@/components/designs/pages/MagazinePages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("magazine");

export const dynamic = "force-static";

export default function MagazinePage() {
  return <MagazinePageDesign magazines={getMagazines()} />;
}
