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
        templateUrl: 'views/evenements.html',
        controller: 'EventsCtrl',
        controllerAs: 'evenements'
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
      .otherwise({
        redirectTo: '/'
      });
  });
