/** One-off: replace next/link with LocaleLink in components. */
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = "src";

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".tsx") && !p.includes("LocaleLink.tsx")) {
      let c = readFileSync(p, "utf8");
      if (c.includes('import Link from "next/link"')) {
        c = c.replace(
          'import Link from "next/link";',
          'import { LocaleLink as Link } from "@/components/LocaleLink";',
        );
        writeFileSync(p, c);
        console.log("updated", p);
      }
    }
  }
}

walk(root);
