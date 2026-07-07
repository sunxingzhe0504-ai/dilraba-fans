"use client";

import { useMemo } from "react";
import { ContentImage } from "@/components/ContentImage";
import { LocaleLink as Link } from "@/components/LocaleLink";
import type { Magazine } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MagazineCard } from "@/components/MagazineCard";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeMagazine } from "@/lib/i18n/localize";

export type MagazinePageProps = { magazines: Magazine[] };

const TILTS = ["rotate-2", "-rotate-2", "rotate-1", "-rotate-3", "rotate-3", "-rotate-1"];

export function MagazineFanSticker({ magazines }: MagazinePageProps) {
  const locale = useLocale();
  const t = useT();
  const items = useMemo(
    () => magazines.map((m) => localizeMagazine(m, locale)),
    [magazines, locale],
  );

  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-10 text-center text-4xl font-extrabold text-wine-deep">
        {t("design.magazine.fanStickerTitle")}
      </h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((m, i) => (
          <div
            key={m.slug}
            className={`overflow-hidden rounded-2xl border-2 border-paper bg-paper shadow-md ${TILTS[i % TILTS.length]} hover:rotate-0`}
          >
            <Link href={`/magazine/${m.slug}`} className="block">
              <div className="relative aspect-[3/4]">
                <ContentImage src={m.cover} alt={m.name} fill sizes="22vw" className="portrait-cover" />
              </div>
              <p className="truncate px-2 py-2 text-center text-xs font-medium">{m.name}</p>
            </Link>
            {m.externalLinks && m.externalLinks.length > 0 && (
              <div className="px-2 pb-3">
                <ExternalLinks links={m.externalLinks} />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default MagazineFanSticker;
