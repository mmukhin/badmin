var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var streamqueue = require('streamqueue');
var handleErrors = require('../util/handleErrors');
var config=require('../config').sass;

gulp.task('sass', ['images'], function () {
    return streamqueue(
            { objectMode: true },
            gulp.src(config.cssSrc),
            gulp.src(config.sassSrc).pipe(sass())
        )
        .pipe(concat('style.css'))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest));
});