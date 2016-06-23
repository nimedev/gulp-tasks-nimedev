/** @module html */
'use strict'

// npm modules
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const htmlReplace = require('gulp-html-replace')
const inlineSource = require('gulp-inline-source')

/**
 * Optimize html files and copy in a new folder.
 * Make a copy in .tmp folder without minify.
 * @param {Object} - An options object with this properties:
    {
      // Source path
      src: 'source/path',

      // Destination path
      dest: 'dest/path',

      // Temporal folder used to save html files before minification
      tmp: 'tmp',

      // Tag used to log the result of task in console
      replace: {
        'js': [
          'assets/js/system.js',
          'assets/js/dep.js',
          'assets/js/app.js'
        ]
      }
    }
 * @returns a callback function for gulp task
 */
module.exports = ({
  src = 'src',
  dest = 'dist',
  tmp = 'tmp',
  replace = {}} = {}) => {
  return gulp.src(src)
    .pipe(inlineSource())
    .pipe(htmlReplace(replace))
    .pipe(gulp.dest(tmp))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(dest))
}