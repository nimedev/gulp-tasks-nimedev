# gulp-js-nimedev
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/gulp-js-nimedev.svg
[npm-url]: https://npmjs.org/package/gulp-js-nimedev

> Concat and uglify javascript files from a path to other using gulp

## Installation

```console
$ npm install gulp-js-nimedev
```

## Usage

In `gulpfile.js`

```js
// Require the module
const jsTask = require('gulp-js-nimedev')

// Set options object for jsTask function
const options = {
  src: [
    'src/jspm_packages/system.js',
    'src/config.js',
    '.tmp/dep.js'
  ],
  dest: 'dist/assets/js',
  baseName: 'dep'
}

// Create a gulp task to process javascript files from options.src path
// to options.dest path
gulp.task('jspm-system', () => jsTask(options))
```

*Note: src and dest in options objects follow the same rules of gulp.src() and gulp.dest() arguments*

## [Changelog](CHANGELOG.md)

## [License](LICENSE.md)