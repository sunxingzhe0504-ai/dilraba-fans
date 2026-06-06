import type { Metadata } from "next";
import { getBrandHighlights, getFeaturedMagazines, getFashionNews } from "@content/index";
import { FashionPageDesign } from "@/components/designs/pages/FashionPages";

export const metadata: Metadata = {
  title: "时尚 · Dior",
  description: "迪丽热巴 Dior 全球品牌大使与时尚高光时刻。",
};

export default function FashionPage() {
  return (
    <FashionPageDesign
      highlights={getBrandHighlights()}
      magazines={getFeaturedMagazines(6)}
      fashionNews={getFashionNews(6)}
    />
  );
}
