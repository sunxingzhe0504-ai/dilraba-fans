"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Container } from "@/components/Container";
import { useT } from "@/components/LocaleProvider";

export default function NotFound() {
  const t = useT();

  return (
    <Container className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-[10rem] font-light leading-none text-blush-deep/80">404</p>
        <h1 className="zh-display mt-2 text-3xl text-wine">{t("notFound.title")}</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          {t("notFound.description")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-wine px-6 py-3 text-sm text-paper transition-colors hover:bg-wine-deep"
          >
            <Home size={16} />
            {t("common.backHome")}
          </Link>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm text-ink-soft transition-colors hover:border-wine hover:text-wine"
          >
            <ArrowLeft size={16} />
            {t("common.browseWorks")}
          </Link>
        </div>
        <p className="mt-8 text-xs text-ink-mute">
          {t("notFound.searchHint")}
          <Search className="ml-1 inline" size={12} aria-hidden />
        </p>
      </div>
    </Container>
  );
}
