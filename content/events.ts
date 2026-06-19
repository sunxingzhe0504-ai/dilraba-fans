import type { FanEvent } from "@/lib/types";

/**
 * 活动信息（品牌 / 公益 / 首映 / 颁奖等）。
 * 仅收录有公开报道或官方渠道可核实的活动；日期与出席情况须可追溯，勿写入未证实信息。
 */
export const events: FanEvent[] = [
  {
    slug: "macalline-brand-2026",
    title: "红星美凯龙品牌活动",
    titleEn: "Macalline Brand Event",
    date: "2026-06-27",
    category: "brand",
    location: "待定",
    locationEn: "TBA",
    summary:
      "工作室六月行程公布，6 月 27 日出席红星美凯龙品牌活动；具体以官方通知为准。",
    summaryEn:
      "Per the studio's June schedule, Dilraba will attend a Macalline brand event on June 27; details subject to official confirmation.",
    featured: true,
  },
  {
    slug: "china-film-tv-night-2026",
    title: "2026 中国影视之夜",
    titleEn: "2026 China Film & TV Night",
    date: "2026-06-15",
    category: "award",
    location: "上海",
    locationEn: "Shanghai",
    summary:
      "时隔 605 天再度亮相公开红毯，身着 Georges Hobeika 2026 春夏高定礼服与 Mikimoto 高级珠宝；凭《利剑·玫瑰》获 CMG 年度推荐电视剧女演员。",
    summaryEn:
      "Returned to the red carpet after 605 days in Georges Hobeika 2026 SS couture with Mikimoto high jewelry; won CMG Recommended TV Actress for Sword Rose.",
    description:
      "活动由中央广播电视总台上海总站、文艺节目中心与央视频联合主办，为上海国际电影节期间的行业活动。红毯造型为 Georges Hobeika 2026 春夏玫红钉珠刺绣鱼尾礼服，搭配 Mikimoto 珍珠珠宝。内场获 CMG 年度推荐电视剧女演员，推荐作品为《利剑·玫瑰》邓妍一角。",
    descriptionEn:
      "Co-hosted by CMG Shanghai and related centers during the Shanghai International Film Festival. She wore a rose-pink Georges Hobeika 2026 SS beaded mermaid gown with Mikimoto pearls, and received CMG Recommended TV Actress for her role as Deng Yan in Sword Rose.",
    featured: true,
  },
  {
    slug: "jiu-chong-tian-filming-2026",
    title: "《九重天》进组拍摄",
    date: "2026-01-12",
    category: "premiere",
    location: "江苏 · 扬州",
    summary:
      "进组腾讯视频 S+ 民国悬疑单元剧《九重天》，拍摄民国单元戏份，搭档尹昉；具体角色以官方公布为准。",
    featured: true,
  },
  {
    slug: "sui-ran-bu-neng-yiqie-trailer-2026",
    title: "《虽然不能同时拥有一切》预告发布",
    date: "2026-04-20",
    category: "premiere",
    location: "爱奇艺",
    summary:
      "微尘剧场 6 集迷你剧释出首支预告，迪丽热巴一人分饰双生卫蓝，改编自《蓝，另一种蓝》。",
    featured: true,
  },
  {
    slug: "jia-ren-birthday-cover-2026",
    title: "《嘉人》六月刊生日封面",
    date: "2026-06-02",
    category: "brand",
    location: "线上发布",
    summary:
      "登上《嘉人》2026 年 6 月生日刊封面「AS SHE IS / 如她所是」，成为中国 90 后首位完成五大女刊全满贯的艺人。",
    featured: true,
  },
  {
    slug: "birthday-2026",
    title: "2026 生日",
    date: "2026-06-03",
    category: "other",
    location: "线上",
    summary:
      "工作室发布生日祝福与六月行程，粉丝以「今天星期巴」等话题送上祝福。",
    featured: true,
  },
  {
    slug: "bai-ri-ti-deng-premiere-2026",
    title: "《白日提灯》开播",
    date: "2026-03-28",
    category: "premiere",
    location: "腾讯视频",
    summary:
      "古装奇幻爱情剧《白日提灯》（原名《慕胥辞》）于腾讯视频独播，迪丽热巴饰演归墟鬼王贺思慕，搭档陈飞宇。",
    featured: true,
  },
  {
    slug: "dior-suzhou-high-jewelry-2026",
    title: "Dior 高级珠宝系列活动（苏州）",
    date: "2026-03-20",
    category: "brand",
    location: "苏州",
    summary:
      "作为 Dior 全球品牌大使，出席品牌于苏州举办的高级珠宝晚宴（VILLA DIOR 臻赏晚宴），佩戴 Belle Dior 系列珠宝亮相。",
    featured: true,
  },
  {
    slug: "li-jian-mei-gui-premiere-2025",
    title: "《利剑·玫瑰》开播",
    date: "2025-07-28",
    category: "premiere",
    location: "央视八套黄金档",
    summary:
      "现实打拐题材剧《利剑·玫瑰》于央视八套黄金档播出，迪丽热巴饰演一线女警邓妍，以扎实表演为现实主义题材添彩。",
    featured: true,
  },
  {
    slug: "xiao-qi-qing-rang-premiere-2025",
    title: "《枭起青壤》播出",
    date: "2025-11-22",
    category: "premiere",
    location: "腾讯视频",
    summary:
      "古装奇幻冒险剧《枭起青壤》于腾讯视频上线，迪丽热巴搭档陈星旭出演聂九罗，于神秘古域展开探险与情感故事。",
    featured: true,
  },
  {
    slug: "dior-paris-fashion-week-2024",
    title: "Dior 巴黎时装周",
    date: "2024-02-27",
    category: "brand",
    location: "巴黎，法国",
    summary:
      "作为 Dior 全球品牌大使受邀出席巴黎时装周 Dior 大秀，以优雅造型亮相国际时尚舞台，展现东方女演员的国际影响力。",
    featured: true,
  },
  {
    slug: "an-le-zhuan-premiere-2023",
    title: "《安乐传》开播",
    date: "2023-07-19",
    category: "premiere",
    location: "线上平台",
    summary:
      "古装传奇剧《安乐传》播出，迪丽热巴一人分饰帝梓元与任安乐，权谋与情义交织，再度挑战古装大女主。",
  },
  {
    slug: "gong-su-premiere-2023",
    title: "《公诉》开播发布会",
    date: "2023-05-16",
    category: "premiere",
    location: "北京",
    summary:
      "出席现实题材法治剧《公诉》开播发布会，分享检察官安旎的创作理念，呼吁公众增强网络安全与法治意识。",
  },
  {
    slug: "weibo-night-2023",
    title: "微博之夜",
    date: "2023-03-25",
    category: "award",
    location: "上海",
    summary:
      "出席微博之夜年度盛典，以精致造型亮相红毯，与业界同仁共同见证年度文娱高光时刻。",
  },
  {
    slug: "henan-flood-relief-2021",
    title: "驰援河南暴雨灾区",
    date: "2021-07-22",
    category: "charity",
    location: "线上",
    summary:
      "河南遭遇特大暴雨灾害期间，以个人名义为灾区捐款驰援，并呼吁粉丝理性关注、共同支援抗灾救援。",
    featured: false,
  },
  {
    slug: "chang-ge-xing-premiere-2021",
    title: "《长歌行》开播发布会",
    date: "2021-03-31",
    category: "premiere",
    location: "北京",
    summary:
      "出席《长歌行》开播发布会，解读大唐郡主李长歌的家国情怀与成长弧光。",
  },
  {
    slug: "unicef-charity-promise",
    title: "公益与慈善关注",
    date: "2019-09-01",
    category: "charity",
    location: "中国",
    summary:
      "长期关注儿童关怀、健康扶贫与生态保护等公益议题，并多次参与慈善晚宴及公益倡导，以行动传递温暖与社会责任。",
  },
];
