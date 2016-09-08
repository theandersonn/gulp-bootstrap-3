/*--------------------------------------------------------------
    PERFORMS TASKS CSSMIN, JSMIN, CLONE, IMAGEMIN 
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('dist', ['cssmin', 'jsmin', 'clone']);