"use client";

import { useCallback, useState } from "react";
import { Check, Link2, Share2 } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { assetPath } from "@/lib/asset-path";
import { buildShareTitle, buildWeiboShareUrl } from "@/lib/share";
import { siteUrl } from "@/lib/site-url";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  /** Short description for Weibo preset text */
  description?: string;
  /** Public image path, e.g. /images/works/foo.jpg */
  imagePath?: string;
  className?: string;
};

function WeiboIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M9.82 21.64c-4.3 0-7.82-2.4-7.82-5.36 0-1.74.98-3.28 2.5-4.22-.16-.5-.25-1.03-.25-1.58 0-3.36 3.58-6.08 8-6.08 1.1 0 2.14.18 3.08.5.72-2.14 2.86-3.7 5.42-3.7.58 0 1.14.08 1.68.22C20.5 2.42 18.9 2 17.18 2 12.6 2 8.82 4.72 8.82 8.08c0 .5.08.98.22 1.44C6.98 10.42 6 12.1 6 14c0 3.86 4.4 7 9.82 7 1.42 0 2.76-.26 3.96-.72-.5.98-1.58 1.64-2.82 1.64-.36 0-.7-.06-1.02-.16.62.36 1.34.56 2.1.56 2.5 0 4.52-1.72 4.52-3.84 0-1.28-.78-2.42-2-3.16 1.04.2 2 .62 2.82 1.2-.7-2.08-2.86-3.6-5.46-3.6z" />
    </svg>
  );
}

export function ShareButtons({ title, description, imagePath, className }: Props) {
  const t = useT();
  const [copied, setCopied] = useState(false);

  const pageUrl = typeof window !== "undefined" ? window.location.href : siteUrl("/");
  const shareTitle = buildShareTitle(
    title,
    description?.slice(0, 80) || t("share.tagline"),
  );
  const picUrl = imagePath ? siteUrl(assetPath(imagePath)) : undefined;

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard denied — ignore */
    }
  }, [pageUrl]);

  const weiboUrl = buildWeiboShareUrl({ url: pageUrl, title: shareTitle, pic: picUrl });

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)} role="group" aria-label={t("share.label")}>
      <span className="mr-1 inline-flex items-center gap-1 text-xs text-ink-mute">
        <Share2 size={12} aria-hidden />
        {t("share.label")}
      </span>
      <a
        href={weiboUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-wine hover:text-wine"
      >
        <WeiboIcon className="h-3.5 w-3.5" />
        {t("share.weibo")}
      </a>
      <button
        type="button"
        onClick={onCopy}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-paper px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-wine hover:text-wine"
      >
        {copied ? <Check size={14} aria-hidden /> : <Link2 size={14} aria-hidden />}
        {copied ? t("share.copied") : t("share.copyLink")}
      </button>
    </div>
  );
}
