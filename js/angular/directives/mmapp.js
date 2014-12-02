/*//////////////////////////////

    site main navigation

//////////////////////////////*/



angular.module('appDirectives').directive('mmapp', function() {

    function Link( $scope, $element, attributes ) {
        
        setTimeout(function(){
            $scope.$apply( $scope.mmappUrl = 'mmapp/dist/app.html' );
        }, 2000 );

        $scope.$root.$on('$routeChangeSuccess', function( evt, curr, prev ) {
            $scope.mmappUrl = '';
        });

    };

    return {
        link: Link,
        restrict: 'C'
    };

});


