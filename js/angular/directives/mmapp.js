/*//////////////////////////////

    site main navigation

//////////////////////////////*/



angular.module('appDirectives').directive('mmapp', ['$timeout', '$rootScope', function( $timeout, $rootScope ) {

    function Link( $scope, $element, attributes ) {

        $rootScope.mainIsLoading = true;
        
        $timeout( function(){

            $rootScope.mainIsLoading = false;
            $scope.mmappUrl = 'mmapp/dist/app.html';
        
        }, 2000 );

        $rootScope.$on('$routeChangeStart', function( evt, curr, prev ) {
            $scope.mmappUrl = '';
        });

    };

    return {
        link: Link,
        restrict: 'C'
    };

}]);


