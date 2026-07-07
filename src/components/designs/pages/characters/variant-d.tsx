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

export function CharactersEditorial({ characters }: CharactersPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Roles</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">{t("pages.characters.title")}</p>
      <div className="gold-rule mt-6 h-px" />
      <CharacterGrid characters={characters} />
    </Container>
  );
}

export default CharactersEditorial;
