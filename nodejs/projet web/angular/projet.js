(function(angular) {
angular.module('ProjetWeb', []).controller('projetController', ['$scope', 
    function($scope) {  
	$scope.tab=[];
	$scope.afficher = function() {
	$scope.tab[0]={"name":"John"};
	

		}	
	
	  }]); 
})(window.angular);
