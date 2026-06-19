"use client";

import type { Character } from "@/lib/types";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { CharacterCard } from "@/components/GalleryGrid";
import { useT } from "@/components/LocaleProvider";
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

export function CharactersFanSticker({ characters }: CharactersPageProps) {
  const t = useT();
  return (
    <Container wide className="section-padding pt-16">
      <h1 className="mb-10 text-center text-4xl font-extrabold text-wine-deep">
        {t("design.characters.fanStickerTitle")}
      </h1>
      <CharacterGrid characters={characters} />
    </Container>
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

const variants = {
  c: CharactersWarmCinema,
  a: CharactersXianxia,
  b: CharactersFanSticker,
  d: CharactersEditorial,
};

export function CharactersPageDesign(props: CharactersPageProps) {
  return <DesignPageRouter variants={variants} props={props} />;
}
