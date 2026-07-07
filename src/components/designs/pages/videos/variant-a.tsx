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

export function VideosXianxia({ videos }: VideosPageProps) {
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
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">影 · Videos</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("design.videos.xianxiaTitle")}</h1>
        <div className="mt-8">
          <ThemeCategoryFilter variant="a" active={active} onChange={setActive} filters={filterOptions} ariaLabel={t("common.filterVideos")} />
        </div>
      </div>
      <div className="container-main pb-8">
        <VideoGrid videos={filtered} layout="compact" />
      </div>
    </div>
  );
}

export default VideosXianxia;
