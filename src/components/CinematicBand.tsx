"use client";

import { ContentImage } from "@/components/ContentImage";
import { Heart } from "lucide-react";
import { IMAGES } from "@content/images";
import { useT } from "@/components/LocaleProvider";

type CinematicBandProps = {
  quote?: string;
  caption?: string;
};

export function CinematicBand({ quote, caption }: CinematicBandProps) {
  const t = useT();
  const displayQuote = quote ?? t("home.quote");
  const displayCaption = caption ?? t("home.quoteCaption");

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <ContentImage
          src={IMAGES.backdrop.changge}
          alt="迪丽热巴《长歌行》剧照"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-deep/80 via-wine/45 to-rouge/25" />
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 w-[min(56vw,28rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--gold-glow)_40%,transparent),transparent_70%)] opacity-70"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <p className="kicker mb-5 text-gold-light">
              <Heart size={13} className="fill-gold-light text-gold-light" aria-hidden />
              {t("brand.chaseLight")}
            </p>
            <blockquote
              className="display max-w-3xl text-paper"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.25 }}
            >
              “{displayQuote}”
            </blockquote>
            {displayCaption && (
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-paper/70">
                {displayCaption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
