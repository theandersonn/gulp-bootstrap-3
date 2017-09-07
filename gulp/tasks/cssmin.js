/*--------------------------------------------------------------
    MINIFY CSS
--------------------------------------------------------------*/
var gulp 	= require('gulp');
var cssmin 	= require('gulp-cssmin');
var rename 	= require('gulp-rename');

gulp.task( 'cssmin', function() {
  gulp.src('../static/css/all.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('../static/css/'));
});

