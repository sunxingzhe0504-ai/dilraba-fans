import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CHARACTERS_EN } from "@content/translations/en";
import { getCharacterSlugs, getCharacterWithWork } from "@content/index";
import { CharacterDetailPageDesign } from "@/components/designs/pages/CharacterDetailPages";
import { detailMetadata } from "@/lib/i18n/metadata";
import { assetPath } from "@/lib/asset-path";

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
  });
}

export default async function CharacterDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getCharacterWithWork(slug);
  if (!data) notFound();

  return (
    <CharacterDetailPageDesign
      character={data.character}
      work={data.work}
      videos={data.videos}
    />
  );
}
