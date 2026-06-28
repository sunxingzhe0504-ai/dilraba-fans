import { getCharityItems } from "@content/index";
import { CharityPageDesign } from "@/components/designs/pages/CharityPages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("charity");

export default function CharityPage() {
  return <CharityPageDesign items={getCharityItems()} />;
}
