import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { VideoItem } from "@/lib/types";
import { VideoCard } from "@/components/VideoCard";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FadeIn } from "@/components/FadeIn";

type Props = {
  videos: VideoItem[];
  /** a=古风 / b=甜桃 / c=影院 / d=刊物 */
  variant?: "a" | "b" | "c" | "d";
};

export function FeaturedVideoStrip({ videos, variant = "c" }: Props) {
  if (!videos.length) return null;

  const titles = {
    a: { kicker: "影 · Videos", title: "影像拾光" },
    b: { kicker: "Video", title: "必看片段 🎬" },
    c: { kicker: "Videos", title: "精选视频" },
    d: { kicker: "Screen", title: "Moving Image" },
  }[variant];

  return (
    <Container wide className={variant === "c" ? "soft-section" : undefined}>
      <FadeIn>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            index="—"
            kicker={titles.kicker}
            title={titles.title}
            subtitle="预告、工作室物料与公开活动片段，链接至正版平台。"
            className="mb-0"
          />
          <Link
            href="/videos"
            className="inline-flex items-center gap-1 text-sm font-medium text-wine hover:text-wine-deep"
          >
            全部视频
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
