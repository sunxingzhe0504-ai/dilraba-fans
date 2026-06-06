"use client";

import type { Character } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { CharacterCard } from "@/components/GalleryGrid";
import { DesignPageRouter } from "../DesignPageRouter";

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
  return (
    <Container wide className="section-padding pt-16">
      <SectionTitle
        index="—"
        kicker="Characters"
        title="角色图鉴"
        subtitle="从仙侠到都市，每一个角色都是她表演路上的印记。"
        align="center"
      />
      <CharacterGrid characters={characters} />
    </Container>
  );
}

export function CharactersXianxia({ characters }: CharactersPageProps) {
  return (
    <div className="section-padding pt-16">
      <div className="container-main mb-10 text-center">
        <p className="kicker justify-center">谱 · Characters</p>
        <h1 className="zh-display text-5xl text-wine-deep">角色名册</h1>
      </div>
      <div className="container-main">
        <CharacterGrid characters={characters} />
      </div>
    </div>
  );
}

export function CharactersFanSticker({ characters }: CharactersPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-10 text-center text-4xl font-extrabold text-wine-deep">
        角色收藏册 💫
      </h1>
      <CharacterGrid characters={characters} />
    </Container>
  );
}

export function CharactersEditorial({ characters }: CharactersPageProps) {
  return (
    <Container wide className="section-padding pt-16">
      <div className="gold-rule h-px" />
      <h1 className="display mt-6 text-5xl text-wine-deep">Roles</h1>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">角色图鉴</p>
      <div className="gold-rule mt-6 h-px" />
      <CharacterGrid characters={characters} />
    </Container>
  );
}

const variants = {
  c: CharactersWarmCinema,
  a: CharactersXianxia,
  b: CharactersFanSticker,
  d: CharactersEditorial,
};

export function CharactersPageDesign(props: CharactersPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
