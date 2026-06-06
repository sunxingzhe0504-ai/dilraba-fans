import type { FanEvent } from "@/lib/types";

/**
 * 活动信息（品牌 / 公益 / 首映 / 颁奖等）。
 * 仅收录正面、公开的活动；以公开报道为准，个别仅知月份的活动日期为近似值。
 */
export const events: FanEvent[] = [
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
    slug: "weibo-night-2026",
    title: "微博之夜 2026",
    date: "2026-06-06",
    category: "award",
    location: "待公布",
    summary:
      "正式官宣出席微博之夜年度盛典，时隔一年再度亮相红毯，与业界同仁共同见证年度文娱高光时刻。",
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
    date: "2026-03-15",
    category: "brand",
    location: "苏州",
    summary:
      "作为 Dior 全球品牌大使，出席品牌于苏州举办的高级珠宝系列活动，以东方韵致的造型亮相，展现高级珠宝的优雅气场。",
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
