import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getWorkBySlug, getWorkSlugs } from "@content/index";
import { Container } from "@/components/Container";
import { WORK_TYPE_LABELS } from "@/lib/types";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "作品未找到" };

  return {
    title: work.title,
    description: work.synopsis.slice(0, 120),
    openGraph: {
      title: `${work.title} | 迪丽热巴作品`,
      description: work.synopsis.slice(0, 120),
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  return (
    <Container>
      <Link
        href="/works"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
      >
        <ArrowLeft size={16} aria-hidden />
        返回作品库
      </Link>

      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        <div className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-2xl border border-border shadow-lg lg:mx-0">
          <Image
            src={work.poster}
            alt={`${work.title} 海报`}
            fill
            className="object-cover"
            priority
            sizes="320px"
          />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
              {WORK_TYPE_LABELS[work.type]}
            </span>
            <span>{work.year} 年</span>
            {work.status === "upcoming" && (
              <span className="rounded-full bg-accent/20 px-3 py-1 text-primary-dark">
                即将上映
              </span>
            )}
          </div>

          <h1 className="mt-4 font-serif text-3xl font-bold text-primary sm:text-4xl">
            {work.title}
          </h1>
          {work.titleEn && (
            <p className="mt-2 text-lg text-muted">{work.titleEn}</p>
          )}
          <p className="mt-4 text-lg">
            饰演 <span className="font-semibold text-foreground">{work.role}</span>
          </p>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              剧情简介
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{work.synopsis}</p>
          </div>

          {work.highlights && work.highlights.length > 0 && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
                亮点
              </h2>
              <ul className="mt-3 space-y-2">
                {work.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {work.externalUrl && (
            <a
              href={work.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
              查看更多信息
              <ExternalLink size={16} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </Container>
  );
}
