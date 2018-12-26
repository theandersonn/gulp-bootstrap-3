## Gulp Bootstrap
Custom Boilerplate with common tasks in Fron-End Development.

## Helpers
* [html5shiv 3.7.3](https://github.com/aFarkas/html5shiv)
* [respond 1.4.2](https://github.com/scottjehl/Respond)

## Libs
* [jQuery 2.2.4](https://code.jquery.com/)

## devDependencies
* [gulp 3.9.0](http://gulpjs.com)
* [gulp-concat 2.6.1](https://www.npmjs.com/package/gulp-concat)
* [gulp-cssmin 0.2.0](https://www.npmjs.com/package/gulp-cssmin)
* [gulp-rename 1.4.0](https://www.npmjs.com/package/gulp-rename)
* [gulp-sass 4.0.2](https://www.npmjs.com/package/gulp-sass)
* [gulp-uglify 3.0.1](https://www.npmjs.com/package/gulp-uglify)
* [require-dir 1.2.0](https://www.npmjs.com/package/require-dir)

## Dependencies
* Bootstrap Sass 3.3.7
* jQuery 2.2.4

## Workflow
```
Gulp Boilerplate/
.
├── README.md
├── LICENSE.md
├── index.html
├── .gitignore
├── .editorconfig
├── src/
|   ├── js/
|   |   └── functions/
|   |
|   └── sass/
|      	├── base/
|      	├── components/
|      	├── layout/
|      	├── utilities/
|      	└── all.scss
|
├── static/
|   ├── css/
|   |   ├── all.js
|   |   └── all.min.js
|   |
|   ├── fonts/
|   ├── images/
|   |  	├── banners/
|   |  	├── bgs/
|   |  	├── general/
|   |  	├── icons/
|   |  	└── logotypes/
|   |
|   └── js/
|   	├── all.js
|   	├── all.min.js
|   	├── html5shiv.min.js
|   	└── respond.min.js
|
└── gulp-boilerplate
```
## How to use
*A requirement is that you have installed on your computer [Gulp](http://gulpjs.com/).

1. Download the repository
2. Install dependencies

**Task listing**
- gulp (performs tasks sass and concatjs)
- gulp sass (Compiles all files  _scss)
- gulp concatjs (Concatenate all .js)
- gulp cssmin (Minify all.css)
- gulp jsmin (Minify all.js)

## Questions
If you have any difficulty using the Gulp Boilerplate or would like some aspect of the current configuration, open an [issue](https://github.com/theandersonn/gulp-bootstrap-3/issues/new) and explain your difficulty.

## License
[MIT](https://github.com/theandersonn/gulp-bootstrap-3/blob/master/LICENSE.md) © [Anderson Nascimento](https://github.com/theandersonn)
