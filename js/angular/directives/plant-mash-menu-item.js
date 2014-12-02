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