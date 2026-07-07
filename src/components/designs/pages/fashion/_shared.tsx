import type { BrandHighlight, FanEvent, GalleryItem, Magazine, NewsItem, Story } from "@/lib/types";
export type FashionPageProps = {
  highlights: BrandHighlight[];
  magazines: Magazine[];
  fashionNews: NewsItem[];
  fashionStories: Story[];
  redCarpetEvents: FanEvent[];
  redCarpetGallery: GalleryItem[];
};
