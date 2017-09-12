/*--------------------------------------------------------------
    CONCATENATE ALL FILES .JS
--------------------------------------------------------------*/
var gulp    = require('gulp');
var concat  = require('gulp-concat');

gulp.task('concatjs', function() {
    return gulp.src([
      // JQUERY
      'node_modules/jquery/dist/jquery.js',

      // BOOTSTRAP
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',

      // FUNCTIONS
      '../src/js/functions/general.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../static/js/'));
});
