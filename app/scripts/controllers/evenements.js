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
          'get': {method: 'GET', isArray:true},
		  'post': {method: 'POST'};
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
			var creneauxEnv = getValues( getListeCreneaux( document.getElementsByName("accepter") ) );
		
			var rep = {"uti" : {"pseudo" : $scope.user.pseudo}, "evt" : $scope.evtCourant, "creneaux" : creneauxEnv};
			console.log(rep);
		}
		
		var getListeCreneaux = function(elems){
			var ret = new Array();
			
			for(var i = 0; i < elems.length; i++){
				
				if(elems[i].checked == true){
					ret.push(elems[i]);
				}
			}
			
			return ret;
		}
		
		var getValues = function(buttons){
			var ret = new Array();
			
			for(var i = 0; i < buttons.length; i++){
				console.log(buttons[i]);
				console.log(buttons[i].value);
				ret.push(buttons[i].value);
			}
			
			return ret;
		}
	});

// console.log("TOTO3");

