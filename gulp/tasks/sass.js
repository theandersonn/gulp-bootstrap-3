/*--------------------------------------------------------------
    COMPILES ALL FILES _scss
--------------------------------------------------------------*/
var gulp = require('gulp');
var sass = require('gulp-sass');

// tasks
gulp.task('sass', function () {
  gulp.src(['../src/sass/**/*.scss'])
    .pipe(sass().on('Erro de Sintaxe', sass.logError))
    .pipe(gulp.dest('../static/css/'));
});