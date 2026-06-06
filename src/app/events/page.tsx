import type { Metadata } from "next";
import { getEvents } from "@content/index";
import { EventsPageDesign } from "@/components/designs/pages/EventsPages";

export const metadata: Metadata = {
  title: "活动资讯",
  description: "迪丽热巴公开活动、品牌合作、公益慈善与颁奖典礼资讯。",
};

export const dynamic = "force-static";

export default function EventsPage() {
  return <EventsPageDesign events={getEvents()} />;
}
