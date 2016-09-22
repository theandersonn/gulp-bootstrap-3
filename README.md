## Gulp Bootstrap
Boilerplate customized with Bootstrap, Font Awesome and Owl Carousel.

* [Bootstrap 3.3.6](http://getbootstrap.com/) 
* [Font Awesome 4.6.3](http://fontawesome.io/)

## Libraries 
* [FancyBox 2.1.5](http://fancyapps.com/fancybox/) 
* [jQuery 2.2.4](https://code.jquery.com/)
* [Masked Input 1.4.1](https://github.com/digitalBush/jquery.maskedinput)
* [Owl Carousel 2.0.0](http://www.owlcarousel.owlgraphic.com/)

## Helpers
* [html5shiv 3.7.3](https://github.com/aFarkas/html5shiv) 
* [respond 1.4.2](https://github.com/scottjehl/Respond) 

## Dependencies
* [gulp 3.9.0](http://gulpjs.com) 
* [gulp-autoprefixer 3.1.0](https://www.npmjs.com/package/gulp-autoprefixer)
* [gulp-clean 0.3.2](https://www.npmjs.com/package/gulp-clean)
* [gulp-concat 2.6.0](https://www.npmjs.com/package/gulp-concat)
* [gulp-cssmin 0.1.7](https://www.npmjs.com/package/gulp-cssmin)
* [gulp-imagemin 3.0.3](https://www.npmjs.com/package/gulp-imagemin)
* [gulp-rename 1.2.2](https://www.npmjs.com/package/gulp-rename)
* [gulp-sass 2.3.1](https://www.npmjs.com/package/gulp-sass)
* [gulp-uglify 1.5.3](https://www.npmjs.com/package/gulp-uglify)
* [gulp-watch 4.3.6](https://www.npmjs.com/package/gulp-watch)

## Workflow
```
Gulp Bootstrap/
│
├── assets/
│   │
│   ├── dist/
│	│   │
│   │	├── css/
│   │	├── fonts/
│   │	├── images/
│   │	└── js/
│	│
│ 	│
│	└──	src/
│		│
│   	├── css/
│   	├── fonts/
│   	├── images/
│   	├── js/
│   	└── sass/
│
│
├── gulp/
│   │
│   ├── tasks/
│   ├── gulpfile.js
│   └── package.json
│
│
├── .gitignore
├── LICENSE-MIT.md
└── README.md
```

## How to use
*A requirement is that you have installed on your computer [Gulp](http://gulpjs.com/).

1. Download the repository
2. Install dependencies

**Task listing**
- gulp sass (Compiles all files  _scss)
- gulp concatjs (Concatenate all .js)
- gulp cssmin (Minify all.css)
- gulp jsmin (Minify all.js)
- gulp imagemin (Minify images)
- gulp clean-fonts (Clean the folder 'dist/fonts')
- gulp clean-images (Clean the folder 'dist/images')
- gulp clone (Clone floder 'src/fonts' to 'dist/fonts')
- gulp src (performs tasks sass and concatjs)
- gulp dist (performs tasks cssmin, jsmin, clone and imagemin)

## Questions
If you have any difficulty using the Gulp Boilerplate or would like some aspect of the current configuration, open an [issue](https://github.com/theandersonn/gulp-bootstrap/issues/new) and explain your difficulty.

## License
[MIT](https://github.com/theandersonn/gulp-bootstrap/blob/master/LICENSE-MIT.md) © [Anderson Nascimento](https://github.com/theandersonn)