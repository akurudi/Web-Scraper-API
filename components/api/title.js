/*
Logic to handle API calls to /api/title/ endpoint. 
*/
const getURLText = require("../utils/getURLText");
const extractTitle = require("../cheerio/extractTitle");

const title = function(req, res) {
  const { url } = req.body;
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
        response.title = extractTitle(text);
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

module.exports = title;
