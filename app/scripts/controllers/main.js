'use strict';

/**
 * @ngdoc function
 * @name banqueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the banqueApp
 */
angular.module('nodejsApp')
  .controller('MainCtrl', function ($scope) {
	$scope.name = "Mon bouton";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });