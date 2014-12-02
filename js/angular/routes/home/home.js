/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/',
	{
		templateUrl: 'js/angular/routes/home/home.html',
		controller: 'HomeController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('HomeController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	console.log('init HomeController');
	
}]);


