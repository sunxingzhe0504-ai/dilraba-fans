import { describe, expect, it } from "vitest";
import { searchSite } from "@content/index";

describe("searchSite", () => {
  it("returns empty for blank query", () => {
    expect(searchSite("")).toEqual([]);
    expect(searchSite("   ")).toEqual([]);
  });

  it("finds works by Chinese title", () => {
    const results = searchSite("长歌行");
    expect(results.some((r) => r.type === "作品" && r.href.includes("chang-ge-xing"))).toBe(true);
  });

  it("finds works by English title", () => {
    const results = searchSite("glory", 12, "en");
    expect(results.length).toBeGreaterThan(0);
  });

  it("respects limit", () => {
    const results = searchSite("迪", 2);
    expect(results.length).toBeLessThanOrEqual(2);
  });
});
