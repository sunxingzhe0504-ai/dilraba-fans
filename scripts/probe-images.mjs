const urls = [
  "https://www.163.com/dy/article/KVGMP4P605567TRE.html",
  "https://c.m.163.com/news/a/L0FH6E5805568W0A.html",
  "http://life.3news.cn/ttly/2026/0623/1162942.html",
  "https://ent.sina.cn/2026-07-05/detail-inifsqps9187546.d.html",
  "https://www.bjnews.com.cn/detail/1782702092168011.html",
];
const BLOCK = /logo|icon|avatar|emoji|blank|spacer|1x1|qrcode|\.js(\?|$)|push_|thumb_default|320X320|default\/|t_sohu|mjs\.sinaimg/i;

for (const page of urls) {
  try {
    const res = await fetch(page, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0" },
    });
    const html = await res.text();
    const found = new Set();
    for (const m of html.matchAll(/https?:\/\/[^"'\\s<>]+\.(?:jpe?g|png|webp)(?:\?[^"'\\s<>]*)?/gi)) {
      found.add(m[0]);
    }
    for (const m of html.matchAll(/(?:src|data-src|data-original)=["']([^"']+)["']/gi)) {
      const u = m[1];
      if (/\.(jpe?g|png|webp)/i.test(u) && !BLOCK.test(u)) found.add(u);
    }
    console.log(`\n=== ${page} ===`);
    [...found]
      .filter((u) => !BLOCK.test(u))
      .slice(0, 20)
      .forEach((u) => console.log(u));
  } catch (e) {
    console.log(page, e.message);
  }
}
