import type { Metadata } from "next";
import { getChangelog } from "@content/index";
import { ChangelogPageDesign } from "@/components/designs/pages/ChangelogPages";

export const metadata: Metadata = {
  title: "更新日志",
  description: "迪丽热巴粉丝站更新记录。",
};

export default function ChangelogPage() {
  return <ChangelogPageDesign log={getChangelog()} />;
}
