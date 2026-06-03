import type { Metadata } from "next";
import { getWorks } from "@content/index";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FadeIn } from "@/components/FadeIn";
import { WorksGrid } from "./WorksGrid";

export const metadata: Metadata = {
  title: "作品库",
  description: "迪丽热巴影视作品、电影与综艺作品一览。",
};

export const dynamic = "force-static";

export default function WorksPage() {
  const works = getWorks();

  return (
    <Container>
      <FadeIn>
        <SectionTitle
          title="作品库"
          subtitle="电视剧、电影与综艺，记录每一次角色的绽放。"
        />
      </FadeIn>
      <WorksGrid works={works} />
    </Container>
  );
}
