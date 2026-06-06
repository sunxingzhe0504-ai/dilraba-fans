import type { ExternalLink } from "@/lib/types";

/**
 * 迪丽热巴官方渠道（以维基百科条目及平台认证账号为准，2026-06 核对）
 *
 * 说明：
 * - 工作室微博 UID 为 6269329742（嘉行迪丽热巴工作室），非 6864223880
 * - 微博之夜官方 UID 为 1677969704，非 1642591402
 * - 抖音个人号为 Dear-迪丽热巴（抖音号 274110380）
 */
export const OFFICIAL_CHANNELS = {
  weibo: {
    personal: {
      label: "Dear-迪丽热巴",
      href: "https://weibo.com/u/1669879400",
      note: "官方微博",
    },
    studio: {
      label: "嘉行迪丽热巴工作室",
      href: "https://weibo.com/u/6269329742",
      note: "工作室官方微博",
    },
    night: {
      label: "微博之夜",
      href: "https://weibo.com/u/1677969704",
    },
  },
  douyin: {
    personal: {
      label: "Dear-迪丽热巴",
      href: "https://www.douyin.com/user/MS4wLjABAAAAWxLpO0Q437qGFpnEKBIIaU5-xOj2yAhH3MNJi-AUY04",
      shortId: "274110380",
    },
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/dilrabaxx63/",
  },
  dior: {
    label: "Dior 中国官网",
    href: "https://www.dior.cn/zh_cn",
  },
} as const;

const W = OFFICIAL_CHANNELS.weibo;
const D = OFFICIAL_CHANNELS.douyin;

export function linkWeiboPersonal(): ExternalLink {
  return { label: W.personal.label, href: W.personal.href, kind: "official" };
}

export function linkWeiboStudio(): ExternalLink {
  return { label: W.studio.label, href: W.studio.href, kind: "official" };
}

export function linkWeiboNight(): ExternalLink {
  return { label: W.night.label, href: W.night.href, kind: "official" };
}

export function linkDouyinPersonal(): ExternalLink {
  return { label: D.personal.label, href: D.personal.href, kind: "official" };
}

export function linkInstagram(): ExternalLink {
  return {
    label: OFFICIAL_CHANNELS.instagram.label,
    href: OFFICIAL_CHANNELS.instagram.href,
    kind: "official",
  };
}

export function linkDiorCn(): ExternalLink {
  return {
    label: OFFICIAL_CHANNELS.dior.label,
    href: OFFICIAL_CHANNELS.dior.href,
    kind: "official",
  };
}

/** 页脚 / 关于页展示的官方链接列表 */
export function getOfficialLinksForSite() {
  return [
    { label: "官方微博", href: W.personal.href },
    { label: "工作室微博", href: W.studio.href },
    { label: "抖音", href: D.personal.href },
    { label: "Instagram", href: OFFICIAL_CHANNELS.instagram.href },
  ];
}

/** 粉丝文化页的社区链接 */
export function getCommunityLinks() {
  return [
    { label: W.personal.label, href: W.personal.href, note: W.personal.note },
    { label: W.studio.label, href: W.studio.href, note: W.studio.note },
    { label: D.personal.label, href: D.personal.href, note: "官方抖音" },
    { label: "Dior 中国官网", href: OFFICIAL_CHANNELS.dior.href, note: "全球品牌大使相关资讯" },
  ];
}
