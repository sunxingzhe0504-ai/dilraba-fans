"use client";

import { LocaleLink as Link } from "@/components/LocaleLink";
import Image from "next/image";
import type { Magazine } from "@/lib/types";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale } from "@/components/LocaleProvider";
import { localizeMagazine } from "@/lib/i18n/localize";
import { cn } from "@/lib/cn";

type MagazineCardProps = {
  magazine: Magazine;
  className?: string;
};

export function MagazineCard({ magazine: raw, className }: MagazineCardProps) {
  const locale = useLocale();
  const magazine = localizeMagazine(raw, locale);

  return (
    <div className={cn("group edit-card hover-zoom flex-shrink-0", className)}>
      <Link href={`/magazine/${magazine.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-background-deep">
          <Image
            src={magazine.cover}
            alt={`${magazine.name} ${magazine.issue}`}
            fill
            className="portrait-cover"
            sizes="(max-width: 768px) 60vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/85 via-wine-deep/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-paper">
            <p className="index-num text-gold-light">{magazine.year}</p>
            <h3 className="display mt-1 text-xl leading-tight">{magazine.name}</h3>
            <p className="mt-1 text-sm text-paper/80">{magazine.issue}</p>
            {magazine.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {magazine.tags.map((tag) => (
                  <span
                    key={tag}
                    className="pill border border-paper/40 bg-paper/15 text-paper/90 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
      {magazine.externalLinks && magazine.externalLinks.length > 0 && (
        <div className="p-4 pt-3">
          <ExternalLinks links={magazine.externalLinks} />
        </div>
      )}
    </div>
  );
}
