var gulp = require('gulp'),
    includeSources = require("gulp-include-source"),
    inject = require('gulp-inject'),
    wiredep = require('wiredep'),
    clean = require('gulp-clean'),
    bowerFiles = require('main-bower-files'),
    connect = require('gulp-connect'),
    traceur = require('gulp-traceur')

gulp.task('bower', function () {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true}))
        .pipe(gulp.dest('./src/bower_components'));
});

gulp.task('include', function () {
    var sources = gulp.src(['./src/components/**/*.js', './css/*.css', './src/js/**/*'], {read: false});
    return gulp.src('./src/index.html')
        .pipe(inject(sources, {
            relative: true
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('traceur', function () {
    gulp.src('./src/scripts/*.js')
        .pipe(traceur())
        .pipe(gulp.dest('./js'));
});


//gulp.task('default', ['bower', 'include']);
gulp.task('default', ['bower', 'include']);