/*--------------------------------------------------------------
    TASK CLONE
--------------------------------------------------------------*/
// plugins
var gulp  = require('gulp');
var cleanfonts = require('gulp-clean');

gulp.task('clone', ['cleanfonts'], function(){
	return gulp.src('../assets/src/fonts/**/*')
		.pipe(gulp.dest('../assets/dist/fonts/'));
});

gulp.task('cleanfonts', function(){
    return gulp.src('../assets/dist/fonts')
        .pipe(cleanfonts({force: true}));
});