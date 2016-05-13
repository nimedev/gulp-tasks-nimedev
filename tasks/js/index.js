/** @module jspm */
'use strict'

// npm modules
const gulp = require('gulp')
const concat = require('gulp-concat')
const gulpIf = require('gulp-if')
const uglify = require('gulp-uglify')

/**
 * Concat and minify src files.
 * @param {Object} - An options object with this properties:
    {
      // Source path
      src: 'source/path',

      // Destination path
      dest: 'dest/path',

      // Name of the output file without extension
      baseName: app,

      // Use uglify pluggin
      uglifyJS: true
    }
 * @returns a callback function for gulp task
 */
module.exports = ({
  src = 'src',
  dest = 'dist',
  baseName = 'app',
  uglifyJS = true
} = {}) => {
  return () => {
    gulp.src(src)
      .pipe(gulpIf(uglifyJS, uglify()))
      .pipe(concat(`${baseName}.js`))
      .pipe(gulp.dest(dest))
  }
}