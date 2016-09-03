/*--------------------------------------------------------------
    TASK CLONE
--------------------------------------------------------------*/
// plugins
var gulp  = require('gulp');
var clean = require('gulp-clean');

gulp.task('clone', ['clean'], function(){
	return gulp.src('../assets/src/fonts/**/*')
		.pipe(gulp.dest('../assets/dist/fonts/'));
});

gulp.task('clean', function(){
    return gulp.src('../assets/dist/fonts')
        .pipe(clean({force: true}));
});
