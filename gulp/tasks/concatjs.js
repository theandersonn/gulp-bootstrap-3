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

        // LIBS
        '../assets/src/js/libs/jquery-2.2.4.js',
        
        // BOOTSTRAP    
        '../assets/src/js/bootstrap/affix.js',
        '../assets/src/js/bootstrap/alert.js',
        '../assets/src/js/bootstrap/button.js',
        //'../assets/src/js/bootstrap/carousel.js',
        '../assets/src/js/bootstrap/collapse.js',
        '../assets/src/js/bootstrap/dropdown.js',
        '../assets/src/js/bootstrap/modal.js',
        // '../assets/src/js/bootstrap/popover.js', Esse sapeca está com treta :(
        '../assets/src/js/bootstrap/scrollspy.js',
        '../assets/src/js/bootstrap/tab.js',
        '../assets/src/js/bootstrap/tooltip.js',
        '../assets/src/js/bootstrap/transition.js',

        // FANCYBOX
        '../assets/src/js/fancybox/jquery.fancybox.js',        

        // OWL CAROUSEL
        '../assets/src/js/owl-carousel/owl.carousel.js',

        // FUNCTIONS
        '../assets/src/js/functions/functions.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../assets/src/js/'));
});