const cheerio = require("cheerio");

const extractOpengraph = text => {
  $ = cheerio.load(text, {
    xmlMode: true
  });
  let data = [];
  let ogCollection = $('meta[property*="og:"]');
  if (ogCollection && ogCollection.length > 0) {
    ogCollection.each((i, elem) => {
      let obj = {};
      obj.property = $(elem).attr("property");
      obj.content = $(elem).attr("content");
      data.push(obj);
    });
    return { data };
  } else {
    let error = {
      error: "true",
      message: "No open graph tags found."
    };
    return { data, ...error };
  }
};

module.exports = extractOpengraph;
