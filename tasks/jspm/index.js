/** @module jspm */
'use strict'

// npm modules
const shell = require('gulp-shell')

/**
 * Bundle javascript modules with jspm
 * @param {Object} options - options used to make the command for shell.
 * @param {Object} jspmConfig - jspm object extracted from package.json of main
 *  project
 * @param {boolean} useSourcemaps - indicate if use sourcemaps
 * @returns a callback function for gulp task
 */
module.exports = (options, jspmConfig, useSourcemaps) => {
  return shell.task(_shellBundle(options, jspmConfig, useSourcemaps))
}

// HELPER FUNCTIONS

/**
 * Prepare shell comand for jspm bundle
 * @param {Object} - An options object with this properties:
    {
      // Source path
      src: 'app/main.js',

      // Destination path
      dest: 'dest/path',

      // Name of the output file without extension
      baseName: 'build',

      // Make arithmetic to only bundle app files (no include jspm dependencies)
      ignoreVendors: false,

      // Make source and arithmetic to bundle only dependencies
      onlyVendors: false
    }
 * @param {Object} jspmConfig - jspm object extracted from package.json of main
 *  project
 * @param {boolean} useSourcemaps - indicate if use sourcemaps
 */
function _shellBundle({
  src = 'app/main.js',
  dest = 'dist',
  baseName = 'build',
  ignoreVendors = false,
  onlyVendors = false
} = {}, jspmConfig, useSourcemaps = false) {
  // Get dependencies from jspm configurations
  const vendors = Object.keys(jspmConfig.dependencies)

  // Commands to prepare the shell to bundle with jspm
  let arithmetic = ''
  let opt = '--minify --skip-source-maps'
  let source = src

  // Only minify and keep sourcemaps
  if (useSourcemaps) {
    opt = '--minify'
  }

  // Make string to ignore vendors in bundle app.
  if (ignoreVendors) {
    arithmetic = _vendorsList(vendors, true)
  }

  // Make string to include only vendors in bundle dep and change source
  // command.
  if (onlyVendors) {
    source = vendors[0]
    arithmetic = _vendorsList(vendors, false)
  }

  // Return shell command to bundle
  return [
    `jspm bundle ${source} ${arithmetic} ${dest}/${baseName}.js ${opt}`
  ]
}

/**
 * Make a string with jspm vendors.
 * @param {Array} vendors - List of dependencies used in jspm config
 * @param {boolean} ignore - Indicate what sign use in vendor list (- or +).
 * @returns {String} - jspm dependencies with sign - or + to use in arithmetic
 * param of jspm shell command.
 */
function _vendorsList(vendors, ignore = false) {
  let vendorsList = ''
  let sign = (ignore) ? '-' : '+'

  for (let vendor of vendors) {
    vendorsList += ` ${sign} ${vendor}`
  }

  return vendorsList
}