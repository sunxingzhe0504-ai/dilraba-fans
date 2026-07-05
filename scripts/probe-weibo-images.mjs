const page = "https://www.sina.cn/news/detail/5316679261230198.html";
const html = await fetch(page, { headers: { "User-Agent": "Mozilla/5.0" } }).then((r) => r.text());
const re = /https?:\/\/(?:wx[0-9]|tvax[0-9])\.sinaimg\.cn\/[^"'\\s<>]+/gi;
const hits = [...new Set(html.match(re) || [])];
console.log(hits.length, "urls");
for (const u of hits.slice(0, 30)) console.log(u);
