# gulp-postcss-nimedev
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/gulp-postcss-nimedev.svg
[npm-url]: https://npmjs.org/package/gulp-postcss-nimedev

> Process css files with PostCSS and copy the resulting file in a new folder

## Installation

```console
$ npm install gulp-postcss-nimedev
```

## Usage

In `gulpfile.js`

```js
// Require the module
const postcssTask = require('gulp-postcss-nimedev')

// Set options object for postcssTask function
const options = {
  src: 'src/styles/style.css',
  dest: 'dist/assets/css',
  outName: {
    basename: 'style',
    extname: '.css'
  },
  minify: true
}

// Create a gulp task to process css files from options.src path
gulp.task('css:dev', postcssTask(options, true))
```

*Note: src and dest in options objects follow the same rules of gulp.src() and gulp.dest() arguments*

Option to process file one by one without merge:

```js
const options = {
  src: 'src/styles/style.css',
  dest: file => {
    return file.base
  },
  outName: {
    extname: '.min.css'
  },
  minify: true
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE.md)