angular.module('nodejsApp')
  .factory('CreerUti', ['$resource',
    function($resource){
      return $resource('/creerUti', {},
        {
          'post': {method: 'POST'}
        }
      );
    }
  ]);

angular.module('nodejsApp')
  .controller('CreerUtiCtrl',
    function($scope, CreerUti){
		$scope.pseudo;
		$scope.nom;
		$scope.prenom;
		$scope.motPasse;
		
		$scope.inscrire = function(){
			var utilisateur = {"pseudo" : $scope.pseudo, "nom" : $scope.nom, "prenom" : $scope.prenom, "motPasse" : $scope.motPasse};
			CreerUti.post(JSON.stringify(utilisateur));
			$scope.pseudo = "";
			$scope.nom = "";
			$scope.prenom = "";
			$scope.motPasse = "";
		}
	});