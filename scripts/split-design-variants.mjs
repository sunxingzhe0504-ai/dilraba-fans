/**
 * Split *Pages.tsx into per-theme variant chunks for code-splitting.
 * Run: node scripts/split-design-variants.mjs
 */
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pagesDir = join(root, "src", "components", "designs", "pages");

const THEME_SUFFIXES = ["WarmCinema", "Xianxia", "FanSticker", "Editorial"];
const THEME_MAP = { WarmCinema: "c", Xianxia: "a", FanSticker: "b", Editorial: "d" };

function extractTypesPreamble(preamble) {
  const imports = preamble.match(/^import type .+$/gm) ?? [];
  const types = [];
  let idx = 0;
  while (true) {
    const start = preamble.indexOf("export type", idx);
    if (start === -1) break;
    const eqPos = preamble.indexOf("=", start);
    if (eqPos === -1) break;
    const afterEq = preamble.slice(eqPos + 1).trimStart();
    if (afterEq.startsWith("{")) {
      const braceStart = preamble.indexOf("{", eqPos);
      let depth = 0;
      let end = -1;
      for (let i = braceStart; i < preamble.length; i++) {
        if (preamble[i] === "{") depth++;
        else if (preamble[i] === "}") {
          depth--;
          if (depth === 0) {
            end = preamble.indexOf(";", i);
            break;
          }
        }
      }
      if (end === -1) break;
      types.push(preamble.slice(start, end + 1).trim());
      idx = end + 1;
    } else {
      const semi = preamble.indexOf(";", eqPos);
      if (semi === -1) break;
      types.push(preamble.slice(start, semi + 1).trim());
      idx = semi + 1;
    }
  }
  return [...imports, ...types].join("\n");
}

function toKebab(fileBase) {
  return fileBase
    .replace(/Pages$/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

function extractExportFunction(source, fnStart) {
  const paramStart = source.indexOf("(", fnStart);
  if (paramStart === -1) return null;

  let pDepth = 0;
  let paramEnd = -1;
  for (let i = paramStart; i < source.length; i++) {
    const ch = source[i];
    if (ch === "(") pDepth++;
    else if (ch === ")") {
      pDepth--;
      if (pDepth === 0) {
        paramEnd = i;
        break;
      }
    }
  }
  if (paramEnd === -1) return null;

  const braceStart = source.indexOf("{", paramEnd);
  if (braceStart === -1) return null;

  let depth = 0;
  for (let i = braceStart; i < source.length; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") {
      depth--;
      if (depth === 0) return { code: source.slice(fnStart, i + 1), end: i + 1 };
    }
  }
  return null;
}

function findVariantExports(source) {
  const variants = [];
  for (const suffix of THEME_SUFFIXES) {
    const re = new RegExp(`export function (\\w+${suffix})\\s*\\(`);
    const match = re.exec(source);
    if (!match) return null;
    const fnStart = match.index;
    const extracted = extractExportFunction(source, fnStart);
    if (!extracted) return null;
    variants.push({
      suffix,
      theme: THEME_MAP[suffix],
      fnName: match[1],
      code: extracted.code,
    });
  }
  return variants;
}

function splitFile(filePath) {
  const fileName = filePath.split(/[/\\]/).pop();
  if (!fileName.endsWith("Pages.tsx")) return;

  const source = readFileSync(filePath, "utf8");
  if (source.includes("Code-split themed variants")) return;

  const firstVariant = source.search(/export function \w+(WarmCinema|Xianxia|FanSticker|Editorial)/);
  if (firstVariant === -1) return;

  const variants = findVariantExports(source);
  if (!variants || variants.length !== 4) {
    console.warn(`Skip ${fileName}: expected 4 variants`);
    return;
  }

  const pageBase = fileName.replace(/\.tsx$/, "");
  const pageId = toKebab(pageBase);
  const folder = join(pagesDir, pageId);
  mkdirSync(folder, { recursive: true });

  const preamble = source
    .slice(0, firstVariant)
    .replace(/import \{ DesignPageRouter \} from "\.\.\/DesignPageRouter";\r?\n?/, "")
    .replace(/from "\.\.\/shared\//g, 'from "../../shared/');

  const designMatch = source.match(/export function (\w+PageDesign)/);
  const designName = designMatch?.[1] ?? "PageDesign";
  const propsMatch = preamble.match(/export type (\w+PageProps)/);
  const propsType = propsMatch?.[1];

  const typesOnly = extractTypesPreamble(preamble);
  writeFileSync(join(folder, "_shared.tsx"), `${typesOnly.trim()}\n`);

  for (const v of variants) {
    writeFileSync(
      join(folder, `variant-${v.theme}.tsx`),
      `${preamble}${v.code}\n\nexport default ${v.fnName};\n`,
    );
  }

  const propsImport = propsType
    ? `export type { ${propsType} } from "./_shared";\n\n`
    : "";

  const propsGeneric = propsType ? `import("./_shared").${propsType}` : "object";

  writeFileSync(
    join(folder, "index.tsx"),
    `"use client";

import { createThemedPageDesign } from "../../create-themed-page-design";

${propsImport}export const ${designName} = createThemedPageDesign<${propsGeneric}>("${pageId}", {
  c: () => import("./variant-c"),
  a: () => import("./variant-a"),
  b: () => import("./variant-b"),
  d: () => import("./variant-d"),
});
`,
  );

  const typeReExport = propsType ? `export type { ${propsType} } from "./${pageId}/_shared";\n` : "";

  writeFileSync(
    filePath,
    `/** Code-split themed variants — see ./${pageId}/ */\nexport { ${designName} } from "./${pageId}";\n${typeReExport}`,
  );

  console.log(`Split ${fileName} -> ${pageId}/`);
}

for (const file of readdirSync(pagesDir)) {
  if (file.endsWith("Pages.tsx")) splitFile(join(pagesDir, file));
}

console.log("Done.");
