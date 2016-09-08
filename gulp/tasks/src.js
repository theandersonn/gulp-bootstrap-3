/*--------------------------------------------------------------
    PERFOMS TAKS SASS, CONCATJS AND IMAGEMIN
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('src', ['sass', 'concatjs', 'imagemin'],  function(){
    gulp.watch('../assets/src/sass/**/*.scss', ['sass']);
    gulp.watch('../assets/src/js/**/*.js', ['concatjs']);
    gulp.watch('../assets/src/images/**/*', ['imagemin']);
});