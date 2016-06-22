import gulp from 'gulp';

import config from '../config';
import path from '../path';
import { errorHandler } from '../helpers';

import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
// PostCSS
// -------
import postcss from'gulp-postcss';
// Cross Browser Compatibility
import calc from 'postcss-calc';
import colorFunction from 'postcss-color-function';
import autoprefixer from 'autoprefixer';
import pixrem from 'pixrem';
// Minification and Optimization
import inlineSvg from 'postcss-inline-svg';
import assets from 'postcss-assets';
import cssnano from 'cssnano';

const processors = [
  // Cross Browser Compatibility
  calc,
  colorFunction,
  autoprefixer(config.autoprefixer),
  pixrem,
  // Minification and Optimization
  inlineSvg(config.inlineSvg),
  assets(config.assets),
  cssnano(config.cssnano)
];

/**
 * CSS task
 * @class Css
 */
class Css {

  /**
   * Build your style
   * @returns {*}
   */
  static build() {
    return gulp.src(path.entries.scss)
      .pipe(plumber(config.plumber))
      .pipe(sourcemaps.init(config.sourceMap.init))
      .pipe(sass().on('error', errorHandler))
      .pipe(postcss(processors))
      .pipe(sourcemaps.write('./', config.sourceMap.write))
      .pipe(gulp.dest(path.dest.css));
  }
}

export default Css;