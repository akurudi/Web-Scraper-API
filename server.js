var express = require('express');
var bodyParser = require('body-parser')
var getAll = require('./components/getAll.js');
const PORT = process.env.PORT || 4000;

var app = express();
app.set('port', PORT);
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.all('/', function(req, res) {
	res.type('json')
	res.status(501).json({data:"Invalid API endpoint"})
})
app.all('/api/getall/', getAll);
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port') + ' using nodemon.');
});