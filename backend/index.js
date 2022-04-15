const puppeteer = require("puppeteer"); // ^13.5.1
const express = require("express");
var cors = require("cors");

const app = express();
let browser;

app.use(cors());

app.get("/", async (req, res) => {
  console.log("Here");
  const query = req.query.query;
  const searchQuery = `site:scattergoriesonline.net ${query}`;

  browser = await puppeteer.launch();
  const [page] = await browser.pages();
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
  );
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

    res.send(data);

    await browser.close();
  } catch (err) {
    console.error(err);
  }
});

app.listen(3001);
console.log("LISTENING");
