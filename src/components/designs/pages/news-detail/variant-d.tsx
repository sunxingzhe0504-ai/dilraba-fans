"use client";

import { useMemo } from "react";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { ExternalLink } from "lucide-react";
import type { FanEvent, Magazine, NewsItem, Story, Work } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { Container } from "@/components/Container";
import { ExternalLinks } from "@/components/ExternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedStoriesList } from "@/components/RelatedStoriesList";
import { ShareButtons } from "@/components/ShareButtons";
import { useLocale, useT } from "@/components/LocaleProvider";
import {
  localizeEvent,
  localizeMagazine,
  localizeNews,
  localizeWork,
} from "@/lib/i18n/localize";
import { newsCategoryLabel } from "@/lib/i18n/labels";

export type NewsDetailRelated = {
  work?: Work;
  event?: FanEvent;
  magazine?: Magazine;
};

export type NewsDetailPageProps = {
  item: NewsItem;
  related: NewsDetailRelated;
  relatedStories?: Story[];
};

function useLocalizedNewsDetail({ item, related }: NewsDetailPageProps) {
  const locale = useLocale();
  const localizedItem = useMemo(() => localizeNews(item, locale), [item, locale]);
  const localizedRelated = useMemo(
    () => ({
      work: related.work ? localizeWork(related.work, locale) : undefined,
      event: related.event ? localizeEvent(related.event, locale) : undefined,
      magazine: related.magazine ? localizeMagazine(related.magazine, locale) : undefined,
    }),
    [related, locale],
  );
  return { item: localizedItem, related: localizedRelated };
}

function NewsMeta({ item }: { item: NewsItem }) {
  const locale = useLocale();
  return (
    <>
      <span className="pill bg-blush/50 text-wine">
        {newsCategoryLabel(item.category, locale)}
      </span>
      <time className="mt-4 block text-sm text-ink-mute">{formatDate(item.date, locale)}</time>
    </>
  );
}

function NewsRelated({
  related,
  item,
}: {
  item: NewsItem;
  related: NewsDetailRelated;
}) {
  const t = useT();
  const links: { label: string; href: string }[] = [];
  if (related.work) {
    links.push({
      label: `${t("common.relatedWorkLabel")} · ${related.work.title}`,
      href: `/works/${related.work.slug}`,
    });
  }
  if (related.event) {
    links.push({
      label: `${t("common.relatedEventLabel")} · ${related.event.title}`,
      href: `/events/${related.event.slug}`,
    });
  }
  if (related.magazine) {
    links.push({
      label: `${t("common.relatedMagazineLabel")} · ${related.magazine.name}`,
      href: `/magazine/${related.magazine.slug}`,
    });
  }

  if (links.length === 0 && !item.externalUrl) return null;

  return (
    <div className="mt-10">
      <h2 className="kicker">{t("common.relatedLinks")}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="btn-ghost text-sm">
            {l.label}
          </Link>
        ))}
        {item.externalUrl && (
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            <ExternalLink size={14} />
            {t("common.readSource")}
          </a>
        )}
      </div>
      {related.work?.externalLinks && related.work.externalLinks.length > 0 && (
        <ExternalLinks links={related.work.externalLinks} className="mt-4" size="md" />
      )}
    </div>
  );
}

function NewsBody(props: {
  item: NewsItem;
  related: NewsDetailRelated;
  relatedStories?: Story[];
}) {
  const { item, related, relatedStories } = props;
  return (
    <>
      <NewsMeta item={item} />
      <h1 className="display mt-4 text-4xl text-wine-deep sm:text-5xl">{item.title}</h1>
      <ShareButtons title={item.title} description={item.summary} className="mt-4" />
      <p className="mt-8 text-lg leading-relaxed text-ink-soft">{item.summary}</p>
      {item.body && (
        <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
          {item.body.split("\n\n").map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      )}
      <NewsRelated item={item} related={related} />
      {relatedStories && relatedStories.length > 0 && (
        <RelatedStoriesList items={relatedStories} className="mt-10" />
      )}
    </>
  );
}

export function NewsDetailEditorial(props: NewsDetailPageProps) {
  const t = useT();
  const { item, related } = useLocalizedNewsDetail(props);
  return (
    <Container wide className="section-padding pt-16">
      <Breadcrumbs
        items={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.latest"), href: "/latest" },
          { label: item.title },
        ]}
      />
      <div className="gold-rule mt-8 h-px" />
      <article className="mt-10 max-w-3xl">
        <NewsBody item={item} related={related} relatedStories={props.relatedStories} />
      </article>
    </Container>
  );
}

export default NewsDetailEditorial;
