/*
Logic to handle API calls to /api/keywords/ endpoint.
*/
const getURLText = require("../utils/getURLText");
const extractKeywords = require("../cheerio/extractKeywords");

const keywords = function(req, res) {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "content-type"
  });
  if(req.method !== "GET") {
    let err = {};
    res.status(403)
    err.message = "FORBIDDEN";
    err.error = true;
    res.send(JSON.stringify(err));
    return;
  }
  const { url } = req.query;
  if (!url) {
    let err = {};
    err.message = "URL is not defined";
    err.error = true;
    res.type("json");
    res.send(JSON.stringify(err));
  } else {
    getURLText(url)
      .then(text => {
        let response = {};
        response.keywords = extractKeywords(text);
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(response));
      })
      .catch(error => {
        let err = {};
        err.message = error.message || error; //http protocol sets error.message but http.get sets only error
        err.error = true;
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(err));
        console.log("This is server catch block" + err);
      });
  }
};

module.exports = keywords;
