/**
 * 本地托管图片清单（全部位于 public/images 下）
 * - 作品海报：来自 TMDB，已逐张人工目视核对与剧集一一对应
 * - 人物写真：TMDB 人物图库（迪丽热巴）
 * - 杂志封面：均为真实刊物封面/大片，已逐张核对刊名、期号与人物
 * 改为本地托管后不再受网络环境（CDN 解析到内网 IP）影响。
 */
const W = "/images/works";
const P = "/images/portraits";
const M = "/images/magazines";
const B = "/images/backdrop";

export const IMAGES = {
  hero: `${P}/hero-red-pearl.jpg`,
  heroAlt: `${P}/teal-floral.jpg`,

  portraits: {
    redPearl: `${P}/hero-red-pearl.jpg`,
    tealFloral: `${P}/teal-floral.jpg`,
    whiteBeauty: `${P}/white-beauty.jpg`,
    warmCandid: `${P}/warm-candid.jpg`,
    goldCrown: `${P}/gold-crown.jpg`,
    redBlack: `${P}/red-black.jpg`,
    redWall: `${P}/red-wall.jpg`,
    mono: `${P}/mono.jpg`,
  },

  backdrop: {
    changge: `${B}/chang-ge-xing.jpg`,
  },

  // key 与 content/works.ts 的 slug 对应
  works: {
    "ana-er-han": `${W}/ana-er-han.jpg`,
    "gu-jian-qi-tan": `${W}/gu-jian-qi-tan.jpg`,
    "wei-shi-dai": `${W}/wei-shi-dai.jpg`,
    "feng-zhong-qiyuan": `${W}/feng-zhong-qiyuan.jpg`,
    "mei-ren-zhi-zao": `${W}/mei-ren-zhi-zao.jpg`,
    "ban-shu-chuan-qi": `${W}/ban-shu-chuan-qi.jpg`,
    "ni-guang-zhi-lian": `${W}/ni-guang-zhi-lian.jpg`,
    "ke-la-lian-ren": `${W}/ke-la-lian-ren.jpg`,
    "piaoliang-de-li-huizhen": `${W}/piaoliang-de-li-huizhen.jpg`,
    "sannshengsanshi-shili-taohua": `${W}/sannshengsanshi-shili-taohua.jpg`,
    "qin-shi-liren-mingyue-xin": `${W}/qin-shi-liren-mingyue-xin.jpg`,
    "lie-huo-ru-ge": `${W}/lie-huo-ru-ge.jpg`,
    "yi-qian-ling-yi-ye": `${W}/yi-qian-ling-yi-ye.jpg`,
    "san-sheng-san-shi-zhen-shang-shu": `${W}/san-sheng-san-shi-zhen-shang-shu.jpg`,
    "xingfu-chushou-keji": `${W}/xingfu-chushou-keji.jpg`,
    "chang-ge-xing": `${W}/chang-ge-xing.jpg`,
    "ni-shi-wo-de-rongyao": `${W}/ni-shi-wo-de-rongyao.jpg`,
    "yu-jiao-ji": `${W}/yu-jiao-ji.jpg`,
    "gong-su": `${W}/gong-su.jpg`,
    "an-le-zhuan": `${W}/an-le-zhuan.jpg`,
    "li-jian-mei-gui": `${W}/li-jian-mei-gui.jpg`,
    "xiao-qi-qing-rang": `${W}/xiao-qi-qing-rang.jpg`,
    "bai-ri-ti-deng": `${W}/bai-ri-ti-deng.jpg`,
    "sui-ran-bu-neng-yiqie": `${W}/sui-ran-bu-neng-yiqie.jpg`,
    "jiu-chong-tian": `${W}/jiu-chong-tian.jpg`,
    "ri-yue": `${W}/ri-yue.jpg`,
    "shaolin-nvzu": `${W}/shaolin-nvzu.jpg`,
    "ma-la-bian-xing-ji": `${W}/ma-la-bian-xing-ji.jpg`,
    "liu-shan-men": `${W}/liu-shan-men.jpg`,
    "ai-de-jie-ti": `${W}/ai-de-jie-ti.jpg`,
    "peng-ran-xing-dong": `${W}/peng-ran-xing-dong.jpg`,
    "aojiao-yu-pianjian": `${W}/aojiao-yu-pianjian.jpg`,
    "jie-you-zahuodian": `${W}/jie-you-zahuodian.jpg`,
    "er-shi-yi-ke-la": `${W}/er-shi-yi-ke-la.jpg`,
    "pao-pao": `${W}/pao-pao.jpg`,
    "man-you-quan-shi-jie-s1": `${W}/man-you-s1.jpg`,
    "man-you-quan-shi-jie-s2": `${W}/man-you-s2.jpg`,
    "ji-xian-tiao-zhan": `${W}/ji-xian-tiao-zhan.webp`,
    "chuangzaoying-2019": `${W}/chuangzaoying-2019.jpg`,
    "kaishi-tuili-ba-s2": `${W}/kaishi-tuili-ba-s2.jpg`,
    "kaishi-tuili-ba-s3": `${W}/kaishi-tuili-ba-s3.jpg`,
    "huaer-yu-shaonian-silu": `${W}/huaer-yu-shaonian-silu.jpg`,
  },

  magazines: {
    elle2026: `${M}/elle-2026-03.jpg`,
    elle2023: `${M}/elle-2023-05.jpg`,
    bazaar2025: `${M}/bazaar-2025-09.jpg`,
    bazaar2026: `${M}/bazaar-2026-xinkan.jpg`,
    grazia2026: `${M}/grazia-2026.jpg`,
    figaro2023: `${M}/figaro-2023-12.jpg`,
    lofficiel2023: `${M}/lofficiel-2023-03.jpg`,
    grazia2018: `${M}/grazia-2018.jpg`,
    jiaren2026: `${M}/jia-ren-2026-06.jpg`,
  },
} as const;
