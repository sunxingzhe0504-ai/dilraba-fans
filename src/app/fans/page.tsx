import { getFanCulture, getQuotes } from "@content/index";
import { FansPageDesign } from "@/components/designs/pages/FansPages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("fans");

export default function FansPage() {
  return (
    <FansPageDesign culture={getFanCulture()} quotes={getQuotes()} />
  );
}
