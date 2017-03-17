angular.module('nodejsApp')
  .factory('CreerEvenement', ['$resource',
    function($resource){
      return $resource('/creerEvenement/:idEvenement/:descEvenement', {},
        {
          'get': {method: 'GET'}
        }
      );
    }
  ]);

angular.module('nodejsApp')
  .controller('CreerEventsCtrl',
    function($scope, CreerEvenement){
		$scope.idEvenement;
		$scope.descEvenement;
		$scope.creer = CreerEvenement.get({idEvenement : $scope.idEvenement}, {descEvenement : $scope.descEvenement});
	});