import type { Quote, FanCulture, BrandHighlight, CharityItem, ChangelogEntry } from "@/lib/types";
import { IMAGES } from "./images";
import { getCommunityLinks, OFFICIAL_CHANNELS } from "./official-channels";

export const quotes: Quote[] = [
  {
    id: "q1",
    text: "认真生活，用心演戏，温柔对待这个世界。",
    source: "公开采访",
    context: "interview",
  },
  {
    id: "q2",
    text: "追光而遇，沐光而行。",
    source: "粉丝共勉",
    context: "event",
  },
  {
    id: "q3",
    text: "我已经跑向你了，这一次你可以慢慢走。",
    source: "《你是我的荣耀》· 乔晶晶",
    context: "drama",
  },
  {
    id: "q4",
    text: "愿我所爱之人，余生平安。",
    source: "《与君初相识》· 纪云禾",
    context: "drama",
  },
  {
    id: "q5",
    text: "希望展示出新时代女检察官的职业风采。",
    source: "《公诉》宣传期采访",
    context: "interview",
  },
  {
    id: "q6",
    text: "人生的答案不在「如果」的彼岸，而在「当下」的自我觉醒之中。",
    source: "《虽然不能同时拥有一切》· 卫蓝",
    context: "drama",
  },
];

export const fanCulture: FanCulture = {
  fanName: "Dear Bar",
  fanNameNote: "「Dear Bar」是迪丽热巴粉丝群体的常用称呼之一，寓意温柔、陪伴与同路而行。",
  nicknames: ["热巴", "胖迪", "迪迪", "热热"],
  fanGuide: [
    "理性追星，文明交流，尊重官方与本人意愿。",
    "不传播未经证实的谣言，不参与网络暴力。",
    "支持正版作品，通过官方渠道获取资讯。",
    "以她的认真与温柔为榜样，成为更好的自己。",
  ],
  anniversaries: [
    { id: "birthday", title: "生日", date: "06-03", description: "1992 年 6 月 3 日，新疆乌鲁木齐。" },
    { id: "debut", title: "出道日", date: "05-07", description: "2013 年 5 月 7 日《阿娜尔罕》央视首播，正式以演员身份进入公众视野。" },
    { id: "golden-eagle", title: "金鹰女神", date: "10-14", description: "2018 年第 12 届中国金鹰电视艺术节金鹰女神。" },
  ],
  communityLinks: getCommunityLinks(),
};

export const brandHighlights: BrandHighlight[] = [
  {
    slug: "dior-global-ambassador",
    title: "Dior 全球品牌大使",
    date: "2023-至今",
    summary: "2023 年 2 月官宣 Dior 品牌大使，同年 12 月升任全球品牌大使及全球彩妆及香氛代言人，连续受邀出席巴黎时装周、高级珠宝活动。",
    image: IMAGES.portraits.redBlack,
    externalUrl: "https://www.dior.cn/zh_cn",
  },
  {
    slug: "dior-paris-2024",
    title: "巴黎时装周 Dior 大秀",
    date: "2024-02",
    summary: "以优雅造型亮相国际时尚舞台，多套高定造型获广泛关注。",
    externalUrl: "https://www.dior.com/en_int/womens-fashion/shows",
  },
  {
    slug: "dior-suzhou-jewelry",
    title: "苏州高级珠宝活动",
    date: "2026-03-20",
    summary: "出席 Dior 于苏州举办的高级珠宝晚宴，佩戴 Belle Dior 系列珠宝亮相。",
    externalUrl: "https://news.qq.com/rain/a/20260320A08FSQ00",
  },
  {
    slug: "magazine-grand-slam-2026",
    title: "嘉人六月刊 · 五大女刊全满贯",
    date: "2026-06",
    summary: "登上《嘉人》2026 年 6 月生日刊封面，成为中国 90 后首位完成五大女刊全满贯的艺人。",
    image: IMAGES.portraits.redPearl,
    externalUrl: "https://www.marieclaire.com.cn/",
  },
  {
    slug: "magazine-2026",
    title: "2026 开年多刊封面",
    date: "2026-01",
    summary: "ELLE、GRAZIA、BAZAAR 等主流时尚女刊开年封面，时尚影响力持续走高。",
    image: IMAGES.magazines.elle2026,
  },
];

export const charityItems: CharityItem[] = [
  {
    slug: "henan-flood-2021",
    title: "驰援河南暴雨灾区",
    date: "2021-07",
    summary: "河南特大暴雨灾害期间个人捐款驰援，并呼吁粉丝理性关注、共同支援抗灾救援。",
    externalUrl: OFFICIAL_CHANNELS.weibo.studio.href,
  },
  {
    slug: "children-care",
    title: "儿童关怀与公益倡导",
    date: "长期",
    summary: "长期关注儿童关怀、健康扶贫等公益议题，多次参与慈善晚宴及公益倡导活动。",
  },
  {
    slug: "ecology",
    title: "生态保护关注",
    date: "长期",
    summary: "关注生态保护等议题，以公众人物影响力传递社会责任与温暖。",
  },
];

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-06-07",
    items: [
      "移除无法核实的「微博之夜 2026」活动与动态条目",
      "校正 Dior 苏州高珠活动日期为 2026-03-20，并补充可查证报道链接",
      "移除未核实预约量表述；嘉人六月刊动态改为链至官方刊物页面",
    ],
  },
  {
    date: "2026-06-04",
    items: [
      "校正官方渠道链接：工作室微博 6269329742、微博之夜 1677969704、抖音个人主页",
      "新增 content/official-channels.ts 统一管理官方 URL",
    ],
  },
  {
    date: "2026-06-04",
    items: [
      "新增动态详情页 /latest/[slug] 与角色详情页 /characters/[slug]",
      "待播「一键开播」：content/work-release.ts 改 live: true 即可",
      "RSS / 搜索 / 首页动态条统一链至站内详情",
    ],
  },
  {
    date: "2026-06-04",
    items: [
      "全面推进：作品↔角色交叉链接、动态站内跳转、首页精选视频区",
      "活动/杂志详情页接入四套百变风格；时尚页整合封面与时尚动态",
      "视频区补全十里桃花/克拉/烈火/与君等；图库与荣誉时间轴扩充",
      "角色图鉴新增《九重天》待官宣条目；修复语录与更新日志排序",
    ],
  },
  {
    date: "2026-06-08",
    items: [
      "校正《九重天》为民国悬疑单元剧，补充进组与搭档信息",
      "完善《虽然不能同时拥有一切》双生卫蓝设定与预告动态",
      "角色图鉴新增《枕上书》白凤九条目",
    ],
  },
  {
    date: "2026-06-07",
    items: [
      "维基年表补全：虽然不能同时拥有一切、九重天、慢游全世界 S1/S2",
      "角色图鉴扩充至 30+：周放、宋子涵、苏溢青、公孙丽及电影角色等",
      "《日月》《少林女足》《虽然不能同时拥有一切》替换正式海报",
    ],
  },
  {
    date: "2026-06-06",
    items: [
      "补全早期作品：《微时代》《风中奇缘》；《开始推理吧》拆分为第二、三季",
      "角色图鉴新增吴安珀、骊姬、李慧珍、烈如歌、凌凌七",
      "替换《逆光之恋》《创造营 2019》正式海报；修正创造营豆瓣条目",
      "视频专区与图库补充微时代、丝路季、开推等条目",
    ],
  },
  {
    date: "2026-06-04",
    items: [
      "新增「视频专区」与 RSS 订阅（/feed.xml）",
      "最新 / 图库 / 角色 / 待播 / 时尚 / 公益 / 粉丝文化 / 更新日志 接入四套百变风格",
      "新增「最新动态」「图库壁纸」「角色图鉴」「待播专区」页面",
      "新增 Dior 时尚专题、公益专题、粉丝文化、更新日志",
      "全站搜索、杂志/活动详情页、作品详情信息增强",
    ],
  },
  {
    date: "2026-06-03",
    items: [
      "四套百变风格延伸至全部内页",
      "内容准确性全面校对（作品/杂志/活动）",
      "图片本地化托管",
    ],
  },
];
