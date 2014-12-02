/*//////////////////////////////

    site main navigation

//////////////////////////////*/



angular.module('appDirectives').directive('mmapp', ['$timeout', function( $timeout ) {

    function Link( $scope, $element, attributes ) {

        $rootScope.mainIsLoading = false;
        
        $timeout( function(){
            $scope.mmappUrl = 'mmapp/dist/app.html';
        }, 2000 );

        $scope.$root.$on('$routeChangeSuccess', function( evt, curr, prev ) {
            $scope.mmappUrl = '';
        });

    };

    return {
        link: Link,
        restrict: 'C'
    };

}]);


