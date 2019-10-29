const cheerio = require("cheerio");

const extractTitle = text => {
  $ = cheerio.load(text, {
    xmlMode: true
  });
  let data = $("title")
    .text()
    .trim();
  if (data && data !== "") {
    return { data };
  } else {
    let error = {
      error: "true",
      message: "No title tag found."
    };
    return { data, ...error };
  }
};

module.exports = extractTitle;
