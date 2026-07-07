/** Build third-party share URLs (Weibo, etc.). */

export function buildWeiboShareUrl(opts: {
  url: string;
  title: string;
  pic?: string;
}): string {
  const params = new URLSearchParams();
  params.set("url", opts.url);
  params.set("title", opts.title);
  if (opts.pic) params.set("pic", opts.pic);
  return `https://service.weibo.com/share/share.php?${params.toString()}`;
}

/** Compose share text: title + optional tagline. */
export function buildShareTitle(title: string, tagline?: string): string {
  if (!tagline?.trim()) return title;
  return `${title} · ${tagline}`;
}
