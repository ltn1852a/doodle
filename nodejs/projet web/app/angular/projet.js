(function(angular) {
angular.module('ProjetWeb', []).controller('projetController', ['$scope', 
    function($scope) {  
	$scope.tab=[];
	$scope.afficher = function() {
	$scope.tab=Evennement.get();
		}	;
	
	  }]); 
	  
angular.module('ProjetWeb', ['ngResource'])
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
