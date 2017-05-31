/*--------------------------------------------------------------
    COMPILES ALL FILES _SCSS
--------------------------------------------------------------*/
// plugins
'use strict';

var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var notify 		= require("gulp-notify");

// tasks
gulp.task('sass', function () {
  gulp.src('../assets/sass/**/*.scss')
    .pipe(sass())
    .on("error", notify.onError({title:"Ai, tu quebrou o SASS!"}))
    .pipe(gulp.dest('../assets/css/'))
});