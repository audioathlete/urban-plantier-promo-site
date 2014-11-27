var gulp = require('gulp'),
    // gutil = require('gulp-util'),
    // browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    // concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    // runSequence = require('run-sequence'),
    // path = require('path'),
    less = require('gulp-less');

//var watcher = gulp.watch(['src/**/*.js', 'less/*.less'], ['default']);
/*watcher.on('change', function(event) {
    console.log('File '+event.path+' was '+event.type+', running tasks...')
});*/

/*gulp.task('browserify', function() {
    return gulp.src('./src/index.js')
        .pipe(browserify())
        .on('error', gutil.log)
        .pipe(rename('mmapp.js'))
        .pipe(gulp.dest('./dist/js'))
});*/

gulp.task('less', function () {
    return gulp.src('./less/urban-plantier.less')
        .pipe(less(/*{ compress: true }*/))
        .pipe(gulp.dest('./css'))
});

/*gulp.task('bundle', function() {
    return gulp.src(['./deps/*.js', './dist/js/mmapp.js'])
        .pipe(concat('mmapp.js', { newLine: ';' }))
        .pipe(gulp.dest('./dist/js'))
});*/

gulp.task('uglify', function() {
    return gulp.src('./js/urban-plantier.js')
        .pipe(uglify())
        .pipe(rename('urban-plantier.min.js'))
        .pipe(gulp.dest('./js'))
});

/*gulp.task('build', function(done) {
    runSequence('less', 'browserify', 'copy', 'bundle', 'uglify', done)
});

gulp.task('default', function(done) {
    runSequence('less', 'browserify', 'copy', 'bundle', done)
});*/
