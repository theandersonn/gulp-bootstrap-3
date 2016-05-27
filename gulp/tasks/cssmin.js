/*--------------------------------------------------------------
    MINIFICA CSS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task( 'cssmin', function() {
  gulp.src('../assets/css/all.css')
	.pipe(prefix('last 3 versions'))   
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('../assets/css/'));
});
