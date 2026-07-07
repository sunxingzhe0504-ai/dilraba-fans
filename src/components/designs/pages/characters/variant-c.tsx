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

export function CharactersWarmCinema({ characters }: CharactersPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Characters"
        title={t("pages.characters.title")}
        subtitle={t("design.characters.warmSubtitle")}
        align="center"
      />
      <CharacterGrid characters={characters} />
    </Container>
  );
}

export default CharactersWarmCinema;
