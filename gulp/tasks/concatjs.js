/*--------------------------------------------------------------
    CONCATENATE ALL FILES .JS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatjs', function() {
    return gulp.src([

        // HELPERS
        '../assets/src/js/helpers/html5shiv.js',
        '../assets/src/js/helpers/respond.js',

        // JQUERY
        '../assets/src/js/libs/jquery/jquery-2.2.4.js',
        
        // BOOTSTRAP    
        // '../assets/src/js/libs/bootstrap/affix.js',
        // '../assets/src/js/libs/bootstrap/alert.js',
        // '../assets/src/js/libs/bootstrap/button.js',
        // '../assets/src/js/libs/bootstrap/carousel.js',
        '../assets/src/js/libs/bootstrap/collapse.js',
        // '../assets/src/js/libs/bootstrap/dropdown.js',
        // '../assets/src/js/libs/bootstrap/modal.js',
        // '../assets/src/js/libs/bootstrap/popover.js', Esse sapeca está com treta :(
        // '../assets/src/js/libs/bootstrap/scrollspy.js',
        // '../assets/src/js/libs/bootstrap/tab.js',
        // '../assets/src/js/libs/bootstrap/tooltip.js',
        '../assets/src/js/libs/bootstrap/transition.js',

        // FANCYBOX
        // '../assets/src/js/libs/fancybox/jquery.fancybox.js',        

        // OWL CAROUSEL
        '../assets/src/js/libs/owl-carousel/owl.carousel.js',

        // FUNCTIONS
        '../assets/src/js/functions/functions.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../assets/src/js/'));
});