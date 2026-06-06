import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Play } from "lucide-react";
import type { VideoItem } from "@/lib/types";
import { VIDEO_CATEGORY_LABELS, VIDEO_PLATFORM_LABELS } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/cn";

type Props = {
  video: VideoItem;
  className?: string;
  /** compact：列表式；card：网格卡片 */
  layout?: "card" | "compact";
};

export function VideoCard({ video, className, layout = "card" }: Props) {
  if (layout === "compact") {
    return (
      <a
        href={video.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex gap-4 rounded-2xl border border-border bg-paper p-4 transition-colors hover:border-wine",
          className,
        )}
      >
        <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg">
          <Image src={video.thumbnail} alt="" fill sizes="8rem" className="object-cover" />
          <span className="absolute inset-0 flex items-center justify-center bg-wine-deep/25">
            <Play size={20} className="fill-paper text-paper" />
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill bg-blush/50 text-xs text-wine">
              {VIDEO_CATEGORY_LABELS[video.category]}
            </span>
            <span className="text-xs text-ink-mute">
              {VIDEO_PLATFORM_LABELS[video.platform]}
            </span>
          </div>
          <h3 className="mt-1 truncate font-medium text-ink group-hover:text-wine">
            {video.title}
          </h3>
          <time className="text-xs text-ink-mute">{formatDate(video.date)}</time>
        </div>
        <ExternalLink size={16} className="shrink-0 self-center text-ink-mute" />
      </a>
    );
  }

  return (
    <article className={cn("edit-card group overflow-hidden", className)}>
      <a
        href={video.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width:640px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-wine-deep/20 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 shadow-lg">
              <Play size={24} className="ml-0.5 fill-wine text-wine" />
            </span>
          </div>
          {video.duration && (
            <span className="pill absolute bottom-2 right-2 bg-ink/75 text-xs text-paper">
              {video.duration}
            </span>
          )}
        </div>
      </a>
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="pill bg-blush/50 text-xs text-wine">
            {VIDEO_CATEGORY_LABELS[video.category]}
          </span>
          <span className="text-xs text-ink-mute">
            {VIDEO_PLATFORM_LABELS[video.platform]}
          </span>
          <time className="text-xs text-ink-mute">{formatDate(video.date)}</time>
        </div>
        <h3 className="mt-2 font-medium leading-snug text-ink">{video.title}</h3>
        {video.summary && (
          <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{video.summary}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <Play size={14} className="fill-paper" />
            前往观看
          </a>
          {video.workSlug && (
            <Link href={`/works/${video.workSlug}`} className="btn-ghost text-sm">
              相关作品
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
