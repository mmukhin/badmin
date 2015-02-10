var gulp = require('gulp');
var config = require('../config').markup;
var replace = require('gulp-replace');

gulp.task('markup', function() {
    return gulp
        .src(config.src)
        .pipe(replace('$$APPLICATION_ENVIRONMENT$$', require('../util/args.js').env))
        .pipe(gulp.dest(config.dest));
});