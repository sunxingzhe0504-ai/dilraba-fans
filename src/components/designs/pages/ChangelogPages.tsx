"use client";

import type { ChangelogEntry } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { DesignPageRouter } from "../DesignPageRouter";

export type ChangelogPageProps = { log: ChangelogEntry[] };

function ChangelogList({ log, variant }: ChangelogPageProps & { variant: "c" | "a" | "b" | "d" }) {
  return (
    <ul className={variant === "d" ? "mt-10 space-y-0 divide-y divide-border" : "mt-10 space-y-8"}>
      {log.map((entry) => (
        <li
          key={entry.date}
          className={
            variant === "a"
              ? "border-b border-gold/30 py-6 first:border-t first:border-gold/30"
              : variant === "d"
                ? "py-8"
                : "border-l-2 border-gold pl-6"
          }
        >
          <time className={variant === "a" ? "index-num" : "index-num"}>{entry.date}</time>
          <ul className="mt-3 space-y-2">
            {entry.items.map((item) => (
              <li key={item} className="text-sm text-ink-soft">
                {variant === "b" ? "✦ " : "· "}
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export function ChangelogWarmCinema({ log }: ChangelogPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Changelog"
        title="更新日志"
        subtitle="站点功能与内容的维护记录。"
      />
      <ChangelogList log={log} variant="c" />
    </Container>
  );
}

export function ChangelogXianxia({ log }: ChangelogPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-8 text-center">
        <p className="kicker justify-center">录 · Changelog</p>
        <h1 className="zh-display text-5xl text-wine-deep">修录</h1>
      </div>
      <div className="container-main">
        <ChangelogList log={log} variant="a" />
      </div>
    </div>
  );
}

export function ChangelogFanSticker({ log }: ChangelogPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-wine-deep">
        更新记录 📝
      </h1>
      <ChangelogList log={log} variant="b" />
    </Container>
  );
}

export function ChangelogEditorial({ log }: ChangelogPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Revisions</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">更新日志</p>
      <div className="gold-rule mt-6 h-px" />
      <ChangelogList log={log} variant="d" />
    </Container>
  );
}

const variants = {
  c: ChangelogWarmCinema,
  a: ChangelogXianxia,
  b: ChangelogFanSticker,
  d: ChangelogEditorial,
};

export function ChangelogPageDesign(props: ChangelogPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
