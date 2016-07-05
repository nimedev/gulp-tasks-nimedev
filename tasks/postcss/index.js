/** @module postcss */
'use strict'

// npm modules
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const gulp = require('gulp')
const gulpIf = require('gulp-if')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const calc = require('postcss-calc')
const colorFunction = require('postcss-color-function')
const customMedia = require('postcss-custom-media')
const customProperties = require('postcss-custom-properties')
const atImport = require('postcss-import')
const mixins = require('postcss-mixins')
const nested = require('postcss-nested')
const stylelint = require('stylelint')

/**
 * Process css files and copy the resulting file in a new folder.
 * @param {Object} - An options object with this properties:
    {
      // Source path
      src: 'source/path',

      // Destination path
      dest: 'dest/path',

      // Name of the output file without extension
      outName: {
        basename: 'style',
        extname: '.css'
      },

      // Use cssnano
      minify: true
    }
 * @param {boolean} useSourcemaps - indicate if use sourcemaps
 * @returns a callback function for gulp task
 */
module.exports = ({
  src = 'src',
  dest = 'dist',
  outName = {
    basename: 'style',
    extname: '.css'
  },
  minify = true
} = {}, useSourcemaps = false) => {
  // PostCSS settings
  const processors = [
    stylelint,
    atImport({
      plugins: [stylelint]
    }),
    mixins,
    customMedia,
    customProperties,
    nested,
    calc,
    colorFunction,
    autoprefixer
  ]

  // Add cssnano to processors list if minify is enabled
  minify && processors.push(cssnano({
    reduceIdents: { keyframes: false },
    zindex: false
  }))

  // Do css task
  return gulp.src(src)
    .pipe(rename(outName))
    .pipe(gulpIf(useSourcemaps, sourcemaps.init()))
    .pipe(postcss(processors))
    .pipe(gulpIf(useSourcemaps, sourcemaps.write('.')))
    .pipe(gulp.dest(dest))
}