const cheerio = require('cheerio');

exports.getCanonical = (text) => {	
	$ = (cheerio.load(text, {
		xmlMode: true
	}));
	let canonicalArray = $('link[rel="canonical"]').map((i, elem) => {
		return $(elem).toString();
	}).get();
	return canonicalArray
}

exports.getDescription = (text) => {	
	$ = (cheerio.load(text, {
		xmlMode: true
	}));
	let descriptionArray = $('meta[name="description"]').map((i, elem) => {
		return $(elem).attr('content').trim();
	}).get();
	return descriptionArray
}

exports.getKeywords = (text) => {	
	$ = (cheerio.load(text, {
		xmlMode: true
	}));
	let descriptionArray = $('meta[name="keywords"]').map((i, elem) => {
		return $(elem).attr('content').trim();
	}).get();
	return descriptionArray
}

exports.getHeadings = (text) => {	
	$ = (cheerio.load(text, {
		xmlMode: true
	}));
	let descriptionArray = $('h1').map((i, elem) => {
		return $(elem).text();
	}).get();
	return descriptionArray
}

exports.getLinks = (text) => {	
	$ = (cheerio.load(text, {
		xmlMode: true
	}));
	let canonicalArray = $('a').map((i, elem) => {
		return $(elem).attr('href');
	}).get();
	return canonicalArray
}

exports.getTitle = (text) => {	
	$ = (cheerio.load(text, {
		xmlMode: true
	}));
	let canonicalArray = $('title').map((i, elem) => {
		return $(elem).text().trim();
	}).get();
	return canonicalArray
}

exports.getHreflangs = (text) => {	
	$ = (cheerio.load(text, {
		xmlMode: true
	}));
	let canonicalArray = $('link[rel="alternate"]').map((i, elem) => {
		return $(elem).attr('hreflang');
	}).get();
  return canonicalArray
}