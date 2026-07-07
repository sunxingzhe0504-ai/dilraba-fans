"use client";

import { useMemo, useState } from "react";
import type { VideoCategory, VideoItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { VideoCard } from "@/components/VideoCard";
import { useLocale, useT } from "@/components/LocaleProvider";
import { filterAllLabel, videoCategoryLabel } from "@/lib/i18n/labels";
import { ThemeCategoryFilter } from "../../shared/ThemeCategoryFilter";

export type VideosPageProps = { videos: VideoItem[] };

const CATEGORIES: VideoCategory[] = ["mv", "studio", "trailer", "interview", "event", "variety"];

function useFiltered(videos: VideoItem[], active: VideoCategory | "all") {
  return useMemo(() => {
    if (active === "all") return videos;
    return videos.filter((v) => v.category === active);
  }, [videos, active]);
}

function VideoGrid({ videos, layout }: { videos: VideoItem[]; layout: "card" | "compact" }) {
  if (layout === "compact") {
    return (
      <div className="space-y-3">
        {videos.map((v) => (
          <VideoCard key={v.slug} video={v} layout="compact" />
        ))}
      </div>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <VideoCard key={v.slug} video={v} />
      ))}
    </div>
  );
}

export function VideosFanSticker({ videos }: VideosPageProps) {
  const locale = useLocale();
  const t = useT();
  const [active, setActive] = useState<VideoCategory | "all">("all");
  const filtered = useFiltered(videos, active);
  const filterOptions = useMemo(
    () => [
      { value: "all" as const, label: filterAllLabel(locale) },
      ...CATEGORIES.map((value) => ({
        value,
        label: videoCategoryLabel(value, locale),
      })),
    ],
    [locale],
  );

  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        {t("design.videos.fanStickerTitle")}
      </h1>
      <ThemeCategoryFilter variant="b" active={active} onChange={setActive} filters={filterOptions} ariaLabel={t("common.filterVideos")} />
      <div className="mt-10">
        <VideoGrid videos={filtered} layout="card" />
      </div>
    </Container>
  );
}

export default VideosFanSticker;
