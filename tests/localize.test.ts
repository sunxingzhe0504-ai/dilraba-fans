import { describe, expect, it } from "vitest";
import { getWorkBySlug } from "@content/index";
import { localizeWork } from "@/lib/i18n/localize";

describe("localizeWork", () => {
  it("returns Chinese work unchanged for zh locale", () => {
    const work = getWorkBySlug("chang-ge-xing");
    expect(work).toBeDefined();
    const localized = localizeWork(work!, "zh");
    expect(localized.title).toBe(work!.title);
  });

  it("localizes upcoming work airInfo to English", () => {
    const work = getWorkBySlug("jiu-chong-tian");
    expect(work).toBeDefined();
    const localized = localizeWork(work!, "en");
    expect(localized.airInfo).toMatch(/Tencent Video/i);
    expect(localized.title).toBe("Nine Heavens");
  });

  it("uses WORKS_EN synopsis for English locale", () => {
    const work = getWorkBySlug("shaolin-nvzu");
    expect(work).toBeDefined();
    const localized = localizeWork(work!, "en");
    expect(localized.synopsis).toMatch(/Stephen Chow/i);
  });
});
