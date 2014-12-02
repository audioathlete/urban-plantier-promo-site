/*//////////////////////////////

    site main navigation

//////////////////////////////*/



angular.module('appDirectives').directive('smartPotInterface', ['$timeout', function( $timeout ) {

    function Link( $scope, $element, attributes ) {

        var prevSoilState = 'wet';
        $scope.soilState = 'normal';

        $( document ).on('click', '.interface-hitarea', function(){

            switch ( $scope.soilState ) {
                
                case 'wet':
                    $scope.$apply( $scope.soilState = 'normal' );
                    // $timeout(function(){ $scope.soilState = 'dry' }, 200 );
                    prevSoilState = 'wet';
                    break;

                case 'dry':
                    $scope.$apply( $scope.soilState = 'normal' );
                    // $timeout(function(){ $scope.soilState = 'wet' }, 200 );
                    prevSoilState = 'dry';
                    break;

                default: // normal
                    $scope.$apply( $scope.soilState = prevSoilState == 'wet' ? 'dry' : 'wet' );

            }

        });

    };

    return {
        link: Link,
        restrict: 'C',
        templateUrl: 'js/angular/partials/smart-pot-interface.html'
    };

}]);


