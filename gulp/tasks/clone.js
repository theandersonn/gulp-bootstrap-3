/*--------------------------------------------------------------
    TASK CLONE
--------------------------------------------------------------*/
// plugins
var gulp  = require('gulp');
var cleanfonts = require('gulp-clean');

gulp.task('clone', ['cleanfonts'], function(){
	return gulp.src('../src/fonts/**/*')
		.pipe(gulp.dest('../static/fonts/'));
});

gulp.task('cleanfonts', function(){
    return gulp.src('../static/fonts')
        .pipe(cleanfonts({force: true}));
});