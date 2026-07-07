import { describe, expect, it } from "vitest";
import { metaDescription, metaTitle } from "@/lib/i18n/metadata";

describe("metadata helpers", () => {
  it("prefers English title when distinct", () => {
    expect(metaTitle("长歌行", "The Long Ballad")).toBe("The Long Ballad");
  });

  it("falls back to Chinese when English missing", () => {
    expect(metaTitle("长歌行")).toBe("长歌行");
  });

  it("combines bilingual description", () => {
    const desc = metaDescription("中文简介", "English summary");
    expect(desc).toContain("English summary");
    expect(desc).toContain("中文简介");
  });
});
