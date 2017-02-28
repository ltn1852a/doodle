// on récupère le module
var evennements = require('./evennements');
var creneau = require('./creneaux');

// on teste les méthodes
console.log("evennements.creerEvennement('toto', 'description')");
console.log(evennements.creerEvennement('toto', 'description'));
console.log(evennements.ajouterCreneau('toto','date', 'heure'));
