import type { SiteMeta } from "@/lib/types";
import { getOfficialLinksForSite } from "./official-channels";

export const siteMeta: SiteMeta = {
  heroTagline: "追光而遇，沐光而行",
  heroTaglineEn: "Meet the light, walk in the light",
  heroSubtitle:
    "温柔有力量 · 认真生活 · 用心演戏 —— 她是迪丽热巴，也是无数人心里的那束光",
  heroSubtitleEn:
    "Gentle yet strong · lives earnestly · acts with heart — she is Dilraba, a beam of light for many",
  stats: [
    { label: "影视作品", value: "42+" },
    { label: "杂志封面", value: "50+" },
    { label: "公益关注", value: "多年" },
    { label: "从业年限", value: "13+" },
  ],
  statsEn: [
    { label: "Works", value: "42+" },
    { label: "Magazine covers", value: "50+" },
    { label: "Charity", value: "Years" },
    { label: "Career", value: "13+ yrs" },
  ],
  bio: "迪丽热巴（Dilraba Dilmurat），中国内地女演员，1992 年出生于新疆乌鲁木齐。以真诚自然的表演、多元的角色塑造与积极正面的公众形象广受喜爱，现为 Dior 全球品牌大使。",
  bioEn:
    "Dilraba Dilmurat is a Chinese actress born in Ürümqi, Xinjiang in 1992. Known for sincere performances, diverse roles, and a positive public image, she serves as a global ambassador for Dior.",
  bioExtended: [
    "从《阿娜尔罕》正式出道，到《古剑奇谭》芙蕖的温柔亮相；再到《三生三世十里桃花》《三生三世枕上书》白凤九的深入人心、《长歌行》《你是我的荣耀》的口碑收视双高，以及《公诉》《利剑·玫瑰》《白日提灯》《虽然不能同时拥有一切》对现实与奇幻题材的持续探索——迪丽热巴始终在表演道路上稳步前行，戏路不断拓宽。",
    "她于 2018 年当选金鹰节「金鹰女神」并获金鹰奖「最具人气女演员」，多次登上福布斯中国名人榜。作为 Dior 全球品牌大使，她连续受邀亮相巴黎时装周与高级珠宝活动，在国际时尚舞台上展现东方女性的独特气质。",
    "在演艺与时尚之外，她长期关注儿童关怀、健康扶贫与生态保护等公益议题，以行动传递温暖与社会责任。本站为粉丝自发整理的公开资讯站，旨在汇聚与迪丽热巴相关的正面、积极信息，供同好交流与欣赏。",
  ],
  bioExtendedEn: [
    "From her debut in Anaerhan to Fuqu in Legend of Chusen; from Bai Fengjiu in Eternal Love and The Pillow Book to Li Changge and Qiao Jingjing — plus Prosecution, Sword Rose, Moonlit Reunion, and You Can't Have Everything — Dilraba keeps widening her range across genres.",
    "She was named Golden Eagle Goddess in 2018 and won Most Popular Actress at the China TV Golden Eagle Award, and has appeared on Forbes China Celebrity 100 multiple times. As Dior global ambassador, she regularly attends Paris Fashion Week and high-jewelry events.",
    "Beyond acting and fashion, she supports causes including child welfare, poverty relief, and environmental protection. This unofficial fan site gathers positive public information for fellow fans.",
  ],
  officialLinks: getOfficialLinksForSite(),
};
