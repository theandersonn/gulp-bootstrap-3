/*--------------------------------------------------------------
    CONCATENA JS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatjs', function() {
	return gulp.src([
  		
        // BOOTSTRAP    
        '../assets/js/bootstrap/affix.js',
        '../assets/js/bootstrap/alert.js',
        '../assets/js/bootstrap/button.js',
        //'../assets/js/bootstrap/carousel.js',
        '../assets/js/bootstrap/collapse.js',
        '../assets/js/bootstrap/dropdown.js',
        '../assets/js/bootstrap/modal.js',
        // '../assets/js/bootstrap/popover.js', Esse sapeca está com treta :(
        '../assets/js/bootstrap/scrollspy.js',
        '../assets/js/bootstrap/tab.js',
        '../assets/js/bootstrap/tooltip.js',
        '../assets/js/bootstrap/transition.js',

        // FANCYBOX
        '../assets/js/fancybox/jquery.fancybox.js',        

        // OWL CAROUSEL
        '../assets/js/owl-carousel/owl.carousel.js',

        // FUNCTIONS
        '../assets/js/functions/functions.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../assets/js/'));
});