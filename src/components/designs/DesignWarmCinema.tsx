"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { FeaturedVideoStrip } from "@/components/FeaturedVideoStrip";
import { Hero } from "@/components/Hero";
import { LatestStrip } from "@/components/LatestStrip";
import { CharacterCard } from "@/components/GalleryGrid";
import { Container } from "@/components/Container";
import { CinematicBand } from "@/components/CinematicBand";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { MagazineCard } from "@/components/MagazineCard";
import { EventCard, ViewAllLink } from "@/components/EventCard";
import { StatStrip } from "@/components/StatStrip";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import type { HomeData } from "./types";

export function DesignWarmCinema({ data }: { data: HomeData }) {
  const { works, magazines, events, stats, honors, latestNews, upcoming, characters, videos } = data;

  return (
    <>
      <Hero />
      <LatestStrip items={latestNews} />

      {upcoming.length > 0 && (
        <div className="container-wide py-6 text-center">
          <Link href="/upcoming" className="text-sm font-medium text-wine hover:text-wine-deep">
            ✦ {upcoming.length} 部待播作品 · 点击查看期待清单 →
          </Link>
        </div>
      )}

      <Container id="featured-works" wide>
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              index="01 —"
              kicker="Filmography"
              title="精选作品"
              subtitle="从仙侠到都市，从古装到职业题材，多元角色见证她的成长。"
              className="mb-0"
            />
            <ViewAllLink href="/works" label="查看全部作品" />
          </div>
        </FadeIn>
        <StaggerGrid className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {works.map((work) => (
            <StaggerItem key={work.slug}>
              <WorkCard work={work} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>

      {characters.length > 0 && (
        <Container wide>
          <FadeIn>
            <SectionTitle
              index="—"
              kicker="Characters"
              title="角色图鉴"
              subtitle="每一个角色，都是她表演路上的印记。"
              className="mb-8"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {characters.map((c) => (
              <CharacterCard key={c.slug} character={c} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/characters" className="text-sm text-wine hover:underline">
              查看全部角色 →
            </Link>
          </div>
        </Container>
      )}

      {videos.length > 0 && (
        <div className="py-12">
          <FeaturedVideoStrip videos={videos} variant="c" />
        </div>
      )}

      <CinematicBand
        quote="认真生活，用心演戏，温柔对待这个世界。"
        caption="Dilraba Dilmurat · 迪丽热巴"
      />

      <Container wide className="soft-section">
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              index="02 —"
              kicker="Editorial"
              title="杂志封面"
              subtitle="时尚镜头下的多元气质，记录每一个高光时刻。"
              className="mb-0"
            />
            <ViewAllLink href="/magazine" label="查看全部杂志" />
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {magazines.map((magazine) => (
            <MagazineCard
              key={magazine.slug}
              magazine={magazine}
              className="w-full"
            />
          ))}
        </div>
      </Container>

      <Container wide>
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              index="03 —"
              kicker="Events"
              title="近期活动"
              subtitle="品牌合作、公益行动、首映礼与颁奖典礼。"
              className="mb-0"
            />
            <ViewAllLink href="/events" label="查看全部活动" />
          </div>
        </FadeIn>
        <div className="grid gap-5 lg:grid-cols-2">
          {events.map((event) => (
            <FadeIn key={event.slug}>
              <EventCard event={event} />
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container wide className="soft-section">
        <FadeIn>
          <SectionTitle
            index="04 —"
            kicker="Recognition"
            title="荣誉与数据"
            subtitle="每一步都算数，每一束光都值得被记住。"
            align="center"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <StatStrip stats={stats} />
        </FadeIn>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {honors.map((honor) => (
            <li
              key={`${honor.year}-${honor.title}`}
              className="flex items-baseline gap-4 rounded-2xl border border-border bg-paper px-6 py-5 shadow-[0_12px_30px_-24px_rgba(176,78,105,0.3)]"
            >
              <span className="index-num shrink-0">{honor.year}</span>
              <span className="text-sm text-ink">{honor.title}</span>
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <FadeIn>
          <div className="soft-section relative overflow-hidden rounded-[2.25rem] border border-blush-deep/40 px-6 py-16 text-center">
            <p className="kicker mb-6 justify-center">
              <Heart size={13} className="fill-rouge text-rouge" aria-hidden />
              With Love
            </p>
            <h2 className="zh-display text-4xl text-wine-deep sm:text-5xl">
              以光之名，温暖同行
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink-soft">
              喜欢迪丽热巴，是喜欢她的认真与温柔，是她镜头里外的真诚与闪光。愿每一位同路人都能在追光的过程中，也成为更好的自己。
            </p>
            <Link href="/about" className="btn-primary mt-10">
              了解更多关于她 →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
