/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', ['sass', 'concatjs'], function(){
    gulp.watch('../assets/sass/**/*.scss', ['sass']);
    gulp.watch('../assets/js/**/*.js', ['concatjs']);
});