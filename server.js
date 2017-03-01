var fs = require("fs");
var express = require('express');
var evennements = require('./evennements');
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
		return console.log(err);
	  }
	  console.log(data);
	//res.json(data);
});
  console.log(req.params.id); 
  res.json(evennements.getEvennement);
});

app.listen(8080);