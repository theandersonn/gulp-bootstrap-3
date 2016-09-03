/*--------------------------------------------------------------
    PERFORMS TASKS CSSMIN AND JSMIN
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('dist', ['cssmin', 'jsmin'], function(){
    gulp.watch('../assets/src/css/all.css', ['cssmin']);
    gulp.watch('../assets/src/js/all.js', ['jsmin']);
});