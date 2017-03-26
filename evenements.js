
var evennements = {};
// Constructeur pour les Evennements
function Evennement(id, description) {
  // l'id de l'événnement
  this.id = id ;
  // la description
  this.description = description;
  // la liste de crenaux
  this.creneaux = new Array();

}

var evenement = function(id, description){
	return new Evennement(id, description);
}
// Constructeur pour les Creneaux
function Creneau(date, heure) {
  // date du créneau
  this.date = date;
  // heure du créneau
  this.heure = heure;
}

var getEvennement=function(){
	var tab = new Array();
	for (var prop in evennements) {
		tab.push(evennements[prop]);
	}
  return tab;
}

var getEvt = function(id){
  return evennements[id];
}

var creerEvennement = function (id, description){
	// s'il n'existe pas
	console.log(id, description);
	if (typeof evennements[id] === 'undefined') {
		// on le cree
		evennements[id] = new Evennement(id, description);
		//console.log(evennements);
		return evennements[id];
	}
	return 0;
};
	
var ajouterCreneau = function (id, date, heure){
	if (typeof evennements[id] != 'undefined') {
		// on ajoute
		console.log(id);
		console.log(date);
		evennements[id].creneaux.push(new Creneau(date, heure));
		//console.log(evennements);
		return 1;
	}
	return 0;
};

var ajouterCreneauEvt = function (evenement, date, heure){
	evenement.creneaux.push(new Creneau(date, heure));
};

var ajouterCreneauTabEvt = function (evenement, creneaux){
	for(var i = 0; i < creneaux.length; i++){
		evenement.creneaux.push(creneaux[i]);
	}
};

var creerCreneaux = function (donnees){
	var rep = new Array();
	for(var i = 0; i < donnees.length; i++){
		var parsed = JSON.parse(donnees[i]);
		rep.push(new Creneau(parsed.date, parsed.heure));
	}
	return rep;
};

var ajotuerCreneauxEvt = function (evt, donnees){
	var evts = creerCreneaux(donnees);
	ajouterCreneauTabEvt(evt, evts);
}


// les 4 fonctions exportées
exports.evts = evennements;
exports.getEvt = getEvt;
exports.creerEvennement = creerEvennement;
exports.evenement = evenement;
exports.ajotuerCreneauxEvt = ajotuerCreneauxEvt;
exports.ajouterCreneau = ajouterCreneau;
exports.getEvennement=getEvennement;