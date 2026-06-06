import type { Metadata } from "next";
import { getMagazines } from "@content/index";
import { MagazinePageDesign } from "@/components/designs/pages/MagazinePages";

export const metadata: Metadata = {
  title: "杂志封面",
  description: "迪丽热巴时尚杂志封面与大片一览。",
};

export const dynamic = "force-static";

export default function MagazinePage() {
  return <MagazinePageDesign magazines={getMagazines()} />;
}
