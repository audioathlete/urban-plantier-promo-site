/*//////////////////////////////

    404 Not Found route & controller
    
    /:unknown-path

//////////////////////////////*/



//``````````````````````````````
//  Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
    'use strict';

    $routeProvider.otherwise(
    {
        templateUrl: 'js/angular/routes/error/404.html',
        controller: '404Controller'
    });

}]);



//``````````````````````````````
//  The controller
//
angular.module('appControllers').controller('404Controller', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
    
    $rootScope.navState = 'error';
    $rootScope.mainIsLoading = false;

}]);


