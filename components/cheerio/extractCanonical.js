const cheerio = require("cheerio");

const extractCanonical = text => {
  $ = cheerio.load(text, {
    xmlMode: true
  });
  let data = $('link[rel="canonical"]').attr("href");
  if (data && data !== "") {
    return { data };
  } else {
    let error = {
      error: "true",
      message: "No canonical links found."
    };
    return { data, ...error };
  }
};

module.exports = extractCanonical;
