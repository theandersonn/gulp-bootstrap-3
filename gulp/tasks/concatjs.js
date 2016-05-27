/*--------------------------------------------------------------
    CONCATENA JS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatjs', function() {
  return gulp.src([
      '../assets/js/owl.carousel.js',
      '../assets/js/functions.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../assets/js/'));
});