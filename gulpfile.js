var gulp = require('gulp'),
	path = require('path'),
	jspm = require('jspm'),
	rename = require('gulp-rename'),
	template = require('gulp-template'),
	uglify = require('gulp-uglify'),
	htmlreplace = require('gulp-html-replace'),
	ngAnnotate = require('gulp-ng-annotate'),
	browserSync = require('browser-sync'),
	yargs = require('yargs').argv,
	rimraf = require('rimraf');

var root = 'web';


// helper method to resolveToApp paths
var resolveTo = function (resolvePath) {
	return function (glob) {
		glob = glob || '';
		return path.resolve(path.join(root, resolvePath, glob));
	}
};

var resolveToApp = resolveTo('app'); // app/{glob}

// map of all our paths
var paths = {
	css: resolveToApp('**/*.css'),
	html: [
		resolveToApp('**/*.html'),
		path.join(root, 'index.html')
	],
	dist: path.join(__dirname, 'dist/')
};

gulp.task('serve', function () {
	'use strict';
	require('chokidar-socket-emitter')({ port: 8081, path: 'web', relativeTo: 'web' });
	return browserSync({
		port: 3000,
		open: true,
		files: [].concat(
			[paths.css],
			paths.html
		),
		server: {
			baseDir: root,
			routes: {  // serve our jspm dependencies with the client folder
				'/tsconfig.json': './tsconfig.json',
				'/jspm.config.js': './jspm.config.js',
				'/jspm.browser.js': './jspm.browser.js',
				'/jspm_packages': './jspm_packages'
			}
		}
	});
});

gulp.task('build', function () {
	var dist = path.join(paths.dist + 'app.js');
	rimraf.sync(path.join(paths.dist, '*'));
	// Use JSPM to bundle our app
	return jspm.bundleSFX(resolveToApp('app'), dist, {})
		.then(function () {
			// Also create a fully annotated minified copy
			return gulp.src(dist)
				.pipe(ngAnnotate())
				.pipe(uglify())
				.pipe(rename('app.min.js'))
				.pipe(gulp.dest(paths.dist))
		})
		.then(function () {
			// Inject minified script into index
			return gulp.src('client/index.html')
				.pipe(htmlreplace({
					'js': 'app.min.js'
				}))
				.pipe(gulp.dest(paths.dist));
		});
});

gulp.task('default', ['serve']);
