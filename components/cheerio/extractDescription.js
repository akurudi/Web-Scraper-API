const cheerio = require("cheerio");

const extractDescription = text => {
  $ = cheerio.load(text, {
    xmlMode: true
  });
  let data = $('meta[name="description"]').attr("content");
  if (data && data !== "") {
    return { data };
  } else {
    let error = {
      error: "true",
      message: "No meta description found."
    };
    return { data, ...error };
  }
};

module.exports = extractDescription;
