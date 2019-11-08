const cheerio = require("cheerio");

const extractKeywords = text => {
  $ = cheerio.load(text, {
    xmlMode: true
  });
  let data = $('meta[name="keywords"]').attr("content");
  if (data && data !== "") {
    return { data };
  } else {
    let error = {
      error: true,
      message: "No meta keywords found."
    };
    return { data, ...error };
  }
};

module.exports = extractKeywords;