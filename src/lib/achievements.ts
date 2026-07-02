export type AchievementDef = {
  id: string;
  icon: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
};

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: "dear-bar",
    icon: "♥",
    titleZh: "同路人",
    titleEn: "Dear Bar",
    descZh: "第一次来到本站",
    descEn: "Your first visit",
  },
  {
    id: "watcher-5",
    icon: "📺",
    titleZh: "剧粉入门",
    titleEn: "Binge Starter",
    descZh: "标记看过 5 部作品",
    descEn: "Marked 5 works as watched",
  },
  {
    id: "watcher-15",
    icon: "🎬",
    titleZh: "追光剧迷",
    titleEn: "Dedicated Viewer",
    descZh: "标记看过 15 部作品",
    descEn: "Marked 15 works as watched",
  },
  {
    id: "quiz-perfect",
    icon: "✦",
    titleZh: "台词达人",
    titleEn: "Quote Master",
    descZh: "角色猜猜看满分通关",
    descEn: "Perfect score on character quiz",
  },
  {
    id: "gallery-light",
    icon: "🖼",
    titleZh: "光影收藏家",
    titleEn: "Gallery Explorer",
    descZh: "在图库中打开全屏预览",
    descEn: "Opened a gallery lightbox",
  },
  {
    id: "wallpaper-maker",
    icon: "📱",
    titleZh: "壁纸设计师",
    titleEn: "Wallpaper Maker",
    descZh: "生成并下载台词壁纸",
    descEn: "Created a quote wallpaper",
  },
  {
    id: "streak-3",
    icon: "🌟",
    titleZh: "三日追光",
    titleEn: "3-Day Streak",
    descZh: "连续 3 天访问本站",
    descEn: "Visited 3 days in a row",
  },
  {
    id: "streak-7",
    icon: "💫",
    titleZh: "一周同行",
    titleEn: "7-Day Streak",
    descZh: "连续 7 天访问本站",
    descEn: "Visited 7 days in a row",
  },
];

export function checkAchievements(stats: {
  watchedCount: number;
  streak: number;
  quizPerfect?: boolean;
  galleryOpened?: boolean;
  wallpaperMade?: boolean;
}): string[] {
  const unlocked: string[] = ["dear-bar"];
  if (stats.watchedCount >= 5) unlocked.push("watcher-5");
  if (stats.watchedCount >= 15) unlocked.push("watcher-15");
  if (stats.quizPerfect) unlocked.push("quiz-perfect");
  if (stats.galleryOpened) unlocked.push("gallery-light");
  if (stats.wallpaperMade) unlocked.push("wallpaper-maker");
  if (stats.streak >= 3) unlocked.push("streak-3");
  if (stats.streak >= 7) unlocked.push("streak-7");
  return unlocked;
}
