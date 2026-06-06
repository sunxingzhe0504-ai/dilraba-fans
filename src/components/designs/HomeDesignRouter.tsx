"use client";

import { useTheme } from "@/components/ThemeProvider";
import type { HomeData } from "./types";
import { DesignWarmCinema } from "./DesignWarmCinema";
import { DesignXianxia } from "./DesignXianxia";
import { DesignFanSticker } from "./DesignFanSticker";
import { DesignEditorial } from "./DesignEditorial";

export function HomeDesignRouter({ data }: { data: HomeData }) {
  const { theme } = useTheme();

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
}
