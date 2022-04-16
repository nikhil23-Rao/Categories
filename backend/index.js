const cheerio = require("cheerio");
const axios = require("axios");
const html = require("node-html-parser");

const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  console.log("Here");
  const query = req.query.query;
  const getData = async (url) => {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
      },
    });
    const $ = cheerio.load(data);
    const links = Array.from($('div[class="yuRUbf"] >a')).map((a) => {
      return $(a).attr("href");
    });
    console.log(links);
    const dataWebSite = links[0];

    const { data: mainData } = await axios.get(dataWebSite, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
      },
    });
    const $2 = cheerio.load(mainData);
    const elements = html.parse($2.html());
    const ul = elements.querySelectorAll("main > ul");
    const listItems = elements.getElementsByTagName("li");

    let srcData = [];

    // Loop through the NodeList object.
    for (let i = 0; i <= listItems.length - 1; i++) {
      srcData.push(listItems[i].childNodes[0].rawText);
    }

    res.send(srcData);
  };

  getData(
    `https://www.google.com/search?q=site%3Ascattergoriesonline.net+${query}`
  );
});

app.listen(3001);
console.log("LISTENING");
