const { dest, src, series, watch } = require('gulp');
const postcss = require('gulp-postcss');
const csso = require('postcss-csso');
const pimport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const del = require('del');
const esbuild = require('gulp-esbuild');

// Styles

const styles = () => {
  return src('src/styles/index.css')
    .pipe(
      postcss([
        pimport,
        autoprefixer,
        csso({
          restructure: false,
        })
      ])
    )
    .pipe(dest('dist/styles'));
  };


  // Scripts

  const scripts = () => {
    return src('src/scripts/index.js')
    .pipe(
      esbuild({
        target: 'es2015',
        bundle: true,
        minify: true,
      })
    )
    .pipe(dest('dist/scripts'))
  };


  // Clean

  const clean = () => {
    return del(['dist/styles', 'dist/scripts'])
  };


  // Default

  exports.default = series(clean, styles, scripts);




