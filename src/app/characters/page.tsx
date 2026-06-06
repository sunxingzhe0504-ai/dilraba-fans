import type { Metadata } from "next";
import { getCharacters } from "@content/index";
import { CharactersPageDesign } from "@/components/designs/pages/CharactersPages";

export const metadata: Metadata = {
  title: "角色图鉴",
  description: "迪丽热巴经典荧幕角色图鉴：白凤九、乔晶晶、李长歌等。",
};

export default function CharactersPage() {
  return <CharactersPageDesign characters={getCharacters()} />;
}
