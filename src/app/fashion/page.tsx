import { getBrandHighlights, getFeaturedMagazines, getFashionNews } from "@content/index";
import { FashionPageDesign } from "@/components/designs/lazy-pages";
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
