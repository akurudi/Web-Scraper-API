var express = require('express');
var bodyParser = require('body-parser')
var all = require('./components/api/all');
var canonical = require('./components/api/canonical');
var keywords = require('./components/api/keywords');
var description = require('./components/api/description');
var title = require('./components/api/title');
var headings = require('./components/api/headings');
var hreflangs = require('./components/api/hreflangs');
var opengraph = require('./components/api/opengraph');

const PORT = process.env.PORT || 4000;

var app = express();
app.set('port', PORT);
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.all('/', function(req, res) {
	res.type('json')
	res.status(501).json({data:"Invalid API endpoint"})
})
app.all('/api/all/', all);
app.all('/api/canonical/', canonical);
app.all('/api/keywords/', keywords);
app.all('/api/description/', description);
app.all('/api/title/', title);
app.all('/api/headings/', headings);
app.all('/api/hreflangs/', hreflangs);
app.all('/api/opengraph/', opengraph);
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port') + ' using nodemon.');
});