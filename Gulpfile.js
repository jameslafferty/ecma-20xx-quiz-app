/* eslint-env es6, node */
require('babel-core/register');

const browserify = require('browserify');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const source = require('vinyl-source-stream');

gulp.task('watch', () => {
  gulp.watch([
    'index.js',
    'src/javascripts/**/*.js',
    'test/**/*.js',
  ], ['javascripts']);
  gulp.watch([
    'src/html/**/*.html',
  ], ['html']);
});

gulp.task('default', ['html', 'javascripts']);

gulp.task('html', () =>
  gulp.src('src/html/**/*.html')
    .pipe(gulp.dest('./dist/'))
);

gulp.task('javascripts', ['lint'], () =>
  browserify({
    entries: './index.js',
    debug: true,
  })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/'))
);

gulp.task('lint', () =>
  gulp.src([
    'Gulpfile.js',
    'index.js',
    'src/javascripts/**/*.js',
    'test/**/*.js',
  ])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError())
    .pipe(plugins.jscs({
      preset: 'airbnb',
    }))
    .pipe(plugins.jscs.reporter())
    .pipe(plugins.jscs.reporter('fail'))
);

gulp.task('test', () =>
  gulp.src('test/**/*.js')
    .pipe(plugins.mocha({
      reporter: 'list',
    }))
);
