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
		$scope.user = window.user;
		$scope.idEvenement;
		$scope.descEvenement;
		
		$scope.creer = function(){
			var evenement = {"pseudo" : $scope.user.pseudo, "idEvenement" : $scope.idEvenement, "descEvenement" : $scope.descEvenement};
			CreerEvenement.post(JSON.stringify(evenement));
			alert("L'événement " + $scope.idEvenement + " a bien été créé.");
			$scope.idEvenement = "";
			$scope.descEvenement = "";
		}
	});