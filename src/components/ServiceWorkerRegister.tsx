"use client";

import { useEffect } from "react";
import { assetPath } from "@/lib/asset-path";

/** Register offline cache service worker (static export / GitHub Pages). */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    const swUrl = assetPath("/sw.js");
    navigator.serviceWorker.register(swUrl).catch(() => {
      /* registration may fail on unsupported contexts */
    });
  }, []);

  return null;
}
