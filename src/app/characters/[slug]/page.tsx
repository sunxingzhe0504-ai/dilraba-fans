import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCharacterSlugs, getCharacterWithWork } from "@content/index";
import { CharacterDetailPageDesign } from "@/components/designs/pages/CharacterDetailPages";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCharacterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getCharacterWithWork(slug);
  if (!data) return { title: "角色未找到" };
  return {
    title: `${data.character.name} · ${data.character.workTitle}`,
    description: data.character.description.slice(0, 120),
  };
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
