import type { Metadata } from "next";
import { localizePath } from "./path";
import { siteUrl } from "@/lib/site-url";

/** 详情页 title：英文优先展示，保留中文便于识别 */
export function metaTitle(zh: string, en?: string): string {
  if (en?.trim() && en.trim() !== zh) return en.trim();
  return zh;
}

/** 双语 description，供爬虫与社交预览抓取 */
export function metaDescription(zh: string, en?: string, max = 155): string {
  const zhPart = zh.trim().slice(0, max);
  const enPart = en?.trim().slice(0, max);
  if (!enPart || enPart === zhPart) return zhPart;
  return `${enPart} / ${zhPart}`;
}

export function detailMetadata(opts: {
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  image?: string;
  /** 中文站 canonical 路径，如 /works/foo */
  path: string;
}): Metadata {
  const title = metaTitle(opts.title, opts.titleEn);
  const description = metaDescription(opts.description, opts.descriptionEn);

  return {
    title,
    description,
    alternates: {
      canonical: siteUrl(opts.path),
      languages: {
        "zh-CN": siteUrl(opts.path),
        en: siteUrl(localizePath(opts.path, "en")),
      },
    },
    openGraph: {
      title,
      description,
      ...(opts.image
        ? {
            images: [
              {
                url: opts.image.startsWith("http") ? opts.image : siteUrl(opts.image),
                alt: title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      title,
      description,
      ...(opts.image
        ? { images: [opts.image.startsWith("http") ? opts.image : siteUrl(opts.image)] }
        : {}),
    },
  };
}

export const SITE_METADATA_EN = {
  title: "Dilraba · Fan Info Site",
  description:
    "Unofficial fan site for Dilraba Dilmurat — works, fashion editorials, public events, and positive public information.",
  template: "%s | Dilraba Fan Site",
} as const;
