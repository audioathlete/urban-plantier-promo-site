/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/smart-pot',
	{
		templateUrl: 'js/angular/routes/smart-pot/smart-pot.html',
		controller: 'SmartPotController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('SmartPotController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	
	
}]);


