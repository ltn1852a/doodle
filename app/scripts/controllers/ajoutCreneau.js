angular.module('nodejsApp')
  .factory('AjouterCreneau', ['$resource',
    function($resource){
      return $resource('/ajoutCreneau', {},
        {
          'post': {method: 'POST'},
		  'get': {method: 'GET', isArray:true}
        }
      );
    }
  ]);

angular.module('nodejsApp')
  .controller('AjoutCreneauCtrl',
    function($scope, AjouterCreneau){
		$scope.tab=AjouterCreneau.get();
		$scope.idEvenement;
		$scope.dateCreneau;
		$scope.heureCreneau;
		
		
		$scope.ajouter = function(){
			var creneau = {"idEvenement" : $scope.idEvenement, "dateCreneau" : $scope.dateCreneau, "heureCreneau" : $scope.heureCreneau};
			AjouterCreneau.post(JSON.stringify(creneau));
			alert("Le créneau (date : " + $scope.dateCreneau + ", heure : " + $scope.heureCreneau + ") a bien été ajouté.");
			$scope.dateCreneau = "";
			$scope.heureCreneau = "";
		}
	});