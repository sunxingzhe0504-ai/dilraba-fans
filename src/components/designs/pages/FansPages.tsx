"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { FanCulture, Quote } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { DesignPageRouter } from "../DesignPageRouter";

export type FansPageProps = {
  culture: FanCulture;
  quotes: Quote[];
};

function FansContent({ culture, quotes, variant }: FansPageProps & { variant: "c" | "a" | "b" | "d" }) {
  const { fanName, fanNameNote, nicknames, fanGuide, anniversaries, communityLinks } = culture;
  const titleClass =
    variant === "a" ? "zh-display text-4xl text-wine-deep" : "display text-4xl text-wine-deep";
  const sectionTitle =
    variant === "d" ? "display text-2xl text-ink" : variant === "b" ? "text-2xl font-extrabold text-wine-deep" : "display text-2xl text-ink";

  return (
    <>
      <Container wide className="section-padding pt-16">
        {variant === "c" && (
          <SectionTitle index="—" kicker="Dear Bar" title="粉丝文化" subtitle="同好相聚，追光而行。" align="center" />
        )}
        {variant === "a" && (
          <div className="mb-10 text-center">
            <p className="kicker justify-center">同 · Dear Bar</p>
            <h1 className="zh-display text-5xl text-wine-deep">粉丝文化</h1>
          </div>
        )}
        {variant === "b" && (
          <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">Dear Bar 💗</h1>
        )}
        {variant === "d" && (
          <>
            <div className="gold-rule h-px" />
            <h1 className="display mt-6 text-5xl text-wine-deep">Community</h1>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">粉丝文化</p>
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

      <Container wide className={variant === "c" ? "soft-section" : "section-padding"}>
        <h2 className={sectionTitle}>闪光语录</h2>
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
        <h2 className={sectionTitle}>理性追星指南</h2>
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
        <h2 className={sectionTitle}>纪念日</h2>
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
        <h2 className={sectionTitle}>同好 · 官方链接</h2>
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
            时尚专题 →
          </Link>
          <Link href="/charity" className="text-wine hover:underline">
            公益专题 →
          </Link>
          <Link href="/changelog" className="text-wine hover:underline">
            更新日志 →
          </Link>
        </div>
      </Container>
    </>
  );
}

export function FansWarmCinema(props: FansPageProps) {
  return <FansContent {...props} variant="c" />;
}
export function FansXianxia(props: FansPageProps) {
  return <FansContent {...props} variant="a" />;
}
export function FansFanSticker(props: FansPageProps) {
  return <FansContent {...props} variant="b" />;
}
export function FansEditorial(props: FansPageProps) {
  return <FansContent {...props} variant="d" />;
}

const variants = {
  c: FansWarmCinema,
  a: FansXianxia,
  b: FansFanSticker,
  d: FansEditorial,
};

export function FansPageDesign(props: FansPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
