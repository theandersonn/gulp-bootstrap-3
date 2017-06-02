/*--------------------------------------------------------------
    CONCATENATE ALL FILES .JS
--------------------------------------------------------------*/
// plugins
var gulp    = require('gulp');
var concat  = require('gulp-concat');

gulp.task('concatjs', function() {
    return gulp.src([

        // JQUERY
        'node_modules/jquery/dist/jquery.js',      
        
        // BOOTSTRAP    
        // '../assets/js/functions/affix.js',
        // '../assets/js/functions/alert.js',
        // '../assets/js/functions/button.js',
        // '../assets/js/functions/carousel.js',
        '../assets/js/functions/collapse.js',
        // '../assets/js/functions/dropdown.js',
        // '../assets/js/functions/modal.js',
        // '../assets/js/functions/popover.js', Esse sapeca está com treta :(
        // '../assets/js/functions/scrollspy.js',
        // '../assets/js/functions/tab.js',
        // '../assets/js/functions/tooltip.js',
        '../assets/js/functions/transition.js',

        // OWL CAROUSEL
        'node_modules/owl-carousel-2/owl.carousel.js',      

        // FUNCTIONS
        '../assets/js/functions/functions.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../assets/js/'));
});