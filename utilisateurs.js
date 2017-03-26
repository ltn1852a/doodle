var evenements = require('./evenements');
var utilisateurs = {};

function Utilisateur(pseudo, nom, prenom, motPasse) {
  this.pseudo = pseudo ;
  this.nom = nom;
  this.prenom = prenom;
  this.motPasse = motPasse;
	this.evenementsParticiper = new Array();
	this.evenementsCrees = new Array();
}

var getUtilisateur = function(pseudo){
	return utilisateurs[pseudo];
}

var authentifier = function(pseudo, motPasse){
	var rep;
	if (typeof utilisateurs[pseudo] !== 'undefined') {
		
		if (utilisateurs[pseudo].motPasse === motPasse) {
			return utilisateurs[pseudo];
		}
		
	} else {
		rep = 0;
	}
	return rep;
}


var creerUtilisateur = function (pseudo, nom, prenom, motPasse){
	// s'il n'existe pas
	if (typeof utilisateurs[pseudo] === 'undefined') {
		// on le cree
		utilisateurs[pseudo] = new Utilisateur(pseudo, nom, prenom, motPasse);
		return 1;
	}
	return 0;
};

var ajouterEvenementsParticiper = function (pseudo, evenement){
	if (typeof utilisateurs[pseudo] != 'undefined') {
		utilisateurs[pseudo].evenementsParticiper.push(evenement);
		return 1;
	}
	return 0;
};

var getEvenementsParticiper = function (pseudo){
	if (typeof utilisateurs[pseudo] != 'undefined') {
		return utilisateurs[pseudo].evenementsParticiper;
	}
	return 0;
};

exports.authentifier = authentifier;
exports.creerUtilisateur = creerUtilisateur;
exports.getUtilisateur = getUtilisateur;
exports.ajouterEvenementsParticiper = ajouterEvenementsParticiper;
exports.getEvenementsParticiper = getEvenementsParticiper;
