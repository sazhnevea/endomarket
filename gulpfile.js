'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var server = require('browser-sync').create();
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var del = require('del');
var svgSprite = require('gulp-svg-sprite');

var svgSpriteConfig = {
    mode: {
      css: {
        render: {
          css: true
        }
      }
    }
  };

gulp.task('serve', function() {
  server.init({
    server: {
      baseDir: "./build"
    }
  });
});

gulp.task('html', function() {
  return gulp.src('html/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('less', function() {
  return gulp.src('less/style.less')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('build'))
  .on('end', server.reload);
});

gulp.task('js', function() {
  return gulp.src('js/*.js')
  .pipe(concat('script.js'))
  .pipe(gulp.dest('build'))
  .on('end', server.reload);
});

gulp.task('svg', function () {
  return gulp.src('img/**/*.svg')
  .pipe(svgmin())
  .pipe(gulp.dest('build/img/'));
});

gulp.task('imagemin', function() {
 return  gulp.src('img/**/*{jpg,png}')
 .pipe(imagemin())
 .pipe(gulp.dest('build/img/'))
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('fonts', function() {
  return gulp.src('fonts/*{woff,woff2}')
  .pipe(gulp.dest('build/fonts/'))
});

gulp.task('watch', function() {
  gulp.watch(['less/**/*.less', 'less/*.less'], gulp.series('less'));
  gulp.watch('js/*.js', gulp.series('js'));
  gulp.watch('html/*.html', gulp.series('html')).on('change', server.reload);
  gulp.watch('img/**/*{jpg,png}', gulp.series('imagemin'));
});

gulp.task('default', gulp.series(
  gulp.task('clean'),
  gulp.task('imagemin'),
  gulp.parallel('less', 'js', 'html', 'svg', 'fonts'),
  gulp.parallel('watch', 'serve'),
  ));