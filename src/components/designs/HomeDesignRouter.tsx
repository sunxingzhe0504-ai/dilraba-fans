"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/components/ThemeProvider";
import { HomeChapterNav } from "@/components/HomeChapterNav";
import { DEFAULT_THEME } from "@/lib/themes";
import type { HomeData } from "./types";
import { DesignPageFallback } from "./DesignPageFallback";

const DesignWarmCinema = dynamic(
  () => import("./DesignWarmCinema").then((m) => ({ default: m.DesignWarmCinema })),
  { loading: () => <DesignPageFallback /> },
);
const DesignXianxia = dynamic(
  () => import("./DesignXianxia").then((m) => ({ default: m.DesignXianxia })),
  { loading: () => <DesignPageFallback /> },
);
const DesignFanSticker = dynamic(
  () => import("./DesignFanSticker").then((m) => ({ default: m.DesignFanSticker })),
  { loading: () => <DesignPageFallback /> },
);
const DesignEditorial = dynamic(
  () => import("./DesignEditorial").then((m) => ({ default: m.DesignEditorial })),
  { loading: () => <DesignPageFallback /> },
);

export function HomeDesignRouter({ data }: { data: HomeData }) {
  const { theme } = useTheme();

  const content = (() => {
    switch (theme) {
      case "a":
        return <DesignXianxia data={data} />;
      case "b":
        return <DesignFanSticker data={data} />;
      case "d":
        return <DesignEditorial data={data} />;
      case "c":
      default:
        return <DesignWarmCinema data={data} />;
    }
  })();

  return (
    <>
      {content}
      <HomeChapterNav />
    </>
  );
}

/** Preload inactive home themes during idle time after theme switch. */
export function prefetchHomeTheme(theme: string) {
  const loaders: Record<string, () => void> = {
    a: () => void import("./DesignXianxia"),
    b: () => void import("./DesignFanSticker"),
    c: () => void import("./DesignWarmCinema"),
    d: () => void import("./DesignEditorial"),
  };
  const load = loaders[theme] ?? loaders[DEFAULT_THEME];
  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(() => load());
  } else {
    setTimeout(load, 200);
  }
}
