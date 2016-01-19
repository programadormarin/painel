'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var ghPages = require('gulp-gh-pages');
var replace = require('gulp-replace');

var paths = {
    scripts : ['app/modules/**/*.js'],
    css     : 'app/**/*.css',
    pages   : ['app/modules/**/*.html']
};

// Minify all JavaScript
gulp.task('minify-scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/modules'));
});

// Copy all static images
gulp.task('minify-images', function() {
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('build'));
});

// Minify all html pages
gulp.task('minify-html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };

    return gulp.src(paths.pages)
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('build/modules'));
});

// Minify all css files
gulp.task('minify-css', function() {
    return gulp.src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['minify-scripts']);
    gulp.watch(paths.images, ['minify-images']);
    gulp.watch(paths.css, ['minify-css']);
    gulp.watch(paths.pages, ['minify-html']);
});

// Copy resources do build
gulp.task('copy', function() {
    gulp.src(['CNAME', '.nojekyll'])
        .pipe(gulp.dest('build'));

    gulp.src('bower_components/**/*')
        .pipe(gulp.dest('build/vendor'));

    gulp.src(['app/index.html'])
        .pipe(replace('http://127.0.0.1:8081', 'https://api.queroumaloja.net'))
        .pipe(minifyHTML({conditionals: true, spare:true}))
        .pipe(gulp.dest('build'));
});

// Deploy to Github Pages
gulp.task('deploy', function() {
    return gulp.src('./build/**/*')
        .pipe(ghPages());
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['minify-scripts', 'minify-html', 'minify-css', 'copy']);
