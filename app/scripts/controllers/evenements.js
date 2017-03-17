'use strict';

/**
 * @ngdoc function
 * @name nodejsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodejsApp
 */
//console.log("TOTO1");
angular.module('nodejsApp')
  .factory('Evenement', ['$resource',
    function($resource){
		//console.log("TOTO4");
      return $resource('/evenements', {},
        {
          'get': {method: 'GET', isArray:true}
        }
      );
    }
  ]);
 
//console.log("TOTO2");

angular.module('nodejsApp')
  .controller('EventsCtrl',
    function($scope, Evenement){
		$scope.tab=Evenement.get();
		
		console.log($scope.tab[0]);
	});

// console.log("TOTO3");

