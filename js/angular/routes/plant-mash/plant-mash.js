/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/plant-mash',
	{
		templateUrl: 'js/angular/routes/plant-mash/plant-mash.html',
		controller: 'PlantMashController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('PlantMashController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	
	
}]);


