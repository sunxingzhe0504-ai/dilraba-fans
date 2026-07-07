"use client";

import { useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { exportFanData, importFanData } from "@/lib/fan-storage";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "c" | "a" | "b" | "d";
};

export function FanDataBackup({ variant = "c" }: Props) {
  const t = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<"success" | "error" | null>(null);

  const titleClass =
    variant === "a"
      ? "zh-display text-2xl text-wine-deep"
      : variant === "b"
        ? "text-2xl font-extrabold text-wine-deep"
        : "display text-2xl text-ink";

  const onExport = () => {
    const blob = new Blob([exportFanData()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dilraba-fan-data-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const onImportFile = async (file: File) => {
    setMessage(null);
    const text = await file.text();
    const result = importFanData(text);
    setMessage(result.ok ? "success" : "error");
  };

  return (
    <section>
      <p className="kicker">{t("fanData.kicker")}</p>
      <h2 className={cn("mt-2", titleClass)}>{t("fanData.title")}</h2>
      <p className="mt-2 max-w-xl text-sm text-ink-soft">{t("fanData.subtitle")}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={onExport} className="btn-primary inline-flex items-center gap-2">
          <Download size={16} aria-hidden />
          {t("fanData.export")}
        </button>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="btn-ghost inline-flex items-center gap-2"
        >
          <Upload size={16} aria-hidden />
          {t("fanData.import")}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="application/json,.json"
          className="sr-only"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void onImportFile(file);
            e.target.value = "";
          }}
        />
      </div>
      <p className="mt-3 text-xs text-ink-mute">{t("fanData.importHint")}</p>
      {message === "success" && (
        <p className="mt-3 text-sm text-wine" role="status">
          {t("fanData.success")}
        </p>
      )}
      {message === "error" && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {t("fanData.error")}
        </p>
      )}
    </section>
  );
}
