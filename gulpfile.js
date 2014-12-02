var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence'),
    path = require('path'),
    less = require('gulp-less');

function swallowError( error ) {
    //  If you want details of the error in the console
    console.error( error.toString() );
    this.emit('end');
};

gulp.task('less', function () {
    return gulp.src('./less/style.less')
        .pipe( less(/*{ compress: true }*/) )
        .on('error', swallowError )
        .pipe( gulp.dest('./css') );
});

/*gulp.task('uglify', function() {
    return gulp.src('./js/urban-plantier.js')
        .pipe( uglify() )
        .pipe( rename('urban-plantier.min.js') )
        .pipe( gulp.dest('./js') );
});*/

gulp.task('app', function() {
    return gulp.src([
            './js/angular/app.js',
            './js/angular/providers.js',
            './js/angular/routes/**/*.js',
            './js/angular/**/*.js'
        ])
        .pipe( concat('angular-app.js') )
        .on('error', swallowError )
        .pipe( gulp.dest('./js') );
});

gulp.task('watch', function() {
    gulp.watch( ['less/*.less'], ['less'] )
        .on('change', function( event ) {
            console.log('File '+ event.path +' was '+ event.type +', running tasks...');
        });
    /*gulp.watch( ['js/*.js', '!js/*.min.js', '!angular-app.js'], ['uglify'] )
        .on('change', function( event ) {
            console.log('File '+ event.path +' was '+ event.type +', running tasks...');
        });*/
    gulp.watch( ['js/angular/**/*.js'], ['app'] )
        .on('change', function( event ) {
            console.log('File '+ event.path +' was '+ event.type +', running tasks...');
        });
});

gulp.task('build', function(done) {
    runSequence('less', 'uglify', done );
});
