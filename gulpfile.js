var gulp = require('gulp');

var clean = require('gulp-clean');
var chug = require('gulp-chug');
var coffee = require('gulp-coffee');

gulp.task('clean', function(){
  return gulp.src([
      './_site/',
      './pages/'
      ])
    .pipe(clean());
});

gulp.task('coffee', ['clean'], function() {
  return gulp.src('./_pages/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./pages/'))
});

gulp.task('default', ['coffee'], function(){
  gulp.src('./**/gulp-*.js')
    .pipe(chug())
});