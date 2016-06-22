import gulp from 'gulp';

import config from '../config';
import path from '../path';

import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';
import cache from 'gulp-cache';

/**
 * Images task
 * @class Images
 */
class Images {

  /**
   * Build your images
   * @returns {*}
   */
  static build() {
    return gulp.src(path.all.images)
      .pipe(plumber(config.plumber))
      .pipe(cache(imagemin(config.imagemin)))
      .pipe(gulp.dest(path.dest.images));
  }
}

export default Images;