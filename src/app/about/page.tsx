import type { Metadata } from "next";
import { AboutPageDesign } from "@/components/designs/pages/AboutPages";

export const metadata: Metadata = {
  title: "关于她",
  description: "了解迪丽热巴的公开简介、成长历程与代表荣誉。",
};

export const dynamic = "force-static";

export default function AboutPage() {
  return <AboutPageDesign />;
}
