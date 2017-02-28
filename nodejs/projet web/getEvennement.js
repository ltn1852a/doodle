
var express = require('express');
var banque = require('./evennements');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


app.get('/evennement', function(req, res) { 
  console.log(req.params.id); 
  res.json(evennements.getEvennement);
});

app.listen(8080);