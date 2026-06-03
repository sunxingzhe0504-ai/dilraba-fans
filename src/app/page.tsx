import Link from "next/link";
import {
  getFeaturedEvents,
  getFeaturedMagazines,
  getFeaturedWorks,
  getHonors,
  getSiteMeta,
} from "@content/index";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { MagazineCard } from "@/components/MagazineCard";
import { EventCard, ViewAllLink } from "@/components/EventCard";
import { StatStrip } from "@/components/StatStrip";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { Sparkles } from "lucide-react";

export const dynamic = "force-static";

export default function HomePage() {
  const featuredWorks = getFeaturedWorks(3);
  const featuredMagazines = getFeaturedMagazines(6);
  const featuredEvents = getFeaturedEvents(4);
  const { stats } = getSiteMeta();
  const honors = getHonors().slice(0, 4);

  return (
    <>
      <Hero />

      <Container id="featured-works">
        <FadeIn>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              title="精选作品"
              subtitle="从仙侠到都市，从古装到职业题材，多元角色见证成长。"
              className="mb-0"
            />
            <ViewAllLink href="/works" label="查看全部作品" />
          </div>
        </FadeIn>
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWorks.map((work) => (
            <StaggerItem key={work.slug}>
              <WorkCard work={work} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>

      <Container className="soft-section">
        <FadeIn>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              title="杂志封面"
              subtitle="时尚镜头下的多元气质，记录每一个高光时刻。"
              className="mb-0"
            />
            <ViewAllLink href="/magazine" label="查看全部杂志" />
          </div>
        </FadeIn>
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
          {featuredMagazines.map((magazine) => (
            <MagazineCard
              key={magazine.slug}
              magazine={magazine}
              className="w-44 snap-start sm:w-auto"
            />
          ))}
        </div>
      </Container>

      <Container>
        <FadeIn>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              title="近期活动"
              subtitle="品牌合作、公益行动、首映礼与颁奖典礼。"
              className="mb-0"
            />
            <ViewAllLink href="/events" label="查看全部活动" />
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredEvents.map((event) => (
            <FadeIn key={event.slug}>
              <EventCard event={event} />
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container className="soft-section">
        <FadeIn>
          <SectionTitle
            title="荣誉与数据"
            subtitle="每一步都算数，每一束光都值得被记住。"
            align="center"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <StatStrip stats={stats} />
        </FadeIn>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {honors.map((honor) => (
            <li
              key={`${honor.year}-${honor.title}`}
              className="fan-card px-5 py-4 text-sm"
            >
              <span className="font-medium text-accent">{honor.year}</span>
              <span className="mx-2 text-border">·</span>
              <span className="text-foreground">{honor.title}</span>
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <FadeIn>
          <div className="fan-card bg-gradient-to-br from-rose-glow/60 via-white to-accent-light/30 px-8 py-12 text-center sm:px-16">
            <Sparkles className="mx-auto mb-4 text-primary" size={28} aria-hidden />
            <h2 className="font-[family-name:var(--font-ma-shan)] text-3xl text-primary-dark sm:text-4xl">
              以光之名，温暖同行
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              喜欢迪丽热巴，是喜欢她的认真与温柔，是她镜头里外的真诚与闪光。愿每一位同路人都能在追光的过程中，也成为更好的自己。请关注官方渠道，理性追星，文明交流 💗
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-primary to-primary-soft px-8 py-3 text-sm font-medium text-white shadow-md shadow-primary/25 transition-all hover:shadow-lg"
            >
              了解更多关于她
            </Link>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
