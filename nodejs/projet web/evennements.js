
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

// Constructeur pour les Creneaux
function Creneau(date, heure) {
  // date du créneau
  this.date = date;
  // heure du créneau
  this.heure = heure;
}

var getEvennement=function(){
  return evennements;
}


var creerEvennement = function (id, description){
	// s'il n'existe pas
	if (typeof evennements[id] === 'undefined') {
		// on le cree
		evennements[id] = new Evennement(id, description);
		//console.log(evennements);
		return 1;
	}
	return 0;
};
	
var ajouterCreneau = function (id, date, heure){
	if (typeof evennements[id] === 'undefined') {
		// on ajoute
		evennements[id].creneaux.push(new Creneau(date, heure));
		//console.log(evennements);
		return 1;
	}
	return 0;
};


// les 4 fonctions exportées
exports.creerEvennement = creerEvennement;
exports.ajouterCreneau = ajouterCreneau;
exports.getEvennement=getEvennement;