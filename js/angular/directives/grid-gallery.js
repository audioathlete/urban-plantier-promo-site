/*//////////////////////////////

    site main navigation

//////////////////////////////*/



angular.module('appDirectives').directive('gridGallery', ['$http', '$q', '$rootScope', function( $http, $q, $rootScope ) {

    var instagramHashtag = 'naturePrevails',
        instagramApiClientId = window.location.host == 'plantier2.ips.re' ? 'b6239960f3fb4091869ba881d21e5a38' : '7f74c14a8b654df8ab6094c4d852f511',
        numMediaToGet = 120, // Instagram seems to return max 33 at a time, no matter what
        instagramApiEndpoint = 'https://api.instagram.com/v1/tags/'+ instagramHashtag +'/media/recent?client_id='+ instagramApiClientId +'&count='+ numMediaToGet +'&callback=JSON_CALLBACK',
        galleryImagesCache = [];
    
    function getInstagram( instagramApiEndpoint ) {

        var deferred = $q.defer();

        $http
            .jsonp( instagramApiEndpoint )
            .success( function( res, status, headers, config ) {

                if ( status != 200 || !res.data.length )
                    deferred.reject();

                deferred.resolve( res );

            })
            .error( function( res, status, headers, config ) {

                console.error( res, status, headers(), config );
                deferred.reject();

            });

        return deferred.promise;
    }

    function makeGallery( instagramApiEndpoint, $scope, element ) {

        if ( $scope.gridGalleryImages >= numMediaToGet ) {
            $scope.gridGalleryImages.extend( galleryImagesCache );
            $rootScope.mainIsLoading = false;
            return;
        }

        getInstagram( instagramApiEndpoint ).then( function( promise ) {

            galleryImagesCache.extend( promise.data );

            if ( galleryImagesCache.length < numMediaToGet )
                makeGallery( instagramApiEndpoint +'&max_tag_id='+ promise.pagination.next_max_tag_id, $scope, element );

            else {
                $scope.gridGalleryImages.extend( galleryImagesCache );
                $rootScope.mainIsLoading = false;
            }

            /*$scope.gridGalleryImages.extend( promise.data );

            if ( $scope.gridGalleryImages.length < numMediaToGet )
                makeGallery( instagramApiEndpoint +'&max_tag_id='+ promise.pagination.next_max_tag_id, $scope, element );*/

        });

    };

    function Link( $scope, $element, attributes ) {

        $scope.gridGalleryImages = [];
        $rootScope.mainIsLoading = true;

        makeGallery( instagramApiEndpoint, $scope, $element[ 0 ] );

    };

    function Controller( $scope, $element ) {
        
        this.reFlowGallery = function() {

            console.log('re-flow the gallery');

            new CBPGridGallery( $element[ 0 ] );

        };

    };

    return {
        link: Link,
        controller: Controller,
        restrict: 'C',
        templateUrl: 'js/angular/partials/grid-gallery.html'
    };

}]);

angular.module('appDirectives').directive('gridGalleryItem', function() {
    return {
        restrict: 'C',
        require: '^gridGallery',
        transclude: true,
        link: function( $scope, $element, attributes, gridGalleryCtrl ) {
            
            //  last element rendered
            // if ( $scope.$last )
            //     gridGalleryCtrl.reFlowGallery();

        },
        template: '<div ng-transclude></div>'
    };
});

angular.module('appDirectives').directive('gridGallerySlideshowItem', function() {
    return {
        restrict: 'C',
        require: '^gridGallery',
        transclude: true,
        link: function( $scope, $element, attributes, gridGalleryCtrl ) {
            
            //  last element rendered
            if ( $scope.$last )
                gridGalleryCtrl.reFlowGallery();

        },
        template: '<div ng-transclude></div>'
    };
});

Array.prototype.extend = function (other_array) {
    /* you should include a test to check whether other_array really is an array */
    other_array.forEach(function(v) {this.push(v)}, this);    
}


