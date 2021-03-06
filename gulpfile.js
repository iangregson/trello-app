var gulp  = require('gulp'),
	nghtml2js = require('gulp-ng-html2js'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify');

gulp.task('buildtemplates', function() {

	gulp.src("./public/app/components/templates/*.html")
		.pipe(nghtml2js({
			moduleName: "trelloApp.templates"
		}))
		.pipe(concat("index.js"))
		.pipe(gulp.dest("./public/app/components/templates"));

});