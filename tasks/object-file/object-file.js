/** @module object-file */
'use strict'

// npm modules
const gulp = require('gulp')
const file = require('gulp-file')

/**
 * Copy files from a path to other using gulp.
 * @param {Object} object - Object to save in the file
 * @param {Object} destructurign assigment - An options object with this
 *  properties:
    {
      // Name of the output file
      fileName: 'constants.js',

      // Configuration object for gulp-file module
      options: {
        src: true
      },

      // Destination path
      dest: 'dist'
    }
 * @returns a callback function for gulp task
 */
module.exports = (object = {}, {
  fileName = 'constants.js',
  options = { src: true },
  dest = 'dist'
} = {}) => {
  const objectString = JSON.stringify(object)
  const codeString = `export default ${objectString}`

  return file(fileName, codeString, options)
    .pipe(gulp.dest(dest))
}