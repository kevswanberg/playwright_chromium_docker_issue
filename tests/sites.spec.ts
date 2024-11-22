import test, { expect } from "@playwright/test";

const doTest = async (site, page) => {
  expect(
    await page.evaluate(() => window.matchMedia("(pointer: fine)").matches)
  ).toBeTruthy();

  await page.goto(site, { timeout: 10000 });

  expect(
    await page
      .evaluate(() => window.matchMedia("(pointer: fine)").matches)
  ).toBeTruthy();
};

test("https://google.com", async ({ page }) => {
  await doTest("https://google.com", page);
});
test("https://facebook.com", async ({ page }) => {
  await doTest("https://facebook.com", page);
});
test("https://instagram.com", async ({ page }) => {
  await doTest("https://instagram.com", page);
});
test("https://bing.com", async ({ page }) => {
  await doTest("https://bing.com", page);
});
test("https://whatsapp.com", async ({ page }) => {
  await doTest("https://whatsapp.com", page);
});
test("https://chatgpt.com", async ({ page }) => {
  await doTest("https://chatgpt.com", page);
});
test("https://amazon.com", async ({ page }) => {
  await doTest("https://amazon.com", page);
});
test("https://duckduckgo.com", async ({ page }) => {
  await doTest("https://duckduckgo.com", page);
});
test("https://tiktok.com", async ({ page }) => {
  await doTest("https://tiktok.com", page);
});
test("https://msn.com", async ({ page }) => {
  await doTest("https://msn.com", page);
});
test("https://netflix.com", async ({ page }) => {
  await doTest("https://netflix.com", page);
});
test("https://weather.com", async ({ page }) => {
  await doTest("https://weather.com", page);
});
test("https://live.com", async ({ page }) => {
  await doTest("https://live.com", page);
});
test("https://naver.com", async ({ page }) => {
  await doTest("https://naver.com", page);
});
test("https://linkedin.com", async ({ page }) => {
  await doTest("https://linkedin.com", page);
});
test("https://microsoft.com", async ({ page }) => {
  await doTest("https://microsoft.com", page);
});
test("https://twitch.tv", async ({ page }) => {
  await doTest("https://twitch.tv", page);
});
test("https://office.com", async ({ page }) => {
  await doTest("https://office.com", page);
});
test("https://vk.com", async ({ page }) => {
  await doTest("https://vk.com", page);
});
test("https://openai.com", async ({ page }) => {
  await doTest("https://openai.com", page);
});
test("https://pinterest.com", async ({ page }) => {
  await doTest("https://pinterest.com", page);
});
test("https://quora.com", async ({ page }) => {
  await doTest("https://quora.com", page);
});
test("https://discord.com", async ({ page }) => {
  await doTest("https://discord.com", page);
});
test("https://canva.com", async ({ page }) => {
  await doTest("https://canva.com", page);
});
test("https://aliexpress.com", async ({ page }) => {
  await doTest("https://aliexpress.com", page);
});
test("https://github.com", async ({ page }) => {
  await doTest("https://github.com", page);
});
test("https://apple.com", async ({ page }) => {
  await doTest("https://apple.com", page);
});
test("https://globo.com", async ({ page }) => {
  await doTest("https://globo.com", page);
});
test("https://spotify.com", async ({ page }) => {
  await doTest("https://spotify.com", page);
});
test("https://roblox.com", async ({ page }) => {
  await doTest("https://roblox.com", page);
});
test("https://mail.ru", async ({ page }) => {
  await doTest("https://mail.ru", page);
});
test("https://imdb.com", async ({ page }) => {
  await doTest("https://imdb.com", page);
});
test("https://cnn.com", async ({ page }) => {
  await doTest("https://cnn.com", page);
});
test("https://nytimes.com", async ({ page }) => {
  await doTest("https://nytimes.com", page);
});

test("https://xkcd.com", async({page}) => {
    await doTest("https://xkcd.com", page);
});

test("https://gmail.com", async({page}) => {
    await doTest("https://gmail.com", page);
});


