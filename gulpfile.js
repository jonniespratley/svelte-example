'use strict';
const rollup = require('gulp-rollup');
const gulp = require('gulp');
const gulpSvelte = require('gulp-svelte');

gulp.task('sv', () => {
  gulp.src('public/index.html') // index.html: '<h1>Hi {{author}}.</h1>'
    .pipe(gulpSvelte())
    .dest('dist'); // dest/index.js: 'function renderMainFragment ( root, component ) { ...'
});
gulp.task('default', function() {
  gulp.src('./src/**/*.js')
    // transform the files here.
    .pipe(rollup({
      // any option supported by Rollup can be set here.
      entry: './src/main.js'
    }))
    .pipe(gulp.dest('./dist'));
});
