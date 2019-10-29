const cheerio = require("cheerio");

const checkDuplicateKeywords = keywordStr => {
  let duplicatesFound = false;
  keywordArray = keywordStr.split(",");
  keywordArray = keywordArray.map(elem => elem.trim());
  let len = keywordArray.length;
  for (let i = 0; i < len; i++) {
    if (
      keywordArray.indexOf(keywordArray[i]) !==
      keywordArray.lastIndexOf(keywordArray[i])
    ) {
      duplicatesFound = true;
      break;
    }
  }
  return duplicatesFound;
};

const extractKeywords = text => {
  $ = cheerio.load(text, {
    xmlMode: true
  });
  let data = $('meta[name="keywords"]').attr("content");
  if (data && data !== "") {
    if (checkDuplicateKeywords(data)) {
      let error = {
        error: true,
        message: "Duplicate keywords found."
      };
      return { data, ...error };
    }
  } else {
    let error = {
      error: true,
      message: "No meta keywords found."
    };
    return { data, ...error };
  }
  return { data };
};

module.exports = extractKeywords;
