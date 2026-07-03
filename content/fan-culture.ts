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
  fanNameNoteEn:
    "Dear Bar is a common name for Dilraba's fan community — warmth, companionship, and walking the path together.",
  nicknames: ["热巴", "胖迪", "迪迪", "热热"],
  fanGuide: [
    "理性追星，文明交流，尊重官方与本人意愿。",
    "不传播未经证实的谣言，不参与网络暴力。",
    "支持正版作品，通过官方渠道获取资讯。",
    "以她的认真与温柔为榜样，成为更好的自己。",
  ],
  fanGuideEn: [
    "Support thoughtfully, communicate respectfully, and honor official channels and her wishes.",
    "Do not spread unverified rumors or engage in online harassment.",
    "Support official releases and get news through verified channels.",
    "Let her earnestness and gentleness inspire you to become a better person.",
  ],
  anniversaries: [
    {
      id: "birthday",
      title: "生日",
      titleEn: "Birthday",
      date: "06-03",
      description: "1992 年 6 月 3 日，新疆乌鲁木齐。",
      descriptionEn: "Born June 3, 1992 in Ürümqi, Xinjiang.",
    },
    {
      id: "debut",
      title: "出道日",
      titleEn: "Debut Day",
      date: "05-07",
      description: "2013 年 5 月 7 日《阿娜尔罕》央视首播，正式以演员身份进入公众视野。",
      descriptionEn: "Anarhan premiered on CCTV May 7, 2013 — her official acting debut.",
    },
    {
      id: "golden-eagle",
      title: "金鹰女神",
      titleEn: "Golden Eagle Goddess",
      date: "10-14",
      description: "2018 年第 12 届中国金鹰电视艺术节金鹰女神。",
      descriptionEn: "Golden Eagle Goddess at the 12th China Golden Eagle TV Art Festival, 2018.",
    },
  ],
  communityLinks: getCommunityLinks(),
};

export const brandHighlights: BrandHighlight[] = [
  {
    slug: "land-rover-defender-2026",
    title: "路虎卫士全驭代言人",
    titleEn: "Land Rover Defender Brand Ambassador",
    date: "2026-06-20",
    summary:
      "6 月 20 日正式官宣成为路虎卫士全驭代言人，7 月出席上海都市营地线下活动。",
    summaryEn:
      "Announced Land Rover Defender brand ambassador June 20; Shanghai Urban Camp event in July.",
    image: IMAGES.portraits.redBlack,
    externalUrl: "https://www.sina.cn/news/detail/5311824748614498.html",
  },
  {
    slug: "macalline-shenyang-2026",
    title: "红星美凯龙 · 沈阳品牌活动",
    titleEn: "Macalline · Shenyang Brand Event",
    date: "2026-06-27",
    summary:
      "6 月 27–28 日出席红星美凯龙沈阳品牌活动，与品牌共同推广家居生活美学。",
    summaryEn:
      "Macalline Shenyang brand event on June 27–28 promoting home lifestyle aesthetics.",
    image: IMAGES.portraits.warmCandid,
  },
  {
    slug: "deeyeo-global-2026",
    title: "德佑全球品牌代言人",
    titleEn: "Deeyeo Global Brand Ambassador",
    date: "2026-06-13",
    summary:
      "6 月 13 日正式官宣成为德佑（Deeyeo）全球品牌代言人，品牌同步启动多地推广。",
    summaryEn:
      "Announced as Deeyeo global brand ambassador on June 13 with a reported nationwide campaign.",
    image: IMAGES.portraits.warmCandid,
    externalUrl: "https://k.sina.com.cn/article_7857201856_1d45362c001906pez6.html",
  },
  {
    slug: "dior-global-ambassador",
    title: "Dior 全球品牌大使",
    titleEn: "Dior Global Brand Ambassador",
    date: "2023-至今",
    summary: "2023 年 2 月官宣 Dior 品牌大使，同年 12 月升任全球品牌大使及全球彩妆及香氛代言人，连续受邀出席巴黎时装周、高级珠宝活动。",
    summaryEn:
      "Ambassador since Feb 2023, elevated to global ambassador Dec 2023 — Paris Fashion Week and high jewelry.",
    image: IMAGES.portraits.redBlack,
    externalUrl: "https://www.dior.cn/zh_cn",
  },
  {
    slug: "dior-paris-2024",
    title: "巴黎时装周 Dior 大秀",
    titleEn: "Paris Fashion Week · Dior",
    date: "2024-02",
    summary: "以优雅造型亮相国际时尚舞台，多套高定造型获广泛关注。",
    summaryEn: "Elegant looks at Dior's international runway show.",
    externalUrl: "https://www.dior.com/en_int/womens-fashion/shows",
  },
  {
    slug: "dior-suzhou-jewelry",
    title: "苏州高级珠宝活动",
    titleEn: "Suzhou High Jewelry Event",
    date: "2026-03-20",
    summary: "出席 Dior 于苏州举办的高级珠宝晚宴，佩戴 Belle Dior 系列珠宝亮相。",
    summaryEn: "Belle Dior jewelry at Dior's Suzhou high jewelry dinner.",
    externalUrl: "https://news.qq.com/rain/a/20260320A08FSQ00",
  },
  {
    slug: "magazine-grand-slam-2026",
    title: "VOGUE 八月刊 · 五大女刊单人正刊全满贯",
    titleEn: "VOGUE August · Big Five Solo-Cover Grand Slam",
    date: "2026-07",
    summary:
      "据时尚媒体报道，已于 7 月 1 日完成《VOGUE》2026 年 8 月刊单人封面拍摄，成为 90 后女演员中首位达成五大女刊单人正刊全满贯的艺人；刊面以杂志官方为准。",
    summaryEn:
      "Fashion media report August 2026 VOGUE China solo cover shoot July 1 — first post-90s actress with all five solo covers; official release TBA.",
    image: IMAGES.portraits.redPearl,
    externalUrl: "https://ent.sina.cn/2026-07-02/detail-inifitan6107944.d.html",
  },
  {
    slug: "magazine-2026",
    title: "2026 开年多刊封面",
    titleEn: "2026 Multi-Cover Run",
    date: "2026-01",
    summary: "ELLE、GRAZIA、BAZAAR 等主流时尚女刊开年封面，时尚影响力持续走高。",
    summaryEn: "ELLE, GRAZIA, BAZAAR and more — fashion momentum into 2026.",
    image: IMAGES.magazines.elle2026,
  },
];

export const charityItems: CharityItem[] = [
  {
    slug: "henan-flood-2021",
    title: "驰援河南暴雨灾区",
    titleEn: "Henan Flood Relief",
    date: "2021-07",
    summary: "河南特大暴雨灾害期间个人捐款驰援，并呼吁粉丝理性关注、共同支援抗灾救援。",
    summaryEn:
      "Personal donation during Henan floods; urged fans to support relief thoughtfully.",
    externalUrl: OFFICIAL_CHANNELS.weibo.studio.href,
  },
  {
    slug: "children-care",
    title: "儿童关怀与公益倡导",
    titleEn: "Children's Welfare & Charity Advocacy",
    date: "长期",
    dateEn: "Ongoing",
    summary: "长期关注儿童关怀、健康扶贫等公益议题，多次参与慈善晚宴及公益倡导活动。",
    summaryEn:
      "Long-term focus on children's welfare and poverty alleviation; frequent charity gala participation.",
  },
  {
    slug: "ecology",
    title: "生态保护关注",
    titleEn: "Ecological Conservation",
    date: "长期",
    dateEn: "Ongoing",
    summary: "关注生态保护等议题，以公众人物影响力传递社会责任与温暖。",
    summaryEn:
      "Advocates ecological conservation and social responsibility through public influence.",
  },
];

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-07-03",
    items: [
      "补充路虎卫士全驭代言人（6/20）、上海都市营地活动（7/3）与 VOGUE 八月刊单人封面拍摄（7/1）",
      "修正嘉人六月刊、德佑官宣等条目中「全满贯」「百城大屏」等未经核实的表述",
      "新增路虎与 VOGUE 全满贯专题长文；荣誉与时间轴同步更新",
    ],
    itemsEn: [
      "Added Land Rover ambassador (Jun 20), Shanghai Urban Camp (Jul 3), and VOGUE August solo cover shoot (Jul 1)",
      "Corrected unverified claims such as premature grand slam and \"100-city screens\" in Deeyeo entries",
      "New Land Rover and VOGUE grand slam story features; honors and timeline updated",
    ],
  },
  {
    date: "2026-07-02",
    items: [
      "待播页倒计时徽章；首页期待清单条；作品页观影清单与追光成就系统",
      "粉丝页台词壁纸生成器；时尚页红毯时光轴；生日季花瓣特效",
    ],
    itemsEn: [
      "Upcoming countdown badges; works watchlist and achievement badges",
      "Quote wallpaper maker on fans page; red carpet timeline on fashion; birthday petals",
    ],
  },
  {
    date: "2026-07-02",
    items: [
      "首页新增每日一言与追光日历倒计时，粉丝页接入纪念日全景与追光数字",
      "图库支持 Lightbox 全屏预览与键盘左右切换；粉丝页新增「角色猜猜看」互动小游戏",
    ],
    itemsEn: [
      "Home: daily quote and anniversary countdown; fans page milestones and full calendar",
      "Gallery lightbox with keyboard navigation; character guessing quiz on the fans page",
    ],
  },
  {
    date: "2026-06-30",
    items: [
      "专题模块完善：标签筛选、Article JSON-LD、详情页更多推荐",
      "时尚页接入时尚专题条；作品/杂志/动态/活动四类详情页关联专题",
      "新增嘉人全满贯、ELLE 开季刊、Dior 苏州高珠等专题长文",
    ],
    itemsEn: [
      "Stories: tag filters, Article JSON-LD, and related recommendations on detail pages",
      "Fashion page story strip; related stories on work/magazine/news/event detail pages",
      "New features: Marie Claire grand slam, ELLE opener, Dior Suzhou high jewelry",
    ],
  },
  {
    date: "2026-06-30",
    items: [
      "新增专题长文模块 /stories：活动回顾、杂志专题与 Markdown 正文",
      "URL 级英文路由 /en/* 与 hreflang；首页专题条、动态分类筛选",
      "构建时 WebP 优化；全站内页 ContentImage 覆盖；RSS 纳入专题条目",
      "动态/活动/杂志详情页关联专题；修正联系反馈 GitHub Issues 链接",
    ],
    itemsEn: [
      "New /stories long-form features: event recaps, magazine features, Markdown body",
      "URL-level /en/* routes with hreflang; home story strip and news category filters",
      "Build-time WebP; ContentImage site-wide; RSS now includes story entries",
      "Related stories on news/event/magazine detail pages; fixed GitHub Issues feedback URL",
    ],
  },
  {
    date: "2026-06-19",
    items: [
      "详情页可视化面包屑导航；作品/活动页展示关联动态",
      "角色/杂志详情 JSON-LD；全详情页 canonical URL；首页双语 SEO",
    ],
    itemsEn: [
      "Visual breadcrumb nav on detail pages; related news on work and event pages",
      "Character/magazine JSON-LD; canonical URLs on all detail pages; home page bilingual SEO",
    ],
  },
  {
    date: "2026-06-19",
    items: [
      "列表页双语 SEO metadata 统一；sitemap 按内容日期更新 lastModified",
      "全站 WebSite / Person JSON-LD；作品、动态、活动详情页结构化数据与面包屑",
    ],
    itemsEn: [
      "Bilingual list-page SEO metadata; sitemap lastModified from content dates",
      "Site-wide WebSite/Person JSON-LD; structured data and breadcrumbs on key detail pages",
    ],
  },
  {
    date: "2026-06-19",
    items: [
      "详情页 SEO 双语 metadata；新增英文 RSS /feed-en.xml",
      "全站搜索随语言切换，角色/视频/图库英译可检索",
      "根 layout 与 manifest 补充英文描述与 RSS  alternate",
    ],
    itemsEn: [
      "Bilingual SEO metadata on detail pages; English RSS at /feed-en.xml",
      "Search follows UI locale; EN entries for characters, videos, and gallery",
      "Root layout and manifest English descriptions plus RSS alternates",
    ],
  },
  {
    date: "2026-06-19",
    items: [
      "视频专区英译全覆盖（37 条），含时长「预告」本地化",
      "粉丝文化页英译：追星指南、纪念日与品牌亮点字段补全",
      "新增红星美凯龙沈阳活动视频条目",
    ],
    itemsEn: [
      "Full English for all 37 video entries including Trailer duration label",
      "Fan culture page EN: fan guide, anniversaries, and brand highlight fields",
      "Added Macalline Shenyang event video entry",
    ],
  },
  {
    date: "2026-06-19",
    items: [
      "角色图鉴英译全覆盖（34 位）；图库标题英文词典补全",
      "公益专题接入本地化；慈善条目英译字段",
    ],
    itemsEn: [
      "Full English coverage for all 34 character entries; gallery title dictionary",
      "Charity page localization with English charity item fields",
    ],
  },
  {
    date: "2026-06-19",
    items: [
      "集中英译词典：作品、杂志、角色、语录与品牌亮点全覆盖",
      "动态/活动/图库/视频交叉链接补全；历史活动条目英译回填",
      "荣誉与时间轴英文摘要补充，便于英文站浏览",
    ],
    itemsEn: [
      "Centralized EN translation maps for works, magazines, characters, quotes, and brand highlights",
      "Cross-links for news/events/gallery/videos; English backfill for historical events",
      "English summaries for honors and timeline entries",
    ],
  },
  {
    date: "2026-06-19",
    items: [
      "补充德佑全球代言人官宣（6/13）、沈阳红星美凯龙品牌活动（6/27–28）",
      "完善中国影视之夜、嘉人全满贯等条目英译与外链；视频区新增红毯回顾与双生预告",
      "更新《少林女足》暑期档信息与 2026 时间轴",
    ],
    itemsEn: [
      "Added Deeyeo global ambassador (Jun 13) and Macalline Shenyang event (Jun 27–28)",
      "Enhanced English fields and links for China Film & TV Night; new red carpet and twin-trailer videos",
      "Updated Shaolin Women's Soccer summer release note and 2026 timeline",
    ],
  },
  {
    date: "2026-06-19",
    items: [
      "全站中英双语：导航栏语言切换，内容字段与 UI 文案同步本地化",
      "补充 2026 中国影视之夜红毯与 CMG 年度推荐女演员、六月红星美凯龙行程",
      "新增 sitemap.xml、robots.txt 与 Web App Manifest，完善 SEO 与社交分享预览",
    ],
    itemsEn: [
      "Site-wide zh/en toggle with localized content fields and UI copy",
      "Added 2026 China Film & TV Night red carpet, CMG Recommended TV Actress, and June Macalline schedule",
      "Added sitemap.xml, robots.txt, and Web App Manifest for SEO and social previews",
    ],
  },
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
