import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Ma_Shan_Zheng, Noto_Sans_SC } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleProvider } from "@/components/LocaleProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Decorations } from "@/components/Decorations";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@/lib/themes";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from "@/lib/i18n/types";
import { getSiteUrl } from "@/lib/site-url";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const maShan = Ma_Shan_Zheng({
  variable: "--font-ma-shan",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "迪丽热巴 · 粉丝资讯站",
    template: "%s | 迪丽热巴粉丝站",
  },
  description:
    "温柔有力量，追光而行。四套百变首页风格并存，汇聚迪丽热巴影视作品、时尚杂志与公开活动的粉丝资讯站。",
  keywords: ["迪丽热巴", "Dilraba", "粉丝站", "DearBar", "作品", "杂志"],
  openGraph: {
    title: "迪丽热巴 · 粉丝资讯站",
    description: "温柔有力量，追光而行 —— 迪丽热巴粉丝资讯站",
    locale: "zh_CN",
    type: "website",
    images: [{ url: assetPath("/images/portraits/hero-red-pearl.jpg"), alt: "迪丽热巴" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "迪丽热巴 · 粉丝资讯站",
    description: "温柔有力量，追光而行 —— 迪丽热巴粉丝资讯站",
    images: [assetPath("/images/portraits/hero-red-pearl.jpg")],
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      data-theme={DEFAULT_THEME}
      suppressHydrationWarning
      className={`${notoSans.variable} ${cormorant.variable} ${maShan.variable} h-full`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}')||'${DEFAULT_THEME}';document.documentElement.dataset.theme=t;var l=localStorage.getItem('${LOCALE_STORAGE_KEY}')||'${DEFAULT_LOCALE}';document.documentElement.lang=l==='en'?'en':'zh-CN';}catch(e){document.documentElement.dataset.theme='${DEFAULT_THEME}';document.documentElement.lang='zh-CN';}})();`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <LocaleProvider>
          <ThemeProvider>
            <Decorations />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <ThemeSwitcher />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
