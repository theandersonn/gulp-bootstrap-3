/*--------------------------------------------------------------
    PERFOMS TAKS SASS AND CONCATJS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('src', ['sass', 'concatjs'], function(){
    gulp.watch('../assets/src/sass/**/*.scss', ['sass']);
    gulp.watch('../assets/src/js/**/*.js', ['concatjs']);
});