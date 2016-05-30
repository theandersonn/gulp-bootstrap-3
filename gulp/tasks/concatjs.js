/*--------------------------------------------------------------
    CONCATENA JS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatjs', function() {
	return gulp.src([
  		
  		// bootstrap	
    	'../assets/js/bootstrap/affix.js',
    	'../assets/js/bootstrap/alert.js',
    	'../assets/js/bootstrap/button.js',
    	'../assets/js/bootstrap/carousel.js',
    	'../assets/js/bootstrap/collapse.js',
    	'../assets/js/bootstrap/dropdown.js',
    	'../assets/js/bootstrap/modal.js',
    	'../assets/js/bootstrap/popover.js',
    	'../assets/js/bootstrap/scrollspy.js',
    	'../assets/js/bootstrap/tab.js',
    	'../assets/js/bootstrap/tooltip.js',
    	'../assets/js/bootstrap/transition.js',

    	// owl carousel
    	'../assets/js/owl-carousel/owl.carousel.js',

    	// functions
    	'../assets/js/functions/functions.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../assets/js/'));
});