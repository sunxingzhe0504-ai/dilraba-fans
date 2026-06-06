/** Prefix public asset paths when the site is served under a basePath (e.g. GitHub Pages). */
export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  return `${base}${path}`;
}
