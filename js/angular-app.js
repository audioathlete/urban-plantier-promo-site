'use strict';

/*//////////////////////////////

	angular app bootstrapping

//////////////////////////////*/



//``````````````````````````````
//	Declare the App with dependencies
//	and the sub-modules
//
angular.module('app', [
	'ngRoute',
	'ngAnimate',
	
	'appServices',
	'appProviders',
	'appDirectives',
	'appControllers',
	
	'angular-loading-bar'
]);

angular.module('appServices', [] );
angular.module('appProviders', [] );
angular.module('appDirectives', [] );
angular.module('appControllers', [] );



//``````````````````````````````
//	Configure
//
angular.module('app').config(['$locationProvider', 'cfpLoadingBarProvider', function( $locationProvider, cfpLoadingBarProvider ) {

	//	Utilize the HTML 5 History API
	//
	$locationProvider.html5Mode( true );

	cfpLoadingBarProvider.includeSpinner = false;

}]);



//``````````````````````````````
//	Run on app init
//
angular.module('app').run(['$rootScope', '$route', '$location', '$window', '$timeout', function( $rootScope, $route, $location, $window, $timeout ) {

	//``````````````````````````````
	//	Define some useful root scope
	//	variables and methods
	//
	$rootScope.host = window.location.host;
	$rootScope.protocol = window.location.protocol;

	$rootScope.go = function( path ) {
		$location.path( path );
	};


	$rootScope
		.$on('$routeChangeStart', function( evt, curr, prev ) {

			$rootScope.mainNavAutocloseTimer = $timeout(function(){
				$rootScope.mainNavOpen = false;
				$rootScope.mainIsOverlayed = false;
			}, 500 );

		});

	$rootScope
		.$on('$routeChangeSuccess', function( evt, curr, prev ) {
		
			//``````````````````````````````
			//	Set dynamic {{ viewClass }}
			//	on ng-view derived from the
			//	controller name. eg:
			//	FilmDetailsController → .film-details
			//
			var viewClass = $route.current.$$route && $route.current.$$route.controller ?
								$route.current.$$route.controller
									.replace(/controller/gi, '')
									.replace(/([a-z])([A-Z])/g, '$1-$2')
									.toLowerCase()
								: 'error404';

			$rootScope.viewClass = viewClass;
			$rootScope.navState = viewClass;

			if ( viewClass == 'home' ) {
				$rootScope.mainNavOpen = false;
				$rootScope.mainIsOverlayed = false;
			}
		
			//``````````````````````````````
			//	Trigger ‘routeChangeSuccess’
			//	event for jQuery to catch
			//
			/*angular.element( document ).triggerHandler('routeChangeSuccess');*/
		
		});


	//``````````````````````````````
	//	Watch server connection
	//
	if ( navigator ) {

		$rootScope.online = navigator.onLine;
		
		$window.addEventListener('offline', function() {
			$rootScope.$apply(function() {
				$rootScope.online = false;
			});
		}, false );
		
		$window.addEventListener("online", function() {
			$rootScope.$apply(function() {
				$rootScope.online = true;
			});
		}, false );

	}
	
}]);



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
	
	$rootScope.mainIsLoading = false;
	
}]);



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



/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/plant-mash',
	{
		templateUrl: 'js/angular/routes/plant-mash/plant-mash.html',
		controller: 'PlantMashController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('PlantMashController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	
	
}]);



/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/planting-party',
	{
		templateUrl: 'js/angular/routes/planting-party/planting-party.html',
		controller: 'PlantingPartyController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('PlantingPartyController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	$rootScope.mainIsLoading = false;
	
}]);



/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/smart-pot',
	{
		templateUrl: 'js/angular/routes/smart-pot/smart-pot.html',
		controller: 'SmartPotController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('SmartPotController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	$rootScope.mainIsLoading = false;
	
}]);



/*//////////////////////////////

	Home route & controller

	/

//////////////////////////////*/



//``````````````````````````````
//	Configure the route
//
angular.module('app').config(['$routeProvider', function( $routeProvider ) {
	'use strict';

	$routeProvider.when('/urban-chef',
	{
		templateUrl: 'js/angular/routes/urban-chef/urban-chef.html',
		controller: 'UrbanChefController'
	});

}]);



//``````````````````````````````
//	The controller
//
angular.module('appControllers').controller('UrbanChefController', ['$scope', '$rootScope', '$routeParams', 'appGlobals', function( $scope, $rootScope, $routeParams, appGlobals ) {
	
	$rootScope.mainIsLoading = false;
	
}]);



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



/*//////////////////////////////

	Lazy load images, when they come into view.

	@requires 	jQuery
	@see 		bennadel.com/blog/2498-lazy-loading-image-with-angularjs.htm

//////////////////////////////*/

angular.module('appDirectives').directive('lazySrc', function($window, $document, $q) {
	'use strict';

	//``````````````````````````````
	//	I manage all the images that are currently being
	//	monitored on the page for lazy loading.
	//
	var lazyLoader = (function() {

		// I maintain a list of images that lazy-loading
		// and have yet to be rendered.
		//
		var images = [];

		// I define the render timer for the lazy loading
		// images to that the DOM-querying (for offsets)
		// is chunked in groups.
		//
		var renderTimer = null;
		var renderDelay = 100;

		// I cache the window element as a jQuery reference.
		//
		var win = $( $window );

		// I cache the document document height so that
		// we can respond to changes in the height due to
		// dynamic content.
		//
		var doc = $document;
		var documentHeight = doc.height();
		var documentTimer = null;
		var documentDelay = 2000;

		// I determine if the window dimension events
		// (ie. resize, scroll) are currenlty being
		// monitored for changes.
		var isWatchingWindow = false;


		//``````````````````````````````
		// PUBLIC METHODS.
		//


		// I start monitoring the given image for visibility
		// and then render it when necessary.
		//
		function addImage( image ) {

			images.push( image );

			if ( ! renderTimer ) {

				startRenderTimer();

			}

			if ( ! isWatchingWindow ) {

				startWatchingWindow();

			}

		}

		// I remove the given image from the render queue.
		//
		function removeImage( image ) {

			// Remove the given image from the render queue.
			for ( var i = 0 ; i < images.length ; i++ ) {

				if ( images[ i ] === image ) {

					images.splice( i, 1 );
					break;

				}

			}

			// If removing the given image has cleared the
			// render queue, then we can stop monitoring
			// the window and the image queue.
			if ( ! images.length ) {

				clearRenderTimer();

				stopWatchingWindow();

			}

		}


		//``````````````````````````````
		// PRIVATE METHODS.
		//


		// I check the document height to see if it's changed.
		//
		function checkDocumentHeight() {

			// If the render time is currently active, then
			// don't bother getting the document height -
			// it won't actually do anything.
			if ( renderTimer ) {

				return;

			}

			var currentDocumentHeight = doc.height();

			// If the height has not changed, then ignore -
			// no more images could have come into view.
			if ( currentDocumentHeight === documentHeight ) {

				return;

			}

			// Cache the new document height.
			documentHeight = currentDocumentHeight;

			startRenderTimer();

		}

		// I check the lazy-load images that have yet to
		// be rendered.
		//
		function checkImages() {

			// Log here so we can see how often this
			// gets called during page activity.
			//console.log( "Checking for visible images..." );

			var visible = [];
			var hidden = [];

			// Determine the window dimensions.
			var windowHeight = win.height();
			var scrollTop = win.scrollTop();

			// Query the DOM for layout and seperate the
			// images into two different categories: those
			// that are now in the viewport and those that
			// still remain hidden.
			for ( var i = 0 ; i < images.length ; i++ ) {

				var image = images[ i ];

				if ( image.isInViewport() ) {

					visible.push( image );

				} else {

					hidden.push( image );

				}

			}

			// Update the DOM with new image source values.
			for ( var i = 0 ; i < visible.length ; i++ ) {

				visible[ i ].render();

			}

			// Keep the still-hidden images as the new
			// image queue to be monitored.
			images = hidden;

			// Clear the render timer so that it can be set
			// again in response to window changes.
			clearRenderTimer();

			// If we've rendered all the images, then stop
			// monitoring the window for changes.
			if ( ! images.length ) {

				stopWatchingWindow();

			}

		}

		// I clear the render timer so that we can easily
		// check to see if the timer is running.
		//
		function clearRenderTimer() {

			clearTimeout( renderTimer );

			renderTimer = null;

		}

		// I start the render time, allowing more images to
		// be added to the images queue before the render
		// action is executed.
		//
		function startRenderTimer() {

			renderTimer = setTimeout( checkImages, renderDelay );

		}

		// I start watching the window for changes in dimension.
		//
		function startWatchingWindow() {

			isWatchingWindow = true;

			// Listen for window changes.
			win.on('DOMContentLoaded.lazySrc load.lazySrc resize.lazySrc scroll.lazySrc', windowChanged);

			// Set up a timer to watch for document-height changes.
			documentTimer = setInterval( checkDocumentHeight, documentDelay );

		}

		// I stop watching the window for changes in dimension.
		//
		function stopWatchingWindow() {

			isWatchingWindow = false;

			// Stop watching for window changes.
			win.off('DOMContentLoaded.lazySrc load.lazySrc resize.lazySrc scroll.lazySrc');

			// Stop watching for document changes.
			clearInterval( documentTimer );

		}

		// I start the render time if the window changes.
		//
		function windowChanged() {

			if ( ! renderTimer ) {

				startRenderTimer();

			}

		}


		// Return the public API.
		//
		return({
			addImage: addImage,
			removeImage: removeImage
		});

	})();


	//``````````````````````````````
	//	I represent a single lazy-load image.
	//
	function LazyImage( element ) {

		// I am the interpolated LAZY SRC attribute of
		// the image as reported by AngularJS.
		//
		var source = null;

		// I determine if the image has already been
		// rendered (ie, that it has been exposed to the
		// viewport and the source had been loaded).
		//
		var isRendered = false;

		// I am the cached height of the element. We are
		// going to assume that the image doesn't change
		// height over time.
		//
		var height = null;


		//``````````````````````````````
		//	PUBLIC METHODS.
		//

		// I determine if the element is above the given
		// fold of the page.
		//
		function isInViewport() {
		
			  //special bonus for those using jQuery
			  if (element instanceof jQuery) {
				  element = element[0];
			  }
		
			  var rect = element.getBoundingClientRect();
		
			  return (
				  rect.top >= 0 &&
				  rect.left >= 0 &&
				  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
				  rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
			  );

		}
		
		// I move the cached source into the live source.
		//
		function render() {

			isRendered = true;

			renderSource();

		}

		// I set the interpolated source value reported
		// by the directive / AngularJS.
		//
		function setSource( newSource ) {

			source = newSource;

			if ( isRendered ) {

				renderSource();

			}

		}

		//``````````````````````````````
		//	PRIVATE METHODS.
		//

		// I load the lazy source value into the actual
		// source value of the image element.
		//
		function renderSource() {
		
			var loadingClassTimer = setTimeout(function(){
				$(element).addClass('loading');
			}, 1000);

			// check whether the file actually exists 
			// on the server and that it's an image
			isImage( source ).then(function( isImage ) {
				
				clearTimeout(loadingClassTimer);
				$(element).removeClass('loading');
				
				if (isImage)
					element.src = source;
				else
					$(element).addClass('not-found');
					
			});

		}
		
		// @see stackoverflow.com/a/22423210
		//
		function isImage(src) {
			
			var deferred = $q.defer();
			
			var image = new Image();
			
			image.onerror = function() {
				   deferred.resolve(false);
			};
			image.onload = function() {
				   deferred.resolve(true);
			};
			image.src = src;
			
			return deferred.promise;

		}

		// Return the public API.
		//
		return({
			isInViewport: isInViewport,
			render: render,
			setSource: setSource
		});

	}


	//``````````````````````````````
	//	I bind the UI events to the scope.
	//
	function link( $scope, element, attributes ) {

		var lazyImage = new LazyImage( element );

		// Start watching the image for changes in its
		// visibility.
		//
		lazyLoader.addImage( lazyImage );

		// Since the lazy-src will likely need some sort
		// of string interpolation, we don't want to
		//
		attributes.$observe('lazySrc', function( newSource ) {

			lazyImage.setSource( newSource );

		});

		// When the scope is destroyed, we need to remove
		// the image from the render queue.
		//
		$scope.$on('$destroy', function() {

			lazyLoader.removeImage( lazyImage );

		});

	}


	//``````````````````````````````
	//	Return the directive configuration.
	//
	return({
		link: link,
		restrict: 'A'
	});

});

/*//////////////////////////////

    site main navigation

//////////////////////////////*/



angular.module('appDirectives').directive('mainNav', ['$rootScope', function( $rootScope ) {

    function Link( $scope, $element, attributes ) {

        $element.on('mouseenter', function(){

            clearTimeout( $rootScope.mainNavAutocloseTimer );

            $rootScope.$apply( $rootScope.mainNavOpen = true );
            $rootScope.$apply( $rootScope.mainIsOverlayed = true );

        });

        $element.on('mouseleave', function(){

            $rootScope.$apply( $rootScope.mainNavOpen = false );
            $rootScope.$apply( $rootScope.mainIsOverlayed = false );

        });

        $scope.navPaths = [
            { slug: 'home',            label: 'Home' },
            { slug: 'smart-pot',       label: 'Smart\nPot' },
            { slug: 'plant-mash',      label: 'Plant\nMash' },
            { slug: 'urban-chef',      label: 'Urban\nChef' },
            { slug: 'nature-prevails', label: 'Nature\nPrevails' },
            { slug: 'planting-party',  label: 'Planting\nParty' }
        ];

        $scope.collapseMenu = true;

        $scope.$watch( 'navState', function( newValue, oldValue ) {

            if ( newValue && newValue != 'error404' && oldValue && newValue != oldValue ) {

                var $navItems = $element.find('li:visible'),
                    newItemIndex = $navItems.index( $navItems.filter('.'+newValue ) ),
                    oldItemIndex = $navItems.index( $navItems.filter('.'+oldValue ) );
                
                $('body')
                    .toggleClass('pan-right', newItemIndex > oldItemIndex )
                    .toggleClass('pan-left', newItemIndex < oldItemIndex );

            }

            // $scope.collapseMenu = newValue == 'home' ? false : true;

        });

    };

    return {
        link: Link,
        restrict: 'C',
        templateUrl: 'js/angular/partials/main-nav.html'
    };

}]);



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



/*//////////////////////////////

    site main navigation

//////////////////////////////*/



angular.module('appDirectives').directive('plantMashMenuItem', function() {

    navigator.getUserMedia = (navigator.getUserMedia ||
                              navigator.webkitGetUserMedia ||
                              navigator.mozGetUserMedia ||
                              navigator.msGetUserMedia);
    
    var audioCtx = new ( window.AudioContext || window.webkitAudioContext )();
    var analyser = audioCtx.createAnalyser();
    // var stream;
    // var source = audioCtx.createMediaStreamSource( stream );
    //     source.connect( analyser );

    var canvas, canvasCtx;

    function visualize() {

        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;
        console.debug( WIDTH, HEIGHT );

        analyser.fftSize = 2048;
        var bufferLength = analyser.fftSize;
        console.log( bufferLength );
        var dataArray = new Uint8Array( bufferLength );

        canvasCtx.clearRect( 0, 0, WIDTH, HEIGHT );

        function draw() {

            analyser.getByteTimeDomainData( dataArray );

            canvasCtx.fillStyle = 'rgb(200, 200, 200)';
            canvasCtx.fillRect( 0, 0, WIDTH, HEIGHT );

            canvasCtx.lineWidth = 2;
            canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

            canvasCtx.beginPath();

            var sliceWidth = WIDTH * 1.0 / bufferLength;
            var x = 0;

            for( var i = 0; i < bufferLength; i++ ) {
     
                var v = dataArray[i] / 128.0;
                var y = v * HEIGHT / 2;

                if( i === 0 ) {
                    canvasCtx.moveTo( x, y );
                } else {
                    canvasCtx.lineTo( x, y );
                }

                x += sliceWidth;
            }

            canvasCtx.lineTo( canvas.width, canvas.height / 2 );
            canvasCtx.stroke();
        };

        draw();

    }

    function Link( $scope, $element, attributes ) {

        canvas = $element.find('.visualizer').get( 0 );
        canvasCtx = canvas.getContext('2d');

        if ( navigator.getUserMedia ) {
           
            console.log('getUserMedia supported.');

            navigator.getUserMedia (
                // constraints - only audio needed for this app
                {
                    audio: true
                },

                // Success callback
                function( stream ) {
                    var source = audioCtx.createMediaStreamSource( stream );
                    source.connect( analyser );
                    // analyser.connect( distortion );
                    // distortion.connect( biquadFilter );
                    // biquadFilter.connect( convolver );
                    // convolver.connect( gainNode );
                    // gainNode.connect( audioCtx.destination );

                    visualize();
                    // voiceChange();

                },

                // Error callback
                function(err) {
                    console.log('The following gUM error occured: ' + err);
                }
           );
        } else {
           console.log('getUserMedia not supported on your browser!');
        }

    };

    return {
        link: Link,
        restrict: 'C'
    };

});
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

        $scope.$root.$on('$routeChangeSuccess', function() {
            $scope.soilState = 'normal';
        });

    };

    return {
        link: Link,
        restrict: 'C',
        templateUrl: 'js/angular/partials/smart-pot-interface.html'
    };

}]);



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



/*//////////////////////////////

	$scope.model = {
		hasMoreInfo: TRUE,
		label: 'My Label'
	};
	<a wrap-if="model.hasMoreInfo" href="/moreinfo">{{model.label}}</a>
		↓
	<a href="/moreinfo">{{model.label}}</a>


	$scope.model = {
		hasMoreInfo: FALSE,
		label: 'My Label'
	};
	<a wrap-if="model.hasMoreInfo" href="/moreinfo">{{model.label}}</a>
		↓
	{{model.label}}


	@see stackoverflow.com/a/23398021

//////////////////////////////*/

angular.module('appDirectives').directive('wrapIf', function() {
	'use strict';

    return {
        link: function( $scope, element, attributes ) {

            $scope.$watch( attributes['wrapIf'], function( value ) {

                if ( !value )
                    element.replaceWith( element.contents() );

            });

        }
    };

});

/*//////////////////////////////

	Angular app providers

//////////////////////////////*/

angular.module('appProviders').provider('appGlobals', function() {
	'use strict';
	
	this.$get = function () {
		return {

			gmapDefaults: {
				zoom: 12,
				center: {
					latitude: 59.437031, // viru square
					longitude: 24.753596 // viru square
				},
				markerOptions: {
					icon: {
						url: '/images/location-pin.svg',
						scaledSize: {
							width: 48,
							height: 48
						}
					}
				}
			},

			modelAttributesOrder: ['name', 'slug' /*and then the rest of the attributes*/ ],


			//``````````````````````````````//
			//			Utilities			//
			//..............................//


			routeResolver: function( resolveURL, requireParams ) {
				return {

					//``````````````````````````````
					//	“data” will be injectable
					//	dependency in the route controller
					//
					'data': function( $route, $q ) {

						var deferred = $q.defer(),
							queryParams = $route.current.params || {};
						
						if (
							resolveURL &&
							(
								!requireParams ||
								!angular.equals( queryParams, {} )
							)
						)
							io.socket.request( resolveURL, queryParams, function( body, res ) {
								deferred.resolve( body );
							});
						
						else
							deferred.resolve( null );
						
						return deferred.promise;
									
					}
					
				};
			},

			orderModelAttributes: function( modelAttributes, order ) {

				//	copy model attributes over to an array
				//	so we could sort their order (when applicable)
				//
				var modelAttributesArr = [],
					order = order || this.modelAttributesOrder || [];

				for ( var attr in modelAttributes )
					modelAttributesArr.push( angular.extend( modelAttributes[ attr ], { name: attr } ) );

				//	order the attributes
				//
				if ( order )
					modelAttributesArr.sort(function (a, b) {
						
						if ( order.indexOf(a.name) != -1 ) {

							if ( order.indexOf(b.name) != -1 ) {

								if ( order.indexOf(a.name) > order.indexOf(b.name) )
									return 1;
								
								if ( order.indexOf(a.name) < order.indexOf(b.name) )
									return -1;

							} else
								return -1;
						
						} else if ( order.indexOf(b.name) != -1 )
							return 1;
						
						return 0;
						
					});

				return modelAttributesArr;

			},

			pathToPascalCase: function(input) {
			    var output = input.toLowerCase().replace(/[-_/](.)/g, function(match, group1) {
			        return group1.toUpperCase();
			    });
			    return output.charAt(0).toUpperCase() + output.slice(1);
			}
			

		};
	};

});
