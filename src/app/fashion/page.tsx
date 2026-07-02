import { getBrandHighlights, getEvents, getFashionStories, getFeaturedMagazines, getFashionNews, getGallery } from "@content/index";
import { FashionPageDesign } from "@/components/designs/lazy-pages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("fashion");

export default function FashionPage() {
  const redCarpetGallery = getGallery().filter((g) => g.category === "red-carpet");
  const redCarpetEvents = getEvents().filter(
    (e) =>
      e.category === "award" ||
      e.summary.includes("红毯") ||
      (e.summaryEn?.includes("red carpet") ?? false),
  );

  return (
    <FashionPageDesign
      highlights={getBrandHighlights()}
      magazines={getFeaturedMagazines(6)}
      fashionNews={getFashionNews(6)}
      fashionStories={getFashionStories(4)}
      redCarpetEvents={redCarpetEvents}
      redCarpetGallery={redCarpetGallery}
    />
  );
}
