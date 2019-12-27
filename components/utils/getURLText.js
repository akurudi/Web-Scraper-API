/*
Accepts a URL string as an input and returns HTML body of the webpage as response. Webpage body needs to be parsed using a module like JSDOM or Cheerio.
*/
const https = require('https');

const scrapeWebpage = url => {
  if(url.indexOf('http') === -1) {
    url = 'https://' + url;
  }
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      const { statusCode } = response;
      if (statusCode !== 200) {
        reject('Request Failed with status code: ' + statusCode);
      } else {
        response.setEncoding("utf8");
        let body = "";
        response.on("data", chunk => body += chunk);
        response.on("end", () => {
          resolve(body);
        });
      }      
    }).on("error", error => reject(error));
  });
};

module.exports = scrapeWebpage;