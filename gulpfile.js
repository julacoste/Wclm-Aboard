/*______________________________________________
===============/WORKFLOW STZOO\================
______________________________________________*/

/* REQUIRE */
var gulp = require('gulp');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var prefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('LessCss', function(){
	return gulp.src('less/style.less')
	.pipe(less())
	.pipe(gulp.dest('css'))
});

gulp.task('styles', function(){
	return gulp.src('less/*.less')
	.pipe(less())
	.pipe(cleanCss())
	.pipe(prefix("> 1%", "last 2 versions"," Firefox ESR"," Opera 12.1"))
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest('css'))
});

gulp.task('script', function(cb){
	return gulp.src(['js/*.js', '!js/*.min.js'])
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      https: true
      },
  });

gulp.watch('less/**/*.less', ['styles']);
gulp.watch('css/*.css').on('change', browserSync.reload);
gulp.watch('js/*.js', ['script']);
});

gulp.task('default', ['styles', 'script', 'watch'], function(){
});