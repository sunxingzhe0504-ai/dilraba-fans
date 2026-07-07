import { describe, expect, it } from "vitest";
import { resolveColorScheme } from "@/lib/color-scheme";

describe("resolveColorScheme", () => {
  it("returns light for light preference", () => {
    expect(resolveColorScheme("light")).toBe("light");
  });

  it("returns dark for dark preference", () => {
    expect(resolveColorScheme("dark")).toBe("dark");
  });
});
