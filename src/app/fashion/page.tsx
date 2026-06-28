import { getBrandHighlights, getFeaturedMagazines, getFashionNews } from "@content/index";
import { FashionPageDesign } from "@/components/designs/pages/FashionPages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("fashion");

export default function FashionPage() {
  return (
    <FashionPageDesign
      highlights={getBrandHighlights()}
      magazines={getFeaturedMagazines(6)}
      fashionNews={getFashionNews(6)}
    />
  );
}
