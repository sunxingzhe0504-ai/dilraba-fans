import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CHARACTERS_EN } from "@content/translations/en";
import { getCharacterSlugs, getCharacterWithWork } from "@content/index";
import { CharacterDetailPageDesign } from "@/components/designs/lazy-pages";
import { JsonLd } from "@/components/JsonLd";
import { detailMetadata } from "@/lib/i18n/metadata";
import { assetPath } from "@/lib/asset-path";
import { breadcrumbJsonLd, characterJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site-url";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCharacterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getCharacterWithWork(slug);
  if (!data) return { title: "角色未找到" };
  const extra = CHARACTERS_EN[slug];
  const { character } = data;
  return detailMetadata({
    title: `${character.name} · ${character.workTitle}`,
    titleEn: extra?.nameEn
      ? `${extra.nameEn} · ${extra.workTitleEn ?? character.workTitle}`
      : undefined,
    description: character.description,
    descriptionEn: extra?.descriptionEn,
    image: character.image ? assetPath(character.image) : undefined,
    canonical: siteUrl(`/characters/${slug}`),
  });
}

export default async function CharacterDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getCharacterWithWork(slug);
  if (!data) notFound();

  const { character, work, videos } = data;
  const extra = CHARACTERS_EN[slug];

  return (
    <>
      <JsonLd data={characterJsonLd(character)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl("/") },
          { name: "Characters", url: siteUrl("/characters") },
          {
            name: extra?.nameEn ?? character.name,
            url: siteUrl(`/characters/${slug}`),
          },
        ])}
      />
      <CharacterDetailPageDesign
        character={character}
        work={work}
        videos={videos}
      />
    </>
  );
}
