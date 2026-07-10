import type { FanEvent } from "@/lib/types";

/**
 * 活动信息（品牌 / 公益 / 首映 / 颁奖等）。
 * 仅收录有公开报道或官方渠道可核实的活动；日期与出席情况须可追溯，勿写入未证实信息。
 */
export const events: FanEvent[] = [
  {
    slug: "gongfu-nvzu-long-trailer-2026",
    title: "《功夫女足》首支长预告发布",
    titleEn: "Kung Fu Women's Soccer · Full Trailer Release",
    date: "2026-07-10",
    category: "premiere",
    location: "线上发布",
    locationEn: "Online",
    summary:
      "上映前一日发布首支完整长预告；据公开报道预售票房已突破 6000 万元。",
    summaryEn:
      "Full trailer one day before release; reported presales passed 60M yuan.",
    description:
      "7 月 10 日片方释出完整长预告。公开报道提及迪丽热巴为角色增重 8 公斤并完成三个月足球特训。预售与口碑数据以正式上映后为准。",
    descriptionEn:
      "Full trailer on July 10. Reports note 8 kg weight gain and three months of football training. Box office follows official release.",
    featured: true,
  },
  {
    slug: "gongfu-nvzu-roadshow-2026",
    title: "《功夫女足》路演宣传",
    titleEn: "Kung Fu Women's Soccer · Roadshow",
    date: "2026-07-09",
    category: "premiere",
    location: "多城（以片方官宣为准）",
    locationEn: "Multiple cities (official schedule TBA)",
    summary:
      "据公开报道启动多城路演宣传，为迪丽热巴时隔八年后再参与的电影路演。",
    summaryEn:
      "Reported multi-city roadshows — Dilraba's first film roadshow in eight years.",
    description:
      "媒体报道《功夫女足》于上映前启动路演宣传。片方曾提醒勿轻信非官方渠道售票信息，具体场次以官方发布为准。",
    descriptionEn:
      "Media report pre-release roadshows. Studio warned against unofficial ticket sales. Schedules follow official releases.",
    featured: true,
  },
  {
    slug: "gongfu-nvzu-dingdang-2026",
    title: "《功夫女足》定档上映",
    titleEn: "Kung Fu Women's Soccer · Release Date Locked",
    date: "2026-07-06",
    category: "premiere",
    location: "全国院线",
    locationEn: "Nationwide cinemas",
    summary:
      "周星驰编剧执导的《功夫女足》定档 7 月 11 日全国上映并开启预售，迪丽热巴饰前锋钰珑。",
    summaryEn:
      "Stephen Chow's Kung Fu Women's Soccer opens July 11 nationwide — Dilraba as forward Yu Long.",
    description:
      "7 月 6 日片方发布定档海报与预告，确认 7 月 11 日全国上映。领衔主演为张小斐、迪丽热巴、张艺兴，刘嘉玲、佐藤健等特别出演。上映信息以片方与院线官宣为准。",
    descriptionEn:
      "Release locked July 11 on July 6 with poster and trailer. Led by Zhang Xiaofei, Dilraba, and Lay Zhang. Follow official announcements.",
    featured: true,
  },
  {
    slug: "ambrosial-xian-2026",
    title: "安慕希夏日冰雪城 · 西安",
    titleEn: "Ambrosial Summer Ice City · Xi'an",
    date: "2026-07-05",
    category: "brand",
    location: "陕西 · 西安",
    locationEn: "Xi'an, Shaanxi",
    summary:
      "出席安慕希西安线下品牌活动，AADNEVIK 冰蓝色高定裙装亮相夏日冰雪城主题现场。",
    summaryEn:
      "Ambrosial brand event in Xi'an — AADNEVIK ice-blue couture at the Summer Ice City theme.",
    description:
      "据公开现场报道，迪丽热巴于 7 月 5 日赴西安出席安慕希品牌活动，造型搭配 Messika 与 FENG J 珠宝。活动细节以品牌官方发布为准。",
    descriptionEn:
      "Public reports describe the July 5 Xi'an event with Messika and FENG J jewelry. Details follow Ambrosial releases.",
    featured: true,
  },
  {
    slug: "land-rover-urban-camp-2026",
    title: "路虎卫士都市营地 · 上海",
    titleEn: "Land Rover Defender Urban Camp · Shanghai",
    date: "2026-07-03",
    category: "brand",
    location: "上海 · 西岸星美术馆",
    locationEn: "West Bund Star Museum of Art, Shanghai",
    summary:
      "出席路虎卫士都市营地线下活动，身着 Julien Fournié 特别定制白色套装亮相，为官宣全驭代言人后首次公开线下活动。",
    summaryEn:
      "Land Rover Defender Urban Camp in a Julien Fournié custom white suit — first public offline appearance since the ambassador announcement.",
    description:
      "据公开现场报道，迪丽热巴于 7 月 3 日出席上海西岸星美术馆路虎卫士都市营地活动。都市营地于 7 月 4 日起对公众开放，造型与活动细节以品牌官方发布为准。",
    descriptionEn:
      "Public reports describe the July 3 Urban Camp at West Bund Star Museum of Art. The camp opened to the public on July 4. Details follow official Land Rover releases.",
    featured: true,
  },
  {
    slug: "land-rover-defender-2026",
    title: "路虎卫士全驭代言人官宣",
    titleEn: "Land Rover Defender Brand Ambassador Launch",
    date: "2026-06-20",
    category: "brand",
    location: "线上发布",
    locationEn: "Online",
    summary:
      "正式官宣成为路虎卫士全驭代言人，与品牌共同推广卫士系列车型。",
    summaryEn:
      "Officially announced as Land Rover Defender brand ambassador.",
    featured: true,
  },
  {
    slug: "macalline-brand-2026",
    title: "红星美凯龙品牌活动",
    titleEn: "Macalline Brand Event",
    date: "2026-06-27",
    category: "brand",
    location: "辽宁 · 沈阳",
    locationEn: "Shenyang, Liaoning",
    summary:
      "出席红星美凯龙沈阳线下品牌活动，与到场粉丝互动；据报道现场粉丝合唱《追光者》，她以亲和状态回应并提醒注意防暑。",
    summaryEn:
      "Attended a Macalline brand event in Shenyang with warm fan interactions; fans sang \"Chaser of Light\" per media reports.",
    description:
      "工作室六月行程公布后，迪丽热巴于 6 月 27 日至 28 日赴沈阳出席红星美凯龙品牌活动。公开现场报道显示，她与各方向粉丝互动，并叮嘱「无论如何爱自己永远都是第一步」。",
    descriptionEn:
      "Following the studio's June schedule, Dilraba attended the Macalline event in Shenyang on June 27–28, sharing warm interactions with fans on site.",
    featured: true,
  },
  {
    slug: "deeyeo-global-2026",
    title: "德佑全球品牌代言人官宣",
    titleEn: "Deeyeo Global Brand Ambassador Launch",
    date: "2026-06-13",
    category: "brand",
    location: "线上发布",
    locationEn: "Online",
    summary:
      "正式官宣成为德佑（Deeyeo）全球品牌代言人，品牌同步启动多地推广与联名周边。",
    summaryEn:
      "Officially announced as Deeyeo global brand ambassador with a reported multi-city campaign and merchandise rollout.",
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
    titleEn: "Nine Heavens — Filming Begins",
    date: "2026-01-12",
    category: "premiere",
    location: "江苏 · 扬州",
    locationEn: "Yangzhou, Jiangsu",
    summary:
      "进组腾讯视频 S+ 民国悬疑单元剧《九重天》，拍摄民国单元戏份，搭档尹昉；具体角色以官方公布为准。",
    summaryEn:
      "Joined Tencent S+ republic-era suspense anthology Nine Heavens with Yin Fang; role details TBA.",
    featured: true,
  },
  {
    slug: "sui-ran-bu-neng-yiqie-trailer-2026",
    title: "《虽然不能同时拥有一切》预告发布",
    titleEn: "You Can't Have Everything — Trailer Release",
    date: "2026-04-20",
    category: "premiere",
    location: "爱奇艺",
    locationEn: "iQiyi",
    summary:
      "微尘剧场 6 集迷你剧释出首支预告，迪丽热巴一人分饰双生卫蓝，改编自《蓝，另一种蓝》。",
    summaryEn:
      "iQiyi Micro Drama released the first trailer — Dilraba as twin Wei Lans, adapted from Blue, Another Blue.",
    featured: true,
  },
  {
    slug: "lucky-coffee-global-2026",
    title: "幸运咖臻选咖啡全球代言人官宣",
    titleEn: "Lucky Coffee Premium Coffee Global Ambassador Launch",
    date: "2026-04-19",
    category: "brand",
    location: "线上发布",
    locationEn: "Online",
    summary:
      "蜜雪集团旗下幸运咖正式官宣迪丽热巴出任臻选咖啡全球代言人，梁朝伟出任品牌代言人；以「相信就幸运」为主题上线品牌 TVC。",
    summaryEn:
      "Lucky Coffee announced Dilraba as premium coffee global ambassador and Tony Leung as brand ambassador — \"Believe in Luck\" TVC launch.",
    description:
      "2026 年 4 月 19 日，幸运咖正式宣布全新代言人阵容。迪丽热巴出任臻选咖啡全球代言人，与梁朝伟联袂出镜品牌 TVC，诠释「幸运咖在手，好运跟你走」。官宣同步推出杨梅系列新品及门店互动、限量周边等活动。",
    descriptionEn:
      "On April 19, 2026, Lucky Coffee announced Dilraba as premium coffee global ambassador alongside Tony Leung in the brand TVC. Bayberry series products and store campaigns launched the same day.",
    featured: true,
  },
  {
    slug: "jia-ren-birthday-cover-2026",
    title: "《嘉人》六月刊生日封面",
    titleEn: "Marie Claire June Birthday Cover",
    date: "2026-06-02",
    category: "brand",
    location: "线上发布",
    locationEn: "Online",
    summary:
      "登上《嘉人》2026 年 6 月生日刊封面「AS SHE IS / 如她所是」，与高定造型、MIKIMOTO 珠宝联动呈现。",
    summaryEn:
      'Marie Claire China June 2026 "AS SHE IS" birthday cover with couture and Mikimoto jewelry.',
    featured: true,
  },
  {
    slug: "birthday-2026",
    title: "2026 生日",
    titleEn: "2026 Birthday",
    date: "2026-06-03",
    category: "other",
    location: "线上",
    locationEn: "Online",
    summary:
      "工作室发布生日祝福与六月行程，粉丝以「今天星期巴」等话题送上祝福。",
    summaryEn:
      "Studio shared birthday wishes and the June schedule; fans celebrated with trending topics.",
    featured: true,
  },
  {
    slug: "fakeme-live-2026",
    title: "Fakeme 梦镜商店 · 抖音直播",
    titleEn: "Fakeme Dream Mirror Store · Douyin Live",
    date: "2026-04-13",
    category: "brand",
    location: "抖音直播间",
    locationEn: "Douyin Live",
    summary:
      "以全球代言人身份出席 Fakeme 抖音品牌直播，Ulyana Sergeenko 高定造型亮相。",
    summaryEn:
      "Global ambassador at Fakeme Douyin live in Ulyana Sergeenko couture.",
    featured: true,
  },
  {
    slug: "libai-live-2026",
    title: "立白大师香氛 · 南法寻香之旅直播",
    titleEn: "Liby Master Fragrance · Provence Live",
    date: "2026-03-22",
    category: "brand",
    location: "抖音 · 立白官方旗舰店",
    locationEn: "Douyin · Liby Official Store",
    summary:
      "出席立白大师香氛抖音直播，Alexis Mabille 高定礼服亮相并预热《白日提灯》。",
    summaryEn:
      "Liby Master Fragrance Douyin live in Alexis Mabille couture — teased Love Under the Lantern.",
    featured: true,
  },
  {
    slug: "fakeme-global-2026",
    title: "Fakeme 全球品牌代言人官宣",
    titleEn: "Fakeme Global Brand Ambassador Launch",
    date: "2026-01-26",
    category: "brand",
    location: "线上发布",
    locationEn: "Online",
    summary:
      "正式官宣成为 Fakeme 眼镜首位全球品牌代言人。",
    summaryEn:
      "Officially announced as Fakeme eyewear's first global brand ambassador.",
    featured: true,
  },
  {
    slug: "bai-ri-ti-deng-roadshow-2026",
    title: "《白日提灯》北京线下追剧团",
    titleEn: "Love Under the Lantern · Beijing Fan Event",
    date: "2026-04-01",
    category: "premiere",
    location: "北京",
    locationEn: "Beijing",
    summary:
      "出席《白日提灯》北京线下追剧团，双造型亮相并与粉丝互动。",
    summaryEn:
      "Beijing fan event for Love Under the Lantern with dual looks and fan interactions.",
    description:
      "4 月 1 日，迪丽热巴与陈飞宇等主创赴北京出席线下追剧团。公开报道显示她以粉色针织与黑色蕾丝两套造型亮相。",
    descriptionEn:
      "April 1 Beijing fan event with cast — pink knit and black lace looks per public reports.",
    featured: true,
  },
  {
    slug: "kezhu-global-2026",
    title: "可逐全球品牌代言人官宣",
    titleEn: "KAZOO Global Brand Ambassador Launch",
    date: "2026-03-30",
    category: "brand",
    location: "线上发布",
    locationEn: "Online",
    summary:
      "正式官宣成为可逐（KAZOO）全球品牌代言人，为品牌首位全球代言人。",
    summaryEn:
      "Officially announced as KAZOO global brand ambassador — the brand's first.",
    featured: true,
  },
  {
    slug: "bai-ri-ti-deng-premiere-2026",
    title: "《白日提灯》开播",
    titleEn: "Love Under the Lantern Premieres",
    date: "2026-03-28",
    category: "premiere",
    location: "腾讯视频",
    locationEn: "Tencent Video",
    summary:
      "古装奇幻爱情剧《白日提灯》（原名《慕胥辞》）于腾讯视频独播，迪丽热巴饰演归墟鬼王贺思慕，搭档陈飞宇。",
    summaryEn:
      "Fantasy romance premieres on Tencent Video — Dilraba as ghost queen He Simu with Chen Feiyu.",
    featured: true,
  },
  {
    slug: "dior-suzhou-high-jewelry-2026",
    title: "Dior 高级珠宝系列活动（苏州）",
    titleEn: "Dior High Jewelry · Suzhou",
    date: "2026-03-20",
    category: "brand",
    location: "苏州",
    locationEn: "Suzhou",
    summary:
      "作为 Dior 全球品牌大使，出席品牌于苏州举办的高级珠宝晚宴（VILLA DIOR 臻赏晚宴），佩戴 Belle Dior 系列珠宝亮相。",
    summaryEn:
      "Global ambassador at Dior's Suzhou VILLA DIOR dinner in Belle Dior high jewelry.",
    featured: true,
  },
  {
    slug: "li-jian-mei-gui-premiere-2025",
    title: "《利剑·玫瑰》开播",
    titleEn: "Sword Rose Premieres",
    date: "2025-07-28",
    category: "premiere",
    location: "央视八套黄金档",
    locationEn: "CCTV-8 Primetime",
    summary:
      "现实打拐题材剧《利剑·玫瑰》于央视八套黄金档播出，迪丽热巴饰演一线女警邓妍，以扎实表演为现实主义题材添彩。",
    summaryEn: "Anti-trafficking drama on CCTV-8 — Dilraba as officer Deng Yan.",
    featured: true,
  },
  {
    slug: "xiao-qi-qing-rang-premiere-2025",
    title: "《枭起青壤》播出",
    titleEn: "Legend from the Hidden Niche Airs",
    date: "2025-11-22",
    category: "premiere",
    location: "腾讯视频",
    locationEn: "Tencent Video",
    summary:
      "古装奇幻冒险剧《枭起青壤》于腾讯视频上线，迪丽热巴搭档陈星旭出演聂九罗，于神秘古域展开探险与情感故事。",
    summaryEn: "Fantasy adventure on Tencent Video — Nie Jiuluo with Chen Xingxu.",
    featured: true,
  },
  {
    slug: "dior-paris-fashion-week-2024",
    title: "Dior 巴黎时装周",
    titleEn: "Dior Paris Fashion Week",
    date: "2024-02-27",
    category: "brand",
    location: "巴黎，法国",
    locationEn: "Paris, France",
    summary:
      "作为 Dior 全球品牌大使受邀出席巴黎时装周 Dior 大秀，以优雅造型亮相国际时尚舞台，展现东方女演员的国际影响力。",
    summaryEn: "Global ambassador at Dior's Paris Fashion Week show.",
    featured: true,
  },
  {
    slug: "an-le-zhuan-premiere-2023",
    title: "《安乐传》开播",
    titleEn: "The Legend of Anle Premieres",
    date: "2023-07-19",
    category: "premiere",
    location: "线上平台",
    locationEn: "Online",
    summary:
      "古装传奇剧《安乐传》播出，迪丽热巴一人分饰帝梓元与任安乐，权谋与情义交织，再度挑战古装大女主。",
    summaryEn: "Period saga — dual roles Di Ziyuan and Ren Anle.",
  },
  {
    slug: "gong-su-premiere-2023",
    title: "《公诉》开播发布会",
    titleEn: "The Prosecution Launch Event",
    date: "2023-05-16",
    category: "premiere",
    location: "北京",
    locationEn: "Beijing",
    summary:
      "出席现实题材法治剧《公诉》开播发布会，分享检察官安旎的创作理念，呼吁公众增强网络安全与法治意识。",
    summaryEn: "Launch event for legal drama The Prosecution.",
  },
  {
    slug: "weibo-night-2023",
    title: "微博之夜",
    titleEn: "Weibo Awards Night 2023",
    date: "2023-03-25",
    category: "award",
    location: "上海",
    locationEn: "Shanghai",
    summary:
      "出席微博之夜年度盛典，以精致造型亮相红毯，与业界同仁共同见证年度文娱高光时刻。",
    summaryEn: "Weibo Awards Night red carpet.",
  },
  {
    slug: "henan-flood-relief-2021",
    title: "驰援河南暴雨灾区",
    titleEn: "Henan Flood Relief",
    date: "2021-07-22",
    category: "charity",
    location: "线上",
    locationEn: "Online",
    summary:
      "河南遭遇特大暴雨灾害期间，以个人名义为灾区捐款驰援，并呼吁粉丝理性关注、共同支援抗灾救援。",
    summaryEn: "Personal donation during Henan floods.",
    featured: false,
  },
  {
    slug: "chang-ge-xing-premiere-2021",
    title: "《长歌行》开播发布会",
    titleEn: "The Long Ballad Launch Event",
    date: "2021-03-31",
    category: "premiere",
    location: "北京",
    locationEn: "Beijing",
    summary:
      "出席《长歌行》开播发布会，解读大唐郡主李长歌的家国情怀与成长弧光。",
    summaryEn: "Launch event for The Long Ballad.",
  },
  {
    slug: "unicef-charity-promise",
    title: "公益与慈善关注",
    titleEn: "Charity & Public Welfare",
    date: "2019-09-01",
    category: "charity",
    location: "中国",
    locationEn: "China",
    summary:
      "长期关注儿童关怀、健康扶贫与生态保护等公益议题，并多次参与慈善晚宴及公益倡导，以行动传递温暖与社会责任。",
    summaryEn: "Long-term charity advocacy for children and social causes.",
  },
];
