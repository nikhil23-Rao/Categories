const cheerio = require("cheerio");
const axios = require("axios");
const request = require("request");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  const port = 3001;
  const category = req.query.category;
  console.log(category);
  const letter = req.query.letter;

  const AXIOS_OPTIONS = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
    },
  };

  function getOrganicResults() {
    return axios
      .get(
        `https://www.google.com/search?q=site%3Ascattergoriesonline.net+${category.replace(
          " ",
          "+"
        )}+%22with+${letter}%22`,
        AXIOS_OPTIONS
      )
      .then(function ({ data }) {
        let $ = cheerio.load(data);

        const links = [];
        const titles = [];
        const snippets = [];

        $(".yuRUbf > a").each((i, el) => {
          links[i] = $(el).attr("href");
        });
        $(".yuRUbf > a > h3").each((i, el) => {
          titles[i] = $(el).text();
        });
        $(".IsZvec").each((i, el) => {
          snippets[i] = $(el).text().trim();
        });

        const result = [];
        for (let i = 0; i < links.length; i++) {
          result[i] = {
            link: links[i],
            title: titles[i],
            snippet: snippets[i],
          };
        }

        return result;
      });
  }
  getOrganicResults().then((arr) => {
    if (arr[0].link) {
      const url = arr[0].link;
      request(
        {
          method: "GET",
          url,
        },
        (err, _, body) => {
          if (err) return console.error(err);

          let $ = cheerio.load(body);

          let data = [];

          $("main")
            .toArray()
            .map(function (x) {
              return $(x)
                .find("ul")
                .children()
                .toArray()
                .map(function (x) {
                  if ($(x).text().trim() === "Advertisement") return;

                  return data.push($(x).text());
                });
            });

          data.pop();
          res.send(data);
        }
      );
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
});
