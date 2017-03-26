'use strict';

/**
 * @ngdoc overview
 * @name nodejsApp
 * @description
 * # nodejsApp
 *
 * Main module of the application.
 */
angular
  .module('nodejsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/authentification.html',
        controller: 'Authentif',
        controllerAs: 'authentification'
      })
	  .when('/autheReussie', {
        templateUrl: './index_auth.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/evenements', {
        templateUrl: 'views/evenements.html',
        controller: 'EventsCtrl',
        controllerAs: 'evenements'
      })
	  .when('/creerEvenement', {
        templateUrl: 'views/creerEvenement.html',
        controller: 'CreerEventsCtrl',
        controllerAs: 'creerEvenement'
      })
	  .when('/ajoutCreneau', {
        templateUrl: 'views/ajoutCreneau.html',
        controller: 'AjoutCreneauCtrl',
        controllerAs: 'ajoutCreneau'
      })
	  .when('/creerUti', {
        templateUrl: 'views/creerUti.html',
        controller: 'CreerUtiCtrl',
        controllerAs: 'creerUti'
      })
	  .when('/authentification', {
        templateUrl: 'views/authentification.html',
        controller: 'Authentif',
        controllerAs: 'authentification'
      })
	  .when('/profilUtilisateur', {
        templateUrl: 'views/profilUtilisateur.html',
        controller: 'UtilisateurCtrl',
        controllerAs: 'UtilisateurCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
