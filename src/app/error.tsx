"use client";

import { useEffect } from "react";
import { LocaleLink as Link } from "@/components/LocaleLink";
import { useT } from "@/components/LocaleProvider";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useT();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-main flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="kicker">{t("error.kicker")}</p>
      <h1 className="display mt-4 text-3xl text-wine-deep">{t("error.title")}</h1>
      <p className="mt-4 max-w-md text-sm text-ink-soft">{t("error.subtitle")}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button type="button" onClick={reset} className="btn-primary">
          {t("error.retry")}
        </button>
        <Link href="/" className="btn-ghost">
          {t("common.backHome")}
        </Link>
      </div>
    </div>
  );
}
