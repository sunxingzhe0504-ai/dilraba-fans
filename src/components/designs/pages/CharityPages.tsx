"use client";

import { ExternalLink } from "lucide-react";
import type { CharityItem } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { DesignPageRouter } from "../DesignPageRouter";

export type CharityPageProps = { items: CharityItem[] };

function CharityList({ items, variant }: CharityPageProps & { variant: "c" | "a" | "b" | "d" }) {
  return (
    <ul
      className={
        variant === "a"
          ? "container-main mx-auto mt-10 max-w-2xl"
          : variant === "d"
            ? "mx-auto mt-12 max-w-3xl divide-y divide-border"
            : "mx-auto mt-12 max-w-3xl space-y-6"
      }
    >
      {items.map((item) => (
        <li
          key={item.slug}
          className={
            variant === "b"
              ? "rounded-3xl border border-border bg-paper p-8 shadow-md"
              : variant === "a"
                ? "border-b border-gold/30 py-6 first:border-t first:border-gold/30"
                : variant === "d"
                  ? "py-8"
                  : "edit-card p-8"
          }
        >
          <time className={variant === "d" ? "text-xs uppercase tracking-widest text-gold" : "index-num"}>
            {item.date}
          </time>
          <h2
            className={
              variant === "a"
                ? "zh-display mt-2 text-xl text-ink"
                : "mt-2 text-xl font-medium text-ink"
            }
          >
            {item.title}
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">{item.summary}</p>
          {item.externalUrl && (
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-5"
            >
              <ExternalLink size={14} />
              了解更多
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export function CharityWarmCinema({ items }: CharityPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Charity"
        title="公益 · 温暖同行"
        subtitle="以行动传递温暖，关注儿童、灾害救援与社会责任。"
        align="center"
      />
      <CharityList items={items} variant="c" />
    </Container>
  );
}

export function CharityXianxia({ items }: CharityPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">善 · Charity</p>
        <h1 className="zh-display text-5xl text-wine-deep">公益行迹</h1>
      </div>
      <CharityList items={items} variant="a" />
    </div>
  );
}

export function CharityFanSticker({ items }: CharityPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        温暖同行 💗
      </h1>
      <CharityList items={items} variant="b" />
    </Container>
  );
}

export function CharityEditorial({ items }: CharityPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Impact</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">公益专题</p>
      <div className="gold-rule mt-6 h-px" />
      <CharityList items={items} variant="d" />
    </Container>
  );
}

const variants = {
  c: CharityWarmCinema,
  a: CharityXianxia,
  b: CharityFanSticker,
  d: CharityEditorial,
};

export function CharityPageDesign(props: CharityPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
