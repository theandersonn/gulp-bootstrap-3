/*--------------------------------------------------------------
    PERFOMS TAKS SASS, CONCATJS, CLEAN AND CLONE
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('src', ['sass', 'concatjs', 'clone'], function(){
    gulp.watch('../assets/src/sass/**/*.scss', ['sass']);
    gulp.watch('../assets/src/js/**/*.js', ['concatjs']);
    gulp.watch('../assets/src/fonts/**/*', ['clone']);
});