/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/nature-prevails',
	{
		templateUrl: 'js/angular/routes/nature-prevails/nature-prevails.html',
		controller: 'NaturePrevailsController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('NaturePrevailsController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	
	
}]);


