import type { GalleryItem } from "@/lib/types";
import { IMAGES } from "./images";

const P = IMAGES.portraits;
const M = IMAGES.magazines;
const W = IMAGES.works;
const B = IMAGES.backdrop;

export const gallery: GalleryItem[] = [
  { slug: "red-black-2026", title: "中国影视之夜 · 红毯造型", titleEn: "China Film & TV Night Look", category: "red-carpet", image: P.redBlack, year: 2026, wallpaper: true, tags: ["红毯", "高定"] },
  { slug: "hero-red-pearl", title: "红珠礼服", category: "portrait", image: P.redPearl, year: 2024, wallpaper: true, tags: ["经典"] },
  { slug: "teal-floral", title: "青碧花韵", category: "portrait", image: P.tealFloral, year: 2023, wallpaper: true },
  { slug: "white-beauty", title: "纯白优雅", category: "portrait", image: P.whiteBeauty, year: 2022, wallpaper: true },
  { slug: "warm-candid", title: "暖光侧写", category: "portrait", image: P.warmCandid, year: 2021, wallpaper: true },
  { slug: "gold-crown", title: "金冠造型", category: "red-carpet", image: P.goldCrown, year: 2024, wallpaper: true, tags: ["红毯"] },
  { slug: "red-black", title: "红黑高定", category: "red-carpet", image: P.redBlack, year: 2023, wallpaper: true, tags: ["红毯"] },
  { slug: "red-wall", title: "红墙大片", category: "magazine", image: P.redWall, year: 2023, wallpaper: true },
  { slug: "mono", title: "黑白肖像", category: "portrait", image: P.mono, year: 2022, wallpaper: true },
  { slug: "wei-shi-dai-poster", title: "微时代 · 吴安珀", category: "wallpaper", image: W["wei-shi-dai"], year: 2014, tags: ["早期"] },
  { slug: "feng-zhong-poster", title: "风中奇缘 · 骊姬", category: "wallpaper", image: W["feng-zhong-qiyuan"], year: 2014, tags: ["早期"] },
  { slug: "ni-guang-poster", title: "逆光之恋 · 江离", category: "wallpaper", image: W["ni-guang-zhi-lian"], year: 2015, wallpaper: true, tags: ["角色"] },
  { slug: "chuangzaoying-poster", title: "创造营 2019", category: "wallpaper", image: W["chuangzaoying-2019"], year: 2019, tags: ["综艺"] },
  { slug: "kaishi-s3-poster", title: "开始推理吧 第三季", category: "wallpaper", image: W["kaishi-tuili-ba-s3"], year: 2025, tags: ["综艺"] },
  { slug: "jia-ren-2026", title: "嘉人 2026 生日刊", category: "magazine", image: M.jiaren2026, year: 2026, tags: ["封面", "全满贯"] },
  { slug: "bai-ri-ti-deng-poster", title: "白日提灯 · 贺思慕", category: "wallpaper", image: W["bai-ri-ti-deng"], year: 2026, wallpaper: true, tags: ["角色"] },
  { slug: "elle-2026", title: "ELLE 2026 开季", category: "magazine", image: M.elle2026, year: 2026, tags: ["封面"] },
  { slug: "bazaar-2025", title: "芭莎 Limitless", category: "magazine", image: M.bazaar2025, year: 2025, tags: ["封面"] },
  { slug: "grazia-2026", title: "红秀 2026 新年刊", category: "magazine", image: M.grazia2026, year: 2026 },
  { slug: "figaro-2023", title: "费加罗 明月入怀", category: "magazine", image: M.figaro2023, year: 2023 },
  { slug: "changge-backdrop", title: "长歌行·李长歌", category: "wallpaper", image: B.changge, year: 2021, wallpaper: true, tags: ["角色"] },
  { slug: "rongyao-poster", title: "你是我的荣耀", category: "wallpaper", image: W["ni-shi-wo-de-rongyao"], year: 2021, wallpaper: true, tags: ["角色"] },
  { slug: "fengjiu-poster", title: "三生三世十里桃花 · 白凤九", category: "wallpaper", image: W["sannshengsanshi-shili-taohua"], year: 2017, wallpaper: true, tags: ["角色"] },
  { slug: "fengjiu-zhen-shangshu-poster", title: "三生三世枕上书 · 白凤九", category: "wallpaper", image: W["san-sheng-san-shi-zhen-shang-shu"], year: 2020, wallpaper: true, tags: ["角色"] },
  { slug: "sui-ran-poster", title: "虽然不能同时拥有一切", category: "wallpaper", image: W["sui-ran-bu-neng-yiqie"], year: 2026, tags: ["待播"] },
  { slug: "jiu-chong-poster", title: "九重天", category: "wallpaper", image: W["jiu-chong-tian"], year: 2026, tags: ["待播"] },
  { slug: "riyue-poster", title: "日月 · 嫦娥", category: "wallpaper", image: W["ri-yue"], year: 2019, tags: ["待映"] },
  { slug: "shaolin-poster", title: "少林女足", category: "wallpaper", image: W["shaolin-nvzu"], year: 2025, tags: ["待映"] },
  { slug: "ke-la-poster", title: "克拉恋人 · 高雯", category: "wallpaper", image: W["ke-la-lian-ren"], year: 2015, wallpaper: true, tags: ["角色"] },
  { slug: "liehuo-poster", title: "烈火如歌 · 烈如歌", category: "wallpaper", image: W["lie-huo-ru-ge"], year: 2018, wallpaper: true, tags: ["角色"] },
  { slug: "yiqianye-poster", title: "一千零一夜 · 凌凌七", category: "wallpaper", image: W["yi-qian-ling-yi-ye"], year: 2018, wallpaper: true, tags: ["角色"] },
  { slug: "gongsu-poster", title: "公诉 · 安旎", category: "wallpaper", image: W["gong-su"], year: 2023, wallpaper: true, tags: ["角色"] },
  { slug: "anle-poster", title: "安乐传 · 任安乐", category: "wallpaper", image: W["an-le-zhuan"], year: 2023, wallpaper: true, tags: ["角色"] },
  { slug: "xiaoqi-poster", title: "枭起青壤 · 聂九罗", category: "wallpaper", image: W["xiao-qi-qing-rang"], year: 2025, wallpaper: true, tags: ["角色"] },
  { slug: "elle-2023", title: "ELLE 2023 五月刊", category: "magazine", image: M.elle2023, year: 2023, tags: ["封面"] },
  { slug: "bazaar-2026", title: "芭莎 2026 开年刊", category: "magazine", image: M.bazaar2026, year: 2026, tags: ["封面"] },
  { slug: "lofficiel-2023", title: "时装 L'Officiel", category: "magazine", image: M.lofficiel2023, year: 2023 },
  { slug: "grazia-2018", title: "红秀 2018", category: "magazine", image: M.grazia2018, year: 2018 },
  { slug: "zhou-fang-poster", title: "幸福，触手可及 · 周放", category: "wallpaper", image: W["xingfu-chushou-keji"], year: 2020, wallpaper: true, tags: ["角色"] },
];
