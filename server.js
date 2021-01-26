const cheerio = require("cheerio");
const request = require("request");
const axios = require("axios").default;
require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 8000;
const cors = require("cors");

app.use(cors());

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose Connection ERROR: ${err.message}`);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!!");
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const Blog = require("./model/Blog");

app.get("/search", async (req, res) => {
  const { tag, count } = req.query;
  let datas = [];

  request(
    `https://medium.com/search/posts?q=${tag}&count=${count}`,
    (err, response, html) => {
      if (response.statusCode === 200) {
        const $ = cheerio.load(html);

        $(".js-block")
          .slice($(".js-block").length - 10)
          .each((i, element) => {
            const author = $(element).find(".ds-link").text();
            const article = $(element)
              .find(".postArticle-content")
              .find("a")
              .attr("href");

            const src = $(element)
              .find(".postArticle-content")
              .find("img")
              .attr("src");

            const title =
              $(element).find("h3").text() || $(element).find("h2").text();

            const details = $(element).find("h4").text();

            const responses = $(element).find(".buttonSet .button").text();

            let data = {
              author,
              article,
              title,
              src,
              details,
              responses,
            };

            datas.push(data);
          });
        const newBlog = new Blog({ tag, blogs: datas });
        newBlog.save();

        res.send(datas);
      }
    }
  );
});

app.get("/article", async (req, res) => {
  const { path } = req.query;

  request(path, (err, response, html) => {
    if (response.statusCode === 200) {
      const $ = cheerio.load(html);
      const title = $("h1:first").text();
      const para = $("p").text();
      const response = $("h4 button").text().slice(0, 4);

      let data = { title, para, response };

      res.send(data);
    }
  });
});
