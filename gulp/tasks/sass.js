/*--------------------------------------------------------------
    COMPILES ALL FILES _SCSS
--------------------------------------------------------------*/
// plugins
'use strict';

var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

// tasks
gulp.task('sass', function () {
  gulp.src('../assets/src/sass/**/*.scss')

    .pipe(plumber(function(error) {
        gutil.log(gutil.colors.red(error.message));
        this.emit('end');
    }))
 
    .pipe(sass().on('Erro de Sintaxe', sass.logError))
    .pipe(prefix('last 4 versions'))
    .pipe(gulp.dest('../assets/src/css/'));
});