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

        // OWL CAROUSEL
        //'node_modules/owl-carousel-2/owl.carousel.js',

        // FUNCTIONS
        '../src/js/functions/functions.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../static/js/'));
});
