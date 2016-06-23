# gulp-html-nimedev
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/gulp-html-nimedev.svg
[npm-url]: https://npmjs.org/package/gulp-html-nimedev

> Optimize html files and copy in a new folder

## Installation

```console
$ npm install gulp-html-nimedev
```

## Usage

In `gulpfile.js`

```js
// Require the module
const htmlTask = require('gulp-html-nimedev')

// Set options object for htmlTask function
const options = {
  src: 'src/index.html',
  dest: 'dist',
  tmp: 'tmp',

  // Used to replace script declaration in index.html file
  replace: {
    'js': [
      'assets/js/dep.js',
      'assets/js/app.js'
    ]
  }
}

// Create a gulp task to optimize index.html file
gulp.task('html', () => htmlTask(options))
```

*Note: src and dest in options objects follow the same rules of gulp.src() and gulp.dest() arguments*

## [Changelog](CHANGELOG.md)

## [License](LICENSE.md)