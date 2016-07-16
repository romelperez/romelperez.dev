const fs =           require('fs');
const sass =         require('node-sass');
const gulp =         require('gulp');
const rename =       require('gulp-rename');
const concat =       require('gulp-concat');
const gutil =        require('gulp-util');
const webpack =      require('gulp-webpack');
const livereload =   require('gulp-livereload');
const postcss =      require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano =      require('cssnano');

const webpackConfig =require('./webpack.config.js');

gulp.task('sass-bundle', function () {

  const result = sass.renderSync({
    file: './src/scss/main.scss',
    outFile: './assets/css/app.css',
    includePaths: [
      './node_modules/foundation-sites/scss',
      './node_modules/prhone-gui/src/scss'
    ]
  });
  fs.writeFileSync(__dirname +'/assets/css/app.css', result.css);

  return gulp.src([
    './node_modules/normalize.css/normalize.css',
    './assets/css/app.css'
  ]).
    pipe(concat('app.css')).
    pipe(gulp.dest('./assets/css'));
});

gulp.task('sass', ['sass-bundle'], function () {
  return gulp.src(['./assets/css/app.css']).
    pipe(postcss([
      autoprefixer({browsers: [
        'last 5 version',
        '> 5%'
      ]}),
      cssnano(),
    ])).
    pipe(rename({
      dirname: ''
    })).
    pipe(gulp.dest('./assets/css')).
    pipe(livereload());
});

gulp.task('webpack-bundle', function () {
  return gulp.src('./src/js/main.js').
    pipe(webpack(webpackConfig)).
    pipe(gulp.dest('.'));
});

gulp.task('webpack', ['webpack-bundle'], function () {
  return gulp.src([
    './lib/zepto.min.js',
    './lib/preloadjs-NEXT.min.js',
    './lib/soundjs-NEXT.min.js',
    './assets/js/app.js'
  ]).
    pipe(concat('app.js')).
    pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch([
    './src/scss/**/*.scss'
  ], [
    'sass'
  ]);
  gulp.watch([
    './src/js/**/*.js'
  ], [
    'webpack'
  ]);
});

gulp.task('build', ['sass', 'webpack']);
gulp.task('default', ['build', 'watch']);
