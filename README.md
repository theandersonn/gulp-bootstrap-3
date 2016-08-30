## Gulp Bootstrap
Boilerplate customizado com Bootstrap, FancyBox, Font Awesome e Owl Carousel.

* [Bootstrap 3.3.6](http://getbootstrap.com/) 
* [FancyBox 2.1.5](http://fancyapps.com/fancybox/) 
* [Font Awesome 4.6.3](http://fontawesome.io/) 
* [Owl Carousel 2.0.0](http://www.owlcarousel.owlgraphic.com/)

## Bibliotecas 
* [jQuery Core 2.2.4](https://code.jquery.com/)

## Dependências
* [gulp 3.9.0](http://gulpjs.com) 
* [gulp-concat 2.6.0](https://www.npmjs.com/package/gulp-concat)
* [gulp-autoprefixer 3.1.0](https://www.npmjs.com/package/gulp-autoprefixer)
* [gulp-cssmin 0.1.7](https://www.npmjs.com/package/gulp-cssmin)
* [gulp-rename 1.2.2](https://www.npmjs.com/package/gulp-rename)
* [gulp-sass 2.3.1](https://www.npmjs.com/package/gulp-sass)
* [gulp-uglify 1.5.3](https://www.npmjs.com/package/gulp-uglify)
* [gulp-watch 4.3.6](https://www.npmjs.com/package/gulp-watch)

## Workflow
```
Gulp Boilerplate/
│
├── assets/
│   │
│   ├── css/
│   ├── fonts/
│   ├── images/
│   ├── js/
│   └── sass/
│
├── gulp/
│   │
│   ├── tasks/
│   ├── gulpfile.js
│   └── package.json
│
├── .gitignore
├── LICENSE-MIT.md
└── README.md
```

## Como utilizar
*Um pré requisito é que você tenha instalado o [Gulp](http://gulpjs.com/) em seu computador*.

```
1. Clone o repositório
    git clone git@github.com:theandersonn/gulp-bootstrap.git

2. Instale as dependências
    npm install

3. gulp executa simultaneamente as tarefas sass e concatjs que compilam os arquivos all.css e all.js para o desenvolvimento em localhost

4. gulp cssmin minifica o all.css gerando o arquivo all.min.css

5. gulp jsmin minifica o all.js gerando o arquivo all.min.js     
```

## Questões e dúvidas
Caso tenha alguma dificuldade em utilizar o Gulp Boilerplate ou deseje saber algum aspecto da configuração atual, abra uma [issue](https://github.com/theandersonn/gulp-bootstrap/issues/new) e explique a sua dificuldade.

## License

[MIT](https://github.com/theandersonn/gulp-bootstrap/blob/master/LICENSE-MIT.md) © [Anderson Nascimento](https://github.com/theandersonn)
