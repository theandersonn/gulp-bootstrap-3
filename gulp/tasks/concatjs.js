/*--------------------------------------------------------------
    CONCATENATE ALL FILES .JS
--------------------------------------------------------------*/
// plugins
var gulp    = require('gulp');
var concat  = require('gulp-concat');

gulp.task('concatjs', function() {
    return gulp.src([

        // JQUERY
        //'node_modules/jquery/dist/jquery.js',

        // FUNCTIONS
        '../src/js/functions/general.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../static/js/'));
});
