/** 英文翻译补充（字段级 fallback，与 content 内 *En 字段合并使用） */

export type WorkEn = {
  roleEn?: string;
  synopsisEn?: string;
  highlightsEn?: string[];
  airInfoEn?: string;
};

export const WORKS_EN: Record<string, WorkEn> = {
  "ana-er-han": {
    roleEn: "Anarhan",
    synopsisEn:
      "Her debut lead role — a Uyghur woman in southern Xinjiang who fights oppression with the PLA's help.",
    highlightsEn: ["Debut TV lead", "CCTV premiere"],
    airInfoEn: "CCTV-1 · May 2013",
  },
  "gu-jian-qi-tan": {
    roleEn: "Fuqu",
    synopsisEn: "Xianxia adaptation; gentle Tianshu disciple Fuqu in an early fantasy role.",
    highlightsEn: ["Early xianxia", "Warm, spirited Fuqu"],
  },
  "wei-shi-dai": {
    roleEn: "Wu Anpo",
    synopsisEn: "Campus romance web drama set in the social-media era; Wu Anpo at Bohang University.",
    highlightsEn: ["Jaywalk era project", "Wu Anpo"],
    airInfoEn: "Tencent Video · from Jul 21, 2014",
  },
  "feng-zhong-qiyuan": {
    roleEn: "Li Ji",
    synopsisEn: "Cameo as Western Regions beauty Li Ji in Tong Hua's desert epic.",
    highlightsEn: ["Early period cameo", "Li Ji"],
    airInfoEn: "Hunan TV · from Oct 1, 2014",
  },
  "mei-ren-zhi-zao": {
    roleEn: "Qingcheng",
    synopsisEn: "Special appearance as imperial consort Qingcheng in a Tang-styled costume drama.",
    highlightsEn: ["Tang styling", "Guest role"],
  },
  "ke-la-lian-ren": {
    roleEn: "Gao Wen",
    synopsisEn: "Flashy jewelry designer Gao Wen in a hit urban romance.",
    highlightsEn: ["Urban fashion", "Breakout role Gao Wen"],
  },
  "ban-shu-chuan-qi": {
    roleEn: "Anxin",
    synopsisEn: "Guest role as Loulan princess Anxin in a palace-school drama.",
    highlightsEn: ["Special appearance", "Princess Anxin"],
  },
  "ni-guang-zhi-lian": {
    roleEn: "Jiang Li",
    synopsisEn: "Web drama lead as Jiang Li, investigating her death as a ghost on her wedding day.",
    highlightsEn: ["Web drama lead", "Fantasy mystery"],
    airInfoEn: "Tencent Video · Feb 2015",
  },
  "piaoliang-de-li-huizhen": {
    roleEn: "Li Huizhen",
    synopsisEn: "First full urban lead as Li Huizhen, an ordinary girl's inspiring comeback.",
    highlightsEn: ["First urban lead", "Inspirational heroine"],
  },
  "sannshengsanshi-shili-taohua": {
    roleEn: "Bai Fengjiu",
    synopsisEn:
      "Breakout xianxia hit as devoted Qingqiu fox spirit Bai Fengjiu — a defining role.",
    highlightsEn: ["Blockbuster xianxia", "Golden Eagle recognition"],
    airInfoEn: "Dragon TV · Zhejiang TV · 2017",
  },
  "qin-shi-liren-mingyue-xin": {
    roleEn: "Gongsun Li",
    synopsisEn: "Historical heroine Gongsun Li torn between love and duty in turbulent times.",
    highlightsEn: ["Period lead", "Tender yet resolute"],
  },
  "lie-huo-ru-ge": {
    roleEn: "Lie Ruge",
    synopsisEn: "Wuxia romance lead Lie Ruge — bold, loyal, and deeply passionate.",
    highlightsEn: ["Wuxia romance lead", "Heroic Lie Ruge"],
  },
  "yi-qian-ling-yi-ye": {
    roleEn: "Ling Lingqi",
    synopsisEn: "Sweet urban fairy tale with Ling Lingqi, a quirky designer in a dream romance.",
    highlightsEn: ["Sweet modern romance", "Beloved Ling Lingqi"],
  },
  "san-sheng-san-shi-zhen-shang-shu": {
    roleEn: "Bai Fengjiu",
    synopsisEn: "Spin-off lead — Bai Fengjiu's devoted love story with Donghua across lifetimes.",
    highlightsEn: ["Fengjiu-focused sequel", "Fan-favorite CP"],
  },
  "xingfu-chushou-keji": {
    roleEn: "Zhou Fang",
    synopsisEn: "Independent fashion designer Zhou Fang balancing career and love.",
    highlightsEn: ["Workplace romance", "Capable designer"],
  },
  "chang-ge-xing": {
    roleEn: "Li Changge",
    synopsisEn:
      "Tang princess Li Changge — strategy, loyalty, and growth amid political upheaval.",
    highlightsEn: ["Historical heroine", "Epic scope"],
    airInfoEn: "Tencent Video · 2021",
  },
  "ni-shi-wo-de-rongyao": {
    roleEn: "Qiao Jingjing",
    synopsisEn:
      "Top actress Qiao Jingjing reunites with aerospace engineer Yu Tu — a beloved modern romance.",
    highlightsEn: ["Gu Man adaptation + aerospace theme", "Ratings and buzz hit"],
    airInfoEn: "Tencent Video · 2021",
  },
  "yu-jiao-ji": {
    roleEn: "Ji Yunhe",
    synopsisEn: "Ji Yunhe, who tames demon whales — a restrained, layered xianxia lead.",
    highlightsEn: ["Master of the Soul of Blood adaptation", "Ji Yunhe's resilience"],
  },
  "gong-su": {
    roleEn: "An Ni",
    synopsisEn: "Prosecutor An Ni tackling cybercrime — a key step into realistic drama.",
    highlightsEn: ["Realistic genre shift", "Professional An Ni"],
  },
  "an-le-zhuan": {
    roleEn: "Di Ziyuan / Ren Anle",
    synopsisEn: "Dual roles: Di Ziyuan and Ren Anle in a power-and-revenge period saga.",
    highlightsEn: ["Dual lead roles", "Politics and loyalty"],
  },
  "li-jian-mei-gui": {
    roleEn: "Deng Yan",
    synopsisEn:
      "Detective Deng Yan in an anti-trafficking drama on CCTV primetime — CMG Recommended TV Actress role.",
    highlightsEn: ["CCTV primetime", "Realistic police drama"],
    airInfoEn: "CCTV-8 primetime · 2025",
  },
  "xiao-qi-qing-rang": {
    roleEn: "Nie Jiuluo",
    synopsisEn: "Fantasy adventure with Nie Jiuluo exploring mysterious realms and legends.",
    highlightsEn: ["Fantasy adventure", "Nie Jiuluo's charisma"],
    airInfoEn: "Tencent Video · Nov 2025",
  },
  "bai-ri-ti-deng": {
    roleEn: "He Simu",
    synopsisEn:
      "Ghost queen He Simu bound to general Duan Xu through shared senses — forbidden fantasy romance.",
    highlightsEn: ["Multi-state ghost queen", "Five-senses bond fantasy"],
    airInfoEn: "Tencent Video · premiered Mar 28, 2026",
  },
  "sui-ran-bu-neng-yiqie": {
    roleEn: "Wei Lan (twins)",
    synopsisEn:
      "iQiyi micro drama — twin Wei Lans swap lives in an urban fantasy adapted from Yamamoto Fumio's novel.",
    highlightsEn: ["Twin Wei Lan roles", "iQiyi Micro Drama", "With Chen Haosen"],
    airInfoEn: "iQiyi Micro Drama · premiere TBA (page live)",
  },
  "jiu-chong-tian": {
    roleEn: "Unit lead (TBA)",
    synopsisEn:
      "Republic-era suspense anthology on Tencent; filming the period unit with Yin Fang in Fujian.",
    highlightsEn: ["Anthology format", "Republic suspense", "Filming 2026"],
    airInfoEn: "Tencent Video · in production",
  },
  "peng-ran-xing-dong": {
    roleEn: "Hao Meili",
    synopsisEn: "Early film appearance as Hao Meili in a star-manager romance.",
    highlightsEn: ["Early film", "With Yang Mi, Chen Xuedong"],
  },
  "aojiao-yu-pianjian": {
    roleEn: "Tang Nannan",
    synopsisEn: "Rom-com lead Tang Nannan in a feisty opposites-attract love story.",
    highlightsEn: ["First rom-com lead"],
  },
  "jie-you-zahuodian": {
    roleEn: "Tongtong",
    synopsisEn: "Healing ensemble film adapted from Keigo Higashino's Namiya.",
    highlightsEn: ["Higashino adaptation", "Ensemble healing story"],
  },
  "er-shi-yi-ke-la": {
    roleEn: "Liu Jiayin",
    synopsisEn: "Light comedy lead Liu Jiayin on love and money.",
    highlightsEn: ["Comedy lead", "With Guo Jingfei"],
  },
  "ri-yue": {
    roleEn: "Chang'e",
    synopsisEn: "Mythological romance as a free-spirited Chang'e with Dou Xiao; release TBA.",
    highlightsEn: ["Myth retelling", "With Dou Xiao"],
    airInfoEn: "Release date TBA",
  },
  "shaolin-nvzu": {
    roleEn: "Yu Long",
    synopsisEn:
      "Stephen Chow-directed kung fu soccer film; summer 2026 release reported.",
    highlightsEn: ["Stephen Chow", "Kung fu soccer"],
    airInfoEn: "Summer 2026 (subject to confirmation)",
  },
  "pao-pao": {
    roleEn: "Regular member",
    synopsisEn: "Keep Running S5 regular — energetic, lovable variety presence.",
    highlightsEn: ["Variety regular", "Energetic charm"],
  },
  "man-you-quan-shi-jie-s1": {
    roleEn: "Fixed guest",
    synopsisEn: "Slow-travel micro variety exploring cities abroad at an unhurried pace.",
    highlightsEn: ["Travel micro variety", "2018 season"],
    airInfoEn: "Kuran Video · Aug 2018",
  },
  "ji-xian-tiao-zhan": {
    roleEn: "Regular member",
    synopsisEn: "Go Fighting! S5 regular facing missions with wit and warmth.",
    highlightsEn: ["Variety regular", "Quick wit on show"],
  },
  "chuangzaoying-2019": {
    roleEn: "Founder / head teacher",
    synopsisEn: "CHUANG 2019 founder guiding trainee idols with positive energy.",
    highlightsEn: ["First idol-show founder role"],
  },
  "man-you-quan-shi-jie-s2": {
    roleEn: "Fixed guest",
    synopsisEn: "Season 2 slow-travel variety continuing relaxed journeys overseas.",
    highlightsEn: ["Travel micro variety", "2019 season"],
    airInfoEn: "Beijing TV · iQiyi · Oct 2019",
  },
  "huaer-yu-shaonian-silu": {
    roleEn: "Regular guest",
    synopsisEn: "Silk Road travel variety showing sincerity, independence, and care for others.",
    highlightsEn: ["Travel variety", "Warm group dynamic"],
  },
  "kaishi-tuili-ba-s2": {
    roleEn: "Regular guest",
    synopsisEn: "Immersive mystery variety S2 on Tencent Video (May–Jul 2024).",
    highlightsEn: ["Mystery variety", "2024 season"],
    airInfoEn: "Tencent Video · May 2 – Jul 5, 2024",
  },
  "kaishi-tuili-ba-s3": {
    roleEn: "Regular guest",
    synopsisEn: "Returns for S3 mystery variety (May–Jul 2025).",
    highlightsEn: ["Mystery variety", "2025 season"],
    airInfoEn: "Tencent Video · May 1 – Jul 4, 2025",
  },
};

export const MAGAZINES_EN: Record<
  string,
  { nameEn?: string; issueEn?: string; descriptionEn?: string }
> = {
  "jia-ren-2026-06": {
    nameEn: "Marie Claire China",
    issueEn: 'June 2026 Birthday Issue · "AS SHE IS"',
    descriptionEn:
      "Birthday cover completing the post-90s Big Five women's magazine grand slam with couture and Mikimoto jewelry.",
  },
  "elle-2026-03": {
    nameEn: "ELLE China",
    issueEn: 'March 2026 Season Opener · "Within Change"',
    descriptionEn: "Season-opening cover exploring versatile fashion presence.",
  },
  "grazia-2026-xinnian": {
    nameEn: "GRAZIA China",
    issueEn: '2026 New Year · "The New Stage"',
    descriptionEn: "New year cover marking a fresh chapter in work and image.",
  },
  "bazaar-2026-kainian": {
    nameEn: "Harper's BAZAAR China",
    issueEn: '2026 Opener · "BAZAAR Theatre"',
    descriptionEn: "Theatrical opener cover with dramatic fashion storytelling.",
  },
  "bazaar-2025-09": {
    nameEn: "Harper's BAZAAR China",
    issueEn: 'Sep 2025 · "Limitless"',
    descriptionEn: "September 2025 cover story \"Limitless\".",
  },
  "figaro-2023-12": {
    nameEn: "Madame Figaro",
    issueEn: 'Dec 2023 · "The New Radiance"',
    descriptionEn: "December 2023 cover with luminous styling.",
  },
  "elle-2023-05": {
    nameEn: "ELLE China",
    issueEn: 'May 2023 Season Opener · "be Enchanted"',
    descriptionEn: "Spring 2023 season opener celebrating romantic beauty.",
  },
  "lofficiel-2023-03": {
    nameEn: "L'Officiel China",
    issueEn: "March 2023 Cover",
    descriptionEn: "March 2023 fashion cover feature.",
  },
  "grazia-2018": {
    nameEn: "GRAZIA China",
    issueEn: '2018 · "Shining Just Right"',
    descriptionEn: "2018 cover highlighting effortless radiance.",
  },
};

export const CHARACTERS_EN: Record<
  string,
  { nameEn?: string; workTitleEn?: string; quoteEn?: string; descriptionEn?: string }
> = {
  "ana-er-han": {
    nameEn: "Anarhan",
    workTitleEn: "Anarhan",
    descriptionEn: "Debut heroine — a resilient southern Xinjiang woman in a revolutionary era story.",
  },
  "bai-fengjiu": {
    nameEn: "Bai Fengjiu",
    workTitleEn: "Eternal Love",
    quoteEn: "Three thousand years chasing love, devotion unchanged.",
    descriptionEn: "Qingqiu princess — the beloved nine-tailed fox; see also The Pillow Book.",
  },
  "qiao-jingjing": {
    nameEn: "Qiao Jingjing",
    workTitleEn: "You Are My Glory",
    quoteEn: "I've already run to you — this time you can walk slowly.",
    descriptionEn: "A-list actress — sweet yet strong; iconic modern romance heroine.",
  },
  "li-changge": {
    nameEn: "Li Changge",
    workTitleEn: "The Long Ballad",
    quoteEn: "What I protect is the path I believe in.",
    descriptionEn: "Tang princess of strategy and integrity — a defining historical heroine.",
  },
  "he-simu": {
    nameEn: "He Simu",
    workTitleEn: "Love Under the Lantern",
    descriptionEn: "Four-hundred-year ghost queen missing five senses — bound to Duan Xu by fate.",
  },
  "wei-lan": {
    nameEn: "Wei Lan",
    workTitleEn: "Although You Can't Have Everything at Once",
    quoteEn: "Life's answers aren't in 'what if' — they're in awakening to the present.",
    descriptionEn: "Twin Wei Lans — elite writer and small-town homemaker who swap lives.",
  },
  "deng-yan": {
    nameEn: "Deng Yan",
    workTitleEn: "Sword Rose",
    descriptionEn: "Frontline police officer Deng Yan in a realistic anti-trafficking drama.",
  },
  "nie-jiuluo": {
    nameEn: "Nie Jiuluo",
    workTitleEn: "The Legend of Shen Li",
    descriptionEn: "Bold explorer Nie Jiuluo in a fantasy adventure of myths and ruins.",
  },
  "ren-anle": {
    nameEn: "Ren Anle / Di Ziyuan",
    workTitleEn: "The Legend of Anle",
    descriptionEn: "Dual identity — princess Di Ziyuan and Ren Anle navigating revenge and duty.",
  },
};

export const QUOTES_EN: Record<string, { textEn: string; sourceEn: string }> = {
  q1: {
    textEn: "Live earnestly, act with heart, and meet the world with gentleness.",
    sourceEn: "Public interview",
  },
  q2: {
    textEn: "Meet the light, walk in the light.",
    sourceEn: "Fan motto",
  },
  q3: {
    textEn: "I've already run to you — this time you can walk slowly.",
    sourceEn: "You Are My Glory · Qiao Jingjing",
  },
  q4: {
    textEn: "May those I love live in peace for the rest of their lives.",
    sourceEn: "The Blue Whisper · Ji Yunhe",
  },
  q5: {
    textEn: "I hope to show the professional spirit of prosecutors in the new era.",
    sourceEn: "The Prosecution press tour",
  },
  q6: {
    textEn: "Life's answers aren't in 'what if' — they're in awakening to the present.",
    sourceEn: "You Can't Have Everything · Wei Lan",
  },
};

export const BRAND_HIGHLIGHTS_EN: Record<string, { titleEn: string; summaryEn: string }> = {
  "dior-global-ambassador": {
    titleEn: "Dior Global Brand Ambassador",
    summaryEn:
      "Ambassador since Feb 2023, elevated to global ambassador Dec 2023 — Paris Fashion Week and high jewelry.",
  },
  "dior-paris-2024": {
    titleEn: "Paris Fashion Week · Dior",
    summaryEn: "Elegant looks at Dior's international runway show.",
  },
  "dior-suzhou-jewelry": {
    titleEn: "Suzhou High Jewelry Event",
    summaryEn: "Belle Dior jewelry at Dior's Suzhou high jewelry dinner.",
  },
  "magazine-grand-slam-2026": {
    titleEn: "Marie Claire · Big Five Grand Slam",
    summaryEn: "First post-90s artist to complete all five major women's magazine solo covers.",
  },
  "magazine-2026": {
    titleEn: "2026 Multi-Cover Run",
    summaryEn: "ELLE, GRAZIA, BAZAAR and more — fashion momentum into 2026.",
  },
  "macalline-shenyang-2026": {
    titleEn: "Macalline · Shenyang Brand Event",
    summaryEn: "Macalline Shenyang brand event June 27–28 promoting home lifestyle.",
  },
  "deeyeo-global-2026": {
    titleEn: "Deeyeo Global Brand Ambassador",
    summaryEn: "Announced June 13 with reported nationwide campaign.",
  },
};
