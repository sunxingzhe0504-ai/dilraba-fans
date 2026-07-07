"use client";

import type { Character } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { CharacterCard } from "@/components/GalleryGrid";
import { useT } from "@/components/LocaleProvider";

export type CharactersPageProps = { characters: Character[] };

function CharacterGrid({ characters }: CharactersPageProps) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {characters.map((c) => (
        <CharacterCard key={c.slug} character={c} />
      ))}
    </div>
  );
}

export function CharactersXianxia({ characters }: CharactersPageProps) {
  const t = useT();
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-10 text-center">
        <p className="kicker justify-center">谱 · Characters</p>
        <h1 className="zh-display text-5xl text-wine-deep">{t("design.characters.xianxiaTitle")}</h1>
      </div>
      <div className="container-main">
        <CharacterGrid characters={characters} />
      </div>
    </div>
  );
}

export default CharactersXianxia;
