angular.module('nodejsApp')
  .factory('Authentification', ['$resource',
    function($resource){
      return $resource('/authentification/:pseudo/:motPasse', {},
        {
          'get': {method: 'GET'}
        }
      );
    }
  ]);

angular.module('nodejsApp')
  .controller('Authentif',
    function($scope, Authentification){
		$scope.authentifie = 0;
		$scope.inconnu = true;
		$scope.connu = false;
		$scope.pseudo;
		$scope.motPasse;
		
		$scope.inscrire = function(){
			var utilisateur = {"pseudo" : $scope.pseudo, "motPasse" : $scope.motPasse};
			//$scope.authentifie = Authentification.get(JSON.stringify(utilisateur));
			$scope.authentifie = Authentification.get({pseudo : $scope.pseudo, motPasse : $scope.motPasse});
			$scope.pseudo = "";
			$scope.motPasse = "";
			console.log("Donnees");
			//console.log($scope.authentifie);
			window.user = $scope.authentifie;
			console.log(window.user.nom);
			//window.location.href='#/';
		}
		
		$scope.verif = function(){
			console.log(document.getElementById("nom").value);
		}
	});