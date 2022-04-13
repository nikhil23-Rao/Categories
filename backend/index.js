const puppeteer = require("puppeteer"); // ^13.5.1

let browser;
(async () => {
  const searchQuery = "site:scattergoriesonline.net author-with-W";

  browser = await puppeteer.launch();
  const [page] = await browser.pages();
  await page.goto("https://www.google.com/", { waitUntil: "domcontentloaded" });
  await page.waitForSelector('input[aria-label="Search"]', { visible: true });
  await page.type('input[aria-label="Search"]', searchQuery);
  await Promise.all([page.waitForNavigation(), page.keyboard.press("Enter")]);
  await page.waitForSelector(".LC20lb", { visible: true });
  const searchResults = await page.$$eval(".LC20lb", (els) =>
    els.map((e) => ({ title: e.innerText, link: e.parentNode.href }))
  );
  try {
    await page.goto(searchResults[0].link, { waitUntil: "networkidle0" });
    const data = await page.evaluate(() => {
      const elements = document.getElementsByClassName("ad left");
      const elements1 = document.getElementsByClassName("ad right");
      const elements2 = document.getElementsByClassName("ad visible-xs");
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
      while (elements1.length > 0) {
        elements1[0].parentNode.removeChild(elements1[0]);
      }
      while (elements2.length > 0) {
        elements2[0].parentNode.removeChild(elements2[0]);
      }
      const lis = document.querySelectorAll("main > ul > li");
      var data = [];
      for (var i = 0; i < lis.length; i++) {
        data[i] = lis[i].textContent;
      }
      return data;
    });

    console.log(data);

    await browser.close();
  } catch (err) {
    console.error(err);
  }
})()
  .catch((err) => console.error(err))
  .finally(() => browser?.close());
