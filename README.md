## Gulp Bootstrap
Custom Boilerplate with common tasks in Fron-End Development.

## Helpers
* [html5shiv 3.7.3](https://github.com/aFarkas/html5shiv) 
* [respond 1.4.2](https://github.com/scottjehl/Respond)

## Libs 
* [jQuery 2.2.4](https://code.jquery.com/)

## Libs Suggestions
```
npm install bootstrap-sass@3.3.7 --save
npm install fancybox@2.1.7 --save 
npm install owl-carousel-2@0.0.3 --save
```

## Dependencies
* [gulp 3.9.0](http://gulpjs.com) 
* [gulp-concat 2.6.0](https://www.npmjs.com/package/gulp-concat)
* [gulp-cssmin 0.1.7](https://www.npmjs.com/package/gulp-cssmin)
* [gulp-rename 1.2.2](https://www.npmjs.com/package/gulp-rename)
* [gulp-sass 2.3.1](https://www.npmjs.com/package/gulp-sass)
* [gulp-uglify 1.5.3](https://www.npmjs.com/package/gulp-uglify)

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
|   |  	├── buttons/
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

## Workflow with Bootstrap SCSS
```css
// Core variables and mixins
@import "base/variables"; /*Add in your boilerplate*/
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins";


// Reset and dependencies
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/normalize";

// Core CSS
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/scaffolding";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/type";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/grid";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/forms";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/buttons";

// Components
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/button-groups";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/component-animations";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/dropdowns";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/navbar";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/navs";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/panels";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/tables";

// Utility classes
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/utilities";
@import "../../gulp/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/responsive-utilities";
```

## Workflow with Bootstrap JS /*Add in your task gulp*/
```js
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/affix.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/button.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/popover.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/tab.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',      
'node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js'
```

## How to use
*A requirement is that you have installed on your computer [Gulp](http://gulpjs.com/).

1. Download the repository
2. Install dependencies

**Task listing**
- gulp (performs tasks sass and concatjs)
- gulp build (performs tasks cssmin, jsmin, clone and imagemin)
- gulp sass (Compiles all files  _scss)
- gulp concatjs (Concatenate all .js)
- gulp cssmin (Minify all.css)
- gulp jsmin (Minify all.js)

## Questions
If you have any difficulty using the Gulp Boilerplate or would like some aspect of the current configuration, open an [issue](https://github.com/theandersonn/gulp-bootstrap/issues/new) and explain your difficulty.

## License
[MIT](https://github.com/theandersonn/gulp-bootstrap/blob/master/LICENSE.md) © [Anderson Nascimento](https://github.com/theandersonn)
