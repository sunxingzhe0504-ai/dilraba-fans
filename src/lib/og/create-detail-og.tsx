import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function createDetailOgImage(opts: {
  title: string;
  subtitle?: string;
  tag?: string;
}) {
  const title = opts.title.slice(0, 80);
  const subtitle = opts.subtitle?.slice(0, 120) ?? "";
  const tag = opts.tag ?? "Dilraba Fan Site";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #2a0f14 0%, #5c1a28 45%, #8b3a4a 100%)",
          color: "#faf6f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#d4a853",
            }}
          />
          <span style={{ fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85 }}>
            {tag}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>{title}</div>
          {subtitle ? (
            <div style={{ fontSize: 28, lineHeight: 1.4, opacity: 0.88, maxWidth: 900 }}>{subtitle}</div>
          ) : null}
        </div>
        <div style={{ fontSize: 20, opacity: 0.7 }}>追光而遇 · Meet the light</div>
      </div>
    ),
    { ...ogImageSize },
  );
}
