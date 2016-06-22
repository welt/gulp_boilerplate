import gulp from 'gulp';

import config from '../config';
import path from '../path';
import { errorHandler } from '../helpers';

import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';
import rollup from 'gulp-rollup';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';

/**
 * Javascript task
 * @class Js
 */
class Js {

  /**
   * Lint your script
   * @returns {*}
   */
  static lint() {
    return gulp.src(path.all.js)
      .pipe(eslint(config.eslint))
      .pipe(eslint.format());
  }

  /**
   * Bundle your script
   * @returns {*}
   */
  static build() {
    return gulp.src(path.entries.js)
      .pipe(plumber(config.plumber))
      .pipe(rollup(config.rollup))
      .on('error', errorHandler)
      .pipe(uglify(config.uglify))
      .pipe(sourcemaps.write('./', config.sourceMap.write))
      .pipe(gulp.dest(path.dest.js));
  }

  /**
   * Bundle your vendor scripts
   * @returns {*}
   */
  static vendor() {
    return gulp.src(path.vendor.js)
      .pipe(plumber(config.plumber))
      .pipe(concat('vendor.js'))
      .on('error', errorHandler)
      .pipe(uglify(config.uglify))
      .pipe(gulp.dest(path.dest.js));
  }
}

export default Js;