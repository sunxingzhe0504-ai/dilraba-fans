import type { Metadata } from "next";
import { getMagazines } from "@content/index";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MagazineCard } from "@/components/MagazineCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "杂志封面",
  description: "迪丽热巴时尚杂志封面与大片一览。",
};

export const dynamic = "force-static";

export default function MagazinePage() {
  const magazines = getMagazines();

  return (
    <Container>
      <FadeIn>
        <SectionTitle
          title="杂志封面"
          subtitle="时尚镜头下的多元表达，记录每一个封面时刻。"
        />
      </FadeIn>
      <StaggerGrid className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {magazines.map((magazine) => (
          <StaggerItem key={magazine.slug}>
            <MagazineCard magazine={magazine} className="w-full" />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Container>
  );
}
