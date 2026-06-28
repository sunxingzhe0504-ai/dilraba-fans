import { getCharacters } from "@content/index";
import { CharactersPageDesign } from "@/components/designs/pages/CharactersPages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("characters");

export default function CharactersPage() {
  return <CharactersPageDesign characters={getCharacters()} />;
}
