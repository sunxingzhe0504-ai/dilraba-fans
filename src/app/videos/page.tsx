import type { Metadata } from "next";
import { getVideos } from "@content/index";
import { VideosPageDesign } from "@/components/designs/pages/VideosPages";

export const metadata: Metadata = {
  title: "视频专区",
  description: "迪丽热巴预告、MV、工作室与活动现场视频 — 跳转公开平台观看。",
};

export default function VideosPage() {
  return <VideosPageDesign videos={getVideos()} />;
}
