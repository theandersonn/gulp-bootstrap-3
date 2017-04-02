/*--------------------------------------------------------------
    CONCATENATE ALL FILES .JS
--------------------------------------------------------------*/
// plugins
var gulp    = require('gulp');
var concat  = require('gulp-concat');

gulp.task('concatjs', function() {
    return gulp.src([

        // JQUERY
        '../assets/js/libs/jquery/jquery-2.2.4.js',
        
        // BOOTSTRAP    
        // '../assets/js/libs/bootstrap/affix.js',
        // '../assets/js/libs/bootstrap/alert.js',
        // '../assets/js/libs/bootstrap/button.js',
        // '../assets/js/libs/bootstrap/carousel.js',
        '../assets/js/libs/bootstrap/collapse.js',
        // '../assets/js/libs/bootstrap/dropdown.js',
        // '../assets/js/libs/bootstrap/modal.js',
        // '../assets/js/libs/bootstrap/popover.js', Esse sapeca está com treta :(
        // '../assets/js/libs/bootstrap/scrollspy.js',
        // '../assets/js/libs/bootstrap/tab.js',
        // '../assets/js/libs/bootstrap/tooltip.js',
        '../assets/js/libs/bootstrap/transition.js',

        // OWL CAROUSEL
        '../assets/js/libs/owl-carousel/owl.carousel.js',      

        // FUNCTIONS
        '../assets/js/functions/functions.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../assets/js/'));
});