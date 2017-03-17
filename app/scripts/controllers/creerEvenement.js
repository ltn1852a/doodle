angular.module('nodejsApp')
  .factory('CreerEvenement', ['$resource',
    function($resource){
      return $resource('/creerEvenement', {},
        {
          'post': {method: 'POST'}
        }
      );
    }
  ]);

angular.module('nodejsApp')
  .controller('CreerEventsCtrl',
    function($scope, CreerEvenement){
		$scope.idEvenement;
		$scope.descEvenement;
		
		$scope.creer = function(){
			var evenement = {"idEvenement" : $scope.idEvenement, "descEvenement" : $scope.descEvenement};
			CreerEvenement.post(JSON.stringify(evenement));
		}
	});