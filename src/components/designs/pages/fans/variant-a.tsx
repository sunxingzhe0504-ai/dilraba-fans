"use client";

import { useMemo } from "react";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { ExternalLink } from "lucide-react";
import type { Character, FanCulture, Quote } from "@/lib/types";
import type { FanMilestones } from "@/lib/fan-milestones";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { AnniversaryCountdown } from "@/components/AnniversaryCountdown";
import { CharacterQuiz } from "@/components/CharacterQuiz";
import { FanAchievements } from "@/components/FanAchievements";
import { FanDataBackup } from "@/components/FanDataBackup";
import { FanMilestonesStrip } from "@/components/FanMilestonesStrip";
import { QuoteWallpaperMaker } from "@/components/QuoteWallpaperMaker";
import { useLocale, useT } from "@/components/LocaleProvider";
import { localizeFanCulture, localizeQuote } from "@/lib/i18n/localize";

export type FansPageProps = {
  culture: FanCulture;
  quotes: Quote[];
  characters: Character[];
  milestones: FanMilestones;
};

function FansContent({ culture: rawCulture, quotes: rawQuotes, characters, milestones, variant }: FansPageProps & { variant: "c" | "a" | "b" | "d" }) {
  const locale = useLocale();
  const t = useT();
  const culture = useMemo(() => localizeFanCulture(rawCulture, locale), [rawCulture, locale]);
  const quotes = useMemo(
    () => rawQuotes.map((q) => localizeQuote(q, locale)),
    [rawQuotes, locale],
  );
  const { fanName, fanNameNote, nicknames, fanGuide, anniversaries, communityLinks } = culture;
  const titleClass =
    variant === "a" ? "zh-display text-4xl text-wine-deep" : "display text-4xl text-wine-deep";
  const sectionTitle =
    variant === "d" ? "display text-2xl text-ink" : variant === "b" ? "text-2xl font-extrabold text-wine-deep" : "display text-2xl text-ink";

  return (
    <>
      <Container wide className="section-padding pt-16">
        {variant === "c" && (
          <SectionTitle index="—" kicker="Dear Bar" title={t("pages.fans.title")} subtitle={t("pages.fans.subtitle")} align="center" />
        )}
        {variant === "a" && (
          <div className="mb-10 text-center">
            <p className="kicker justify-center">同 · Dear Bar</p>
            <h1 className="zh-display text-5xl text-wine-deep">{t("pages.fans.title")}</h1>
          </div>
        )}
        {variant === "b" && (
          <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">Dear Bar 💗</h1>
        )}
        {variant === "d" && (
          <>
            <div className="gold-rule h-px" />
            <h1 className="display mt-6 text-5xl text-wine-deep">Community</h1>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">{t("pages.fans.title")}</p>
            <div className="gold-rule mt-6 h-px" />
          </>
        )}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <h2 className={titleClass}>{fanName}</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">{fanNameNote}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {nicknames.map((n) => (
              <span key={n} className="pill border border-wine/20 bg-blush/30 text-wine">
                {n}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <Container wide className="section-padding pt-0">
        <AnniversaryCountdown />
      </Container>

      <Container wide className="section-padding pt-0">
        <FanMilestonesStrip data={milestones} variant={variant} />
      </Container>

      <Container wide className="section-padding pt-0">
        <CharacterQuiz characters={characters} variant={variant} />
      </Container>

      <Container wide className="section-padding pt-0">
        <FanAchievements variant={variant} />
      </Container>

      <Container wide className="section-padding pt-0">
        <FanDataBackup variant={variant} />
      </Container>

      <Container wide className="section-padding pt-0">
        <QuoteWallpaperMaker quotes={rawQuotes} variant={variant} />
      </Container>

      <Container wide className={variant === "c" ? "soft-section" : "section-padding"}>
        <h2 className={sectionTitle}>{t("pages.fans.quotes")}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {quotes.map((q) => (
            <li
              key={q.id}
              className={
                variant === "b"
                  ? "rounded-3xl border-2 border-dashed border-wine/25 bg-blush/20 p-6"
                  : "rounded-2xl border border-border bg-paper p-6"
              }
            >
              <p className="leading-relaxed text-ink">「{q.text}」</p>
              <p className="mt-3 text-xs text-ink-mute">— {q.source}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Container wide className="section-padding">
        <h2 className={sectionTitle}>{t("pages.fans.guide")}</h2>
        <ul className="mt-6 space-y-3">
          {fanGuide.map((line) => (
            <li key={line} className="flex gap-3 text-sm text-ink-soft">
              <span className="text-wine">♥</span>
              {line}
            </li>
          ))}
        </ul>
      </Container>

      <Container wide className="pb-16">
        <h2 className={sectionTitle}>{t("pages.fans.anniversaries")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {anniversaries.map((a) => (
            <div key={a.id} className="edit-card p-6 text-center">
              <p className="display text-3xl text-gold">{a.date}</p>
              <h3 className="mt-2 font-medium text-ink">{a.title}</h3>
              <p className="mt-2 text-xs text-ink-mute">{a.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container wide className="pb-24">
        <h2 className={sectionTitle}>{t("pages.fans.community")}</h2>
        <ul className="mt-6 space-y-3">
          {communityLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-border px-5 py-4 hover:border-wine"
              >
                <span>
                  <span className="font-medium text-ink">{link.label}</span>
                  {link.note && (
                    <span className="mt-0.5 block text-xs text-ink-mute">{link.note}</span>
                  )}
                </span>
                <ExternalLink size={16} className="text-wine" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/fashion" className="text-wine hover:underline">
            {t("pages.fans.fashionLink")}
          </Link>
          <Link href="/charity" className="text-wine hover:underline">
            {t("pages.fans.charityLink")}
          </Link>
          <Link href="/changelog" className="text-wine hover:underline">
            {t("pages.fans.changelogLink")}
          </Link>
        </div>
      </Container>
    </>
  );
}

export function FansXianxia(props: FansPageProps) {
  return <FansContent {...props} variant="a" />;
}

export default FansXianxia;
