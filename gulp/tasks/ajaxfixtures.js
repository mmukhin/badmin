var gulp = require('gulp');
var config = require('../config').ajaxfixtures;

gulp.task('ajaxfixtures', function() {
    return gulp
        .src(config.src)
        .pipe(gulp.dest(config.dest));
});