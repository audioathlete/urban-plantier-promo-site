/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/planting-party',
	{
		templateUrl: 'js/angular/routes/planting-party/planting-party.html',
		controller: 'PlantingPartyController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('PlantingPartyController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	$rootScope.mainIsLoading = false;
	
}]);


