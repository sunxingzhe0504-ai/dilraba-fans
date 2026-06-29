import { getFanCulture, getQuotes } from "@content/index";
import { FansPageDesign } from "@/components/designs/lazy-pages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("fans");

export default function FansPage() {
  return (
    <FansPageDesign culture={getFanCulture()} quotes={getQuotes()} />
  );
}
