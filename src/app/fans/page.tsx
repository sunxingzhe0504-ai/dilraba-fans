import type { Metadata } from "next";
import { getFanCulture, getQuotes } from "@content/index";
import { FansPageDesign } from "@/components/designs/pages/FansPages";

export const metadata: Metadata = {
  title: "粉丝文化",
  description: "Dear Bar 粉丝文化、理性追星指南与同好链接。",
};

export default function FansPage() {
  return (
    <FansPageDesign culture={getFanCulture()} quotes={getQuotes()} />
  );
}
