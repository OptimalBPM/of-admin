var gulp = require('gulp')
	, Builder = require('jspm').Builder
	, rename = require('gulp-rename')
	, uglify = require('gulp-uglify')
	, ngAnnotate = require('gulp-ng-annotate')
	, browserSync = require('browser-sync')
	, historyApiFallback = require('connect-history-api-fallback')
	, rimraf = require('rimraf')
	, concat = require('gulp-concat')
	, filter = require('gulp-filter')
	, inject = require('gulp-inject')
	, sass = require('gulp-sass')
	, runSequence = require('run-sequence');

var jspmBuilder = new Builder();
var systemJsConfig =  require('./jspm.config.js');
var systemJsBrowser =  require('./jspm.config.js');

// map of all our paths
var paths = {
	sass: 'web/app/**/*.sass',
	html: 'web/**/*.html'
};

gulp.task('serve', function () {
	'use strict';
	require('chokidar-socket-emitter')({ port: 8081, path: 'web', relativeTo: 'web' });
	return browserSync({
		port: 3000,
		open: true,
		files: [
			paths.sass,
			paths.html
		],
		server: {
			baseDir: 'web',
			middleware: [ historyApiFallback() ],
			routes: {  // serve our jspm dependencies with the client folder
				'/tsconfig.json': './tsconfig.json',
				'/jspm.config.js': './jspm.config.js',
				'/jspm.browser.js': './jspm.browser.js',
				'/jspm_packages': './jspm_packages'
			}
		}
	});
});


gulp.task('default', ['serve']);

gulp.task('minify', function(){
	return gulp.src(dist)
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('dist'))
});

gulp.task('html', function () {
	return gulp.src('web/**/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
	return gulp.src('web/**/*.scss')
		.pipe(concat('app.css'))
		.pipe(gulp.dest('dist'))

});

gulp.task('inject', function () {
	var jsFilter = filter('**/*.js', {restore: true}  );

	return gulp.src('dist/index.html')
		.pipe(inject(gulp.src(['dist/**/*.css', 'dist**/app.min.js'])
			.pipe(jsFilter)
			.pipe(jsFilter.restore), {
				addRootSlash: false,
				ignorePath: 'build/app/'
			})
		)
		.pipe(gulp.dest('dist'));
});

gulp.task('build', function () {
	rimraf.sync('dist');
	// Use JSPM to bundle our app
	return jspmBuilder.bundle('web/app/**/*.ts', 'dist/app.js', {
			minify: true, sourceMaps: true, config: [systemJsBrowser, systemJsConfig]
		})
		.then(function () {
			runSequence('minify', 'html', 'css', 'index', 'css', 'inject', callback);
		});
});

