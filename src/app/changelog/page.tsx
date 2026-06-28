import { getChangelog } from "@content/index";
import { ChangelogPageDesign } from "@/components/designs/pages/ChangelogPages";
import { listPageMetadata } from "@/lib/i18n/page-metadata";

export const metadata = listPageMetadata("changelog");

export default function ChangelogPage() {
  return <ChangelogPageDesign log={getChangelog()} />;
}
