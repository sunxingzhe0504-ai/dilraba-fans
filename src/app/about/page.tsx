import type { Metadata } from "next";
import {
  getHonors,
  getSiteMeta,
  getTimeline,
} from "@content/index";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Timeline } from "@/components/Timeline";
import { FadeIn } from "@/components/FadeIn";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "关于她",
  description: "了解迪丽热巴的公开简介、成长历程与代表荣誉。",
};

export const dynamic = "force-static";

export default function AboutPage() {
  const { bio, bioExtended, officialLinks } = getSiteMeta();
  const honors = getHonors();
  const timeline = getTimeline();

  return (
    <>
      <section className="soft-section section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionTitle
              title="关于迪丽热巴"
              subtitle="认真生活 · 用心演戏 · 温柔有力量"
              align="center"
            />
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted">
              {bio}
            </p>
          </FadeIn>
        </div>
      </section>

      <Container>
        <FadeIn>
          <SectionTitle title="成长故事" />
          <div className="space-y-6">
            {bioExtended.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </Container>

      <Container className="soft-section">
        <FadeIn>
          <SectionTitle title="成长时间轴" subtitle="从出道到今日的公开里程碑。" />
        </FadeIn>
        <Timeline entries={timeline} />
      </Container>

      <Container>
        <FadeIn>
          <SectionTitle title="代表荣誉" subtitle="整理自公开报道与行业信息。" />
        </FadeIn>
        <ul className="grid gap-4 sm:grid-cols-2">
          {honors.map((honor) => (
            <li
              key={`${honor.year}-${honor.title}`}
              className="fan-card px-6 py-5"
            >
              <time className="text-sm font-medium text-accent">{honor.year} 年</time>
              <p className="mt-2 font-medium text-foreground">{honor.title}</p>
              {honor.source && (
                <p className="mt-1 text-xs text-muted">来源：{honor.source}</p>
              )}
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <FadeIn>
          <div className="fan-card bg-gradient-to-br from-rose-glow/50 to-accent-light/20 p-8 sm:p-12">
            <SectionTitle
              title="关注官方渠道"
              subtitle="获取第一手资讯，理性追星，文明交流。"
              className="mb-6"
            />
            <div className="flex flex-wrap gap-4">
              {officialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3 text-sm font-medium text-primary shadow-sm transition-all hover:bg-white hover:shadow-md"
                >
                  {link.label}
                  <ExternalLink size={14} aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
