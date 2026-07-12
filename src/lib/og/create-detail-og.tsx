import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

const MIME: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

function imageMimeFromBuffer(buf: Buffer): string | null {
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xd8) return "image/jpeg";
  if (buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    return "image/png";
  }
  if (
    buf.length >= 12 &&
    buf.subarray(0, 4).toString("ascii") === "RIFF" &&
    buf.subarray(8, 12).toString("ascii") === "WEBP"
  ) {
    return "image/webp";
  }
  return null;
}

async function loadPublicImage(imagePath?: string): Promise<string | null> {
  if (!imagePath?.startsWith("/")) return null;
  const ext = path.extname(imagePath).toLowerCase();
  try {
    const filePath = path.join(process.cwd(), "public", imagePath.replace(/^\//, ""));
    const buf = await readFile(filePath);
    const mime = imageMimeFromBuffer(buf) ?? MIME[ext];
    if (mime !== "image/jpeg" && mime !== "image/png") return null;
    return `data:${mime};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

export async function createDetailOgImage(opts: {
  title: string;
  subtitle?: string;
  tag?: string;
  imagePath?: string;
}) {
  const title = opts.title.slice(0, 80);
  const subtitle = opts.subtitle?.slice(0, 120) ?? "";
  const tag = opts.tag ?? "Dilraba Fan Site";
  const cover = await loadPublicImage(opts.imagePath);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          background: "linear-gradient(135deg, #2a0f14 0%, #5c1a28 45%, #8b3a4a 100%)",
          color: "#faf6f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 72,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#d4a853" }} />
            <span style={{ fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85 }}>
              {tag}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: cover ? 52 : 64, fontWeight: 700, lineHeight: 1.15 }}>{title}</div>
            {subtitle ? (
              <div style={{ fontSize: 26, lineHeight: 1.4, opacity: 0.88 }}>{subtitle}</div>
            ) : null}
          </div>
          <div style={{ fontSize: 20, opacity: 0.7 }}>追光而遇 · Meet the light</div>
        </div>
        {cover ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 48,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cover}
              alt=""
              width={320}
              height={480}
              style={{
                objectFit: "cover",
                borderRadius: 16,
                border: "4px solid rgba(255,255,255,0.15)",
              }}
            />
          </div>
        ) : null}
      </div>
    ),
    { ...ogImageSize },
  );
}
