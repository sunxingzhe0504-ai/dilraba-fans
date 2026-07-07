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

export function MagazineEditorial({ magazines }: MagazinePageProps) {
  const locale = useLocale();
  const t = useT();
  const items = useMemo(
    () => magazines.map((m) => localizeMagazine(m, locale)),
    [magazines, locale],
  );

  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Editorials</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">{t("pages.magazine.title")}</p>
      <div className="gold-rule mt-6 h-px" />
      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((m, i) => (
          <div key={m.slug}>
            <Link href={`/magazine/${m.slug}`} className="group block">
              <div className="relative aspect-[3/4] border border-border">
                <ContentImage src={m.cover} alt={m.name} fill sizes="22vw" className="portrait-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-3 flex justify-between">
                <p className="text-sm font-medium text-ink">{m.name}</p>
                <span className="display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs text-ink-mute">{m.issue}</p>
            </Link>
            {m.externalLinks && m.externalLinks.length > 0 && (
              <div className="mt-2">
                <ExternalLinks links={m.externalLinks} />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default MagazineEditorial;
