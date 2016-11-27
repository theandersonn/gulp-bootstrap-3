/*--------------------------------------------------------------
    MINIFY CSS
--------------------------------------------------------------*/
// plugins
var gulp 	= require('gulp');
var cssmin 	= require('gulp-cssmin');
var rename 	= require('gulp-rename');

gulp.task( 'cssmin', function() {
  gulp.src('../assets/css/all.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('../assets/css/'));
});

