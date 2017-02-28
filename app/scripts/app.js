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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/evenements', {
        templateUrl: 'views/evenements.html',
        controller: 'EventsCtrl',
        controllerAs: 'evenements'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
