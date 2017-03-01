var fs = require("fs");
var express = require('express');
var evennements = require('./evenements');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/app'));
app.use('/bower_components',
express.static(__dirname + '/bower_components')); // servir bower components
app.use(bodyParser.json());

app.use(bodyParser.json());

app.get('/evenements', function(req, res) { 
	fs.readFile('evenements.json', 'utf8', function (err,data) {
		if (err) {
			console.log(err);
		}
		
		console.log(data);
		var obj = JSON.parse(data);
		res.json(obj);
	});
  console.log(req.params.id);
});

app.post('/idevenement', function (req, res){
	res.send()
});

app.listen(8080);