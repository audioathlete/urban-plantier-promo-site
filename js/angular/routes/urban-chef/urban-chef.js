/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/urban-chef',
	{
		templateUrl: 'js/angular/routes/urban-chef/urban-chef.html',
		controller: 'UrbanChefController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('UrbanChefController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	$rootScope.mainIsLoading = false;
	
}]);


