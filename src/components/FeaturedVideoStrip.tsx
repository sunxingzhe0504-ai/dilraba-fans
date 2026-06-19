"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { VideoItem } from "@/lib/types";
import type { ThemeId } from "@/lib/themes";
import { VideoCard } from "@/components/VideoCard";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FadeIn } from "@/components/FadeIn";
import { useT } from "@/components/LocaleProvider";

type Props = {
  videos: VideoItem[];
  /** a=古风 / b=甜桃 / c=影院 / d=刊物 */
  variant?: ThemeId;
};

export function FeaturedVideoStrip({ videos, variant = "c" }: Props) {
  const t = useT();

  if (!videos.length) return null;

  const titles = {
    a: { kicker: t("design.videos.a.kicker"), title: t("design.videos.a.title") },
    b: { kicker: t("design.videos.b.kicker"), title: t("design.videos.b.title") },
    c: { kicker: t("design.videos.c.kicker"), title: t("design.videos.c.title") },
    d: { kicker: t("design.videos.d.kicker"), title: t("design.videos.d.title") },
  }[variant];

  return (
    <Container wide className={variant === "c" ? "soft-section" : undefined}>
      <FadeIn>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            index="—"
            kicker={titles.kicker}
            title={titles.title}
            subtitle={t("design.videos.subtitle")}
            className="mb-0"
          />
          <Link
            href="/videos"
            className="inline-flex items-center gap-1 text-sm font-medium text-wine hover:text-wine-deep"
          >
            {t("design.videos.viewAll")}
            <ArrowRight size={14} />
          </Link>
        </div>
      </FadeIn>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.slug} video={video} />
        ))}
      </div>
    </Container>
  );
}
