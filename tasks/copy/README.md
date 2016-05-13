# gulp-copy-nimedev
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/gulp-copy-nimedev.svg
[npm-url]: https://npmjs.org/package/gulp-copy-nimedev

> Copy files from a path to other using gulp

## Installation

```console
$ npm install gulp-copy-nimedev
```

## Usage

In `gulpfile.js`

```js
// Require the module
const copyTask = require('gulp-copy-nimedev')

// Set options object for copyTask function
const options = {
  src: 'src/assets/fonts/**/*',
  dest: 'dist/assets/fonts'
}

// Create a gulp task to copy files from options.src path to options.dest path
gulp.task('fonts', copyTask(options))
```

*Note: src and dest in options objects follow the same rules of gulp.src() and gulp.dest() arguments*

## [Changelog](CHANGELOG.md)

## [License](LICENSE.md)