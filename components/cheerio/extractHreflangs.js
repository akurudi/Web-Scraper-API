const cheerio = require("cheerio");

const extractHreflangs = text => {
  $ = cheerio.load(text, {
    xmlMode: true
  });
  let data = [];
  let hreflangCollection = $('link[rel="alternate"]');
  if (hreflangCollection && hreflangCollection.length > 0) {
    hreflangCollection.each((i, elem) => {
      let obj = {};
      obj.hreflang = $(elem).attr("hreflang");
      obj.href = $(elem).attr("href");
      data.push(obj);
    });
    return { data };
  } else {
    let error = {
      error: "true",
      message: "No hreflang tags found."
    };
    return { data, ...error };
  }
};

module.exports = extractHreflangs;
