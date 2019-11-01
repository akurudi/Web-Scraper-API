/*
Logic to handle API calls to /api/all/ endpoint. 
*/
const getURLText = require("../utils/getURLText");
const extractCanonical = require("../cheerio/extractCanonical");
const extractDescription = require("../cheerio/extractDescription");
const extractKeywords = require("../cheerio/extractKeywords");
const extractHeadings = require("../cheerio/extractHeadings");
const extractTitle = require("../cheerio/extractTitle");
const extractHreflangs = require("../cheerio/extractHreflangs");

const getAll = function(req, res) {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "POST"
  });
  if (req.method === "OPTIONS") {
    res.send("Preflight Okay.");
    return;
  }
  const {
    url,
    canonical,
    description,
    headings,
    keywords,
    title,
    hreflangs
  } = req.body;
  if (!url) {
    let err = {};
    err.message = "URL is not defined";
    err.error = true;
    res.send(JSON.stringify(err));
  } else {
    getURLText(url)
      .then(text => {
        let response = {};
        if (canonical) response.canonical = extractCanonical(text);
        if (keywords) response.keywords = extractKeywords(text);
        if (description) response.description = extractDescription(text);
        if (title) response.title = extractTitle(text);
        if (headings) response.headings = extractHeadings(text);
        if (hreflangs) response.hreflangs = extractHreflangs(text);
        res.send(JSON.stringify(response));
      })
      .catch(error => {
        let err = {};
        err.message = error.message || error; //http protocol sets error.message but http.get sets only error
        err.error = true;
        res.send(JSON.stringify(err));
        console.log("This is server catch block" + err);
      });
  }
};

module.exports = getAll;
