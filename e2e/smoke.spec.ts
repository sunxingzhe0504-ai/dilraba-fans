import { expect, test } from "@playwright/test";

test.describe("smoke", () => {
  test("home loads with hero and navigation", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main")).toBeVisible();
    await expect(page.getByRole("link", { name: /首页|Home/i }).first()).toBeVisible();
  });

  test("works page lists content", async ({ page }) => {
    await page.goto("/works");
    await expect(page.locator("main h1, main h2").first()).toBeVisible();
  });

  test("markdown CMS story page loads", async ({ page }) => {
    await page.goto("/stories/cms-example-post");
    await expect(page.locator("main")).toContainText(/Markdown/i);
  });

  test("share buttons on work detail", async ({ page }) => {
    await page.goto("/works/chang-ge-xing");
    const share = page.getByRole("group", { name: /分享|Share/i });
    await expect(share).toBeVisible();
    await expect(share.getByRole("link", { name: /分享到微博|Share on Weibo/i })).toBeVisible();
  });

  test("dark color scheme applies from preference", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => {
      localStorage.setItem("dlrb-color-scheme", "dark");
      document.documentElement.dataset.colorScheme = "dark";
    });
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-color-scheme", "dark");
  });

  test("English mirror route", async ({ page }) => {
    await page.goto("/en/works");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("main")).toBeVisible();
  });

  test("fan data backup on fans page", async ({ page }) => {
    await page.goto("/fans");
    await expect(page.getByRole("button", { name: /导出|Export JSON/i })).toBeVisible();
  });
});
