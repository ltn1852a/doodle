'use strict';

/**
 * @ngdoc function
 * @name nodejsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodejsApp
 */
angular.module('nodejsApp')
  .controller('EventsCtrl', ['$scope', 
    function($scope) {  
	$scope.tab=[];
	$scope.afficher = function() {
	$scope.tab=Evennement.get();
		}	;
	
	}]);
	
angular.module('nodejsApp', ['ngResource'])
  .factory('Evennement', ['$resource',
    function($resource){
      return $resource('/evennement', {},
        {
          'get': {method: 'GET'}
        }
      );
    }
  ]);

})(window.angular);
