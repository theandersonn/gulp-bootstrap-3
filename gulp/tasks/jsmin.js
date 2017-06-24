/*--------------------------------------------------------------
    MINIFY ALL.JS
--------------------------------------------------------------*/
// plugins
var gulp 	= require('gulp');
var uglify 	= require('gulp-uglify');
var rename 	= require('gulp-rename');

// tasks
gulp.task('jsmin', function() {
	return gulp.src('../src/js/all.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('../static/js/'))
});