/*--------------------------------------------------------------
    MINIFY IMAGES
--------------------------------------------------------------*/
// plugins
var gulp 	 = require('gulp');
var imagemin = require('gulp-imagemin');
var cleanimages = require('gulp-clean');


gulp.task( 'imagemin', ['cleanimages'], function() {
  return gulp.src('../src/images/**/*')
  	.pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
  	.pipe(gulp.dest('../static/images/'));
});

gulp.task('cleanimages', function(){
    return gulp.src('../static/images')
        .pipe(cleanimages({force: true}));
});