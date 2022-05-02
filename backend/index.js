const cheerio = require("cheerio");
const axios = require("axios");
const request = require("request");
const express = require("express");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  const query = req.query.q;
  console.log(query);

  const AXIOS_OPTIONS = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
    },
  };

  function getOrganicResults() {
    return axios
      .get(
        `https://www.google.com/search?q=${query}+site%3Ascattergoriesonline.net`,
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
              .map(function (x, idx) {
                return data.push(
                  $(x)
                    .parent()
                    .html()
                    .replace(
                      `<li class="ad left">\n                                                            <b>Advertisement</b>\n                                                            <script async="async" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n                                                            <!-- Basta - Catalog - 1st ad unit -->\n                                                            <ins class="adsbygoogle" style="display:block;" data-full-width-responsive="false" data-ad-format="auto" data-ad-client="ca-pub-4151037240598121" data-ad-slot="2786129117">\n                                                            </ins>\n                                                            <script>\n                                                        ( adsbygoogle = window.adsbygoogle || [ ] ).push( { } );\n                                                            </script>\n                                                        </li>`,
                      ""
                    )
                    .replace(
                      `<li class="ad right">\n                                                            <b>Advertisement</b>\n                                                            <script async="async" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n                                                            <!-- Basta - Catalog - 2nd,3rd etc ad unit -->\n                                                            <ins class="adsbygoogle" style="display:block;" data-full-width-responsive="false" data-ad-format="auto" data-ad-client="ca-pub-4151037240598121" data-ad-slot="3049447089">\n                                                            </ins>\n                                                            <script>\n                                                        ( adsbygoogle = window.adsbygoogle || [ ] ).push( { } );\n                                                            </script>\n                                                        </li>`,
                      ""
                    )
                    .replace(
                      ` <li class="ad visible-xs">\n                                                        <b>Categories game</b>\n        <div class="row">\n            <div class="col-xs-8" style="padding-right: 5px">\n                <a href="/x/a-click?idAContent=110502&amp;href=https%3A%2F%2Fwww.buymeacoffee.com%2Ftopoul%3Futm_source%3Dnet.topoul.basta_catalog%26utm_medium%3Dadtool%26utm_campaign%3DBANNER_MSG_BTN">\n                    <img alt="Categories game OFFLINE" data-src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-2.svg" onload="fetch( \'/x/a-view?idAContent=110502\', { method: \'GET\', headers: { } } ).then(/* just ping*/);" class="img-responsive lazyload">\n                </a>\n            </div>\n            <div class="col-xs-10" style="padding-left: 5px">\n                <p style="margin-top:0;padding-top: 0;">Do you like this game? Buy a coffee for the developer and give him energy for further development.</p><a href="/x/a-click?idAContent=110502&amp;href=https%3A%2F%2Fwww.buymeacoffee.com%2Ftopoul%3Futm_source%3Dnet.topoul.basta_catalog%26utm_medium%3Dadtool%26utm_campaign%3DBANNER_MSG_BTN" class="btn btn-block btn-primary text-center">\n                    Support the developer\n                </a>\n            </div>\n        </div>\n                                                    </li>`,
                      ""
                    )
                    .replace("\n", "")
                );
              });
          });

        res.send(data[0]);
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
