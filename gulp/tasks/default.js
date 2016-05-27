/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', ['sass', 'cssmin'], function(){
    gulp.watch('../assets/sass/**/*.scss', ['sass']);
    gulp.watch('../assets/css/*.css', ['cssmin']);
});