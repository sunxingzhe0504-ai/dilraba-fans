import type { MetadataRoute } from "next";
import { assetPath } from "@/lib/asset-path";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "迪丽热巴 · 粉丝资讯站",
    short_name: "热巴粉丝站",
    description:
      "非官方粉丝资讯站，汇聚迪丽热巴影视作品、时尚杂志与公开活动资讯。 / Unofficial Dilraba fan info site.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#fdf4ea",
    theme_color: "#d3697a",
    lang: "zh-CN",
    icons: [
      {
        src: assetPath("/file.svg"),
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: assetPath("/images/portraits/hero-red-pearl.jpg"),
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
