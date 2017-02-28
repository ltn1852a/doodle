var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(express.static(__dirname + '/app'));
app.use('/bower_components',
express.static(__dirname + '/bower_components')); // servir bower components
app.use(bodyParser.json());

app.listen(8080, function(){
	console.log("Listening 8080");
});