import type { Metadata } from "next";
import { getWorks } from "@content/index";
import { WorksPageDesign } from "@/components/designs/pages/WorksPages";

export const metadata: Metadata = {
  title: "作品库",
  description: "迪丽热巴影视作品、电影与综艺作品一览。",
};

export const dynamic = "force-static";

export default function WorksPage() {
  return <WorksPageDesign works={getWorks()} />;
}
