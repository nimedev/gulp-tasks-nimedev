# gulp-object-file-nimedev
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/gulp-object-file-nimedev.svg
[npm-url]: https://npmjs.org/package/gulp-object-file-nimedev

> Create a exportable object in a file

## Installation

```console
$ npm install gulp-object-file-nimedev
```

## Usage

In `gulpfile.js`

```js
// Require the module
const objectFileTask = require('gulp-object-file-nimedev')

// Set options object for objectFileTask function
const options = {
  // Name of the output file
  fileName: 'app.constants.ts',

  // Configuration object for gulp-file module
  options: {
    src: true
  },

  // Destination path
  dest: 'src/app'
}

// Object to save
const config = {
  restUrl: 'http://localhost:9001',
  log: true
}

// Create a gulp task to copy files from options.src path to options.dest path
gulp.task('config-file', () => objectFileTask(config, options))
```

*Note: dest in options objects follow the same rules of gulp.dest() arguments*

## [Changelog](CHANGELOG.md)

## [License](LICENSE.md)