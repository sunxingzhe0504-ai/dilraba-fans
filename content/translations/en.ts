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
  "ma-la-bian-xing-ji": {
    roleEn: "Guan Xiaodi",
    synopsisEn:
      "Urban action drama — rebellious female bodyguard Guan Xiaodi grows through brutal training.",
    highlightsEn: ["Urban action lead", "Guan Xiaodi breakout"],
    airInfoEn: "Hunan TV · Aug 2016",
  },
  "liu-shan-men": {
    roleEn: "Su Yiqing",
    synopsisEn: "Wuxia mystery — heroic Su Yiqing alongside Raymond Lam in the Six Doors bureau.",
    highlightsEn: ["Wuxia heroine", "With Raymond Lam"],
  },
  "ai-de-jie-ti": {
    roleEn: "Song Zihan",
    synopsisEn:
      "Family business melodrama — Song Zihan navigates corporate feud and emotional entanglements.",
    highlightsEn: ["Song Zihan depth", "Early urban drama"],
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
  "ji-yunhe": {
    nameEn: "Ji Yunhe",
    workTitleEn: "The Blue Whisper",
    quoteEn: "May those I love live in peace for the rest of their lives.",
    descriptionEn: "Spirit master who tames demons — resilient growth through love and sacrifice.",
  },
  "an-ni": {
    nameEn: "An Ni",
    workTitleEn: "The Prosecution",
    descriptionEn: "Prosecutor in a legal drama — a professional, decisive realism pivot.",
  },
  "gao-wen": {
    nameEn: "Gao Wen",
    workTitleEn: "Diamond Lover",
    descriptionEn: "Flamboyant jewelry designer — the breakout supporting role that opened wider fame.",
  },
  "fu-qu": {
    nameEn: "Fuqu",
    workTitleEn: "Legend of the Ancient Sword",
    descriptionEn: "Gentle Tianshu disciple — an early xianxia role showing warmth and spirit.",
  },
  "wu-an-po": {
    nameEn: "Wu Anpo",
    workTitleEn: "We Era",
    descriptionEn: "Campus queen in a social-media era ensemble — early Jaywalk-era web drama role.",
  },
  "li-ji": {
    nameEn: "Li Ji",
    workTitleEn: "Sound of the Desert",
    descriptionEn: "Western Regions beauty in Tong Hua's desert epic — early period cameo.",
  },
  "qing-cheng": {
    nameEn: "Qingcheng",
    workTitleEn: "Beauty's Maker",
    descriptionEn: "Imperial consort in Tang-styled costume — striking early guest appearance.",
  },
  "an-xin": {
    nameEn: "Anxin",
    workTitleEn: "Legend of Ban Shu",
    descriptionEn: "Loulan princess with exotic charm in a palace-school drama.",
  },
  "li-huizhen": {
    nameEn: "Li Huizhen",
    workTitleEn: "Pretty Li Huizhen",
    descriptionEn: "Ordinary girl's inspirational comeback — first full urban lead role.",
  },
  "lie-ruge": {
    nameEn: "Lie Ruge",
    workTitleEn: "The Flame's Daughter",
    descriptionEn: "Bold wuxia heroine — passionate and loyal in a world of grudges.",
  },
  "ling-lingqi": {
    nameEn: "Ling Lingqi",
    workTitleEn: "Sweet Dreams",
    quoteEn: "Dreams are sweet — and waking life should stay sweet too.",
    descriptionEn: "Quirky floral designer in a sweet urban rom-com classic.",
  },
  "jiang-li": {
    nameEn: "Jiang Li",
    workTitleEn: "Love Against the Light",
    descriptionEn: "Wealthy bride who dies on her wedding day — investigates as a ghost in seven days.",
  },
  "guan-xiaodi": {
    nameEn: "Guan Xiaodi",
    workTitleEn: "Hot Girl",
    descriptionEn: "Rebellious bodyguard trainee — the iconic \"Fire Wolf Girl\" image.",
  },
  "song-zihan": {
    nameEn: "Song Zihan",
    workTitleEn: "Love's Ladder",
    descriptionEn: "Complex daughter caught in family feuds and emotional entanglements.",
  },
  "su-yiqing": {
    nameEn: "Su Yiqing",
    workTitleEn: "Six Doors",
    descriptionEn: "Brave martial heroine alongside Raymond Lam in wuxia suspense.",
  },
  "gong-sun-li": {
    nameEn: "Gongsun Li",
    workTitleEn: "The King's Woman",
    descriptionEn: "Resilient woman torn between love and duty in turbulent times.",
  },
  "zhou-fang": {
    nameEn: "Zhou Fang",
    workTitleEn: "Love Designer",
    descriptionEn: "Independent fashion designer navigating career and romance in the city.",
  },
  "hao-meili": {
    nameEn: "Hao Meili",
    workTitleEn: "Fall in Love at First Kiss",
    descriptionEn: "Dazzling star cameo in an early big-screen appearance.",
  },
  "tang-nannan": {
    nameEn: "Tang Nannan",
    workTitleEn: "Pride and Prejudice",
    descriptionEn: "Energetic novelist — first lead in a theatrical rom-com.",
  },
  "tong-tong": {
    nameEn: "Tongtong",
    workTitleEn: "Miracles of the Namiya General Store",
    descriptionEn: "Tomboy role in an East Asian IP film — a departure from her usual image.",
  },
  "liu-jiayin": {
    nameEn: "Liu Jiayin",
    workTitleEn: "21 Karats",
    descriptionEn: "Frugal urban heroine in a light comedy about love and money.",
  },
  "bai-fengjiu-zhen-shangshu": {
    nameEn: "Bai Fengjiu",
    workTitleEn: "Eternal Love of Dream",
    quoteEn: "I am Bai Fengjiu of Qingqiu — the one I marry is my Donghua.",
    descriptionEn: "Pillow Book lead — same Bai Fengjiu, dedicated storyline with Donghua.",
  },
  "jiu-chong-tian-unit": {
    nameEn: "TBA",
    workTitleEn: "Nine Heavens",
    descriptionEn: "Republic-era suspense anthology lead — filming 2026; role name pending official release.",
  },
  change: {
    nameEn: "Chang'e",
    workTitleEn: "Saga of Light",
    descriptionEn: "Mythical romance role — a free-spirited new take on the moon goddess.",
  },
  "yu-long": {
    nameEn: "Yu Long",
    workTitleEn: "Shaolin Women's Soccer",
    descriptionEn: "Stephen Chow film role blending kung fu and women's soccer — upcoming.",
  },
};

export const GALLERY_EN: Record<string, { titleEn: string }> = {
  "hero-red-pearl": { titleEn: "Red Pearl Gown" },
  "teal-floral": { titleEn: "Teal Floral" },
  "white-beauty": { titleEn: "Pure White Elegance" },
  "warm-candid": { titleEn: "Warm Side Profile" },
  "gold-crown": { titleEn: "Golden Crown Look" },
  "red-black": { titleEn: "Red & Black Couture" },
  "red-wall": { titleEn: "Red Wall Editorial" },
  mono: { titleEn: "Monochrome Portrait" },
  "wei-shi-dai-poster": { titleEn: "We Era · Wu Anpo" },
  "feng-zhong-poster": { titleEn: "Sound of the Desert · Li Ji" },
  "ni-guang-poster": { titleEn: "Love Against the Light · Jiang Li" },
  "chuangzaoying-poster": { titleEn: "Produce Camp 2019" },
  "kaishi-s3-poster": { titleEn: "The Truth! S3" },
  "jia-ren-2026": { titleEn: "Marie Claire 2026 Birthday Issue" },
  "bai-ri-ti-deng-poster": { titleEn: "Love Under the Lantern · He Simu" },
  "elle-2026": { titleEn: "ELLE 2026 Season Opener" },
  "bazaar-2025": { titleEn: "BAZAAR Limitless" },
  "grazia-2026": { titleEn: "GRAZIA 2026 New Year" },
  "figaro-2023": { titleEn: "Madame Figaro · Moon in Arms" },
  "changge-backdrop": { titleEn: "The Long Ballad · Li Changge" },
  "rongyao-poster": { titleEn: "You Are My Glory" },
  "fengjiu-poster": { titleEn: "Eternal Love · Bai Fengjiu" },
  "fengjiu-zhen-shangshu-poster": { titleEn: "Eternal Love of Dream · Bai Fengjiu" },
  "sui-ran-poster": { titleEn: "You Can't Have Everything at Once" },
  "jiu-chong-poster": { titleEn: "Nine Heavens" },
  "riyue-poster": { titleEn: "Saga of Light · Chang'e" },
  "shaolin-poster": { titleEn: "Shaolin Women's Soccer" },
  "ke-la-poster": { titleEn: "Diamond Lover · Gao Wen" },
  "liehuo-poster": { titleEn: "The Flame's Daughter · Lie Ruge" },
  "yiqianye-poster": { titleEn: "Sweet Dreams · Ling Lingqi" },
  "gongsu-poster": { titleEn: "The Prosecution · An Ni" },
  "anle-poster": { titleEn: "The Legend of Anle · Ren Anle" },
  "xiaoqi-poster": { titleEn: "Legend from the Hidden Niche · Nie Jiuluo" },
  "elle-2023": { titleEn: "ELLE May 2023" },
  "bazaar-2026": { titleEn: "BAZAAR 2026 New Year" },
  "lofficiel-2023": { titleEn: "L'Officiel China" },
  "grazia-2018": { titleEn: "GRAZIA 2018" },
  "zhou-fang-poster": { titleEn: "Love Designer · Zhou Fang" },
};

export type VideoEn = {
  titleEn: string;
  summaryEn?: string;
  durationEn?: string;
};

export const VIDEOS_EN: Record<string, VideoEn> = {
  "macalline-shenyang-2026-video": {
    titleEn: "Macalline Shenyang Event · On-Site Highlights",
    summaryEn: 'Shenyang brand event — fans sang "Chaser of Light" in a widely shared moment.',
  },
  "deeyeo-global-2026": {
    titleEn: "Deeyeo Global Ambassador Announcement",
    summaryEn: "Official Deeyeo global ambassador announcement on June 13.",
  },
  "jia-ren-cover-2026-video": {
    titleEn: "Marie Claire June Cover Teaser",
    summaryEn: '"AS SHE IS" birthday cover release.',
  },
  "china-film-tv-night-2026": {
    titleEn: "2026 China Film & TV Night · Red Carpet",
    summaryEn: "Georges Hobeika couture with Mikimoto jewels — red carpet return after 605 days.",
  },
  "sui-ran-shuangsheng-trailer": {
    titleEn: "You Can't Have Everything — Twin Wei Lan Trailer",
    summaryEn: "iQiyi Micro Drama — Dilraba as twin Wei Lans.",
  },
  "zhen-shang-shu-trailer": {
    titleEn: "Eternal Love of Dream Trailer · Bai Fengjiu",
  },
  "sui-ran-bu-neng-yiqie-trailer": {
    titleEn: "You Can't Have Everything — First Trailer",
    summaryEn: "Twin Wei Lans swap lives — iQiyi Micro Drama upcoming.",
  },
  "shili-taohua-trailer": {
    titleEn: "Eternal Love Trailer · Bai Fengjiu",
  },
  "ke-la-lian-ren-trailer": {
    titleEn: "Diamond Lover Trailer · Gao Wen",
  },
  "lie-huo-ru-ge-trailer": {
    titleEn: "The Flame's Daughter Trailer · Lie Ruge",
  },
  "yu-jiao-ji-trailer": {
    titleEn: "The Blue Whisper Trailer · Ji Yunhe",
  },
  "xingfu-trailer": {
    titleEn: "Love Designer Trailer · Zhou Fang",
  },
  "pao-pao-variety": {
    titleEn: "Keep Running Highlights",
  },
  "jixian-variety": {
    titleEn: "Go Fighting! Season 5 Clips",
  },
  "kaishi-s2-variety": {
    titleEn: "The Truth! Season 2",
  },
  "jiu-chong-tian-trailer": {
    titleEn: "Nine Heavens · Official Teaser",
    summaryEn: "Tencent S+ republic-era suspense anthology — filming 2026.",
  },
  "ri-yue-trailer": {
    titleEn: "Saga of Light · Teaser",
    summaryEn: "Mythical romance with Dou Xiao as Chang'e.",
  },
  "shaolin-nvzu-trailer": {
    titleEn: "Shaolin Women's Soccer · Announcement",
    summaryEn: "Stephen Chow-directed film — upcoming.",
  },
  "wei-shi-dai-trailer": {
    titleEn: "We Era Clips · Wu Anpo",
    summaryEn: "Tencent youth web drama — campus queen Wu Anpo.",
  },
  "kaishi-tuili-ba-s3-highlight": {
    titleEn: "The Truth! S3 Highlights",
    summaryEn: "2025 mystery variety show — season 3 regular cast.",
  },
  "huaer-silu-highlight": {
    titleEn: "Divas Hit the Road · Silk Road Season Dance",
    summaryEn: "Uyghur dance on board — widely praised in media reports.",
  },
  "ni-guang-zhi-lian-trailer": {
    titleEn: "Love Against the Light Trailer · Jiang Li",
    summaryEn: "Campus fantasy web drama lead role.",
  },
  "chuangzaoying-2019-highlight": {
    titleEn: "Produce Camp 2019 · Mentor Stage",
    summaryEn: "Head mentor (homeroom teacher) of the boy group survival show.",
  },
  "bai-ri-ti-deng-trailer": {
    titleEn: "Love Under the Lantern Trailer · He Simu",
    summaryEn: "Fantasy romance as ghost queen He Simu — Tencent Video exclusive.",
    durationEn: "Trailer",
  },
  "li-jian-mei-gui-trailer": {
    titleEn: "Sword Rose Trailer · Deng Yan",
    summaryEn: "Anti-trafficking drama on CCTV-8 primetime.",
    durationEn: "Trailer",
  },
  "xiao-qi-qing-rang-trailer": {
    titleEn: "Legend from the Hidden Niche Trailer · Nie Jiuluo",
    summaryEn: "Fantasy adventure with Chen Xingxu on Tencent Video.",
    durationEn: "Trailer",
  },
  "ni-shi-wo-de-rongyao-trailer": {
    titleEn: "You Are My Glory · Official Trailer",
    durationEn: "Trailer",
  },
  "chang-ge-xing-trailer": {
    titleEn: "The Long Ballad Trailer · Li Changge",
  },
  "gong-su-trailer": {
    titleEn: "The Prosecution · Promo Special",
  },
  "an-le-zhuan-trailer": {
    titleEn: "The Legend of Anle · Trailer",
  },
  "studio-birthday-2026": {
    titleEn: "Dilraba Studio · 2026 Birthday Message",
    summaryEn: "Studio birthday wishes and June schedule release.",
  },
  "studio-birthday-2025": {
    titleEn: "Dilraba Studio · Birthday Message",
    summaryEn: "Birthday video and posts from the official studio Weibo.",
  },
  "studio-li-jian-premiere": {
    titleEn: "Studio · Sword Rose Premiere",
    summaryEn: "CCTV primetime premiere promotion.",
  },
  "dior-suzhou-event": {
    titleEn: "Dior Suzhou High Jewelry Event",
    summaryEn: "Global ambassador at Suzhou dinner in Belle Dior jewels.",
  },
  "sweet-dreams-mv": {
    titleEn: "Sweet Dreams · Insert Song MV",
  },
  "golden-eagle-interview": {
    titleEn: "Golden Eagle Festival Interview Clips",
    summaryEn: "2018 Golden Eagle Goddess related public interviews.",
  },
  "variety-happy-camp": {
    titleEn: "Variety Show Highlights Collection",
    summaryEn: "Happy Camp and other variety show clips.",
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
