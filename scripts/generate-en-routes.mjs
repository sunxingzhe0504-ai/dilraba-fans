/**
 * Generates src/app/en/** re-exports mirroring Chinese routes.
 * Run after adding new top-level pages: npm run generate:en-routes
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const enRoot = join(root, "src", "app", "en");

const routes = [
  { file: "page.tsx", src: "../page", exports: ["default", "metadata"] },
  { file: "about/page.tsx", src: "../../about/page", exports: ["default", "metadata"] },
  { file: "changelog/page.tsx", src: "../../changelog/page", exports: ["default", "metadata"] },
  { file: "charity/page.tsx", src: "../../charity/page", exports: ["default", "metadata"] },
  { file: "characters/page.tsx", src: "../../characters/page", exports: ["default", "metadata"] },
  {
    file: "characters/[slug]/page.tsx",
    src: "../../../characters/[slug]/page",
    exports: ["default", "generateMetadata", "generateStaticParams"],
  },
  { file: "contact/page.tsx", src: "../../contact/page", exports: ["default", "metadata"] },
  { file: "events/page.tsx", src: "../../events/page", exports: ["default", "metadata"] },
  {
    file: "events/[slug]/page.tsx",
    src: "../../../events/[slug]/page",
    exports: ["default", "generateMetadata", "generateStaticParams"],
  },
  { file: "fans/page.tsx", src: "../../fans/page", exports: ["default", "metadata"] },
  { file: "fashion/page.tsx", src: "../../fashion/page", exports: ["default", "metadata"] },
  { file: "gallery/page.tsx", src: "../../gallery/page", exports: ["default", "metadata"] },
  { file: "latest/page.tsx", src: "../../latest/page", exports: ["default", "metadata"] },
  {
    file: "latest/[slug]/page.tsx",
    src: "../../../latest/[slug]/page",
    exports: ["default", "generateMetadata", "generateStaticParams"],
  },
  { file: "magazine/page.tsx", src: "../../magazine/page", exports: ["default", "metadata"] },
  {
    file: "magazine/[slug]/page.tsx",
    src: "../../../magazine/[slug]/page",
    exports: ["default", "generateMetadata", "generateStaticParams"],
  },
  { file: "stories/page.tsx", src: "../../stories/page", exports: ["default", "metadata"] },
  {
    file: "stories/[slug]/page.tsx",
    src: "../../../stories/[slug]/page",
    exports: ["default", "generateMetadata", "generateStaticParams"],
  },
  { file: "upcoming/page.tsx", src: "../../upcoming/page", exports: ["default", "metadata"] },
  { file: "videos/page.tsx", src: "../../videos/page", exports: ["default", "metadata"] },
  { file: "works/page.tsx", src: "../../works/page", exports: ["default", "metadata"] },
  {
    file: "works/[slug]/page.tsx",
    src: "../../../works/[slug]/page",
    exports: ["default", "generateMetadata", "generateStaticParams"],
  },
  {
    file: "works/[slug]/opengraph-image.tsx",
    src: "../../../works/[slug]/opengraph-image",
    exports: ["default", "alt", "size", "contentType", "generateStaticParams"],
  },
  {
    file: "stories/[slug]/opengraph-image.tsx",
    src: "../../../stories/[slug]/opengraph-image",
    exports: ["default", "alt", "size", "contentType", "generateStaticParams"],
  },
];

for (const route of routes) {
  const target = join(enRoot, route.file);
  mkdirSync(dirname(target), { recursive: true });
  const exp = route.exports.map((name) => `export { ${name} } from "${route.src}";`).join("\n");
  writeFileSync(
    target,
    `/** Auto-generated English route mirror — see scripts/generate-en-routes.mjs */\n${exp}\nexport const dynamic = "force-static";\n`,
  );
}

writeFileSync(
  join(enRoot, "layout.tsx"),
  `/** English locale segment — UI language follows /en URL prefix. */\nexport default function EnLayout({ children }: { children: React.ReactNode }) {\n  return children;\n}\n`,
);

console.log(`Generated ${routes.length} English route mirrors under src/app/en/`);
