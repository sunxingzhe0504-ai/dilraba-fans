import type { Metadata } from "next";
import { getUpcomingWorks } from "@content/index";
import { UpcomingPageDesign } from "@/components/designs/pages/UpcomingPages";

export const metadata: Metadata = {
  title: "待播专区",
  description: "迪丽热巴待上映电影与筹备中作品。",
};

export default function UpcomingPage() {
  return <UpcomingPageDesign upcoming={getUpcomingWorks()} />;
}
