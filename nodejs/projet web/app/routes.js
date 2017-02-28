'use strict';

/**
 * @ngdoc overview
 * @name banqueApp
 * @description
 * # banqueApp
 *
 * Main module of the application.
 */
angular
  .module('banqueApp', [
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
        templateUrl: '/index.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/evennements', {
        templateUrl: 'html/evennements.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });