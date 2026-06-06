import type { Metadata } from "next";
import { getCharityItems } from "@content/index";
import { CharityPageDesign } from "@/components/designs/pages/CharityPages";

export const metadata: Metadata = {
  title: "公益专题",
  description: "迪丽热巴公益慈善与社会责任相关公开信息。",
};

export default function CharityPage() {
  return <CharityPageDesign items={getCharityItems()} />;
}
