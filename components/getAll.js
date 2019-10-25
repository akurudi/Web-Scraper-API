/*
Logic to handle API calls to /api/fetchassets/ endpoint. This module will parse the returned webpage contents using Cheerio and return two arrays, one with JS and other with CSS resources. 
*/
const scrapeWebpage = require('./scrapeWebpage.js');
const results = require('./getResults');

const getAll = function (req, res) {
	const {url,canonical, description, headings, keywords, links, title, hreflangs} = req.body;
	if(!url) {
		let err = {};
		err.message = 'URL is not defined';
		err.error = true;
		res.type('json')
		res.send(JSON.stringify(err));
	} else {
		scrapeWebpage(url)
		.then((text) => {
			let response = {};
			if(canonical) response.canonical = results.getCanonical(text);
			if(description) response.description = results.getDescription(text);
			if(keywords) response.keywords = results.getKeywords(text);
			if(headings) response.headings = results.getHeadings(text);
			if(links) response.links = results.getLinks(text);
			if(title) response.title = results.getTitle(text);
			if(hreflangs) response.hreflangs = results.getHreflangs(text);
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(response));
		})
		.catch((error) => {
			let err = {};
			err.message = error.message || error; //http protocol sets error.message but http.get sets only error
			err.error = true;
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(err));
			console.log('This is server catch block' + err);
		});
	}
	
};

module.exports = getAll;