var gulp = require('gulp')
	, Builder = require('jspm').Builder
	, browserSync = require('browser-sync')
	, historyApiFallback = require('connect-history-api-fallback')
	, filter = require('gulp-filter')
	, inject = require('gulp-inject')
	, sass = require('gulp-sass')
	, runSequence = require('gulp-sequence').use(gulp);

var jspmBuilder = new Builder('./web');

gulp.task('html', function () {
	return gulp.src('web/**/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
	return gulp.src('web/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist'))
});

gulp.task('inject', function () {
	var jsFilter = filter('**/*.js', {restore: true}  );

	return gulp.src('dist/index.html')
		.pipe(inject(gulp.src(['dist/**/*.css', 'dist**/build.js'])
			.pipe(jsFilter)
			.pipe(jsFilter.restore), {
				addRootSlash: false,
			  ignorePath: 'dist/'
			})
		)
		.pipe(gulp.dest('dist'));
});

gulp.task('bundle', function (callback) {
	// Use JSPM to bundle our app
	return jspmBuilder.buildStatic("app", "dist/build.js")
		.then(function() {
			console.log('done');
		})
		.catch(function(err) {
			console.log(err);
		});
});

gulp.task('build', function (callback) {
	runSequence('bundle', 'html', 'css', 'inject', callback);
});

gulp.task('serve', function () {
	return browserSync({
		port: 3000,
		open: true,
		files: [ 'dist/**/*.*'],
		server: {
			baseDir: 'dist',
			middleware: [ historyApiFallback() ]
		}
	});
});

gulp.task('default', runSequence('build', 'serve', 'watch'));

gulp.task('watch', function () {
	browserSync.reload();
	gulp.watch(['web/**/*.html'], ['html', browserSync.reload]);
	gulp.watch(['web/**/*.ts'], ['build', browserSync.reload]);
	gulp.watch(['web/**/*.scss'], ['css', browserSync.reload]);
});