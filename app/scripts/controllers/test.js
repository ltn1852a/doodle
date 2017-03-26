angular.module('nodejsApp')
  .controller('TestCtrl',
    function($scope, $rootScope){
		$scope.user = window.user;
		$rootScope.authentifie;
	});