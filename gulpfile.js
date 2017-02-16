const fs =           require('fs');
const extend =       require('extend');
const sass =         require('node-sass');
const gulp =         require('gulp');
const rename =       require('gulp-rename');
const concat =       require('gulp-concat');
const gutil =        require('gulp-util');
const shell =        require('gulp-shell');
const livereload =   require('gulp-livereload');
const postcss =      require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano =      require('cssnano');

//
// SETTINGS
//
const sassFiles = [{
  file: 'src/scss/core/core.scss',
  outFile: 'public/css/core.css'
}, {
  file: 'src/scss/index/index.scss',
  outFile: 'public/css/index.css'
}];
const webpackConfig = require('./webpack.config.js');

//
// SASS
//
gulp.task('sass-bundle', function () {
  sassFiles.forEach(file => {
    const result = sass.renderSync(extend({}, file, {
      includePaths: [
        './node_modules/foundation-sites/scss',
        './node_modules/prhone-gui/src/scss'
      ]
    }));
    fs.writeFileSync(__dirname +'/'+ file.outFile, result.css);
  });
});

gulp.task('sass', ['sass-bundle'], function () {
  sassFiles.forEach(file => {
    gulp.src([file.outFile]).
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
      pipe(gulp.dest('./public/css')).
      pipe(livereload());
  });
});

//
// WEBPACK
//
gulp.task('webpack-bundle', shell.task([
  'webpack'
]));

gulp.task('webpack-core', ['webpack-bundle'], function () {
  return gulp.src([
    './lib/js/zepto.min.js',
    './lib/js/preloadjs-NEXT.min.js',
    './lib/js/soundjs-NEXT.min.js',
    './public/js/core.js'
  ]).
    pipe(concat('core.js')).
    pipe(gulp.dest('./public/js'));
});

gulp.task('webpack', ['webpack-bundle', 'webpack-core']);

//
// WATCH
//
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
