const cheerio = require("cheerio");

const extractHeadings = text => {
  $ = cheerio.load(text, {
    xmlMode: true
  });
  let data = [];
  let headingCollection = $("h1, h2, h3");
  if (headingCollection && headingCollection.length > 0) {
    headingCollection.each((i, elem) => {
      let obj = {};
      obj.heading = $(elem).toString().trim().substring(1,3);
      obj.value = $(elem).text().trim();
      data.push(obj);
    });
    return { data };
  } else {

  }
  if (data && data !== "") {
    return { data };
  } else {
    let error = {
      error: "true",
      message: "No H1 tag found."
    };
    return { data, ...error };
  }
};

module.exports = extractHeadings;