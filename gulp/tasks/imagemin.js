/*--------------------------------------------------------------
    MINIFY IMAGES
--------------------------------------------------------------*/
// plugins
var gulp 	 = require('gulp');
var imagemin = require('gulp-imagemin');
var cleanimages = require('gulp-clean');


gulp.task( 'imagemin', ['cleanimages'], function() {
  return gulp.src('../assets/src/images/**/*')
  	.pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
  	.pipe(gulp.dest('../assets/dist/images/'));
});

gulp.task('cleanimages', function(){
    return gulp.src('../assets/dist/images')
        .pipe(cleanimages({force: true}));
});