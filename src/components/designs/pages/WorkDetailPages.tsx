"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Character, Work } from "@/lib/types";
import { WORK_TYPE_LABELS } from "@/lib/types";
import { ExternalLinks } from "@/components/ExternalLinks";
import { Container } from "@/components/Container";
import { DesignPageRouter } from "../DesignPageRouter";

export type WorkDetailPageProps = { work: Work; character?: Character };

function WorkMeta({ work }: { work: Work }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 text-sm text-ink-mute">
        <span className="text-xs uppercase tracking-[0.18em] text-wine">
          {WORK_TYPE_LABELS[work.type]}
        </span>
        <span className="index-num">{work.year}</span>
        {work.status === "upcoming" && (
          <span className="pill bg-gold/30 text-ink">即将上映</span>
        )}
      </div>
      {work.airInfo && (
        <p className="mt-3 text-sm text-ink-soft">{work.airInfo}</p>
      )}
      {work.cast && work.cast.length > 0 && (
        <p className="mt-2 text-sm text-ink-mute">
          主演：{work.cast.join("、")}
        </p>
      )}
      {work.titleEn && (
        <p className="display mt-2 text-xl text-ink-soft">{work.titleEn}</p>
      )}
      <p className="mt-4 text-lg">
        饰演 <span className="display text-wine">{work.role}</span>
      </p>
    </>
  );
}

function WorkBody({ work, character }: { work: Work; character?: Character }) {
  return (
    <>
      <div className="mt-8">
        <h2 className="kicker">剧情简介</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">{work.synopsis}</p>
      </div>
      {character && (
        <div className="mt-8">
          <h2 className="kicker">角色图鉴</h2>
          <Link
            href={`/characters/${character.slug}`}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-border bg-paper px-5 py-4 text-sm text-ink-soft transition-colors hover:border-wine hover:text-wine"
          >
            查看 <span className="font-medium text-wine">{character.name}</span>
            <span className="text-ink-mute">· {character.workTitle}</span>
          </Link>
        </div>
      )}
      {work.highlights && work.highlights.length > 0 && (
        <div className="mt-8">
          <h2 className="kicker">亮点</h2>
          <ul className="mt-4 space-y-2">
            {work.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {work.externalLinks && work.externalLinks.length > 0 && (
        <div className="mt-10">
          <h2 className="kicker">相关链接</h2>
          <ExternalLinks links={work.externalLinks} className="mt-4" size="md" />
        </div>
      )}
    </>
  );
}

export function WorkDetailWarmCinema({ work, character }: WorkDetailPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/works" className="mb-10 inline-flex items-center gap-2 text-sm text-ink-soft hover:text-wine">
        <ArrowLeft size={16} /> 返回作品库
      </Link>
      <div className="grid gap-12 lg:grid-cols-[360px_1fr]">
        <div className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-[var(--radius-card)] shadow-2xl lg:mx-0">
          <Image src={work.poster} alt={`${work.title} 海报`} fill priority className="object-cover" sizes="320px" />
        </div>
        <div>
          <WorkMeta work={work} />
          <h1 className="zh-display mt-4 text-5xl text-wine-deep sm:text-6xl">{work.title}</h1>
          <WorkBody work={work} character={character} />
        </div>
      </div>
    </Container>
  );
}

export function WorkDetailXianxia({ work, character }: WorkDetailPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main">
        <Link href="/works" className="text-sm text-wine hover:text-wine-deep">
          ← 返回卷宗
        </Link>
        <div className="mt-12 text-center">
          <div className="relative mx-auto w-56">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border-2 border-gold/50 p-2">
              <Image src={work.poster} alt="" fill className="rounded-[2rem] object-cover" sizes="14rem" />
            </div>
          </div>
          <h1 className="zh-display mt-10 text-5xl text-wine-deep">{work.title}</h1>
          <WorkMeta work={work} />
          <div className="mx-auto mt-10 max-w-2xl text-left">
            <WorkBody work={work} character={character} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkDetailFanSticker({ work, character }: WorkDetailPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <Link href="/works" className="font-medium text-wine">
        ← 回作品墙
      </Link>
      <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        <div className="rotate-2 rounded-2xl bg-paper p-3 shadow-xl">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
            <Image src={work.poster} alt="" fill className="object-cover" sizes="280px" />
          </div>
          <p className="mt-2 text-center text-xs text-wine">Dilraba ♡</p>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-wine-deep">{work.title}</h1>
          <WorkMeta work={work} />
          <WorkBody work={work} character={character} />
        </div>
      </div>
    </Container>
  );
}

export function WorkDetailEditorial({ work, character }: WorkDetailPageProps) {
  return (
    <div className="section-padding pt-16">
      <Container wide>
        <Link href="/works" className="text-xs uppercase tracking-[0.25em] text-ink-mute hover:text-wine">
          ← Filmography Index
        </Link>
        <div className="gold-rule mt-8 h-px" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative aspect-[2/3] w-full max-w-md border border-border lg:order-2 lg:max-w-none lg:justify-self-end">
            <Image src={work.poster} alt="" fill className="portrait-cover" sizes="50vw" priority />
          </div>
          <div className="lg:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Feature</p>
            <h1 className="display mt-2 text-5xl text-wine-deep sm:text-6xl">{work.title}</h1>
            <WorkMeta work={work} />
            <WorkBody work={work} character={character} />
          </div>
        </div>
      </Container>
    </div>
  );
}

const workDetailVariants = {
  c: WorkDetailWarmCinema,
  a: WorkDetailXianxia,
  b: WorkDetailFanSticker,
  d: WorkDetailEditorial,
};

export function WorkDetailPageDesign({ work, character }: WorkDetailPageProps) {
  return <DesignPageRouter variants={workDetailVariants} props={{ work, character }} />;
}
