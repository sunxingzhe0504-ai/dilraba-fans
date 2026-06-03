import Image from "next/image";
import type { Magazine } from "@/lib/types";
import { cn } from "@/lib/cn";

type MagazineCardProps = {
  magazine: Magazine;
  className?: string;
};

export function MagazineCard({ magazine, className }: MagazineCardProps) {
  return (
    <article
      className={cn(
        "group card-hover fan-card flex-shrink-0 overflow-hidden",
        className,
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-rose-glow/20">
        <Image
          src={magazine.cover}
          alt={`${magazine.name} ${magazine.issue} 封面`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 200px, 250px"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/50 to-transparent p-3 pt-10 opacity-0 transition-opacity group-hover:opacity-100">
          <p className="text-xs text-white/90">{magazine.issue}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs font-medium text-accent">{magazine.year}</p>
        <h3 className="mt-1 font-serif text-base font-semibold text-primary-dark">
          {magazine.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{magazine.issue}</p>
        {magazine.tags && (
          <div className="mt-3 flex flex-wrap gap-1">
            {magazine.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-rose-glow/80 px-2 py-0.5 text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
