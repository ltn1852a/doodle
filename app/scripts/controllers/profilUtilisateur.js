'use strict';

/**
 * @ngdoc function
 * @name nodejsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodejsApp
 */
console.log("TOTO1");
angular.module('nodejsApp')
  .factory('ProfilUtil', ['$resource',
    function($resource){
		//console.log("TOTO4");
      return $resource('/utilisateur/:pseudo', {},
        {
          'get': {method: 'GET', isArray:false},
        }
      );
    }
  ]);
 

 angular.module('nodejsApp')
  .controller('UtilisateurCtrl',
    function($scope, ProfilUtil){
	$scope.nUser = window.user;
    $scope.user = ProfilUtil.get({pseudo : $scope.nUser.pseudo});
    $scope.tab=$scope.user.evenementsParticiper;
    $scope.pseudo=$scope.user.pseudo;
    $scope.nom=$scope.user.nom;
    $scope.prenom=$scope.user.prenom;
    

  // var getListeCreneaux = function(elems){
      // var ret = new Array();
      
      // for(var i = 0; i < elems.length; i++){
        
        // if(elems[i].checked == true){
          // ret.push(elems[i]);
        // }
      // }
      
      // return ret;
    // }
    
    // var getValues = function(buttons){
      // var ret = new Array();
      
      // for(var i = 0; i < buttons.length; i++){
        // console.log(buttons[i]);
        // console.log(buttons[i].value);
        // ret.push(buttons[i].value);
      // }
      
      // return ret;



      });