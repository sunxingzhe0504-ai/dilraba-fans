import type { Metadata } from "next";
import { getEvents } from "@content/index";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FadeIn } from "@/components/FadeIn";
import { EventsGrid } from "./EventsGrid";

export const metadata: Metadata = {
  title: "活动资讯",
  description: "迪丽热巴公开活动、品牌合作、公益慈善与颁奖典礼资讯。",
};

export const dynamic = "force-static";

export default function EventsPage() {
  const events = getEvents();

  return (
    <Container>
      <FadeIn>
        <SectionTitle
          title="活动资讯"
          subtitle="红毯、品牌、公益与发布 — 记录公开行程中的每一个精彩瞬间。"
        />
      </FadeIn>
      <EventsGrid events={events} />
    </Container>
  );
}
