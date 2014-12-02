/*//////////////////////////////

    site main navigation

//////////////////////////////*/



angular.module('appDirectives').directive('smartPotTopSpacer', function() {

    var $el;

    function setSpacerHeight() {

        var winH = jQuery( window ).height();

        $el.height( winH *.1 );

    }

    function Link( $scope, $element, attributes ) {

        $el = $element;

        setTimeout( setSpacerHeight );

        jQuery( window ).resize( setSpacerHeight );

    };

    return {
        link: Link,
        restrict: 'C'
    };

});


