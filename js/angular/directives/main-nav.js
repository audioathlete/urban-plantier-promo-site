/*//////////////////////////////

    site main navigation

//////////////////////////////*/



angular.module('appDirectives').directive('mainNav', function() {

    function Link( $scope, $element, attributes ) {

        $scope.navPaths = [
            { slug: 'home',            label: 'Home' },
            { slug: 'smart-pot',       label: 'Smart\nPot' },
            { slug: 'plant-mash',      label: 'Plant\nMash' },
            { slug: 'urban-chef',      label: 'Urban\nChef' },
            { slug: 'nature-prevails', label: 'Nature\nPrevails' },
            { slug: 'planting-party',  label: 'Planting\nParty' }
        ];

        $scope.collapseMenu = false;

        $scope.$watch( 'navState', function( newValue, oldValue ) {

            if ( newValue && newValue != 'error404' && oldValue && newValue != oldValue ) {

                var $navItems = $element.find('li:visible'),
                    newItemIndex = $navItems.index( $navItems.filter('.'+newValue ) ),
                    oldItemIndex = $navItems.index( $navItems.filter('.'+oldValue ) );
                
                $('body')
                    .toggleClass('pan-right', newItemIndex > oldItemIndex )
                    .toggleClass('pan-left', newItemIndex < oldItemIndex );

            }

            $scope.collapseMenu = newValue == 'home' ? false : true;

        });

    };

    return {
        link: Link,
        restrict: 'C',
        templateUrl: 'js/angular/partials/main-nav.html'
    };

});


