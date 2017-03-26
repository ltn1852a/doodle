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
		$scope.user = window.user;
		$scope.tab=Evenement.get();
		$scope.evtCourant;
		
		$scope.details = function(evtCourant){
			$scope.evtCourant = evtCourant;
			$scope.tabCreneaux = evtCourant.creneaux;
		}
		
		$scope.valider = function(){
			var creneauxEnv = document.getElementsByName("accepter");
			console.log(creneauxEnv);
			//var rep = {"uti" : {"pseudo" : $scope.user.pseudo}, "evt" : $scope.evtCourant, "creneaux" : creneauxEnv}
		}
		
		var getListeCreneaux = function(elems){
			for(elem in elems){
				if(elem.checked == true)
			}
		}
	});

// console.log("TOTO3");

