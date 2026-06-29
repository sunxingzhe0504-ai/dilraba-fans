import type { Story } from "@/lib/types";
import { IMAGES } from "./images";

/** 专题长文（Markdown），活动回顾与深度图文 */
export const stories: Story[] = [
  {
    slug: "china-film-tv-night-2026-recap",
    title: "中国影视之夜 · 红毯与 CMG 年度推荐女演员",
    titleEn: "China Film & TV Night · Red Carpet & CMG Actress Honor",
    date: "2026-06-15",
    summary:
      "时隔 605 天重返公开红毯，Georges Hobeika 高定与 Mikimoto 珠宝亮相；凭《利剑·玫瑰》获 CMG 年度推荐电视剧女演员。",
    summaryEn:
      "Her return to the red carpet after 605 days — Georges Hobeika couture, Mikimoto jewels, and CMG Recommended TV Actress for Sword Rose.",
    cover: IMAGES.portraits.redBlack,
    tags: ["红毯", "荣誉", "CMG"],
    featured: true,
    eventSlug: "china-film-tv-night-2026",
    newsSlug: "china-film-tv-night-2026",
    body: `## 公开亮相

2026 年 6 月 15 日，迪丽热巴出席 **中国影视之夜**，这是她时隔 **605 天** 再次走上公开红毯。

## 造型

- **礼服**：Georges Hobeika 高定  
- **珠宝**：Mikimoto  

## 荣誉

凭借 **《利剑·玫瑰》** 中邓妍一角，获 **CMG 年度推荐电视剧女演员**。

## 说明

以上内容整理自公开报道与现场信息，仅供粉丝交流与欣赏。`,
    bodyEn: `## Public appearance

On June 15, 2026, Dilraba attended **China Film & TV Night** — her return to a public red carpet after **605 days**.

## Look

- **Gown**: Georges Hobeika couture  
- **Jewelry**: Mikimoto  

## Honor

**CMG Recommended TV Actress** for *Sword Rose* (role: Deng Yan).

## Note

Compiled from public reports for fan appreciation only.`,
  },
  {
    slug: "macalline-shenyang-2026-recap",
    title: "红星美凯龙沈阳品牌活动 · 粉丝合唱《追光者》",
    titleEn: "Macalline Shenyang · Fans Sing \"Chaser of Light\"",
    date: "2026-06-28",
    summary:
      "6 月 27–28 日沈阳线下品牌活动，与粉丝温暖互动；现场合唱《追光者》成为广泛传播的治愈瞬间。",
    summaryEn:
      "Macalline brand event in Shenyang, June 27–28 — warm fan interactions and a group sing-along of \"Chaser of Light.\"",
    cover: IMAGES.portraits.warmCandid,
    tags: ["品牌活动", "粉丝互动"],
    featured: true,
    eventSlug: "macalline-brand-2026",
    newsSlug: "macalline-shenyang-2026",
    body: `## 活动概况

据公开现场报道，迪丽热巴于 **6 月 27–28 日** 赴沈阳出席 **红星美凯龙** 品牌活动，与多方向粉丝挥手互动。

## 温暖瞬间

到场粉丝合唱 **《追光者》**，她以亲和状态回应，并提醒粉丝注意防暑、好好爱自己。

## 说明

活动细节以品牌与工作室公开信息为准。`,
    bodyEn: `## Overview

Public reports describe Dilraba at the **Macalline** brand event in Shenyang on **June 27–28**, greeting fans from multiple directions.

## Warm moment

Fans sang **"Chaser of Light"** together; she responded warmly and reminded everyone to stay cool and love themselves first.

## Note

Event details follow official brand and studio releases.`,
  },
];
