import { AboutPageDesign } from "@/components/designs/lazy-pages";
import { JsonLd } from "@/components/JsonLd";
import { listPageMetadata } from "@/lib/i18n/page-metadata";
import { personJsonLd } from "@/lib/structured-data";

export const metadata = listPageMetadata("about");

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <AboutPageDesign />
    </>
  );
}
