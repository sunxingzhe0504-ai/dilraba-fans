import type { Metadata } from "next";
import { metaDescription, metaTitle } from "./metadata";

type PageSeo = {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
};

export const PAGE_SEO = {
  works: {
    title: "作品库",
    titleEn: "Filmography",
    description: "迪丽热巴影视作品、电影与综艺作品一览。",
    descriptionEn: "Television, film, and variety — Dilraba's complete on-screen archive.",
  },
  latest: {
    title: "最新动态",
    titleEn: "Latest Updates",
    description: "迪丽热巴近期作品、时尚、活动与公益动态。",
    descriptionEn: "Recent works, fashion, events, and charity news from public sources.",
  },
  events: {
    title: "活动资讯",
    titleEn: "Events",
    description: "迪丽热巴公开活动、品牌合作、公益慈善与颁奖典礼资讯。",
    descriptionEn: "Brand events, red carpets, charity, and award show appearances.",
  },
  magazine: {
    title: "杂志封面",
    titleEn: "Magazine Covers",
    description: "迪丽热巴时尚杂志封面与大片一览。",
    descriptionEn: "Fashion magazine covers and editorial shoots.",
  },
  gallery: {
    title: "图库 · 壁纸",
    titleEn: "Gallery · Wallpapers",
    description: "迪丽热巴精选写真、杂志大片与壁纸下载。",
    descriptionEn: "Portraits, editorials, and downloadable wallpapers.",
  },
  characters: {
    title: "角色图鉴",
    titleEn: "Character Guide",
    description: "迪丽热巴经典荧幕角色：白凤九、乔晶晶、李长歌、贺思慕等。",
    descriptionEn: "Iconic roles including Bai Fengjiu, Qiao Jingjing, Li Changge, and He Simu.",
  },
  videos: {
    title: "视频专区",
    titleEn: "Videos",
    description: "迪丽热巴预告、MV、工作室与活动现场视频 — 跳转公开平台观看。",
    descriptionEn: "Trailers, MVs, studio clips, and event videos — links to official platforms.",
  },
  upcoming: {
    title: "待播专区",
    titleEn: "Upcoming",
    description: "迪丽热巴待播电视剧、待映电影与筹备中项目。",
    descriptionEn: "Upcoming TV series, films, and projects in production.",
  },
  fashion: {
    title: "时尚 · Dior",
    titleEn: "Fashion · Dior",
    description: "迪丽热巴 Dior 全球品牌大使与时尚高光时刻。",
    descriptionEn: "Dior global ambassador highlights — covers, couture, and red carpets.",
  },
  charity: {
    title: "公益专题",
    titleEn: "Charity",
    description: "迪丽热巴公益慈善与社会责任相关公开信息。",
    descriptionEn: "Charity advocacy and social responsibility — public information.",
  },
  fans: {
    title: "粉丝文化",
    titleEn: "Fan Culture",
    description: "Dear Bar 粉丝文化、理性追星指南与同好链接。",
    descriptionEn: "Dear Bar fan culture, thoughtful fandom guide, and community links.",
  },
  about: {
    title: "关于她",
    titleEn: "About Her",
    description: "了解迪丽热巴的公开简介、成长历程与代表荣誉。",
    descriptionEn: "Public biography, career timeline, and representative honors.",
  },
  changelog: {
    title: "更新日志",
    titleEn: "Changelog",
    description: "迪丽热巴粉丝站功能与内容更新记录。",
    descriptionEn: "Site feature and content maintenance log.",
  },
  contact: {
    title: "联系与反馈",
    titleEn: "Contact & Feedback",
    description: "素材版权下架、内容纠错与站点反馈渠道。",
    descriptionEn: "Copyright takedown requests, corrections, and site feedback.",
  },
  home: {
    title: "迪丽热巴 · 粉丝资讯站",
    titleEn: "Dilraba · Fan Info Site",
    description:
      "温柔有力量，追光而行。汇聚迪丽热巴影视作品、时尚杂志与公开活动的非官方粉丝资讯站。",
    descriptionEn:
      "Unofficial fan site — works, fashion editorials, public events, and positive news about Dilraba Dilmurat.",
  },
} as const satisfies Record<string, PageSeo>;

export type PageSeoKey = keyof typeof PAGE_SEO;

export function listPageMetadata(
  key: PageSeoKey,
  extra?: Metadata,
): Metadata {
  const p = PAGE_SEO[key];
  const title = metaTitle(p.title, p.titleEn);
  const description = metaDescription(p.description, p.descriptionEn);

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
    ...extra,
  };
}
