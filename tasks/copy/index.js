/** @module copy */
'use strict'

// npm modules
const gulp = require('gulp')

/**
 * Copy files from a path to other using gulp.
 * @param {Object} - An options object with this properties:
    {
      // Source path
      src: 'source/path',

      // Destination path
      dest: 'dest/path'
    }
 * @returns a callback function for gulp task
 */
module.exports = ({src = 'src', dest = 'dist'} = {}) => {
  return () => {
    gulp.src(src)
      .pipe(gulp.dest(dest))
  }
}