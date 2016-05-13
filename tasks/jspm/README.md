# gulp-jspm-nimedev
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/gulp-jspm-nimedev.svg
[npm-url]: https://npmjs.org/package/gulp-jspm-nimedev

> Gulp functions to bundle files with jspm

## Installation

```console
$ npm install gulp-jspm-nimedev
```

## Usage

To bundle only javascript files retated with the app write in `gulpfile.js`:

```js
// Require the module
const jspmTask = require('gulp-jspm-nimedev')

// Get jspm dependencies from package.json
const appSetting = require('./package')
const jspmConfig = appSetting.jspm

// Set options object for jspmTask function
const options = {
  src: 'app/main.js',
  dest: 'dist/assets/js',
  baseName: 'app',
  ignoreVendors: true
}

// Create a gulp task to bundle js files with sourcemaps
gulp.task('jspm-app:dev', jspmTask(options, jspmConfig, true))
```

To bundle only depenencies of the app write in `gulpfile.js`:

```js
// Require the module
const jspmTask = require('gulp-jspm-nimedev')

// Get jspm dependencies from package.json
const appSetting = require('./package')
const jspmConfig = appSetting.jspm

// Set options object for jspmTask function
const options = {
  src: 'app/main.js',
  dest: '.tmp',
  baseName: 'dep',
  onlyVendors: true
}

// Create a gulp task to bundle js dependencies
gulp.task('jspm-dep', jspmTask(options, jspmConfig))
```

*Note: src and dest in options objects follow the same rules of gulp.src() and gulp.dest() arguments*

## [Changelog](CHANGELOG.md)

## [License](LICENSE.md)