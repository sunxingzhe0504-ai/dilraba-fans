import type { ExternalLink } from "@/lib/types";
import {
  linkDiorCn,
  linkWeiboNight,
  linkWeiboPersonal,
  linkWeiboStudio,
} from "./official-channels";

const db = (id: string): ExternalLink => ({
  label: "豆瓣条目",
  href: `https://movie.douban.com/subject/${id}/`,
  kind: "info",
});

const watchTencent = (query: string): ExternalLink => ({
  label: "腾讯视频",
  href: `https://v.qq.com/x/search/?query=${encodeURIComponent(query)}`,
  kind: "watch",
});

const watchIqiyi = (query: string): ExternalLink => ({
  label: "爱奇艺",
  href: `https://www.iqiyi.com/search/${encodeURIComponent(query)}.html`,
  kind: "watch",
});

const watchYouku = (query: string): ExternalLink => ({
  label: "优酷",
  href: `https://so.youku.com/search_video/q_${encodeURIComponent(query)}`,
  kind: "watch",
});

const watchMgtv = (query: string): ExternalLink => ({
  label: "芒果 TV",
  href: `https://so.mgtv.com/so?k=${encodeURIComponent(query)}`,
  kind: "watch",
});

const cctv = (): ExternalLink => ({
  label: "央视网",
  href: "https://tv.cctv.com/",
  kind: "watch",
});

/** 作品外链：豆瓣 + 主流正版观看平台（搜索页，便于长期维护） */
export const WORK_EXTERNAL_LINKS: Record<string, ExternalLink[]> = {
  "ana-er-han": [db("24294849"), cctv()],
  "gu-jian-qi-tan": [db("24845558"), watchYouku("古剑奇谭")],
  "wei-shi-dai": [db("24530693"), watchTencent("微时代")],
  "feng-zhong-qiyuan": [db("7564975"), watchYouku("风中奇缘")],
  "mei-ren-zhi-zao": [db("25907101"), watchYouku("美人制造")],
  "ban-shu-chuan-qi": [db("25808103"), watchYouku("班淑传奇")],
  "ni-guang-zhi-lian": [db("25980278"), watchTencent("逆光之恋")],
  "ke-la-lian-ren": [db("26322644"), watchIqiyi("克拉恋人")],
  "ma-la-bian-xing-ji": [db("26585909"), watchMgtv("麻辣变形计")],
  "liu-shan-men": [db("26333136"), watchTencent("六扇门")],
  "ai-de-jie-ti": [db("25943138"), watchTencent("爱的阶梯")],
  "piaoliang-de-li-huizhen": [db("26799731"), watchIqiyi("漂亮的李慧珍")],
  "sannshengsanshi-shili-taohua": [db("25975243"), watchYouku("三生三世十里桃花")],
  "qin-shi-liren-mingyue-xin": [db("26928226"), watchYouku("秦时丽人明月心")],
  "lie-huo-ru-ge": [db("27072795"), watchYouku("烈火如歌")],
  "yi-qian-ling-yi-ye": [db("27107562"), watchYouku("一千零一夜")],
  "san-sheng-san-shi-zhen-shang-shu": [db("30376435"), watchTencent("三生三世枕上书")],
  "xingfu-chushou-keji": [db("30291081"), watchYouku("幸福触手可及")],
  "chang-ge-xing": [db("30353117"), watchTencent("长歌行")],
  "ni-shi-wo-de-rongyao": [db("33454980"), watchTencent("你是我的荣耀")],
  "yu-jiao-ji": [db("35256094"), watchYouku("与君初相识")],
  "gong-su": [db("35525475"), watchIqiyi("公诉")],
  "an-le-zhuan": [db("35460488"), watchYouku("安乐传")],
  "li-jian-mei-gui": [db("35597542"), cctv(), watchTencent("利剑玫瑰")],
  "xiao-qi-qing-rang": [db("35489172"), watchTencent("枭起青壤")],
  "bai-ri-ti-deng": [db("35929169"), watchTencent("白日提灯")],
  "sui-ran-bu-neng-yiqie": [db("36707564"), watchIqiyi("虽然不能同时拥有一切")],
  "jiu-chong-tian": [db("37191662"), watchTencent("九重天")],
  "ri-yue": [db("27174271")],
  "shaolin-nvzu": [
    db("36452545"),
    {
      label: "新浪 · 票房超 14.57 亿",
      href: "https://ent.sina.cn/2026-07-20/detail-iniiktnw4921485.d.html",
      kind: "info",
    },
    {
      label: "新浪 · 首日票房报道",
      href: "https://ent.sina.cn/2026-07-12/detail-inihpchf8004605.d.html",
      kind: "info",
    },
    {
      label: "头条 · 票房破 10 亿",
      href: "https://www.toutiao.com/article/7663411019796824610/",
      kind: "info",
    },
    {
      label: "新浪 · Be water 素颜自拍",
      href: "https://ent.sina.cn/2026-07-18/detail-iniifhuc8372432.d.html",
      kind: "info",
    },
    {
      label: "淘票票 · 购票",
      href: "https://www.taopiaopiao.com/search?kw=功夫女足",
      kind: "buy",
    },
  ],
  "peng-ran-xing-dong": [db("26363254"), watchTencent("怦然星动")],
  "aojiao-yu-pianjian": [db("26926340"), watchTencent("傲娇与偏见")],
  "jie-you-zahuodian": [db("26654146"), watchTencent("解忧杂货店")],
  "er-shi-yi-ke-la": [db("27622821"), watchTencent("21克拉")],
  "pao-pao": [db("26830085"), watchYouku("奔跑吧 2017")],
  "man-you-quan-shi-jie-s1": [db("30388379")],
  "man-you-quan-shi-jie-s2": [db("30388378"), watchIqiyi("慢游全世界 第二季")],
  "ji-xian-tiao-zhan": [db("30488068"), watchTencent("极限挑战 第五季")],
  "chuangzaoying-2019": [db("30373781"), watchTencent("创造营2019")],
  "huaer-yu-shaonian-silu": [db("36247293"), watchMgtv("花儿与少年 丝路季")],
  "kaishi-tuili-ba-s2": [db("35905219"), watchTencent("开始推理吧 第二季")],
  "kaishi-tuili-ba-s3": [db("37080187"), watchTencent("开始推理吧 第三季")],
};

const jdMagazine = (keyword: string): ExternalLink => ({
  label: "京东购买",
  href: `https://search.jd.com/Search?keyword=${encodeURIComponent(keyword)}`,
  kind: "buy",
});

export const MAGAZINE_EXTERNAL_LINKS: Record<string, ExternalLink[]> = {
  "elle-2026-03": [
    { label: "ELLE 官网", href: "https://www.elle.com.cn/", kind: "official" },
    jdMagazine("ELLE 世界时装之苑 2026年3月"),
  ],
  "grazia-2026-xinnian": [
    { label: "红秀官网", href: "https://www.grazia.com.cn/", kind: "official" },
    jdMagazine("红秀 GRAZIA 2026"),
  ],
  "bazaar-2026-kainian": [
    { label: "时尚芭莎官网", href: "https://www.harpersbazaar.com.cn/", kind: "official" },
    jdMagazine("时尚芭莎 2026 开年刊"),
  ],
  "bazaar-2025-09": [
    { label: "时尚芭莎官网", href: "https://www.harpersbazaar.com.cn/", kind: "official" },
    jdMagazine("时尚芭莎 2025年9月"),
  ],
  "figaro-2023-12": [
    { label: "费加罗 FIGARO", href: "https://www.madamefigaro.hk/", kind: "official" },
    jdMagazine("madame费加罗 2023年12月"),
  ],
  "elle-2023-05": [
    { label: "ELLE 官网", href: "https://www.elle.com.cn/", kind: "official" },
    jdMagazine("ELLE 世界时装之苑 2023年5月"),
  ],
  "lofficiel-2023-03": [
    { label: "时装 L'OFFICIEL", href: "https://www.lofficiel.com.cn/", kind: "official" },
    jdMagazine("时装 LOFFICIEL 2023年3月"),
  ],
  "grazia-2018": [
    { label: "红秀官网", href: "https://www.grazia.com.cn/", kind: "official" },
    jdMagazine("红秀 GRAZIA 2018"),
  ],
  "jia-ren-2026-06": [
    { label: "嘉人 MARIE CLAIRE", href: "https://www.marieclaire.com.cn/", kind: "official" },
    jdMagazine("嘉人 2026年6月"),
  ],
};

export const EVENT_EXTERNAL_LINKS: Record<string, ExternalLink[]> = {
  "china-film-tv-night-2026": [
    {
      label: "新浪 · CMG 年度推荐女演员",
      href: "https://k.sina.com.cn/article_7096020439_1a6f4add706801rzeo.html",
      kind: "info",
    },
    {
      label: "腾讯新闻 · 红毯回顾",
      href: "https://news.qq.com/rain/a/20260615A09BKJ00",
      kind: "info",
    },
  ],
  "macalline-brand-2026": [
    linkWeiboStudio(),
    {
      label: "新浪娱乐 · 沈阳活动现场",
      href: "https://ent.sina.cn/2026-06-28/detail-inieykzq0408857.d.html",
      kind: "info",
    },
  ],
  "deeyeo-global-2026": [
    {
      label: "新浪 · 全球代言人官宣",
      href: "https://k.sina.com.cn/article_7857201856_1d45362c001906pez6.html",
      kind: "info",
    },
    linkWeiboStudio(),
  ],
  "lucky-coffee-global-2026": [
    {
      label: "腾讯新闻 · 幸运咖代言人官宣",
      href: "https://news.qq.com/rain/a/20260420A04R8Y00",
      kind: "info",
    },
    linkWeiboPersonal(),
  ],
  "dior-suzhou-high-jewelry-2026": [
    linkDiorCn(),
    {
      label: "腾讯新闻 · 苏州高珠晚宴",
      href: "https://news.qq.com/rain/a/20260320A08FSQ00",
      kind: "info",
    },
  ],
  "li-jian-mei-gui-premiere-2025": [
    cctv(),
    db("35597542"),
    {
      label: "中新网报道",
      href: "https://www.chinanews.com.cn/",
      kind: "info",
    },
  ],
  "xiao-qi-qing-rang-premiere-2025": [
    db("35489172"),
    watchTencent("枭起青壤"),
  ],
  "bai-ri-ti-deng-premiere-2026": [
    db("35929169"),
    watchTencent("白日提灯"),
  ],
  "jiu-chong-tian-filming-2026": [
    db("37191662"),
    watchTencent("九重天"),
  ],
  "sui-ran-bu-neng-yiqie-trailer-2026": [
    db("36707564"),
    watchIqiyi("虽然不能同时拥有一切"),
  ],
  "shaolin-nvzu-premiere-2026": [
    {
      label: "新浪 · 功夫女足定档上映",
      href: "https://ent.sina.cn/2026-07-06/detail-inifwfpx1891264.d.html",
      kind: "info",
    },
    db("36452545"),
  ],
  "sui-ran-bu-neng-yiqie-premiere-2026": [
    db("36707564"),
    watchIqiyi("虽然不能同时拥有一切"),
  ],
  "birthday-2026": [
    linkWeiboStudio(),
    linkWeiboPersonal(),
  ],
  "jia-ren-birthday-cover-2026": [
    {
      label: "嘉人 MARIE CLAIRE",
      href: "https://www.marieclaire.com.cn/",
      kind: "official",
    },
  ],
  "gongfu-nvzu-boxoffice-day1-2026": [
    {
      label: "新浪 · 首日票房突破 2 亿",
      href: "https://ent.sina.cn/2026-07-12/detail-inihpchf8004605.d.html",
      kind: "info",
    },
    db("36452545"),
  ],
  "gongfu-nvzu-tianjin-roadshow-2026": [
    {
      label: "新浪 · 天津路演报道",
      href: "https://ent.sina.cn/2026-07-12/detail-inihnnkp8101688.d.html",
      kind: "info",
    },
    linkWeiboStudio(),
  ],
  "gongfu-nvzu-long-trailer-2026": [
    {
      label: "新浪 · 长预告与预售",
      href: "https://ent.sina.cn/2026-07-10/detail-inihinfz5203133.d.html",
      kind: "info",
    },
    db("36452545"),
  ],
  "gongfu-nvzu-roadshow-2026": [
    {
      label: "新浪 · 路演报道",
      href: "https://ent.sina.cn/2026-07-09/detail-inihczpf1482717.d.html",
      kind: "info",
    },
  ],
  "fakeme-live-2026": [
    {
      label: "新浪 · Fakeme 直播",
      href: "https://www.sina.cn/news/detail/5287341950507321.html",
      kind: "info",
    },
  ],
  "fakeme-global-2026": [
    {
      label: "新浪 · Fakeme 代言",
      href: "https://www.sina.cn/news/detail/5287341950507321.html",
      kind: "info",
    },
  ],
  "libai-live-2026": [
    {
      label: "新浪 · 立白直播",
      href: "https://k.sina.cn/article_7879776328_1d5abd84806801i8we.html?from=fashion",
      kind: "info",
    },
  ],
  "gongfu-nvzu-dingdang-2026": [
    {
      label: "新浪 · 功夫女足定档",
      href: "https://ent.sina.cn/2026-07-06/detail-inifwfpx1891264.d.html",
      kind: "info",
    },
    db("36452545"),
  ],
  "ambrosial-xian-2026": [
    {
      label: "新浪 · 西安品牌活动",
      href: "https://www.sina.cn/news/detail/5316700406809642.html",
      kind: "info",
    },
  ],
  "bai-ri-ti-deng-roadshow-2026": [
    {
      label: "腾讯新闻 · 追剧团报道",
      href: "https://news.qq.com/rain/a/20260407A0288700",
      kind: "info",
    },
    db("35929169"),
    watchTencent("白日提灯"),
  ],
  "kezhu-global-2026": [
    {
      label: "腾讯新闻 · 可逐官宣",
      href: "https://news.qq.com/rain/a/20260330A07ST100",
      kind: "info",
    },
  ],
  "land-rover-defender-2026": [
    {
      label: "新浪 · 路虎卫士代言人官宣",
      href: "https://www.sina.cn/news/detail/5311824748614498.html",
      kind: "info",
    },
    linkWeiboPersonal(),
  ],
  "land-rover-urban-camp-2026": [
    {
      label: "新浪 · 都市营地活动现场",
      href: "https://www.sina.cn/news/detail/5316277541014141.html",
      kind: "info",
    },
  ],
  "dior-paris-fashion-week-2024": [
    linkDiorCn(),
    {
      label: "Dior 时装秀",
      href: "https://www.dior.com/en_int/womens-fashion/shows",
      kind: "official",
    },
  ],
  "an-le-zhuan-premiere-2023": [db("35460488"), watchYouku("安乐传")],
  "gong-su-premiere-2023": [
    db("35525475"),
    {
      label: "中新网 · 公诉",
      href: "https://www.chinanews.com.cn/cul/2023/06-20/10027956.shtml",
      kind: "info",
    },
  ],
  "weibo-night-2023": [linkWeiboNight()],
  "henan-flood-relief-2021": [linkWeiboStudio()],
  "chang-ge-xing-premiere-2021": [db("30353117"), watchTencent("长歌行")],
  "unicef-charity-promise": [linkWeiboStudio(), linkWeiboPersonal()],
};

export function getWorkExternalLinks(slug: string): ExternalLink[] {
  return WORK_EXTERNAL_LINKS[slug] ?? [];
}

export function getMagazineExternalLinks(slug: string): ExternalLink[] {
  return MAGAZINE_EXTERNAL_LINKS[slug] ?? [];
}

export function getEventExternalLinks(slug: string): ExternalLink[] {
  return EVENT_EXTERNAL_LINKS[slug] ?? [];
}

export function withExternalLinks<T extends { slug: string; externalLinks?: ExternalLink[] }>(
  item: T,
  links: ExternalLink[],
): T {
  if (links.length === 0) return item;
  return { ...item, externalLinks: links };
}
