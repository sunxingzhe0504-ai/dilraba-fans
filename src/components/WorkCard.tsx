import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/lib/types";
import { WORK_TYPE_LABELS } from "@/lib/types";
import { cn } from "@/lib/cn";

type WorkCardProps = {
  work: Work;
  className?: string;
};

export function WorkCard({ work, className }: WorkCardProps) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className={cn(
        "group card-hover fan-card flex flex-col overflow-hidden",
        className,
      )}
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-rose-glow/30">
        <Image
          src={work.poster}
          alt={`${work.title} 海报`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        {work.status === "upcoming" && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white shadow-sm">
            即将上映 ✨
          </span>
        )}
        {work.featured && work.status === "released" && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm">
            推荐
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-rose-glow px-2.5 py-0.5 text-primary">
            {WORK_TYPE_LABELS[work.type]}
          </span>
          <span>{work.year}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
          {work.title}
        </h3>
        <p className="mt-1 text-sm text-muted">饰演 {work.role}</p>
      </div>
    </Link>
  );
}
