var fs = require("fs");
var express = require('express');
var evenements = require('./evenements');
var utilisateurs = require('./utilisateurs');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/app'));
app.use('/bower_components',
express.static(__dirname + '/bower_components')); // servir bower components
app.use(bodyParser.json());

app.use(bodyParser.json());

app.get('/evenements', function(req, res) { 
	
  console.log(evenements.getEvennement());
  
  res.json(evenements.getEvennement());
 
});

app.get('/ajoutCreneau', function(req, res) { 
	
  res.json(evenements.getEvennement());
 
});

app.get('/authentification/:pseudo/:motPasse', function(req, res) { 
	var pseudo = req.params.pseudo;
	var motPasse = req.params.motPasse;
	var rep = utilisateurs.authentifier(pseudo, motPasse);
	res.json(rep);
});

app.post('/creerUti', function(req, res) { 
	utilisateurs.creerUtilisateur(req.body.pseudo, req.body.nom, req.body.prenom, req.body.motPasse);
	res.send();
});

app.post('/creerEvenement', function(req, res) { 
	evenements.creerEvennement(req.body.idEvenement, req.body.descEvenement);
	res.send();
});

app.post('/ajoutCreneau', function(req, res){
	console.log("ajouter créneau");
	console.log(req.body.idEvenement);
	console.log(req.body.dateCreneau);
	console.log(req.body.heureCreneau);
	evenements.ajouterCreneau(req.body.idEvenement, req.body.dateCreneau, req.body.heureCreneau);
	res.send;
});

app.post('/idevenement', function (req, res){
	res.send();
});

//Ajouter evenement/créneaux (participer) à utilisateur
app.post('/ajoutEvtParticiper', function(req, res){
	var pseudo = req.body.uti.pseudo;
	var evt = new Evennement(req.body.evt.id, req.body.evt.description);
	var creneauxTab = req.body.creneaux;
	evenements.ajouterCreneauxEvt(evt, creneauxTab);
	utilisateurs.ajouterEvenementsParticiper(pseudo, evt);
	res.send;
});

app.listen(8080);